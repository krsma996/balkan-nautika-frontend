
import { ArrowUpRight, Compass } from "lucide-react";
import { NAUTICAL_CATEGORIES_MODEL } from "../models/NauticalCategoriesModel.types";

const DEFAULT_DESCRIPTION =
  "Istražite kompletnu ponudu iz ove kategorije i pronađite idealno rešenje za vaše potrebe.";

export const NauticalCategories = () => {
  return (
    <section
      aria-labelledby="nautical-categories-title"
      className="
        relative isolate overflow-hidden
        py-20 sm:py-24 lg:py-28
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-64 top-20 -z-10
          h-[500px] w-[500px]
          rounded-full bg-[#385170]/[0.07]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-64 bottom-0 -z-10
          h-[500px] w-[500px]
          rounded-full bg-[#7897B7]/[0.09]
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="
          mb-12 flex flex-col
          gap-7
          lg:mb-14 lg:flex-row
          lg:items-end lg:justify-between
        ">

          {/* Heading */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="
              mb-5 inline-flex items-center gap-3
            ">
              <span className="
                flex h-8 w-8 items-center justify-center
                rounded-lg border border-[#385170]/15
                bg-white/70 text-[#385170]
                shadow-sm
              ">
                <Compass size={16} strokeWidth={1.8} />
              </span>

              <span className="
                text-[11px] font-bold uppercase
                tracking-[0.22em] text-[#385170]/75
              ">
                NAUTIKA OGLASI · ISTRAŽITE
              </span>

              <span className="
                h-px w-10 bg-[#385170]/30
              " />
            </div>

            {/* Main title */}
            <h2
              id="nautical-categories-title"
              className="
                font-[Roboto_Condensed]
                text-4xl font-bold
                leading-[1.08] tracking-tight
                text-[#222831]
                sm:text-5xl lg:text-[56px]
              "
            >
              Sve za vaš svet
              <span className="
                block mt-1
                bg-gradient-to-r
                from-[#385170] to-[#7897B7]
                bg-clip-text text-transparent
              ">
                nautike.
              </span>
            </h2>

          </div>

          {/* Description */}
          <div className="
            max-w-md lg:pb-1
          ">
            <p className="
              text-base leading-7
              text-[#385170]/80
              sm:text-[17px] sm:leading-8
            ">
              Od plovila i nautičke opreme do marina,
              servisa i specijalizovanih usluga.
              Istražite sve oblasti nautičkog sveta
              na jednom mestu.
            </p>

            <div className="
              mt-5 flex items-center gap-3
            ">
              <span className="
                h-px w-8 bg-[#7897B7]
              "/>

              <span className="
                text-[10px] font-bold uppercase
                tracking-[0.18em] text-[#385170]/60
              ">
                Otkrijte kategorije
              </span>
            </div>
          </div>

        </div>

        {/* CATEGORY GRID */}
        <div className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-6
        ">

          {NAUTICAL_CATEGORIES_MODEL.map((cat, index) => (

            <a
              key={cat.title}
              href={cat.href ?? "#"}
              aria-label={`${cat.title} – istražite kategoriju`}
              className="
                group/card relative isolate
                flex min-h-[390px]
                flex-col justify-between
                overflow-hidden rounded-[22px]
                border border-[#385170]/15
                bg-[#222831]
                shadow-[0_8px_30px_rgba(34,40,49,0.10)]

                transition-all duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:-translate-y-2
                hover:border-[#7897B7]/60
                hover:shadow-[0_24px_50px_rgba(34,40,49,0.22)]

                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-[#385170]/30

                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >

              {/* IMAGE */}
              <div className="
                absolute inset-0 -z-20
                overflow-hidden bg-[#222831]
              ">
                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/card:scale-[1.09]
                    motion-reduce:transition-none
                  "
                />
              </div>

              {/* IMAGE OVERLAY */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0 -z-10
                  bg-gradient-to-b
                  from-[#222831]/20
                  via-[#222831]/10
                  to-[#222831]/95
                  transition-all duration-500
                  group-hover/card:from-[#222831]/30
                  group-hover/card:to-[#222831]/95
                "
              />

              {/* TOP DETAILS */}
              <div className="
                flex items-start justify-between
                p-5 sm:p-6
              ">

                {/* Category number */}
                <span className="
                  flex h-9 min-w-9
                  items-center justify-center
                  rounded-lg
                  border border-white/20
                  bg-[#222831]/35
                  px-2
                  text-xs font-bold
                  tracking-wider text-white/90
                  backdrop-blur-md
                ">
                  0{index + 1}
                </span>

                {/* Decorative indicator */}
                <span className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-[#222831]/30
                  text-white/80
                  backdrop-blur-md
                  transition-all duration-300

                  group-hover/card:rotate-45
                  group-hover/card:border-[#8BA7C5]
                  group-hover/card:bg-[#385170]
                ">
                  <ArrowUpRight size={17} />
                </span>

              </div>

              {/* BOTTOM CONTENT */}
              <div className="
                mt-auto p-5 sm:p-6
              ">

                {/* Accent */}
                <span className="
                  mb-4 block h-[2px] w-9
                  bg-[#8BA7C5]
                  transition-all duration-500
                  group-hover/card:w-16
                "/>

                {/* Title */}
                <h3 className="
                  font-[Roboto_Condensed]
                  text-[27px] font-bold
                  leading-tight tracking-tight
                  text-white
                  sm:text-[29px]
                ">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="
                  mt-3 max-w-[280px]
                  text-sm leading-6
                  text-white/65
                  transition-colors duration-300
                  group-hover/card:text-white/80
                ">
                  {cat.description ?? DEFAULT_DESCRIPTION}
                </p>

                {/* CTA */}
                <div className="
                  mt-6 flex items-center
                  justify-between
                  border-t border-white/20
                  pt-4
                ">

                  <span className="
                    text-[11px] font-bold
                    uppercase tracking-[0.15em]
                    text-[#B4C9DF]
                    transition-colors duration-300
                    group-hover/card:text-white
                  ">
                    Istražite kategoriju
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="
                      text-[#B4C9DF]
                      transition-all duration-300
                      group-hover/card:translate-x-1
                      group-hover/card:-translate-y-1
                      group-hover/card:text-white
                    "
                  />

                </div>

              </div>

              {/* BOTTOM ACCENT */}
              <span
                aria-hidden="true"
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-full
                  origin-left scale-x-0
                  bg-gradient-to-r
                  from-[#385170] to-[#B4C9DF]
                  transition-transform duration-500
                  group-hover/card:scale-x-100
                "
              />

            </a>

          ))}

        </div>

        {/* SECTION FOOTER */}
        <div className="
          mt-9 flex flex-col
          items-center justify-between
          gap-4 border-t border-[#385170]/10
          pt-6 sm:flex-row
        ">

          <p className="
            text-xs leading-5
            text-[#385170]/55
          ">
            Jedno mesto. Sve oblasti nautičkog sveta.
          </p>

          <div className="
            flex items-center gap-2
            text-[#385170]/60
          ">
            <Compass size={14} strokeWidth={1.8} />

            <span className="
              text-[10px] font-bold
              uppercase tracking-[0.17em]
            ">
              Otkrijte nautiku
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
