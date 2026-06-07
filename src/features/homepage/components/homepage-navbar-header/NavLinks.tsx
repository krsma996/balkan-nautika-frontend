const navLinksData = [
  { navButton: "Prijavi se", href: "#" },
  { navButton: "Registruj se", href: "#" },
  { navButton: "POSTAVI OGLAS", href: "#" },
];

export const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
      {navLinksData.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className={`
              text-sm font-medium transition
              ${
                item.navButton === "POSTAVI OGLAS"
                  ? "bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600"
                  : "text-white/80 hover:text-white"
              }
            `}
          >
            {item.navButton}
          </a>
        </li>
      ))}
    </ul>
  );
};
