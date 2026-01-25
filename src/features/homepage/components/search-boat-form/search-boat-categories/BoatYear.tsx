export const BoatYear=() =>{
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="yearFrom"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select id="yearFrom" className="p-2 border rounded w-full">
              <option value="">Godiste od</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="yearTo"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <select id="yearTo" className="p-2 border rounded w-26">
              <option value="">do</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
      </div>
    );
}