import { useRef, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavigationGroup } from "./NavigationStructureModel";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = NavigationGroup;

export const NavigationDropdown = ({ label, items }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Menu as="div">
        <MenuButton
          className="px-2 py-1 text-xs font-semibold text-black rounded-md
                      hover:bg-gray-200 data-[open]:bg-gray-200 data-[open]:ring-2 data-[open]:ring-black
                      data-[open]:ring-offset-2">
          <span className="pr-1">{label}</span>
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-700 text-xs" />
        </MenuButton>
        
        {isOpen && (
          <MenuItems
            static
            modal={false}
            className="absolute left-0 mt-2 w-56 bg-[#f5f7f8] shadow-lg border z-50 rounded-md
                       animate-in fade-in slide-in-from-top-1 duration-150">
            {items.map((item) => (
            <MenuItem
              key={item.href}
               as="a"
              href={item.href}
              className="block px-4 py-2 text-xs hover:bg-gray-300 cursor-pointer">
              {item.label}
            </MenuItem>
          ))}
          </MenuItems>
        )}
      </Menu>
    </div>
  );
};