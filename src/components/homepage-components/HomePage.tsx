import { BoatGrid } from "./homepage-presentation/carousel-boats/BoatGrid"
import { NavBarHeader } from "./homepage-presentation/navbar-header/NavBarHeader"
import { SearBoatForm } from "./homepage-presentation/search-boat-form/SearchBoatForm"

export const HomePage: React.FC = () => {
    return (
      <>
        <NavBarHeader />
        <div className="max-w-4xl ml-30">
          <SearBoatForm />
          <BoatGrid />
        </div>
      </>
    );
}