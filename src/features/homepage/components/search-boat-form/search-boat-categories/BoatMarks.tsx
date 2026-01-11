/*
"
*/
export const BoatMarks = () =>{
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select id="yearFrom" className="p-2 border rounded w-65 form-text">
            <option value="" disabled selected hidden>
              {" "}
              Sve marke
            </option>
            <option  value="2000">
              test1
            </option>
            <option value="2001">
              test1
            </option>
            <option  value="2002">
              test1
            </option>
          </select>
        </div>
      </div>
    );
}