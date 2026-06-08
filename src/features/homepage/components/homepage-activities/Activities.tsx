import {ACTIVITIES_LINKS} from "./ActivitiesModel"



export const Activities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-12">
        Istražite plovidbu po aktivnostima
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ACTIVITIES_LINKS.map((activity) => (
          <figure key={activity.title} className="relative overflow-hidden group rounded-lg border-6 border-white">
            <a href={activity.href}>
              <img
                className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                src={activity.img}
                alt={activity.title}
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <h3 className="text-white font-bold">{activity.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
