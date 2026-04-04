export const BoatYear=() =>{
    return (
      <>
       <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Godište od
        </label>
        <input type="number" placeholder="npr. 2010"
         className="
  w-full h-12 rounded-xl
  border border-gray-300
  bg-white
  px-3 text-sm
  focus:border-[#222831]
  focus:ring-2 focus:ring-[#222831]/20
  transition-all"/>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          Godište do
        </label>
        <input type="number" placeholder="npr. 2024"
          className="
  w-full h-12 rounded-xl
  border border-gray-300
  bg-white
  px-3 text-sm
  focus:border-[#222831]
  focus:ring-2 focus:ring-[#222831]/20
  transition-all"/>
      </div>
      </>
    );
}