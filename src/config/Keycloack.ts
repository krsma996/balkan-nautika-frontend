import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

export let keycloakInitialization: Promise<boolean> | null = null;

export const initializeKeycloak = () => {
  if (!keycloakInitialization) {
    keycloakInitialization = keycloak.init({
      onLoad: "check-sso",
      pkceMethod: "S256",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    });
  }

  return keycloakInitialization;
};