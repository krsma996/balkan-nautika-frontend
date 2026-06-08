import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoatType = () => {
  return (
    <div>
      <label className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
        <FontAwesomeIcon icon={faShip} className="text-gray-400" />
        Tip plovila
      </label>
      <select className="w-full h-12 rounded-xl border border-gray-300
                         bg-white px-3 text-sm focus:border-[#222831]
                         focus:ring-2 focus:ring-[#222831]/20 transition-all">
        <option>Izaberite plovilo</option>
        <option>Čamac</option>
        <option>Jahta</option>
        <option>Gliser</option>
        <option>Katamaran</option>
      </select>
    </div>
  );
};