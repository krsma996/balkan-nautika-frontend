import { Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";
import logo from "../../../../img/logo.png";
import { NavLinks } from "./NavLinks";
import {faFacebook,faInstagram,faLinkedin,faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const NavBarHeader: React.FC = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-14 w-14" alt="Balkan Marina Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Balkan Marina
              </span>
            </a>
            {/** SOCIAL MEDIA LINKS !!*/}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-blue-600">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-blue-800">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="#" className="text-blue-800">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>

            {/* Mobile menu button */}
            <DisclosureButton className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
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
