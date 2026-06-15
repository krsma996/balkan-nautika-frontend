// src/auth/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { keycloak } from "./keycloack";

type AuthContextType = {
  initialized: boolean;
  authenticated: boolean;
  keycloak: typeof keycloak;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    keycloak
      .init({
        onLoad: "check-sso",
        pkceMethod: "S256",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
      })
      .then((auth) => {
        if (!isMounted) return;
        setAuthenticated(auth);
        setInitialized(true);
      })
      .catch(() => {
        if (!isMounted) return;
        setAuthenticated(false);
        setInitialized(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const value: AuthContextType = {
    initialized,
    authenticated,
    keycloak,
  };

  if (!initialized) {
    return <div>Loading auth...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};