import { keycloak } from "./Keycloack";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type RequestOptions = RequestInit & {
  authenticated?: boolean;
};

const getAccessToken = async (): Promise<string | undefined> => {
  if (!keycloak.authenticated) {
    return undefined;
  }

  try {
    await keycloak.updateToken(30);

    return keycloak.token;
  } catch (error) {
    console.error(
      "Unable to refresh Keycloak token:",
      error
    );

    return undefined;
  }
};

export const apiClient = async <T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  const {
    authenticated = false,
    headers,
    ...requestOptions
  } = options;

  const requestHeaders = new Headers(headers);

  requestHeaders.set(
    "Content-Type",
    "application/json"
  );

  if (authenticated) {
    const token = await getAccessToken();

    if (!token) {
      throw new Error(
        "Authentication required."
      );
    }

    requestHeaders.set(
      "Authorization",
      `Bearer ${token}`
    );
  }

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...requestOptions,
      headers: requestHeaders,
    }
  );

  if (!response.ok) {
    let errorMessage =
      `Request failed with status ${response.status}`;

    try {
      const errorBody = await response.json();

      if (errorBody?.message) {
        errorMessage = errorBody.message;
      }
    } catch {
      // Response does not contain JSON.
    }

    throw new Error(errorMessage);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
};