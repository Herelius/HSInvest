import {
  AuthActionResponse,
  AuthProvider,
  OnErrorResponse,
} from "@refinedev/core";

const API_URL = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  check: async (): Promise<{
    authenticated: boolean;
  }> => {
    const token = localStorage.getItem(import.meta.env.VITE_API_TOKEN_NAME);

    return {
      authenticated: Boolean(token),
    };
  },
  login: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AuthActionResponse> => {
    const response: Response = await fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    if (data.token) {
      localStorage.setItem(import.meta.env.VITE_API_TOKEN_NAME, data.token);
      return { success: true };
    }

    return { success: false, redirectTo: "/investments" };
  },
  logout: async (): Promise<AuthActionResponse> => {
    localStorage.removeItem(import.meta.env.VITE_API_TOKEN_NAME);

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  register: async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (response.status < 200 || response.status > 299)
      return {
        success: false,
        error: {
          name: "Register Error",
          message: "Invalid email, username or password",
        },
      };

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error): Promise<OnErrorResponse> => {
    return { error };
  },
};
