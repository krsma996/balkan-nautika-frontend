import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NAVIGATION_STRUCTURE } from "./NavigationStructureModel";
import { NavigationDropdown } from "./NavigationDropdown";

export function NavbarPrimaryMenu() {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="bg-[#f5f7f8] flex items-center  p-1 justify-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="text-gray-700 text-xl hover:bg-gray-200 rounded-md p-2 ml-2"
        />
        {NAVIGATION_STRUCTURE.map((nav) => (
          <NavigationDropdown
            key={nav.label}
            label={nav.label}
            items={nav.items}
          />
        ))}
      </div>
    </div>
  );
}
