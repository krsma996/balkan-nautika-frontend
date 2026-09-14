
import { useRef, useState } from "react";
import {Menu,MenuButton,MenuItem,MenuItems} from "@headlessui/react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NavigationGroup } from "./NavigationStructureModel";



type Props = NavigationGroup & {
  icon?: IconDefinition;
};

export const NavigationDropdown = ({label,items,icon}: Props) => {
  
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
    }, 100);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Menu as="div">
        <MenuButton
          className="
            group
            inline-flex
            h-[54px]
            items-center
            gap-1.5
            border-b-2
            border-transparent
            px-1
            text-[11px]
            font-bold
            tracking-[0.055em]
            text-[#222831]/75
            transition-all
            duration-200
            hover:border-[#385170]
            hover:bg-[#385170]/[0.05]
            hover:text-[#222831]
            data-[open]:border-[#385170]
            data-[open]:bg-[#385170]/[0.06]
            data-[open]:text-[#385170]
            focus:outline-none
          "
        >
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className="
                text-[11px]
                text-[#385170]/65
                transition-colors
                duration-200
                group-hover:text-[#385170]
                group-data-[open]:text-[#385170]
              "
            />
          )}

          <span className="whitespace-nowrap">
            {label}
          </span>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="
              ml-0.5
              text-[8px]
              text-[#385170]/60
              transition-transform
              duration-200
              group-data-[open]:rotate-180
            "
          />
        </MenuButton>

        {isOpen && (
          <MenuItems
            static
            modal={false}
            className="
              absolute
              left-0
              top-full
              z-50
              mt-1
              w-64
              overflow-hidden
              rounded-xl
              border
              border-[#385170]/12
              bg-[#e7eaf6]
              py-1.5
              shadow-[0_18px_40px_-12px_rgba(34,40,49,0.28)]
              ring-1
              ring-[#222831]/[0.03]
            "
          >
            {items.map((item) => (
              <MenuItem key={item.href} as="a" href={item.href}>
                {({ focus }) => (
                  <div
                    className={`
                      mx-1
                      flex
                      min-h-[40px]
                      items-center
                      rounded-md
                      px-3
                      py-2
                      text-xs
                      font-medium
                      transition-colors
                      duration-150

                      hover:bg-[#385170]/10
                      hover:text-[#222831]

                      ${
                        focus
                          ? "bg-[#385170]/10 text-[#222831]"
                          : "text-[#222831]/75"
                      }
                    `}
                  >
                    <span
                      className={`
                        mr-2.5
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#385170]/30
                        transition-all
                        duration-150

                        group-hover:bg-[#385170]

                        ${
                          focus
                            ? "h-1.5 w-1.5 bg-[#385170]"
                            : ""
                        }
                      `}
                    />

                    <span className="leading-5">
                      {item.label}
                    </span>
                  </div>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        )}
      </Menu>
    </div>
  );
};