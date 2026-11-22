import {Disclosure,DisclosureButton,DisclosurePanel} from "@headlessui/react";
import { Bars3Icon, XMarkIcon,GlobeAltIcon,ChevronDownIcon} from "@heroicons/react/24/outline";
import {faFacebookF,faInstagram,faLinkedinIn,faYoutube,faXTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinks } from "./NavLinks";

export const NavBarHeader = () => {
  const SOCIAL_MEDIA_LINKS = [
    { icon: faFacebookF, label: "Facebook" },
    { icon: faInstagram, label: "Instagram" },
    { icon: faLinkedinIn, label: "LinkedIn" },
    { icon: faYoutube, label: "YouTube" },
    { icon: faXTwitter, label: "X" },
  ];

  const LANGUAGES = [
    { code: "sr", label: "Srpski" },
    { code: "en", label: "English" },
    { code: "hr", label: "Hrvatski" },
    { code: "bs", label: "Bosanski" },
    { code: "cnr", label: "Crnogorski" },
    { code: "mk", label: "Македонски" },
    { code: "bg", label: "Български" },
    { code: "ro", label: "Română" },
    { code: "el", label: "Ελληνικά" },
    { code: "sq", label: "Shqip" },
    { code: "sl", label: "Slovenščina" },
    { code: "it", label: "Italiano" },
    { code: "tr", label: "Türkçe" },
  ];

  return (
    <Disclosure as="nav" className="w-full bg-[#222831] pr-10">
      {({ open }) => (
        <>
          {/* MAIN HEADER */}
          <div
            className="
              mx-auto flex min-h-[72px]
              max-w-7xl items-center
              justify-between
              px-4 sm:px-6 lg:px-8
            "
          >
            {/* BRAND */}
            <a
              href="/"
              aria-label="NAUTIKA OGLASI - Početna"
              className="
                group flex shrink-0
                items-center gap-3.5
              "
            >
              {/* Custom nautical monogram */}
              <svg
                viewBox="0 0 64 64"
                className="
                  h-12 w-12 shrink-0
                  transition-transform duration-300
                  group-hover:scale-[1.04]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 3L59 32L32 61L5 32L32 3Z"
                  stroke="#7897B7"
                  strokeWidth="1.5"
                />

                <path
                  d="M19 44V20L45 44V20"
                  stroke="#E7EAF6"
                  strokeWidth="3.5"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />

                <path d="M32 3V11" stroke="#8BA7C5" strokeWidth="2" />

                <circle cx="32" cy="3" r="2" fill="#8BA7C5" />
              </svg>

              {/* Wordmark */}
              <div
                className="
                  flex items-center whitespace-nowrap
                  font-[Roboto_Condensed]
                  text-[25px] font-bold
                  leading-none tracking-[0.045em]
                "
              >
                <span className="text-white">NAUTIKA</span>

                <span
                  className="
                    ml-2 font-medium
                    tracking-[0.07em]
                    text-[#8BA7C5]
                    transition-colors duration-300
                    group-hover:text-[#B4C9DF]
                  "
                >
                  OGLASI
                </span>
              </div>
            </a>

            {/* DESKTOP RIGHT SIDE */}
            <div className="hidden items-center gap-6 md:flex">
              {/* SOCIAL MEDIA + LANGUAGE */}
              <div
                className="
                  flex items-center
                  gap-5
                  border-r border-white/10
                  pr-6
                "
              >
                {/* Social media */}
                <div className="flex items-center gap-2">
                  {SOCIAL_MEDIA_LINKS.map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-full
                        text-white/45
                        transition-all duration-200
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <FontAwesomeIcon icon={icon} className="text-sm" />
                    </a>
                  ))}
                </div>

                {/* Language selector */}
                <div
                  className="
                    flex items-center gap-2
                    border-l border-white/10
                    pl-5
                  "
                >
                  <GlobeAltIcon
                    className="
                      h-[17px] w-[17px]
                      shrink-0 text-[#8BA7C5]
                    "
                  />

                  <div className="relative flex items-center">
                    <select
                      defaultValue="sr"
                      aria-label="Izaberite jezik"
                      className="
                        cursor-pointer
                        appearance-none
                        bg-transparent
                        py-2 pr-5
                        text-xs font-semibold
                        text-white/75
                        outline-none
                        transition-colors
                        hover:text-white
                        focus-visible:text-white
                      "
                    >
                      {LANGUAGES.map((language) => (
                        <option
                          key={language.code}
                          value={language.code}
                          className="bg-[#222831] text-white"
                        >
                          {language.label}
                        </option>
                      ))}
                    </select>

                    <ChevronDownIcon
                      className="
                        pointer-events-none
                        absolute right-0
                        h-3.5 w-3.5
                        text-white/45
                      "
                    />
                  </div>
                </div>
              </div>

              {/* AUTHENTICATION + CTA */}
              <NavLinks />
            </div>

            {/* MOBILE MENU BUTTON */}
            <DisclosureButton
              className="
                inline-flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-white/10
                bg-white/5
                text-white/80
                transition-all duration-200
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

          {/* MOBILE MENU */}
          <DisclosurePanel
            className="
              border-t border-white/10
              bg-[#222831] md:hidden
            "
          >
            <div
              className="
                mx-auto max-w-7xl
                px-4 py-5 sm:px-6 lg:px-8
              "
            >
              {/* MOBILE SOCIAL MEDIA */}
              <div
                className="
                  mb-5 flex items-center
                  justify-between
                  border-b border-white/10
                  pb-5
                "
              >
                <span
                  className="
                    text-xs font-semibold
                    uppercase tracking-[0.12em]
                    text-white/40
                  "
                >
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
                        flex h-9 w-9
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-white/55
                        transition-all duration-200
                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <FontAwesomeIcon icon={icon} className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>

              {/* MOBILE LANGUAGE SELECTOR */}
              <div
                className="
                  mb-5 flex items-center
                  justify-between
                  border-b border-white/10
                  pb-5
                "
              >
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="h-5 w-5 text-[#8BA7C5]" />

                  <span
                    className="
                      text-xs font-semibold
                      uppercase tracking-[0.12em]
                      text-white/50
                    "
                  >
                    Jezik sajta
                  </span>
                </div>

                <div className="relative flex items-center">
                  <select
                    defaultValue="sr"
                    aria-label="Izaberite jezik"
                    className="
                      appearance-none
                      cursor-pointer
                      rounded-lg
                      border border-white/10
                      bg-white/5
                      py-2 pl-3 pr-8
                      text-sm font-medium
                      text-white
                      outline-none
                      focus:border-[#7897B7]
                    "
                  >
                    {LANGUAGES.map((language) => (
                      <option
                        key={language.code}
                        value={language.code}
                        className="bg-[#222831] text-white"
                      >
                        {language.label}
                      </option>
                    ))}
                  </select>

                  <ChevronDownIcon
                    className="
                      pointer-events-none
                      absolute right-2
                      h-4 w-4 text-white/50
                    "
                  />
                </div>
              </div>

              {/* MOBILE NAVIGATION */}
              <NavLinks />
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
