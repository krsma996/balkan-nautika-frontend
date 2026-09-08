import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faInstagram,faLinkedinIn,faYoutube,faXTwitter} from "@fortawesome/free-brands-svg-icons";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterQuickSearch } from "./FooterQuickSearch";
import {FOOTER_QUICK_LINKS,FOOTER_QUICK_SEARCH} from "./FooterModel";



export const Footer = () => {
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
      icon: faYoutube,
      label: "YouTube",
    },
    {
      icon: faXTwitter,
      label: "X",
    },
    {
      icon: faLinkedinIn,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="mt-16 w-full bg-[#222831] text-[#e7eaf6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Glavni deo */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="group inline-flex items-center"
              aria-label="Nautika Oglasi - Početna"
            >
              <span
                className="
                  font-[Roboto_Condensed]
                  text-xl
                  font-bold
                  tracking-[0.1em]
                  text-white
                  transition-colors
                  duration-200
                  group-hover:text-[#e7eaf6]
                "
              >
                NAUTIKA
              </span>

              <span
                className="
                  ml-2
                  font-[Roboto_Condensed]
                  text-xl
                  font-light
                  tracking-[0.12em]
                  text-[#385170]
                "
              >
                OGLASI
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
              Mesto za oglase plovila, nautičke opreme i svega što je potrebno
              za uživanje na vodi.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
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
                    rounded-md
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-white/45
                    transition-all
                    duration-200
                    hover:border-[#385170]/50
                    hover:bg-[#385170]/15
                    hover:text-white
                  "
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-[13px]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Brzi linkovi */}
          <div>
            {FOOTER_QUICK_LINKS.map((key) => (
              <FooterQuickLinks
                key={key.label}
                label={key.label}
                items={key.items}
              />
            ))}
          </div>

          {/* Brza pretraga */}
          <div>
            {FOOTER_QUICK_SEARCH.map((key) => (
              <FooterQuickSearch
                key={key.label}
                label={key.label}
                items={key.items}
              />
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Prijava na vesti
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
              Budite obavešteni o novim oglasima i novostima sa platforme.
            </p>

            <form className="mt-5 flex max-w-md">
              <input
                type="email"
                placeholder="Unesite email"
                required
                className="
                  min-w-0
                  flex-1
                  rounded-l-md
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-3
                  py-2.5
                  text-sm
                  text-white
                  placeholder:text-white/30
                  transition-colors
                  focus:border-[#385170]
                  focus:outline-none
                  focus:ring-1
                  focus:ring-[#385170]
                "
              />

              <button
                type="submit"
                className="
                  rounded-r-md
                  bg-[#385170]
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#385170]/80
                "
              >
                Prijavi se
              </button>
            </form>
          </div>
        </div>

        {/* Donja linija */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

            <p className="text-xs leading-5 text-white/35">
              © {new Date().getFullYear()} Nautika Oglasi. Sva prava
              zadržana.
            </p>

            <p className="max-w-2xl text-xs leading-5 text-white/30 md:text-right">
              Zabranjeno je kopiranje, distribucija ili bilo kakvo korišćenje
              sadržaja sajta bez izričite dozvole vlasnika. Sadržaj je namenjen
              isključivo ličnoj upotrebi posetilaca.
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};
