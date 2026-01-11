export const BoatType=()=>{
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="yearFrom"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select id="yearFrom" className="p-2 border rounded w-66">
              <option value="">Gorivo</option>
              <option value="2000">Benzin</option>
              <option value="2001">Dizel</option>
              <option value="2002">Gas</option>
            </select>
          </div>
        </div>
      </div>
    );
}