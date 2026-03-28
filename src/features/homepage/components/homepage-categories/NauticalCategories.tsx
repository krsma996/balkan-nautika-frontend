import { NAUTICAL_CATEGORIES_MODEL } from "./NauticalCategoriesModel";


export const NauticalCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-10 text-center max-w-xl mx-auto">
        Istraži kategorije
      </h2>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NAUTICAL_CATEGORIES_MODEL.map((cat) => (
          <div
            key={cat.title}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden
                       shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
            </div>
            <div className="p-4 text-center">
              <p className="text-gray-800 font-medium">
                {cat.title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};