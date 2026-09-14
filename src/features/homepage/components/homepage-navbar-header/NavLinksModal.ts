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
  };
  authenticated: boolean;
}

export const createNavLinksData = ({
  navigate,
  authenticated,
}: NavLinksModelProps) => [
  {
    navButton: "Prijavi se",
    icon: faUser,
    onClick: () => navigate("/login"),
  },

  {
    navButton: "Registruj se",
    icon: faUserPlus,
    onClick: () => navigate("/register"),
  },

  {
    navButton: "POSTAVI OGLAS",
    icon: faBullhorn,
    onClick: () => {
      if (authenticated) {
        navigate("/postavi-oglas");
      } else {
        navigate("/login");
      }
    },
  },
];