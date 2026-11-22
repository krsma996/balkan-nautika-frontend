
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterQuickSearch } from "./FooterQuickSearch";
import {FOOTER_QUICK_LINKS,FOOTER_QUICK_SEARCH,SOCIAL_MEDIA_LINKS} from "../models/FooterModel.types";




export const Footer = () => {
  return (
    <footer className="mt-16 w-full bg-[#222831] text-[#e7eaf6]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* MAIN FOOTER CONTENT */}
        <div className="
          grid grid-cols-1 gap-y-10
          py-14
          sm:grid-cols-2 sm:gap-x-10
          md:grid-cols-4
          lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0
        ">

          {/* BRAND - 3 COLUMNS */}
          <div className="
            min-w-0
            sm:col-span-2
            md:col-span-2
            lg:col-span-3
          ">

            {/* Brand identity */}
            <a
              href="/"
              aria-label="NAUTIKA OGLASI - Početna"
              className="group inline-flex items-center gap-3"
            >
              {/* Custom nautical monogram */}
              <svg
                viewBox="0 0 64 64"
                className="
                  h-11 w-11 shrink-0
                  transition-transform duration-300
                  group-hover:scale-[1.04]
                "
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

                <path
                  d="M32 3V11"
                  stroke="#8BA7C5"
                  strokeWidth="2"
                />

                <circle
                  cx="32"
                  cy="3"
                  r="2"
                  fill="#8BA7C5"
                />
              </svg>

              {/* Wordmark */}
              <div className="
                flex items-center whitespace-nowrap
                font-[Roboto_Condensed]
                text-[23px] font-bold
                leading-none tracking-[0.045em]
              ">
                <span className="
                  text-white
                  transition-colors duration-300
                  group-hover:text-[#e7eaf6]
                ">
                  NAUTIKA
                </span>

                <span className="
                  ml-2 font-medium
                  tracking-[0.07em]
                  text-[#8BA7C5]
                  transition-colors duration-300
                  group-hover:text-[#B4C9DF]
                ">
                  OGLASI
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="
              mt-5 max-w-[280px]
              text-sm leading-7
              text-white/50
            ">
              Specijalizovano mesto za kupovinu i prodaju plovila,
              nautičke opreme i usluga. Sve za vaš svet nautike,
              na jednom mestu.
            </p>

            {/* Social media */}
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIAL_MEDIA_LINKS.map(({ id, icon, label }) => (
                <a
                  key={id}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-white/[0.09]
                    bg-white/[0.035]
                    text-white/50
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#7897B7]/50
                    hover:bg-[#385170]/30
                    hover:text-white
                    hover:shadow-[0_5px_18px_rgba(56,81,112,0.2)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#8BA7C5]">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-[14px]"
                  />
                </a>
              ))}
            </div>

          </div>

          {/* QUICK LINKS - 2 COLUMNS */}
          <div className="
            min-w-0
            sm:col-span-1
            md:col-span-1
            lg:col-span-2
          ">
            {FOOTER_QUICK_LINKS.map((group) => (
              <FooterQuickLinks
                key={group.id}
                id={group.id}
                label={group.label}
                items={group.items}
              />
            ))}
          </div>

          {/* QUICK SEARCH - 2 COLUMNS */}
          <div className="
            min-w-0
            sm:col-span-1
            md:col-span-1
            lg:col-span-2
          ">
            {FOOTER_QUICK_SEARCH.map((group) => (
              <FooterQuickSearch
                key={group.id}
                id={group.id}
                label={group.label}
                items={group.items}
              />
            ))}
          </div>

          {/* NEWSLETTER - 5 COLUMNS */}
          <div className="
            min-w-0
            sm:col-span-2
            md:col-span-2
            lg:col-span-5
          ">

            <h3 className="
              text-sm font-semibold
              tracking-wide text-white
            ">
              Prijava na vesti
            </h3>

            <p className="
              mt-2 max-w-md
              text-sm leading-6
              text-white/45
            ">
              Budite obavešteni o novim oglasima i novostima
              sa platforme.
            </p>

            <form className="
              mt-5 flex w-full max-w-md
            ">

              <input
                type="email"
                placeholder="Unesite email"
                required
                className="
                  min-w-0 flex-1
                  rounded-l-lg
                  border border-white/10
                  bg-white/[0.05]
                  px-3 py-3
                  text-sm text-white
                  transition-colors

                  placeholder:text-white/30

                  focus:border-[#7897B7]
                  focus:outline-none
                  focus:ring-1
                  focus:ring-[#7897B7]
                "
              />

              <button
                type="submit"
                className="
                  shrink-0
                  rounded-r-lg
                  border border-[#385170]
                  bg-[#385170]
                  px-4 py-3
                  text-sm font-semibold
                  text-white
                  transition-all duration-200

                  hover:border-[#496888]
                  hover:bg-[#496888]

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#8BA7C5]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#222831]
                "
              >
                Prijavi se
              </button>

            </form>

          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-white/10 py-6">

          <div className="
            flex flex-col gap-4
            md:flex-row
            md:items-center
            md:justify-between
          ">

            <p className="
              text-xs leading-5
              text-white/35
            ">
              © {new Date().getFullYear()} Nautika Oglasi.
              Sva prava zadržana.
            </p>

            <p className="
              max-w-2xl
              text-xs leading-5
              text-white/30
              md:text-right
            ">
              Zabranjeno je kopiranje, distribucija ili bilo kakvo
              korišćenje sadržaja sajta bez izričite dozvole vlasnika.
              Sadržaj je namenjen isključivo ličnoj upotrebi posetilaca.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};
