import { Footer } from "./components/homepage-footer/Footer";
//import { BoatGrid } from "./components/homepage-carousel-boats/BoatGrid";
import { NauticalBusinessDirectoryHub } from "./components/nautical-directory-carousel/NauticalBusinessDirectoryHub";
import { NavBarHeader } from "./components/navbar-header/NavBarHeader";
import { SearBoatForm } from "./components/search-boat-form/SearchBoatForm";
import { Activities } from "./components/homepage-activities/Activities";
import { NavbarPrimaryMenu } from "./components/homepage-dropdown-navbar/NavbarPrimaryMenu ";
import { NauticalCategories } from "./components/homepage-categories/NauticalCategories";
import { HowItWorks } from "./components/homepage-howitworks/HowItWorks";
import { PremiumAds } from "./components/homepage-premium-ads/PremiumAds";

export const HomePage = () => {
  return (
    <>
      <NavBarHeader />
      <NavbarPrimaryMenu />
      <SearBoatForm />
      <NauticalCategories/>
      <HowItWorks/>
      <PremiumAds/>
      <Activities/>
      <NauticalBusinessDirectoryHub />
      <Footer/>
    </>
  );
};
