import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoatPrice = () => {
  return (
    <div>
      <label className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
      <FontAwesomeIcon icon={faEuroSign} className="text-gray-400" />
        Cena (€)
      </label>
      <div className="grid grid-cols-2 gap-3">
        <input type="number" placeholder="Od"
          className="w-full h-12 rounded-xl border border-gray-300 bg-white px-3 text-sm
                     focus:border-[#222831] focus:ring-2 focus:ring-[#222831]/20 transition-all"/>
        <input type="number" placeholder="Do"
          className="w-full h-12 rounded-xl border border-gray-300 bg-white px-3 text-sm
                     focus:border-[#222831] focus:ring-2 focus:ring-[#222831]/20 transition-all"/>
      </div>
    </div>
  );
};