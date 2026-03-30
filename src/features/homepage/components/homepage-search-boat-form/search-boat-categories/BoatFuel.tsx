export const BoatFuel=()=>{
    return (
     <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gorivo
        </label>
        <select className="w-full rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-800 h-8">
          <option>Izaberite tip goriva</option>
          <option>Dizel</option>
          <option>Benzin</option>
          <option>Električno</option>
        </select>
      </div>
    );
}