import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NAV_ITEMS } from "./HomePageDropDownModal";
import { NavDropdown } from "./NavDropdown";

export const HomePageDropDownMenuList = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="bg-[#f5f7f8] flex items-center  p-1 justify-center">
        <FontAwesomeIcon icon={faHouse} className="text-gray-700 text-xl" />
        {NAV_ITEMS.map((nav) => (
          <NavDropdown key={nav.label} label={nav.label} items={nav.items} />
        ))}
      </div>
    </div>
  );
};
