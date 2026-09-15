import React, {createContext,useContext,useEffect,useState} from "react";
import {keycloak,initializeKeycloak} from "./Keycloack";


type AuthContextType = {
  initialized: boolean;
  authenticated: boolean;
  keycloak: typeof keycloak;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initialized, setInitialized] =
    useState(false);

  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        const authenticated =
          await initializeKeycloak();

        if (!mounted) {
          return;
        }

        setAuthenticated(authenticated);
        setInitialized(true);
      } catch (error) {
        console.error(
          "Keycloak initialization failed:",
          error
        );

        if (!mounted) {
          return;
        }

        setAuthenticated(false);
        setInitialized(true);
      }
    };

    initialize();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    const handleAuthSuccess = () => {
      setAuthenticated(true);
    };

    const handleAuthLogout = () => {
      setAuthenticated(false);
    };

    const handleTokenExpired = async () => {
      try {
        await keycloak.updateToken(30);

        setAuthenticated(true);
      } catch (error) {
        console.error(
          "Keycloak token refresh failed:",
          error
        );

        setAuthenticated(false);
      }
    };

    keycloak.onAuthSuccess = handleAuthSuccess;
    keycloak.onAuthLogout = handleAuthLogout;
    keycloak.onTokenExpired = handleTokenExpired;

    return () => {
      keycloak.onAuthSuccess = undefined;
      keycloak.onAuthLogout = undefined;
      keycloak.onTokenExpired = undefined;
    };
  }, [initialized]);

  const value: AuthContextType = {
    initialized,
    authenticated,
    keycloak,
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};