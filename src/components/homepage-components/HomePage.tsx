import { Footer } from "./Footer";
import { BoatGrid } from "./homepage-presentation/carousel-boats/BoatGrid";
import { NauticalBusinessDirectoryHub } from "./homepage-presentation/nautical-directory-carousel/NauticalBusinessDirectoryHub";
import { NavBarHeader } from "./homepage-presentation/navbar-header/NavBarHeader";
import { SearBoatForm } from "./homepage-presentation/search-boat-form/SearchBoatForm";

export const HomePage: React.FC = () => {
  return (
    <>
      <NavBarHeader />
      <SearBoatForm />
      <BoatGrid />
      <NauticalBusinessDirectoryHub />
      <Footer/>
    </>
  );
};
