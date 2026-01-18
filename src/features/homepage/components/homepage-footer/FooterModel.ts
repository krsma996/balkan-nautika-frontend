export type FooterLink = {
    label: string;
    href: string;
};

export type FooterGroup = {
    label: string;
    items: FooterLink[];
};

export const FOOTER_QUICK_LINKS = [
  {
    label: "Brzi linkovi",
    items: [
      { label: "Kontakt", href: "/kontakt", },
      { label: "Uslovi koriscenja", href:"/uslovi-koriscenja" },
      { label: "Privatnost", href:"/privatnost" },
      { label: "Kolacici", href:"/kolacici" },
      { label: "Medijski paket", href:"/medijski-paket" },
      { label: "Ugovor za oglasivace", href:"/ugovor-za-oglasivace" },
      { label: "Izbor oglasa", href:"/izbor-oglasa" },
      { label: "Ne prodaj moje licne podatke", href:"/ne-prodaj-moje-licne-podatke" },
    ]
  }
];


export const FOOTER_QUICK_SEARCH = [
    {
        label: "Brza Pretraga",
        items : [
            { label: "Srbija", href: "/pretraga/region/srbija" },
            { label: "Hrvatska", href: "/pretraga/region/hrvatska" },
            { label: "Crna Gora", href: "/pretraga/region/crna-gora" },
            { label: "Grcka", href: "/pretraga/region/grcka" },
            { label: "Slovenija", href: "/pretraga/region/slovenija"},
            { label: "Bosna i Hercegovina", href: "/pretraga/region/bosna-i-hercegovina" },
            { label: "Rumunija", href: "/pretraga/region/rumunija" },
            { label: "Albanija", href: "/pretraga/region/albanija" },
        ]
    }
];