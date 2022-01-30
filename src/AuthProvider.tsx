import React from "react";
import type { User } from "../types";

interface AuthContextValue {
  user: User | null;
  token: string | null;
  updateUserAndToken: (user: User, token: string) => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  updateUserAndToken: () => {},
  token: null,
});

export function AuthProvider({ children }: { children: React.ReactChild }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );

  const updateUserAndToken = (user: User, token: string) => {
    setUser(user);
    setToken(token);
  };

  const value = { user, updateUserAndToken, token };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) throw Error("useAuth must be in scope with <AuthProvider/>");

  return context;
}
