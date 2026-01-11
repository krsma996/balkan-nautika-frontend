import { FaSearch } from "react-icons/fa"; // koristi react-icons za search ikonu

export const BoatSearchButton=()=> {
  return (
    <div className="col-span-2 md:col-span-1 flex justify-end ml-210">
      <button
        type="submit"
        className="flex items-center gap-2 text-white bg-[#3598db] hover:bg-[#2f86c3]
             focus:outline-none focus:ring-4 focus:ring-[#3598db]/40
             font-medium rounded-lg text-sm
             px-6 py-2"
      >
        <FaSearch className="w-4 h-4" />
        <span>Pretraga</span>
      </button>
    </div>
  );
};
