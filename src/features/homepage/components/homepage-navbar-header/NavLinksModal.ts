
import {
  faUser,
  faBullhorn,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

interface NavLinksModelProps {
  navigate: (path: string) => void;

  keycloak: {
    login: (options?: {
      redirectUri?: string;
    }) => void;

    register: (options?: {
      redirectUri?: string;
    }) => void;
  };

  authenticated: boolean;
}

export const createNavLinksData = ({
  navigate,
  keycloak,
  authenticated,
}: NavLinksModelProps) => [
  {
    navButton: "Prijavi se",
    icon: faUser,

    onClick: () => {
      keycloak.login({
        redirectUri: window.location.origin,
      });
    },
  },

  {
    navButton: "Registruj se",
    icon: faUserPlus,

    onClick: () => {
      keycloak.register({
        redirectUri: window.location.origin,
      });
    },
  },

  {
    navButton: "POSTAVI OGLAS",
    icon: faBullhorn,

    onClick: () => {
      if (authenticated) {
        navigate("/postavi-oglas");
      } else {
        keycloak.login({
          redirectUri: window.location.origin,
        });
      }
    },
  },
];
