export const BoatCondition=()=>{
    return (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Stanje
        </label>
        <select className="w-full rounded-lg border-gray-300 focus:border-gray-800 focus:ring-gray-800">
          <option>Sva</option>
          <option>Nova plovila</option>
          <option>Polovna plovila</option>
        </select>
      </div>
    );
}