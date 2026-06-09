import {Disclosure,DisclosureButton,DisclosurePanel} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";
//import logo from "../../../../img/logo1.png";
import { NavLinks } from "./NavLinks";
import {faFacebookF,faInstagram,faLinkedin,faYoutube,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBarHeader = () => {
  const SOCIAL_MEDIA_LINKS = [
    { icon: faFacebookF, label: "Facebook" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faLinkedin, label: "LinkedIn" },
    { icon: faYoutube, label: "YouTube" },
    { icon: faTwitter, label: "Twitter" },
  ];

  return (
   <Disclosure as="nav" className="w-full bg-[#222831]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-wider text-white">
                NAUTIKA
              </span>
              <span className="text-xl font-light tracking-widest text-sky-400">
                OGLASI
              </span>
            </a>
            {/** SOCIAL MEDIA LINKS !!*/}
            <div className="flex items-center space-x-5">
              <div className="flex items-center gap-5">
                {SOCIAL_MEDIA_LINKS.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={icon} size="sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <DisclosureButton
              className="inline-flex items-center p-2 w-10 h-10 justify-center 
                                        text-sm text-gray-500 rounded-lg md:hidden 
                                        hover:bg-gray-100 focus:outline-none focus:ring-2 
                                        focus:ring-gray-200 dark:text-gray-400 
                                        dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              {open ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </DisclosureButton>

            {/* Desktop menu */}
            <div className="hidden w-full md:block md:w-auto">
              <NavLinks />
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="md:hidden">
            <div className="p-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
              <NavLinks />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
