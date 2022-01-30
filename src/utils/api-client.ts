import { QueryCache } from "react-query";
import * as auth from "./auth";

const queryCache = new QueryCache();

const baseUrl = process.env.REACT_BASE_URL;

interface APIClientConfig extends Omit<RequestInit, "body"> {
  body?: object | null;
}

export const apiClient = (
  url: string,
  { body = null, headers = {}, ...configOverride }: APIClientConfig = {}
) => {
  const config: RequestInit = {
    body: JSON.stringify(body),
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
    ...configOverride,
  };
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = { ...config.headers, authorization: `Bearer ${token}` };
  }
  return window
    .fetch(`http://localhost:3033/${url}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        queryCache.clear();
        auth.logout();
        window.location.assign(window.location.toString());
        return Promise.reject({ message: "Please re-authenticate." });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};
