const navLinksData = [
  { navButton: "Prijavi se", href: "#" },
  { navButton: "Registruj se", href: "#" },
  { navButton: "POSTAVI OGLAS", href: "#" },
];

export const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8">
      {navLinksData.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className={`block py-2 px-3 rounded-sm text-center
              ${
                item.navButton === "POSTAVI OGLAS"
                  ? "text-white bg-blue-600 hover:bg-blue-700 px-6 py-3"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              }`}
          >
            {item.navButton}
          </a>
        </li>
      ))}
    </ul>
  );
};
