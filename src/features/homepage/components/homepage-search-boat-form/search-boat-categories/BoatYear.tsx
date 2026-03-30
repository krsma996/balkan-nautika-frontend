export const BoatYear=() =>{
    return (
      <>
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Godište od
        </label>
        <input type="number" placeholder="npr. 2010"
          className="w-full rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-800 h-8"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Godište do
        </label>
        <input type="number" placeholder="npr. 2024"
          className="w-full rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-800 h-8"/>
      </div>
      </>
    );
}