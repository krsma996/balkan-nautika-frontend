export const BoatCondition=()=>{
    return (
    <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Stanje
        </label>
        <select className="
  w-full h-12 rounded-xl
  border border-gray-300
  bg-white
  px-3 text-sm
  focus:border-[#222831]
  focus:ring-2 focus:ring-[#222831]/20
  transition-all">
          <option>Izaberite stanje</option>
          <option>Nova plovila</option>
          <option>Polovna plovila</option>
          <option>Polovna i nova plovila</option>
        </select>
      </div>
    );
}