import { apiClient } from "./api-client";

export const register = (user: any) =>
  apiClient("auth", { method: "POST", body: user }).then((res) => {
    localStorage.setItem("token", res.data.token);
    return res;
  });

export const logout = () => localStorage.removeItem("token");
