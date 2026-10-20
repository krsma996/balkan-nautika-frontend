import { RotateCcw, Search } from "lucide-react";

export const BoatSearchButton = () => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-5
        border-t
        border-[#385170]/15
        bg-[#385170]/[0.06]
        px-5
        py-6
        sm:flex-row
        sm:px-8
        lg:px-10
      "
    >
      <div className="text-center sm:text-left">
        <p className="text-sm font-bold text-[#222831]">
          Spremni za pretragu?
        </p>

        <p className="mt-1 text-sm text-[#385170]/70">
          Filtere možete promeniti ili resetovati u bilo kom trenutku.
        </p>
      </div>

      <div
        className="
          flex
          w-full
          flex-col-reverse
          items-center
          gap-3
          sm:w-auto
          sm:flex-row
        "
      >
        <button
          type="reset"
          className="
            inline-flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-[#385170]/20
            px-5
            text-sm
            font-semibold
            text-[#385170]
            transition-all
            duration-200
            hover:border-[#385170]/35
            hover:bg-[#385170]/10
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#385170]/40
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#e7eaf6]
            sm:w-auto
          "
        >
          <RotateCcw
            aria-hidden="true"
            size={17}
            strokeWidth={2}
          />

          Resetuj filtere
        </button>

        <button
          type="submit"
          className="
            group
            inline-flex
            h-12
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-[#222831]
            via-[#385170]
            to-[#222831]
            bg-[length:200%_100%]
            px-7
            text-sm
            font-bold
            text-[#e7eaf6]
            shadow-[0_12px_30px_rgba(34,40,49,0.28)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-right
            hover:shadow-[0_18px_38px_rgba(34,40,49,0.36)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#385170]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#e7eaf6]
            active:translate-y-0
            sm:w-auto
          "
        >
          <Search
            aria-hidden="true"
            size={18}
            strokeWidth={2.5}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          Pretraži plovila
        </button>
      </div>
    </div>
  );
};
