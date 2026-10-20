import { BoatCondition } from "./search-boat-categories/BoatCondition";
import { BoatFeaturesCheckBox } from "./search-boat-categories/BoatFeaturesCheckBox";
import { BoatType } from "./search-boat-categories/BoatType";
import { BoatMaterialType } from "./search-boat-categories/BoatMaterialType";
import { BoatModels } from "./search-boat-categories/BoatModels";
import { BoatPrice } from "./search-boat-categories/BoatPrice";
import { BoatRegion } from "./search-boat-categories/BoatRegion";
import { BoatSearchButton } from "./search-boat-categories/BoatSearchButton";
import { BoatFuel } from "./search-boat-categories/BoatFuel";
import { BoatYear } from "./search-boat-categories/BoatYear";
import { BoatBeam } from "./search-boat-categories/BoatBeam";

export const SearBoatForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const filters = Object.fromEntries(formData.entries());

    console.log("Boat search filters:", filters);
  };

  return (
    <section
      aria-labelledby="boat-search-title"
      className="
        relative
        isolate
        overflow-hidden
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-8
          -z-10
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[#385170]/10
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#6b88a8]/10
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2
            id="boat-search-title"
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#222831]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Pronađite plovilo
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-[#385170]
                to-[#6b88a8]
                bg-clip-text
                text-transparent
              "
            >
              po vašoj meri
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-[#385170]/80
              sm:text-lg
            "
          >
            Podesite kriterijume pretrage i brzo pronađite plovila koja
            odgovaraju vašem budžetu, lokaciji i načinu plovidbe.
          </p>
        </div>

        {/* Form card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#385170]/15
            bg-[#e7eaf6]/80
            shadow-[0_24px_70px_rgba(34,40,49,0.14)]
            backdrop-blur-2xl
          "
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="
              h-1
              w-full
              bg-gradient-to-r
              from-[#222831]
              via-[#385170]
              to-[#6b88a8]
            "
          />

          <form
            className="form-typography"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="p-5 sm:p-8 lg:p-10">
              {/* Primary filters */}
              <fieldset>
                <legend className="sr-only">
                  Osnovni kriterijumi pretrage
                </legend>

                <div className="mb-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#385170]
                      text-xs
                      font-bold
                      text-[#e7eaf6]
                    "
                  >
                    1
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-[#222831]">
                      Osnovni kriterijumi
                    </h3>

                    <p className="text-sm text-[#385170]/70">
                      Izaberite vrstu, model, cenu i pogonsko gorivo.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-x-6
                    gap-y-5
                    md:grid-cols-2
                    xl:grid-cols-4
                  "
                >
                  <BoatType />
                  <BoatModels />
                  <BoatPrice />
                  <BoatFuel />
                </div>
              </fieldset>

              <div
                aria-hidden="true"
                className="my-9 h-px bg-[#385170]/15"
              />

              {/* Additional filters */}
              <fieldset>
                <legend className="sr-only">
                  Dodatni kriterijumi pretrage
                </legend>

                <div className="mb-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#385170]/25
                      bg-[#385170]/10
                      text-xs
                      font-bold
                      text-[#385170]
                    "
                  >
                    2
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-[#222831]">
                      Dodatni kriterijumi
                    </h3>

                    <p className="text-sm text-[#385170]/70">
                      Precizirajte godište, lokaciju, stanje i karakteristike.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-x-6
                    gap-y-5
                    md:grid-cols-2
                    xl:grid-cols-4
                  "
                >
                  <BoatYear />
                  <BoatRegion />
                  <BoatCondition />
                  <BoatMaterialType />
                  <BoatBeam />
                </div>
              </fieldset>

              <BoatFeaturesCheckBox />
            </div>

            <BoatSearchButton />
          </form>
        </div>

        {/* Footer hint */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-sm
            text-[#385170]/70
          "
        >
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#385170]/25"
          />

          Pretražite oglase plovila prema kriterijumima koji su vam važni

          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#385170]/25"
          />
        </div>
      </div>
    </section>
  );
};