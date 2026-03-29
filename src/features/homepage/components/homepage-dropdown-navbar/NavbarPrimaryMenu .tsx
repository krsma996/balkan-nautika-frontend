import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { NAVIGATION_STRUCTURE } from "./NavigationStructureModel";
import { NavigationDropdown } from "./NavigationDropdown";

export function NavbarPrimaryMenu() {
  return (
    <div className="w-full bg-[#f5f7f8] border-b border-gray-300 shadow-sm">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faHouse}
          className="text-gray-700 text-xl hover:bg-gray-200 rounded-md p-2 mr-2"
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

