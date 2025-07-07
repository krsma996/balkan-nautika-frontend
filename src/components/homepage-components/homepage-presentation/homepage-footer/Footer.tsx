import logo from "../../../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faInstagram,faLinkedin,faYoutube,faTwitter} from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
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
                Balkan Marina
              </span>
            </a>
          </div>
          {/* Brzi linkovi */}
          <div className="flex flex-col space-y-2 max-w-xs">
            <h3 className="text-white font-semibold">Brzi linkovi</h3>
            <a href="#" className="text-white hover:underline">
              Kontakt
            </a>
            <a href="#" className="text-white hover:underline">
              Uslovi korišćenja
            </a>
            <a href="#" className="text-white hover:underline">
              Privatnost
            </a>
            <a href="#" className="text-white hover:underline">
              Kolačići
            </a>
            <a href="#" className="text-white hover:underline">
              Medijski paket
            </a>
            <a href="#" className="text-white hover:underline">
              Ugovor za oglašivače
            </a>
            <a href="#" className="text-white hover:underline">
              Izbor Oglasa
            </a>
            <a href="#" className="text-white hover:underline">
              Ne prodaj moje lične podatke
            </a>
          </div>

          {/* Brza pretraga */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-semibold">Brza Pretraga</h3>
            <a href="#" className="text-white hover:underline">
              Srbija
            </a>
            <a href="#" className="text-white hover:underline">
              Hrvatska
            </a>
            <a href="#" className="text-white hover:underline">
              Slovenija
            </a>
            <a href="#" className="text-white hover:underline">
              Crna Gora
            </a>
            <a href="#" className="text-white hover:underline">
              Bosna i Hercegovina
            </a>
            <a href="#" className="text-white hover:underline">
              Grčka
            </a>
            <a href="#" className="text-white hover:underline">
              Rumunija
            </a>
            <a href="#" className="text-white hover:underline">
              Albanija
            </a>
          </div>
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
