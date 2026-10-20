import { BadgeEuro } from "lucide-react";

export const BoatFeaturesCheckBox = () => {
  return (
    <div
      className="
        mt-8
        rounded-2xl
        border
        border-[#385170]/15
        bg-[#385170]/[0.05]
        p-4
        transition-colors
        duration-200
        hover:bg-[#385170]/[0.08]
        sm:p-5
      "
    >
      <label
        htmlFor="financing-available"
        className="
          flex
          cursor-pointer
          items-start
          gap-4
        "
      >
        <input
          id="financing-available"
          name="financingAvailable"
          type="checkbox"
          value="true"
          className="
            mt-1
            h-5
            w-5
            shrink-0
            cursor-pointer
            rounded-md
            border-[#385170]/30
            bg-[#e7eaf6]
            text-[#385170]
            accent-[#385170]
            focus:ring-2
            focus:ring-[#385170]/30
            focus:ring-offset-2
            focus:ring-offset-[#e7eaf6]
          "
        />

        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#385170]/10
            text-[#385170]
          "
        >
          <BadgeEuro
            aria-hidden="true"
            size={20}
            strokeWidth={2}
          />
        </span>

        <span>
          <span className="block text-sm font-bold text-[#222831]">
            Mogućnost kupovine na kredit
          </span>

          <span
            className="
              mt-1
              block
              text-sm
              leading-5
              text-[#385170]/70
            "
          >
            Prikažite samo plovila za koja je dostupna opcija finansiranja.
          </span>
        </span>
      </label>
    </div>
  );
};
