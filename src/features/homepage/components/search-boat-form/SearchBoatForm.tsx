import { BoatCondition } from "./search-boat-categories/BoatCondition";
import { BoatFeaturesCheckBox } from "./search-boat-categories/BoatFeaturesCheckBox";
import { BoatType } from "./search-boat-categories/BoatType";
import { BoatMaterialType } from "./search-boat-categories/BoatMaterialType";
import { BoatModels } from "./search-boat-categories/BoatModels";
import { BoatPrice } from "./search-boat-categories/BoatPrice";
import { BoatRegion } from "./search-boat-categories/BoatRegion";
import { BoatSearchButton } from "./search-boat-categories/BoatSearchButton";
import {BoatFuel } from "./search-boat-categories/BoatFuel";
import { BoatYear } from "./search-boat-categories/BoatYear";

export const SearBoatForm = () => {
  return (
    <div className="mt-20 ml-30 max-w-4xl form-typography">
      <h1 className="mb-6">Pretraga plovila</h1>
      <div className="p-8 bg-[#f5f7f8] shadow-lg rounded-lg">
        <form method="get" action="/nautika-oglasi/pretraga">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <BoatType />
            <BoatModels />
            <BoatPrice />
            <BoatYear />
            <BoatFuel />
            <BoatRegion />
            <BoatCondition />
            <BoatMaterialType />
            <BoatFeaturesCheckBox />
            <div className="col-span-full flex justify-end pt-4">
              <BoatSearchButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
