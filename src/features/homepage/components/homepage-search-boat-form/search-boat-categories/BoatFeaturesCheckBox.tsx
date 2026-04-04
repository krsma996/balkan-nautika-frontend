export const BoatFeaturesCheckBox=()=>{
    return (
       <div className="flex items-center gap-3 col-span-1 md:col-span-2 mt-4">
  <input
    type="checkbox"
    className="
      w-5 h-5 rounded-md
      border-gray-300
      text-[#222831]
      focus:ring-[#222831]/30
    "
  />
  <label className="text-sm text-gray-700 font-medium">
    Mogućnost kupovine na kredit
  </label>
</div>
    );
}