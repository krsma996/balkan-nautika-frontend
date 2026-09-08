import {
  faCompass,
  faShip,
  faScrewdriverWrench,
  faTag,
  faLightbulb,
  faBullhorn,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

import { NAVIGATION_STRUCTURE } from "./NavigationStructureModel";
import { NavigationDropdown } from "./NavigationDropdown";

export function NavbarPrimaryMenu() {
  const navigationIcons = [
    faCompass,
    faShip,
    faScrewdriverWrench,
    faTag,
    faLightbulb,
    faBullhorn,
    faAnchor,
  ];

  return (
    <div className="relative z-40 w-full border-b border-[#385170]/10 bg-[#e7eaf6]/95 shadow-[0_4px_16px_rgba(34,40,49,0.06)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[54px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">       
        {/* Divider */}
        <div className="mr-2 h-6 w-px bg-[#385170]/15" />

        {/* Navigation */}
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="flex items-center">
            {NAVIGATION_STRUCTURE.map((nav, index) => (
              <NavigationDropdown
                key={nav.label}
                label={nav.label}
                items={nav.items}
                icon={navigationIcons[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}