import {BOAT_QUICK_FILTERS_BUTTONS} from "../../models/BoatQuickFiltersModel.types.ts";

//TO DO: Mozda bude trebalo da se dodaju brzi filteri iznad forme tako da ovo kurcu nicemu ne sluzi za sada 
export const BoatQuickFilters = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {BOAT_QUICK_FILTERS_BUTTONS.map((item, i) => (
        <button
          key={i}
          className="flex flex-col items-center gap-1 px-6 py-3 text-xs font-medium text-black border border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition">
          <item.icon className="w-7 h-7 text-inherit" />
          {item.title}
        </button>
      ))}
    </div>
  );
};
