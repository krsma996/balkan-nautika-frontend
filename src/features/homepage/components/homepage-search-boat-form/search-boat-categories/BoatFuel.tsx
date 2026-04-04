export const BoatFuel=()=>{
    return (
     <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Gorivo
        </label>
        <select className="
  w-full h-12 rounded-xl
  border border-gray-300
  bg-white
  px-3 text-sm
  focus:border-[#222831]
  focus:ring-2 focus:ring-[#222831]/20
  transition-all">
          <option>Izaberite tip goriva</option>
          <option>Dizel</option>
          <option>Benzin</option>
          <option>Električno</option>
        </select>
      </div>
    );
}