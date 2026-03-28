export const BoatFeaturesCheckBox=()=>{
    return (
        <div className="flex items-center gap-2 mt-6">
        <input type="checkbox"
          className="rounded border-gray-300 text-gray-800 focus:ring-gray-800"/>
        <label className="text-sm text-gray-700">
          Mogućnost kupovine na kredit
        </label>
      </div>
    );
}