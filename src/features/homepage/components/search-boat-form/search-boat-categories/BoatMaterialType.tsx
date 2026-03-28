

export const BoatMaterialType=()=>{
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Materijal trupa
        </label>
        <select className="w-full rounded-lg border-gray-300 focus:border-gray-800 focus:ring-gray-800">
          <option>Svi materijali</option>
          <option>Aluminijum</option>
          <option>Fiberglass</option>
          <option>Drvo</option>
        </select>
      </div>
    );
};