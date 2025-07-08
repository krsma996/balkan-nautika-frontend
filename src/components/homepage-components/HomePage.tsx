import { Footer } from "./homepage-presentation/homepage-footer/Footer";
import { BoatGrid } from "./homepage-presentation/carousel-boats/BoatGrid";
import { NauticalBusinessDirectoryHub } from "./homepage-presentation/nautical-directory-carousel/NauticalBusinessDirectoryHub";
import { NavBarHeader } from "./homepage-presentation/navbar-header/NavBarHeader";
import { SearBoatForm } from "./homepage-presentation/search-boat-form/SearchBoatForm";
import { Activities } from "./homepage-presentation/homepage-activities/Activities";
import { HomePageDropDownMenuList } from "./homepage-presentation/dropdown-navbar/HomePageDropDownMenuList";

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
