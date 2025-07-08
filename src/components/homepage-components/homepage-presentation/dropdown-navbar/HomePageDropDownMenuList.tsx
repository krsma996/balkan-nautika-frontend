import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton} from "@headlessui/react";

export const HomePageDropDownMenuList = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl flex flex-row">
      <div className="bg-[#f5f7f8] w-full flex items-center gap-2 p-1 justify-center">
        <FontAwesomeIcon icon={faHouse} className="text-gray-700 text-xl" />
        <Menu
          as="div"
          className="relative inline-block text-left font-bold font-roboto"
        >
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            BRZA PRETRAGA
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            ISTRAZI
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            PONUDA PLOVILA
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            DELOVI I OPREMA
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            PRODAJ PLOVILO
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            SAVETI I VESTI
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            PONUDA ZA OGLASAVANJE
          </MenuButton>
          <MenuButton className="text-black px-4 py-2 rounded-md text-xs font-semibold">
            RENTAL / IZNAJMLJIVANJE PLOVILA
          </MenuButton>
        </Menu>
      </div>
    </div>
  );
};
