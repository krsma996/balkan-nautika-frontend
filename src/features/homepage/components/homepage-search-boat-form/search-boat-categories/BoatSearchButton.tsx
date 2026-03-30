import { FaSearch } from "react-icons/fa"; // koristi react-icons za search ikonu

export const BoatSearchButton = () => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-6">
      <button
        type="submit"
        className="px-12 py-4 rounded-xl bg-[#222831] 
                                               text-white font-semibold hover:bg-black 
                                               transition-all shadow-lg flex items-center gap-3 text-lg">
        <FaSearch />
        Pretraži plovila
      </button>
    </div>
  );
};
