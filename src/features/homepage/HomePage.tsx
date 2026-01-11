import { Footer } from "./components/homepage-footer/Footer";
import { BoatGrid } from "./components/carousel-boats/BoatGrid";
import { NauticalBusinessDirectoryHub } from "./components/nautical-directory-carousel/NauticalBusinessDirectoryHub";
import { NavBarHeader } from "./components/navbar-header/NavBarHeader";
import { SearBoatForm } from "./components/search-boat-form/SearchBoatForm";
import { Activities } from "./components/homepage-activities/Activities";
import { HomePageDropDownMenuList } from "./components/dropdown-navbar/HomePageDropDownMenuList";

export const HomePage = () => {
  return (
    <>
      <NavBarHeader />
      <HomePageDropDownMenuList/>
      <SearBoatForm />
      <BoatGrid />
      <NauticalBusinessDirectoryHub />
      <Activities/>
      <Footer/>
    </>
  );
};
