import { BoatCondition } from "./search-boat-categories/BoatCondition";
import { BoatFeaturesCheckBox } from "./search-boat-categories/BoatFeaturesCheckBox";
import { BoatMarks } from "./search-boat-categories/BoatMarks";
import { BoatModels } from "./search-boat-categories/BoatModels";
import { BoatPrice } from "./search-boat-categories/BoatPrice";
import { BoatRegion } from "./search-boat-categories/BoatRegion";
import { BoatSearchButton } from "./search-boat-categories/BoatSearchButton";
import { BoatType } from "./search-boat-categories/BoatType";
import { BoatYear } from "./search-boat-categories/BoatYear";

export const SearBoatForm = () => {
    return (
      <div className="mt-20 max-w-4xl ml-30 form-typography">
        <h1 className="pb-2">Pretraga plovila</h1>
        <div className="p-10 bg-[#f5f7f8] shadow-lg rounded-lg">
          <form method="get" action="/nautika-oglasi/pretraga boat-form">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <BoatMarks />
              <BoatModels />
              <BoatPrice />
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