import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const NavDropdown = ({ label, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="px-4 py-2 text-xs font-semibold text-black">
        {label}
      </MenuButton>

      <MenuItems modal={false} className="absolute left-0 mt-2 w-56 bg-white shadow-lg border z-50">
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