import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavigationGroup } from "./NavigationStructureModel";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = NavigationGroup;


export const NavigationDropdown = ({ label, items }: Props) => {
  if (!items || items.length === 0) return null;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className=" flex items-center gap-1 px-4 py-2 text-xs font-semibold text-black rounded-md
                    hover:bg-gray-200 data-[open]:bg-gray-200 data-[open]:ring-2 data-[open]:ring-black
                    data-[open]:ring-offset-2"
        >
        <span className="pr-1">{label}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-gray-700 text-xs"
        />
      </MenuButton>

      <MenuItems
        modal={false}
        className="absolute left-0 mt-2 w-56 bg-[#f5f7f8] shadow-lg border z-50 rounded-md"
      >
        {items.map((item) => (
          <MenuItem
            key={item.href}
            as="a"
            href={item.href}
            className="block px-4 py-2 text-sm data-[focus]:bg-gray-100"
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};