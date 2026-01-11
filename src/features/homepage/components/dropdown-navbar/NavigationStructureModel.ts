// NavigationStructureModel.ts

export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

export const NAVIGATION_STRUCTURE = [
  {
    label: "BRZA PRETRAGA",
    items: [
      { label: "Po tipu", href: "/pretraga/tip" },
      { label: "Po ceni", href: "/pretraga/cena" },
      { label: "Po dužini", href: "/pretraga/duzina" },
    ],
  },
  {
    label: "ISTRAŽI",
    items: [
      { label: "Destinacije", href: "/istrazi/destinacije" },
      { label: "Marine", href: "/istrazi/marine" },
    ],
  },
  {
    label: "PONUDA PLOVILA",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },

  {
    label: "DELOVI I OPREMA",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },

  {
    label: "PRODAJ PLOVILO",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },
  {
    label: "SAVETI I VESTI",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },
  {
    label: "PONUDA ZA OGLAŠAVANJE",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },
  {
    label: "RENTAL / IZNAJMLJIVANJE PLOVILA",
    items: [
      { label: "Nova plovila", href: "/plovila/nova" },
      { label: "Polovna plovila", href: "/plovila/polovna" },
    ],
  },
];
