import {Menu,MenuButton,MenuItem,MenuItems} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBullhorn,faRightFromBracket,faUser,faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { useNavLinks } from "./NavLinksModal";

export const NavLinks = () => {
  const {
    initialized,
    authenticated,
    displayName,
    handleLogin,
    handleRegister,
    handleLogout,
    handlePostAd,
    handleProfile,
    handleMyAds,
  } = useNavLinks();

  return (
    <ul className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:gap-2">

      {/* Authentication */}

      {!initialized ? (
        <li>
          <div className="h-10 w-24 animate-pulse rounded-lg bg-white/5" />
        </li>
      ) : !authenticated ? (
        <>
          <li>
            <button
              onClick={handleLogin}
              className="
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
                md:w-auto
              "
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-xs"
              />

              <span>Prijavi se</span>
            </button>
          </li>

          <li>
            <button
              onClick={handleRegister}
              className="
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
                md:w-auto
              "
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                className="text-xs"
              />

              <span>Registruj se</span>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Menu
              as="div"
              className="relative"
            >
              <MenuButton
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-white/80
                  transition-all
                  duration-200
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#385170]
                    text-white
                  "
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-xs"
                  />
                </span>

                <span className="max-w-[140px] truncate">
                  {displayName}
                </span>

                <span className="text-xs text-white/40">
                  ▼
                </span>
              </MenuButton>

              <MenuItems
                className="
                  absolute
                  right-0
                  z-50
                  mt-2
                  w-48
                  origin-top-right
                  rounded-xl
                  border
                  border-white/10
                  bg-[#222831]
                  p-1
                  shadow-xl
                  focus:outline-none
                "
              >
                <MenuItem>
                  {({ focus }) => (
                    <button
                      onClick={handleProfile}
                      className={`
                        flex
                        w-full
                        items-center
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-white/80
                        ${
                          focus
                            ? "bg-white/5 text-white"
                            : ""
                        }
                      `}
                    >
                      Moj profil
                    </button>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ focus }) => (
                    <button
                      onClick={handleMyAds}
                      className={`
                        flex
                        w-full
                        items-center
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-white/80
                        ${
                          focus
                            ? "bg-white/5 text-white"
                            : ""
                        }
                      `}
                    >
                      Moji oglasi
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="
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
                text-white/60
                transition-all
                duration-200
                hover:bg-white/5
                hover:text-white
                md:w-auto
              "
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-xs"
              />

              <span>Odjavi se</span>
            </button>
          </li>
        </>
      )}

      {/* Post ad */}

      <li>
        <button
          onClick={handlePostAd}
          className="
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
          "
        >
          <FontAwesomeIcon
            icon={faBullhorn}
            className="text-xs"
          />

          <span>POSTAVI OGLAS</span>
        </button>
      </li>
    </ul>
  );
};