import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/outline";
import {faFacebookF,faInstagram,faLinkedinIn,faYoutube,faXTwitter,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinks } from "./NavLinks";

export const NavBarHeader = () => {
  const SOCIAL_MEDIA_LINKS = [
    {
      icon: faFacebookF,
      label: "Facebook",
    },
    {
      icon: faInstagram,
      label: "Instagram",
    },
    {
      icon: faLinkedinIn,
      label: "LinkedIn",
    },
    {
      icon: faYoutube,
      label: "YouTube",
    },
    {
      icon: faXTwitter,
      label: "X",
    },
  ];

  return (
    <Disclosure as="nav" className="w-full bg-[#222831]">
      {({ open }) => (
        <>
          {/* Main header */}
          <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            
            {/* Brand */}
            <a
              href="#"
              className="group flex items-center gap-2"
              aria-label="Nautika Oglasi - Početna"
            >
              <div className="flex items-center">
                <span className="font-[Roboto_Condensed] text-xl font-bold tracking-[0.12em] text-white transition-colors duration-200 group-hover:text-[#e7eaf6]">
                  NAUTIKA
                </span>

                <span className="ml-1.5 font-[Roboto_Condensed] text-xl font-light tracking-[0.16em] text-[#385170]">
                  OGLASI
                </span>
              </div>
            </a>

            {/* Desktop right side */}
            <div className="hidden items-center gap-7 md:flex">

              {/* Social media */}
              <div className="flex items-center gap-4 border-r border-white/10 pr-40">
                {SOCIAL_MEDIA_LINKS.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      text-white/45
                      transition-all
                      duration-200
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="text-sm"
                    />
                  </a>
                ))}
              </div>

              {/* Authentication + CTA */}
              <NavLinks />
            </div>

            {/* Mobile menu button */}
            <DisclosureButton
              className="
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-white/5
                text-white/80
                transition-all
                duration-200
                hover:bg-white/10
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-[#385170]
                md:hidden
              "
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
            >
              {open ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </DisclosureButton>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="border-t border-white/10 bg-[#222831] md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

              {/* Mobile social links */}
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/40">
                  Pratite nas
                </span>

                <div className="flex items-center gap-2">
                  {SOCIAL_MEDIA_LINKS.map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-white/55
                        transition-all
                        duration-200
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        className="text-sm"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile navigation */}
              <NavLinks />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};