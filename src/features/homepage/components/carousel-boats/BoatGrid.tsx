import { useState } from "react";

const testShips = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  imageUrl:
    "https://5.imimg.com/data5/ANDROID/Default/2023/1/LE/VX/ZK/73969496/product-jpeg.jpg",
  name: `Ship ${i + 1}`,
  description: `Description for ship ${i + 1}`,
}));

export const BoatGrid = () => {
  const [selectedShip, setSelectedShip] = useState<{
    id: number;
    imageUrl: string;
    name: string;
    description: string;
  } | null>(null);

  return (
    <div className="flex items-center justify-center bg-[#f5f7f8] mt-10 mb-10 w-full ">
      <div className="pb-7 pt-7">
        <div className="grid grid-cols-6 gap-6">
          {testShips.map((ship) => (
            <div
              key={ship.id}
              className="cursor-pointer bg-gray-100 p-2 rounded-lg shadow-md"
              onClick={() => setSelectedShip(ship)}
            >
              {/* IMAGE CENTERED VIA FLEX */}
              <div className="flex justify-center">
                <img
                  src={ship.imageUrl}
                  alt={ship.name}
                  className="h-24 object-cover rounded-lg"
                />
              </div>

              <p className="text-center font-semibold mt-2">{ship.name}</p>
            </div>
          ))}
        </div>

        {selectedShip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={() => setSelectedShip(null)}
              >
                &times;
              </button>

              {/* MODAL IMAGE CENTERED VIA FLEX */}
              <div className="flex justify-center">
                <img
                  src={selectedShip.imageUrl}
                  alt={selectedShip.name}
                  className="h-64 object-cover rounded-md"
                />
              </div>

              <h2 className="text-lg font-bold mt-4">{selectedShip.name}</h2>
              <p className="text-gray-600 mt-2">{selectedShip.description}</p>
              <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md w-full"
                onClick={() => alert(`Go to listing ${selectedShip.id}`)}
              >
                View Listing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
