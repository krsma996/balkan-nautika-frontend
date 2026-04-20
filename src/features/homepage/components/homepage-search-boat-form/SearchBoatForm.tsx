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
import { BoatBeam  } from "./search-boat-categories/BoatBeam";

export const SearBoatForm = () => {
  return (
   
<div className="relative max-w-7xl mx-auto px-4 py-14 w-full">
  {/* Glass background */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/70 via-white/50 to-[#e7eaf6]/70 backdrop-blur-xl mt-10" />
  <h2 className="relative text-3xl font-bold text-[#222831] mb-2 text-center">
    Pretraga plovila
  </h2>
  <p className="relative text-center text-sm text-gray-500 mb-8">
    Pronađite idealno plovilo po vašim kriterijumima
  </p>
  <div className="relative bg-white/80 rounded-3xl border border-gray-200 p-10 shadow-[0_30px_60px_rgba(34,40,49,0.15)]">
   <form className="form-typography grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <BoatType />
      <BoatModels/>
      <BoatPrice/>
      <BoatYear/>
      <BoatFuel/>
      <BoatRegion/>
      <BoatCondition/>
      <BoatMaterialType/>
      <BoatBeam />
      <BoatFeaturesCheckBox/>
      <BoatSearchButton/>
    </form>
          {/* FOOTER HINT */}
          <p className="text-center text-sm text-gray-500 mt-6">
           Pretražite oglase plovila, opreme i nautičkih usluga
          </p>
  </div>
</div>
  );
};
