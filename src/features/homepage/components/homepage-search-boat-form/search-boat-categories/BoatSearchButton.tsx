import { FaSearch } from "react-icons/fa"; // koristi react-icons za search ikonu

export const BoatSearchButton = () => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-6">
      <button
  type="submit"
  className="
    relative overflow-hidden px-16 py-4 rounded-2xl
    bg-gradient-to-r from-[#222831] via-[#393e46] to-[#222831]
    text-white font-semibold text-lg
    shadow-[0_15px_40px_rgba(34,40,49,0.4)]
    hover:scale-[1.03]
    hover:shadow-[0_25px_60px_rgba(34,40,49,0.6)]
    transition-all duration-300
    flex items-center gap-3
  "
>
  <FaSearch className="text-xl" />
  Pretraži plovila
</button>
    </div>
  );
};