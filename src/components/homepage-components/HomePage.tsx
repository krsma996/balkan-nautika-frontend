import { NavBarHeader } from "./homepage-presentation/navbar-header/NavBarHeader"
import { SearBoatForm } from "./homepage-presentation/search-boat-form/SearchBoatForm"

export const HomePage: React.FC = () => {
    return(
        <div>
           <NavBarHeader/>
           <SearBoatForm/>
        </div>
    )
}