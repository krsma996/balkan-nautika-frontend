import { ACTIVITIES_LINKS } from "./ActivitiesModel";

export const Activities = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      {/* Header */}
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#222831] sm:text-4xl">
          Istražite plovidbu po aktivnostima
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#222831]/55">
          Od mirnih uvala do otvorenog mora — pronađi plovidbu koja odgovara
          tvom stilu.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {ACTIVITIES_LINKS.map((activity) => (
          <a
            key={activity.title}
            href={activity.href}
            className="
              group
              relative
              block
              h-72
              overflow-hidden
              rounded-2xl
              bg-[#222831]
              shadow-[0_1px_2px_rgba(34,40,49,0.03),inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_-10px_rgba(34,40,49,0.22)]
              ring-1
              ring-[#222831]/[0.06]
              transition-all
              duration-500
              ease-out
              hover:-translate-y-1.5
              hover:shadow-[0_1px_2px_rgba(34,40,49,0.03),inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_3px_rgba(56,81,112,0.14),0_36px_60px_-16px_rgba(34,40,49,0.5)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#385170]
            "
          >
            {/* Image */}
            <img
              src={activity.img}
              alt={activity.title}
              className="
                h-full
                w-full
                scale-100
                object-cover
                brightness-[0.9]
                saturate-[1.05]
                transition-all
                duration-700
                ease-out
                group-hover:scale-[1.08]
                group-hover:brightness-100
              "
            />

            {/* Overlay */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#222831]
                via-[#222831]/35
                to-[#222831]/0
                opacity-95
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Border on hover */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-2xl
                border
                border-transparent
                transition-colors
                duration-500
                group-hover:border-[#385170]/60
              "
            />

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-6 rounded-full bg-[#385170] transition-all duration-500 group-hover:w-10" />

                <h3 className="text-lg font-bold leading-tight tracking-tight text-white drop-shadow-sm transition-transform duration-500 group-hover:-translate-y-0.5">
                  {activity.title}
                </h3>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-500
                  group-hover:border-[#385170]
                  group-hover:bg-[#385170]
                  group-hover:translate-x-0.5
                  group-hover:shadow-[0_4px_14px_rgba(56,81,112,0.45)]
                "
              >
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};