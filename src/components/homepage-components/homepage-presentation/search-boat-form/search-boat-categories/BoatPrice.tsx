

export const BoatPrice: React.FC = () => {
  return (
    <>
      <input
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="border border-black text-black text-sm rounded-lg focus:ring-black focus:border-blue-500 block w-full p-2.5 dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Cena (u evrima) do"
        required
      />
    </>
  );
};