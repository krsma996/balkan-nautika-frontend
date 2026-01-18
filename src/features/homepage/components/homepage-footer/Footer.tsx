import logo from "../../../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faInstagram,faLinkedin,faYoutube,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FOOTER_QUICK_LINKS, FOOTER_QUICK_SEARCH } from "./FooterModel";
import { FooterQuickSearch } from "./FooterQuickSearch";

export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-7">
        {/* Gornji deo footera: Logo + Linkovi */}
        <div className="md:flex md:justify-between">
          {/* Logo sekcija */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="h-15 w-15 me-3"
                alt="Balkan-Marina-Logo-Footer"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NautikaOglasi
              </span>
            </a>
          </div>
          {/* Brzi linkovi */}
          {FOOTER_QUICK_LINKS.map((key) => (
            <FooterQuickLinks
              key={key.label}
              label={key.label}
              items={key.items}
            />
          ))}

          {/* Brza pretraga */}
          {FOOTER_QUICK_SEARCH.map((key) => (
            <FooterQuickSearch
              key={key.label}
              label={key.label}
              items={key.items}
            />
          ))}

          
          {/* Linkovi sekcija i newsletter */}
          <div className="flex space-x-15">
            {/* Prijava na newsletter*/}
            <div className="mt-3">
              <h3 className="text-white font-semibold mb-2">
                Prijava na newsletter
              </h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Unesite email"
                  className="p-2 rounded-l bg-gray-700 text-white border border-gray-600 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 p-2 rounded-r hover:bg-blue-700 transition"
                >
                  Prijavi se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Društvene mreže sekcija */}
        <div className="flex space-x-4 text-white mt-6 ml-5">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
        {/* Linija + Copyright sekcija */}
        <hr className="border-white mt-10" />
        <p className="text-center text-white mt-4">
          Sva prava zadržana. Zabranjeno je kopiranje, distribucija ili bilo
          kakvo korišćenje sadržaja sajta bez izričite dozvole vlasnika. Sadržaj
          je namenjen isključivo ličnoj upotrebi posetilaca.
        </p>
      </div>
    </footer>
  );
};
