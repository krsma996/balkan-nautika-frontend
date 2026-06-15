import { useAuth } from "../../../../config/AuthProvider";

export const NavLinks = () => {
  const { keycloak, authenticated } = useAuth();

  const navLinksData = [
    {
      navButton: "Prijavi se",
      onClick: () => keycloak.login(),
    },
    {
      navButton: "Registruj se",
      onClick: () => keycloak.register(),
    },
    {
      navButton: "POSTAVI OGLAS",
      onClick: () => {
        if (authenticated) {
          window.location.href = "#";
        } else {
          keycloak.login({
            redirectUri: window.location.origin + "#",
          });
        }
      },
    },
  ];

  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
      {navLinksData.map((item, index) => (
        <li key={index}>
          <button
            onClick={item.onClick}
            className={`text-sm font-medium transition ${
              item.navButton === "POSTAVI OGLAS"
                ? "bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600"
                : "text-white/80 hover:text-white"
            }`}
          >
            {item.navButton}
          </button>
        </li>
      ))}
    </ul>
  );
};