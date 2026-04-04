export const BoatBeam = () => {
  return (
    <div>
  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
    Širina trupa (m)
  </label>

  <div className="grid grid-cols-2 gap-3">
    <input
      type="number"
      placeholder="Od"
      className="h-12 rounded-xl border border-gray-300 px-3"
    />
    <input
      type="number"
      placeholder="Do"
      className="h-12 rounded-xl border border-gray-300 px-3"
    />
  </div>
</div>
  );
};