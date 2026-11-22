
import { ArrowUpRight, Compass } from "lucide-react";
import { NAUTICAL_CATEGORIES_MODEL } from "../models/NauticalCategoriesModel.types";

const DEFAULT_DESCRIPTION =
  "Istražite kompletnu ponudu iz ove kategorije i pronađite idealno rešenje za vaše potrebe.";

export const NauticalCategories = () => {
  return (
    <section
      aria-labelledby="nautical-categories-title"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#385170]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#7897B7]/[0.09] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#385170]/15 bg-white/70 text-[#385170] shadow-sm">
                <Compass size={16} strokeWidth={1.8} />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#385170]/75">
                NAUTIKA OGLASI · ISTRAŽITE
              </span>

              <span className="h-px w-10 bg-[#385170]/30" />
            </div>

            <h2
              id="nautical-categories-title"
              className="font-[Roboto_Condensed] text-4xl font-bold leading-[1.08] tracking-tight text-[#222831] sm:text-5xl lg:text-[56px]"
            >
              Sve za vaš svet
              <span className="mt-1 block bg-gradient-to-r from-[#385170] to-[#7897B7] bg-clip-text text-transparent">
                nautike.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-base leading-7 text-[#385170]/80 sm:text-[17px] sm:leading-8">
              Od plovila i nautičke opreme do marina,
              servisa i specijalizovanih usluga.
              Istražite sve oblasti nautičkog sveta
              na jednom mestu.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#7897B7]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#385170]/60">
                Otkrijte kategorije
              </span>
            </div>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {NAUTICAL_CATEGORIES_MODEL.map((cat, index) => (
            <a
              key={cat.title}
              href={cat.href}
              aria-label={`${cat.title} – istražite kategoriju`}
              className="
                group/card relative flex h-full min-h-[440px]
                flex-col overflow-hidden rounded-[22px]
                border border-[#385170]/[0.13]
                bg-white
                shadow-[0_8px_30px_rgba(34,40,49,0.055)]
                transition-all duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2
                hover:border-[#7897B7]/60
                hover:shadow-[0_24px_55px_rgba(34,40,49,0.15)]
                focus-visible:outline-none
                focus-visible:ring-4
                focus-visible:ring-[#385170]/25
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >

              {/* IMAGE */}
              <div className="relative aspect-[1.38/1] shrink-0 overflow-hidden bg-[#222831]">

                <img
                  src={cat.img}
                  alt={cat.title}
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-1000
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/card:scale-[1.08]
                    motion-reduce:transition-none
                  "
                />

                {/* IMAGE DEPTH */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#17212d]/35
                    via-transparent
                    to-[#17212d]/15
                  "
                />

                {/* TOP METADATA */}
                <div className="absolute inset-x-5 top-5 flex items-center justify-between">

                  <span className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/25
                    bg-[#17212d]/45 px-3 py-1.5
                    text-[9px] font-bold uppercase
                    tracking-[0.16em] text-white
                    shadow-sm backdrop-blur-md
                  ">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B4C9DF]" />
                    Kategorija
                  </span>

                  <span className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/30
                    bg-[#17212d]/40 text-white
                    backdrop-blur-md
                    transition-all duration-300
                    group-hover/card:rotate-45
                    group-hover/card:border-white/70
                    group-hover/card:bg-[#385170]
                  ">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </div>

                {/* IMAGE INDEX */}
                <span className="
                  absolute bottom-4 left-5
                  font-[Roboto_Condensed]
                  text-[12px] font-bold tracking-[0.2em]
                  text-white/85
                  drop-shadow-md
                ">
                  0{index + 1} / 0{NAUTICAL_CATEGORIES_MODEL.length}
                </span>

                {/* IMAGE BOTTOM ACCENT */}
                <span className="
                  absolute bottom-0 left-0 h-[3px] w-full
                  origin-left scale-x-0
                  bg-gradient-to-r from-[#7897B7] to-[#B4C9DF]
                  transition-transform duration-700
                  group-hover/card:scale-x-100
                " />
              </div>

              {/* CARD CONTENT */}
              <div className="relative flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6">

                {/* TITLE */}
                <h3 className="
                  font-[Roboto_Condensed]
                  text-[27px] font-bold leading-tight
                  tracking-tight text-[#222831]
                  transition-colors duration-300
                  group-hover/card:text-[#385170]
                ">
                  {cat.title}
                </h3>

                {/* TITLE ACCENT */}
                <span className="
                  mt-3 h-[2px] w-8 rounded-full
                  bg-gradient-to-r from-[#385170] to-[#8BA7C5]
                  transition-all duration-500
                  group-hover/card:w-14
                " />

                {/* DESCRIPTION */}
                <p className="
                  mt-4 line-clamp-3 flex-1
                  text-[13px] leading-[1.85]
                  text-[#222831]/65
                ">
                  {cat.description ?? DEFAULT_DESCRIPTION}
                </p>

                {/* CARD FOOTER */}
                <div className="
                  mt-6 flex items-center justify-between
                  border-t border-[#385170]/[0.12]
                  pt-4
                ">
                  <span className="
                    text-[10px] font-bold uppercase
                    tracking-[0.15em] text-[#385170]/75
                    transition-colors duration-300
                    group-hover/card:text-[#385170]
                  ">
                    Istražite ponudu
                  </span>

                  <span className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full border border-[#385170]/15
                    bg-[#e7eaf6]/65 text-[#385170]
                    transition-all duration-300
                    group-hover/card:translate-x-1
                    group-hover/card:border-[#385170]
                    group-hover/card:bg-[#385170]
                    group-hover/card:text-white
                  ">
                    <ArrowUpRight size={17} strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* SECTION FOOTER */}
        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-[#385170]/10 pt-6 sm:flex-row">
          <p className="text-xs leading-5 text-[#385170]/55">
            Jedno mesto. Sve oblasti nautičkog sveta.
          </p>

          <div className="flex items-center gap-2 text-[#385170]/60">
            <Compass size={14} strokeWidth={1.8} />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em]">
              Otkrijte nautiku
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
