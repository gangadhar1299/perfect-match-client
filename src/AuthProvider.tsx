import React from "react";
import type { User } from "../types";

interface AuthContextValue {
  user: User | null;
  updateUser: (user: User) => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  updateUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactChild }) {
  const [user, setUser] = React.useState<User | null>(null);

  const updateUser = (user: User) => {
    setUser(user);
  };

  const value = { user, updateUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) throw Error("useAuth must be in scope with <AuthProvider/>");

  return context;
}
