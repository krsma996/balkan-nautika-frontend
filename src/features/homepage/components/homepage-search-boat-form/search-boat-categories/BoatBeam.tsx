


export const BoatBeam = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Širina trupa (m)
      </label>

      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Od (npr. 2)"
          className="w-full rounded-lg border border-gray-300 px-3 py-2
          focus:border-gray-800 focus:ring-gray-800"
        />
        <input
          type="number"
          placeholder="Do (npr. 8)"
          className="w-full rounded-lg border border-gray-300 px-3 py-2
          focus:border-gray-800 focus:ring-gray-800"
        />
      </div>
    </div>
  );
};