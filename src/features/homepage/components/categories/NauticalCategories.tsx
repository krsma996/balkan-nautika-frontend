import { ArrowUpRight } from "lucide-react";
import { NAUTICAL_CATEGORIES_MODEL } from "../models/NauticalCategoriesModel.types";

const DEFAULT_DESCRIPTION =
  "Istražite kompletnu ponudu iz ove kategorije i pronađite idealno rešenje za vaše potrebe.";

export const NauticalCategories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="inline-flex items-center gap-4 text-base font-semibold uppercase tracking-[0.35em] text-[#385170] md:text-lg">
          <span className="h-px w-10 bg-[#385170]/40" />
          PLOVILA • MARINE • OPREMA • SERVISI
          <span className="h-px w-10 bg-[#385170]/40" />
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[#222831]/70 sm:text-lg sm:leading-8 md:text-xl">
        Izaberite kategoriju i pronađite plovila, opremu, marine, servise i
        usluge koje odgovaraju vašim potrebama.
      </p>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {NAUTICAL_CATEGORIES_MODEL.map((cat) => (
          <a
            key={cat.title}
            href={cat.href ?? "#"}
            aria-label={`${cat.title} – pogledaj ponudu`}
            className="
              group/card relative flex flex-col overflow-hidden rounded-2xl
              border border-[#385170]/10 bg-white
              shadow-[0_1px_2px_rgba(34,40,49,0.04),0_8px_24px_-12px_rgba(34,40,49,0.12)]
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-1.5 hover:border-[#385170]/30
              hover:shadow-[0_24px_48px_-16px_rgba(34,40,49,0.28)]
              focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#385170]/30
              motion-reduce:transition-none motion-reduce:hover:translate-y-0
            "
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e7eaf6]">
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.06] motion-reduce:transition-none"
              />

              {/* Base shade */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#222831]/35 via-transparent to-transparent"
              />

              {/* Brand tint on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#385170]/0 mix-blend-multiply transition-colors duration-500 group-hover/card:bg-[#385170]/25"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between gap-6 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#222831]">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#222831]/65">
                  {cat.description ?? DEFAULT_DESCRIPTION}
                </p>
              </div>

              {/* CTA */}
              <span
                className="
                  relative inline-flex w-full items-center justify-between
                  overflow-hidden rounded-full border border-[#385170]/25
                  bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#385170]
                  transition-colors duration-500
                  group-hover/card:border-[#385170] group-hover/card:text-white
                  motion-reduce:transition-none
                "
              >
                {/* Sliding fill */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0 origin-left scale-x-0 rounded-full bg-[#385170]
                    transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover/card:scale-x-100
                    motion-reduce:transition-none
                  "
                />

                <span className="relative z-10">Pogledaj ponudu</span>

                {/* Arrow swap */}
                <span
                  className="
                    relative z-10 flex h-9 w-9 items-center justify-center
                    overflow-hidden rounded-full bg-[#385170] text-white
                    transition-colors duration-500
                    group-hover/card:bg-white group-hover/card:text-[#385170]
                  "
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-7 group-hover/card:-translate-y-7"
                  />
                  <ArrowUpRight
                    size={18}
                    className="absolute -translate-x-7 translate-y-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:translate-x-0 group-hover/card:translate-y-0"
                  />
                </span>
              </span>
            </div>

            {/* Bottom accent line */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#385170] transition-transform duration-500 ease-out group-hover/card:scale-x-100"
            />
          </a>
        ))}
      </div>
    </section>
  );
};