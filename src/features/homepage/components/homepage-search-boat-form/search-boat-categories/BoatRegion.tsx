import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoatRegion = () =>{
    return (
      <div>
        <label className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
          Region
        </label>
        <select className="w-full h-12 rounded-xl border border-gray-300 bg-white px-3 text-sm
                           focus:border-[#222831] focus:ring-2 focus:ring-[#222831]/20 transition-all">
          <option>Izaberite region</option>
          <option>Jadran</option>
          <option>Dunav</option>
          <option>Mediteran</option>
        </select>
      </div>
    );
}