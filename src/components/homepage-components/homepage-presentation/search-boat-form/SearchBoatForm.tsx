import { BoatCondition } from "./search-boat-categories/BoatCondition";
import { BoatFeaturesCheckBox } from "./search-boat-categories/BoatFeaturesCheckBox";
import { BoatMarks } from "./search-boat-categories/BoatMarks";
import { BoatModels } from "./search-boat-categories/BoatModels";
import { BoatRegion } from "./search-boat-categories/BoatRegion";
import { BoatSearchButton } from "./search-boat-categories/BoatSearchButton";
import { BoatType } from "./search-boat-categories/BoatType";
import { BoatYear } from "./search-boat-categories/BoatYear";

export const SearBoatForm: React.FC = () => {
    return (
      <div className="pt-45">
        <h1 className="pb-2">Pretraga plovila</h1>
        <div className="p-10 bg-white shadow-lg rounded-lg">
          <form method="get" action="/nautika-oglasi/pretraga">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <BoatMarks />
              <BoatModels />
              <input type="number" placeholder="cena" />
              <BoatYear />
              <BoatType />
              <BoatRegion />
              <BoatCondition />
              <BoatFeaturesCheckBox />
              <BoatSearchButton />
            </div>
          </form>
        </div>
      </div>
    );
}