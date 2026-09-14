import { useAuth } from "../../../../config/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { createNavLinksData } from "./NavLinksModal";





export const NavLinks = () => {
  const { keycloak, authenticated } = useAuth();
  const navigate = useNavigate();
  const navLinksData = createNavLinksData({
    navigate,
    keycloak,
    authenticated,
  });


  return (
    <ul className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">
      {navLinksData.map((item) => {
        const isPostAd = item.navButton === "POSTAVI OGLAS";

        return (
          <li key={item.navButton}>
            <button
              onClick={item.onClick}
              className={
                isPostAd
                  ? `
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#385170]
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    tracking-[0.06em]
                    text-white
                    shadow-[0_4px_14px_rgba(56,81,112,0.25)]
                    transition-all
                    duration-200
                    hover:bg-[#4a668a]
                    hover:shadow-[0_8px_20px_rgba(56,81,112,0.35)]
                    active:translate-y-px
                    md:w-auto
                  `
                  : `
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    text-white/70
                    transition-all
                    duration-200
                    hover:bg-white/5
                    hover:text-white
                    md:w-auto`
              }
            >
              {item.icon && (
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-xs"
                />
              )}
              <span>{item.navButton}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};