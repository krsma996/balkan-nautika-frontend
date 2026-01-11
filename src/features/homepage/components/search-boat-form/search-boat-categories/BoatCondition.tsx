export const BoatCondition=()=>{
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select id="yearFrom" className="p-2 border rounded w-65">
              <option value="">Polovna i Nova Vozila</option>
              <option value="2000">Samo polovna vozila</option>
              <option value="2001">Samo nova vozila</option>
              <option value="2002">Polovna i nova vozila</option>
            </select>
        </div>
      </div>
    );
}