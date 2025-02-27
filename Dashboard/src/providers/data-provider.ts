import type { DataProvider } from "@refinedev/core";

const API_URL: string = import.meta.env.VITE_API_URL;

const fetcher = async (url: string, options?: RequestInit): Promise<Response> =>
  fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      authorization: localStorage.getItem(import.meta.env.VITE_API_TOKEN_NAME),
    },
  });

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id, meta }) => {
    const response = await fetcher(`${API_URL}/${resource}/${id}`, {
      method: "GET",
    });

    if (response.status < 200 || response.status > 299) return response;

    const data = await response.json();

    return { data: data.data };
  },
  update: async ({ resource, id, variables, meta }) => {
    const response: Response = await fetcher(
      `${API_URL}/${resource}/${id}/edit`,
      {
        method: "PATCH",
        body: JSON.stringify(variables),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status < 200 || response.status > 299) return response;

    const data = await response.json();

    return { data };
  },
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const listFilters = filters?.filter(
      (filter) => filter.field !== "category.id" && filter.field !== "_id"
    );
    const response: Response = await fetcher(`${API_URL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorters: { field: sorters[0].field, order: sorters[0].order },
        filters: listFilters,
      }),
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    // The total row count could be sourced differently based on the provider
    const total = response.headers["x-total-count"] ?? data.data.length;

    return {
      data: data.data,
      total,
    };
  },
  create: async ({ resource, variables, meta }) => {
    const response: Response = await fetcher(`${API_URL}/${resource}/new`, {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
    };
  },
  deleteOne: async ({ resource, id, variables, meta }) => {
    const response: Response = await fetcher(`${API_URL}/${resource}/${id}`, {
      method: "DELETE",
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return { data };
  },
  getApiUrl: () => API_URL,
  // Optional methods:
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};
