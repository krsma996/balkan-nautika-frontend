import { ArrowUpRight } from "lucide-react";
import { NAUTICAL_CATEGORIES_MODEL } from "./NauticalCategoriesModel";

export const NauticalCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-6 flex justify-center">
        <h1
  className="
    inline-flex
    items-center
    gap-4
    text-base
    md:text-lg
    font-semibold
    uppercase
    tracking-[0.35em]
    text-[#385170]
  "
>
  <span className="h-px w-10 bg-[#385170]/40" />
  PLOVILA • MARINE • OPREMA • SERVISI
  <span className="h-px w-10 bg-[#385170]/40" />
</h1>
      </div>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-gray-600
          sm:mt-7
          sm:text-lg
          sm:leading-8
          md:text-xl
          text-center
        "
      >
        Izaberite kategoriju i pronađite plovila, opremu, marine,
        servise i usluge koje odgovaraju vašim potrebama.
      </p>

      {/* Categories Grid */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NAUTICAL_CATEGORIES_MODEL.map((cat) => (
          <article
            key={cat.title}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border
              border-gray-200
              bg-white
              shadow-sm
              transition
              duration-300
              hover:shadow-xl
              cursor-pointer
            "
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={cat.img}
                alt={cat.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Content */}
            <div
              className="
                relative
                z-20
                flex
                min-h-[180px]
                flex-col
                justify-between
                p-6
              "
            >
              <div>
                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-[#222831]
                  "
                >
                  {cat.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-gray-600
                  "
                >
                  Istražite kompletnu ponudu iz ove kategorije i pronađite
                  idealno rešenje za vaše potrebe.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#385170]/20
                    bg-[#385170]/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[#385170]
                  "
                >
                  Pogledaj ponudu
                </span>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#385170]
                    text-white
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                >
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>

            {/* Glass reflection */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-40
                -top-20
                z-10
                h-[170%]
                w-28
                rotate-12
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                opacity-0
                transition-all
                duration-700
                group-hover:left-[115%]
                group-hover:opacity-100
              "
            />
          </article>
        ))}
      </div>
    </section>
  );
};