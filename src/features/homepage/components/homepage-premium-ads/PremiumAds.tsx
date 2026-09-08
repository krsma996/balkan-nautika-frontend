import { faAnchor, faCompass, faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOMEPAGE_PREMIUM_PLANS } from "./PremiumAdsModel";

const icons = [faAnchor, faCompass, faShip];

export const PremiumAds = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div
        className="
          relative
  overflow-hidden
  rounded-[2rem]
  bg-gradient-to-br from-[#222831] via-[#222831] to-[#385170]
  px-6
  py-14
  sm:px-10
  sm:py-16
"
      >
        {/* Ambient glow — jedan smislen akcenat, ne dekoracija svuda */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-80
            w-80
            rounded-full
            bg-[#385170]/20
            blur-3xl
          "
        />
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-24
            h-72
            w-72
            rounded-full
            bg-[#385170]/10
            blur-3xl
          "
        />

        {/* Header */}
        <div
          className="
            relative
            z-10
            mb-12
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Premium oglasi
            </h2>
            <p className="mt-3 text-base leading-7 text-white/60">
              Tri nivoa isticanja — od prve pretrage do vrha liste. Što viši
              čin, to veća vidljivost tvog oglasa.
            </p>
          </div>

          <div className="flex items-center gap-3 text-white/50">
            <span className="h-px w-8 bg-white/20" />
            <span className="text-sm">Bez obaveze, otkaži bilo kada</span>
          </div>
        </div>

        {/* Tiers */}
        <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:items-center">
          {HOMEPAGE_PREMIUM_PLANS.map((plan, i) => {
            const isFeatured = i === 1;

            return (
              <div
                key={plan.title ?? i}
                className={
                  isFeatured
                    ? `
                        relative
                        z-10
                        flex
                        flex-col
                        rounded-2xl
                        border-2
                        border-[#385170]
                        bg-[#e7eaf6]
                        p-8
                        shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]
                        transition-transform
                        duration-300
                        hover:-translate-y-1
                        lg:scale-105
                        lg:p-9
                      `
                    : `
                        flex
                        flex-col
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-white/[0.07]
                      `
                }
              >
                {/* Signal flag — samo preporučeni paket ga ima */}
                {isFeatured && (
                  <span
                    className="
                      absolute
                      -top-4
                      left-8
                      inline-flex
                      items-center
                      bg-[#385170]
                      py-1.5
                      pl-4
                      pr-6
                      text-xs
                      font-semibold
                      text-white
                      [clip-path:polygon(0_0,100%_0,82%_50%,100%_100%,0_100%)]
                    "
                  >
                    Najbolji izbor
                  </span>
                )}

                {/* Rank stripes — oznaka nivoa, ne dekoracija */}
                <div className="mb-5 flex items-center gap-1.5">
                  {Array.from({ length: i + 1 }).map((_, s) => (
                    <span
                      key={s}
                      className={`h-1 w-6 rounded-full ${
                        isFeatured ? "bg-[#385170]" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>

                {/* Icon */}
                <div
                  className={
                    isFeatured
                      ? "mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#385170] text-white shadow-md"
                      : "mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#8ea3bb]"
                  }
                >
                  <FontAwesomeIcon icon={icons[i % icons.length]} size="lg" />
                </div>

                {/* Title */}
                <h3
                  className={
                    isFeatured
                      ? "text-lg font-semibold tracking-tight text-[#222831]"
                      : "text-lg font-semibold tracking-tight text-white"
                  }
                >
                  {plan.title}
                </h3>

                {/* Price */}
                <p
                  className={
                    isFeatured
                      ? "mt-3 text-4xl font-bold tracking-tight text-[#222831]"
                      : "mt-3 text-3xl font-bold tracking-tight text-white"
                  }
                >
                  {plan.price}
                </p>

                {/* Description */}
                <p
                  className={
                    isFeatured
                      ? "mt-4 flex-1 text-sm leading-relaxed text-gray-600"
                      : "mt-4 flex-1 text-sm leading-relaxed text-white/55"
                  }
                >
                  {plan.desc}
                </p>

                {/* Button */}
                <button
                  type="button"
                  className={
                    isFeatured
                      ? `
                          mt-8
                          w-full
                          rounded-xl
                          bg-[#222831]
                          py-3
                          font-medium
                          text-white
                          transition
                          duration-300
                          hover:bg-[#385170]
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-[#385170]
                        `
                      : `
                          mt-8
                          w-full
                          rounded-xl
                          border
                          border-white/20
                          py-3
                          font-medium
                          text-white
                          transition
                          duration-300
                          hover:bg-white/10
                          focus-visible:outline
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-white/40
                        `
                  }
                >
                  Izaberi paket
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};