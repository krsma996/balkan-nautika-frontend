export const SearBoatForm: React.FC = () => {
    return (
      <div className="pt-45 max-w-4x1 ml-30">
        <h1 className="pb-2">Pretraga plovila</h1>
        <div className="p-10 bg-white shadow-lg roundend-lg">
          <form method="get" action="/nautika-oglasi/pretraga">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Cena"
                className="p-2 border rounded w-full"
              />
            </div>
          </form>
        </div>
      </div>
    );
}