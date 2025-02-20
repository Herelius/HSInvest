import type { DataProvider } from "@refinedev/core";

const API_URL = import.meta.env.VITE_API_URL;

const fetcher = async (url: string, options?: RequestInit): Promise<Response> =>
  fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      //   Authorization: localStorage.getItem("hsinvest_access_token"),
    },
  });

export const dataProvider: DataProvider = {
  getOne: () => {
    throw new Error("Not implemented");
  },
  update: () => {
    throw new Error("Not implemented");
  },
  getList: () => {
    throw new Error("Not implemented");
  },
  create: () => {
    throw new Error("Not implemented");
  },
  deleteOne: () => {
    throw new Error("Not implemented");
  },
  getApiUrl: () => API_URL,
  // Optional methods:
  // getMany: () => { /* ... */ },
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};
