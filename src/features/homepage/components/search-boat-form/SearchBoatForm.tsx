import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import {
  Anchor,
  Compass,
  ShieldCheck,
  SlidersHorizontal,
  Waves,
} from "lucide-react";

import { BoatBeam } from "./search-boat-categories/BoatBeam";
import { BoatCondition } from "./search-boat-categories/BoatCondition";
import { BoatFeaturesCheckBox } from "./search-boat-categories/BoatFeaturesCheckBox";
import { BoatFuel } from "./search-boat-categories/BoatFuel";
import { BoatMaterialType } from "./search-boat-categories/BoatMaterialType";
import { BoatModels } from "./search-boat-categories/BoatModels";
import { BoatPrice } from "./search-boat-categories/BoatPrice";
import { BoatRegion } from "./search-boat-categories/BoatRegion";
import { BoatSearchButton } from "./search-boat-categories/BoatSearchButton";
import { BoatType } from "./search-boat-categories/BoatType";
import { BoatYear } from "./search-boat-categories/BoatYear";

/* ------------------------------------------------------------------ */
/* Helper: jedan red filtera (naslov levo, polja desno)                */
/* ------------------------------------------------------------------ */

type FilterGroupProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

const FilterGroup = ({ id, title, description, children }: FilterGroupProps) => (
  <div
    role="group"
    aria-labelledby={id}
    className="
      grid gap-x-10 gap-y-6
      px-5 py-8
      sm:px-8
      xl:grid-cols-[230px_minmax(0,1fr)]
    "
  >
    <div className="xl:pt-1">
      <h3
        id={id}
        className="text-lg font-bold tracking-tight text-[#222831]"
      >
        {title}
      </h3>
      <p className="mt-1.5 max-w-xs text-sm leading-6 text-[#385170]">
        {description}
      </p>
    </div>

    <div>{children}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Komponenta                                                          */
/* ------------------------------------------------------------------ */

const highlights = [
  { icon: ShieldCheck, label: "Jednostavna pretraga" },
  { icon: Compass, label: "Plovila širom Srbije" },
  { icon: Waves, label: "Sve na jednom mestu" },
];

export const SearchBoatForm = () => {
  const [boatType, setBoatType] = useState("");
  const [boatModel, setBoatModel] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleTypeChange = (type: string) => {
    setBoatType(type);
    setBoatModel(""); // resetuj model kad se promeni tip
  };

  return (
    <section
      aria-labelledby="boat-search-title"
      className="px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* ---------------------------------------------------------- */}
        {/* HEADER                                                     */}
        {/* ---------------------------------------------------------- */}
        <header className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-[#385170]">
              <Anchor size={16} strokeWidth={1.9} aria-hidden="true" />
              Nautika oglasi
            </p>

            <h2
              id="boat-search-title"
              className="
                mt-4 max-w-3xl
                text-4xl font-bold leading-[1.05] tracking-tight
                text-[#222831]
                sm:text-5xl lg:text-6xl
              "
            >
              Pronađite plovilo koje vas vodi dalje.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#222831]/75 lg:text-lg lg:leading-8">
              Istražite ponudu plovila na jednom mestu. Od manjih čamaca do
              luksuznih jahti, pronađite ono što odgovara vašim potrebama.
            </p>
          </div>

          <ul
            className="
              flex flex-wrap gap-x-8 gap-y-4
              lg:flex-col lg:gap-y-4
              lg:border-l lg:border-[#385170]/20 lg:pl-8
            "
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-lg border border-[#385170]/15 bg-white
                    text-[#385170]
                  "
                >
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-[#222831]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </header>

        {/* ---------------------------------------------------------- */}
        {/* SEARCH PANEL                                               */}
        {/* ---------------------------------------------------------- */}
        <div
          className="
            overflow-hidden rounded-xl
            border border-[#385170]/15 bg-white
            shadow-[0_1px_2px_rgba(34,40,49,0.05),0_12px_32px_-12px_rgba(34,40,49,0.18)]
            animate-[fadeUp_.7s_ease-out_both]
          "
        >
          {/* Panel header */}
          <div className="flex items-center justify-between gap-4 bg-[#222831] px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-lg bg-white/10 text-white
                "
              >
                <SlidersHorizontal
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                Pretraga plovila
              </h3>
            </div>

            <p className="hidden text-sm text-white/70 sm:block">
              Popunite samo ono što vas zanima.
            </p>
          </div>

          <form
            className="form-typography"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="divide-y divide-[#385170]/10">
              {/* Osnovni kriterijumi */}
              <FilterGroup
                id="primary-filters-title"
                title="Osnovni kriterijumi"
                description="Definišite kakvo plovilo tražite."
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <BoatType value={boatType} onChange={handleTypeChange} />
                  <BoatModels
                    boatType={boatType}
                    value={boatModel}
                    onChange={setBoatModel}
                  />
                  <BoatPrice />
                  <BoatFuel />
                </div>
              </FilterGroup>

              {/* Dodatni kriterijumi */}
              <FilterGroup
                id="secondary-filters-title"
                title="Dodatni kriterijumi"
                description="Sužite izbor prema karakteristikama plovila."
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
                  <BoatYear />
                  <BoatRegion />
                  <BoatCondition />
                  <BoatMaterialType />
                  <BoatBeam />
                </div>
              </FilterGroup>

              {/* Oprema */}
              <FilterGroup
                id="features-filters-title"
                title="Oprema"
                description="Izaberite opremu koju plovilo mora da ima."
              >
                <BoatFeaturesCheckBox />
              </FilterGroup>
            </div>

            {/* Action bar */}
            <div
              className="
                border-t border-[#385170]/15
                bg-[#e7eaf6]/60
                px-5 py-5 sm:px-8 sm:py-6
              "
            >
              <BoatSearchButton />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
