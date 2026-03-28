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
    <div className="flex items-center justify-center pt-5">
   <div className="max-w-7xl mx-auto px-4 py-10 w-full">
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Pretraga plovila
    </h2>
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BoatType />
      <BoatModels/>
      <BoatPrice/>
      <BoatYear/>
      <BoatFuel/>
      <BoatRegion/>
      <BoatCondition/>
      <BoatMaterialType/>
      <BoatFeaturesCheckBox/>
      <BoatSearchButton/>
    </form>
  </div>
</div>
</div>
  );
};
