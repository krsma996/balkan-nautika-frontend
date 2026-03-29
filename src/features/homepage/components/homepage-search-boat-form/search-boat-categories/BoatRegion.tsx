export const BoatRegion = () =>{
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Region
        </label>
        <select className="w-full rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-800">
          <option>Izaberite region</option>
          <option>Jadran</option>
          <option>Dunav</option>
          <option>Mediteran</option>
        </select>
      </div>
    );
}