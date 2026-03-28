
export const BoatType= () =>{
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tip plovila
        </label>
        <select className="w-full rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-gray-800 ">
          <option>Sva plovila</option>
          <option>Čamac</option>
          <option>Jahta</option>
          <option>Gliser</option>
          <option>Katamaran</option>
        </select>
      </div>
    );
}