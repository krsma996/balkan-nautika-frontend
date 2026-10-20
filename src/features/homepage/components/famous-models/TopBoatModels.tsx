import { TOP_BOAT_MODELS } from "../models/TopBoatModels.types";


export const TopBoatModels = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-[#222831] mb-12">
        Popularni proizvođači
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-12">
        {TOP_BOAT_MODELS.map((model, index) => (
          <a key={index} href="#" className="flex items-center justify-center">
            <img
              src={model.img}
              alt={model.name}
              className="h-20 object-contain hover:scale-110 transition-transform duration-300"/>
          </a>
        ))}
      </div>
    </div>
  );
};
