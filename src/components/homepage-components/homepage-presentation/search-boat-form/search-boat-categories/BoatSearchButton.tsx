import { FaSearch } from "react-icons/fa"; // koristi react-icons za search ikonu

export const BoatSearchButton=()=> {
  return (
    <div className="col-span-2 md:col-span-1 flex justify-end ml-210">
      <button
        type="submit"
        className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaSearch className="w-4 h-4" />
        <span>Pretraga</span>
      </button>
    </div>
  );
};
