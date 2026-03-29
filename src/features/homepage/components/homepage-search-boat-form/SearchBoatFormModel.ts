
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export const NAUTICAL_BRANDS: SelectGroup[] = [
  {
    label: "Skuteri na vodi (PWC)",
    options: [
      { value: "Sea-doo", label: "Sea-Doo" },
      { value: "Yamaha-waverunner", label: "Yamaha WaveRunner" },
      { value: "Kawasaki", label: "Kawasaki" },
      { value: "Honda-aquatrax", label: "Honda AquaTrax" },
    ],
  },

  {
    label: "Motorni čamci i gliseri",
    options: [
      { value: "Bayliner", label: "Bayliner" },
      { value: "Sea-ray", label: "Sea Ray" },
      { value: "Chaparral", label: "Chaparral" },
      { value: "Cobalt", label: "Cobalt" },
      { value: "Monterey", label: "Monterey" },
      { value: "Regal", label: "Regal" },
      { value: "Formula", label: "Formula Boats" },
      { value: "Boston-whaler", label: "Boston Whaler" },
      { value: "Grady-white", label: "Grady-White" },
      { value: "Scout", label: "Scout Boats" },
    ],
  },

  {
    label: "RIB / Gumenjaci",
    options: [
      { value: "Zodiac", label: "Zodiac" },
      { value: "BRIG", label: "BRIG" },
      { value: "Highfield", label: "Highfield" },
      { value: "Capelli", label: "Capelli Tempest" },
      { value: "AB-inflatables", label: "AB Inflatables" },
      { value: "AVON", label: "AVON" },
      { value: "Williams", label: "Williams Jet Tenders" },
    ],
  },

  {
    label: "Jedrilice",
    options: [
      { value: "Beneteau", label: "Beneteau" },
      { value: "Jeanneau", label: "Jeanneau" },
      { value: "Bavaria", label: "Bavaria Yachts" },
      { value: "Hanse", label: "Hanse Yachts" },
      { value: "Dufour", label: "Dufour" },
      { value: "Hallberg-rassy", label: "Hallberg-Rassy" },
      { value: "X-yachts", label: "X-Yachts" },
    ],
  },

  {
    label: "Katamarani",
    options: [
      { value: "Lagoon", label: "Lagoon" },
      { value: "Fountaine-pajot", label: "Fountaine Pajot" },
      { value: "Leopard", label: "Leopard Catamarans" },
      { value: "Sunreef", label: "Sunreef Yachts" },
      { value: "Outremer", label: "Outremer" },
    ],
  },

  {
    label: "Luksuzne jahte",
    options: [
      { value: "Azimut", label: "Azimut" },
      { value: "Sunseeker", label: "Sunseeker" },
      { value: "Princess", label: "Princess Yachts" },
      { value: "Ferretti", label: "Ferretti Yachts" },
      { value: "Sanlorenzo", label: "Sanlorenzo" },
      { value: "Benetti", label: "Benetti" },
      { value: "Riva", label: "Riva" },
    ],
  },

  {
    label: "Super i mega jahte",
    options: [
      { value: "Lürssen", label: "Lürssen" },
      { value: "Feadship", label: "Feadship" },
      { value: "Oceanco", label: "Oceanco" },
      { value: "Amels", label: "Amels" },
      { value: "Heesen", label: "Heesen Yachts" },
    ],
  },

  {
    label: "Električna i inovativna plovila",
    options: [
      { value: "Candela", label: "Candela" },
      { value: "X-shore", label: "X Shore" },
      { value: "Rand", label: "Rand Boats" },
      { value: "Silent-yachts", label: "Silent Yachts" },
      { value: "Frauscher", label: "Frauscher" },
    ],
  },
];

