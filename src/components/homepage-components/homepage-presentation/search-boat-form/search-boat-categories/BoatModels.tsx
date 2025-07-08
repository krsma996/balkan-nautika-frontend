
export const BoatModels=() =>{
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select id="yearFrom" className="p-2 border rounded w-65">
            <option value="" disabled selected hidden>
              {" "}
              Svi modeli
            </option>
            <option value="2000">a</option>
            <option value="2001">c</option>
            <option value="2002">b</option>
          </select>
        </div>
      </div>
    );
}