import { Footer } from "./components/footer/Footer";
//import { BoatGrid } from "./components/homepage-carousel-boats/BoatGrid";
//import { NauticalBusinessDirectoryHub } from "./components/homepage-nautical-directory-carousel/NauticalBusinessDirectoryHub";
import { NavBarHeader } from "./components/navbar-header/NavBarHeader";
import { SearchBoatForm } from "./components/search-boat-form/SearchBoatForm";
import { Activities } from "./components/activities/Activities";
import { NavbarPrimaryMenu } from "./components/dropdown-navbar/NavbarPrimaryMenu ";
import { NauticalCategories } from "./components/categories/NauticalCategories";
import { HowItWorks } from "./components/howitworks/HowItWorks";
import { PremiumAds } from "./components/premium-ads/PremiumAds";
import { TopBoatModels } from "./components/famous-models/TopBoatModels";

export const HomePage = () => {
  return (
    <>
      <NavBarHeader />
      <NavbarPrimaryMenu />
      <SearchBoatForm />
      <NauticalCategories/>
      <HowItWorks/>
      <PremiumAds/>
      <Activities/>
      <TopBoatModels/>
      <Footer/>
    </>
  );
};
