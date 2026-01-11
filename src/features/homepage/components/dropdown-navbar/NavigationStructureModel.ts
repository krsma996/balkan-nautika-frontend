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
      { label: "Najnoviji oglasi", href: "/pretraga/najnoviji" },
      { label: "Nova plovila", href: "/pretraga/nova" },
      { label: "Prvi vlasnik", href: "/pretraga/duzina" },
      { label: "Kupljen nov u Srbiji", href: "/pretraga/nov" },
      { label: "Brod na kredit", href: "/pretraga/duzina" },
      { label: "Brod sa garancijom", href: "/pretraga/duzina" },
      { label: "Pretraga biznis prodavaca", href: "/pretraga/duzina" },
      { label: "Pretraga usluga brodova", href: "/pretraga/duzina" },
      { label: "Brodovi za zamenu", href: "/pretraga/duzina" },
      { label: "Najtrazeniji modeli brodova", href: "/pretraga/duzina" },
      { label: "Preporuke prodavaca", href: "/pretraga/duzina" },
    ],
  },
{
  label: "ISTRAŽI",
  items: [
    { label: "Nautičke destinacije", href: "/istrazi/destinacije" },
    { label: "Marine i luke", href: "/istrazi/marine" },
    { label: "Rute i sidrišta", href: "/istrazi/rute-sidrista" }
  ]
},
  {
    label: "PONUDA PLOVILA",
    items: [
      { label: "Brod", href: "/plovila/Brod" },
      { label: "Camac", href: "/plovila/Camac" },
      { label: "Gliser", href: "/plovila/Gliser" },
      { label: "Jahta", href: "/plovila/Jahta" },
      { label: "Jedrilica", href: "/plovila/Jedrilica" },
      { label: "Kajak", href: "/plovila/Kajak" },
      { label: "Kanu", href: "/plovila/Kanu" },
      { label: "Katamaran", href: "/plovila/Katamaran" },
      { label: "Motor", href: "/plovila/Motor" },
      { label: "Ostalo", href: "/plovila/Ostalo" },
      { label: "Prikolica", href: "/plovila/Prikolica" },
      { label: "Skuter za vodu", href: "/plovila/Skuter za vodu" },
      { label: "Sojenica", href: "/plovila/Sojenica" },
      { label: "Splav", href: "/plovila/Splav" },
    ],
  },

  {
    label: "DELOVI I OPREMA",
    items: [
      { label: "Motori i pogon", href: "/delovi/motori-i-pogon" },
      {
        label: "Elektronika i navigacija",
        href: "/delovi/elektronika-navigacija",
      },
      { label: "Palubna oprema", href: "/delovi/palubna-oprema" },
      { label: "Sidrenje i vez", href: "/delovi/sidrenje-i-vez" },
      { label: "Bezbednosna oprema", href: "/delovi/bezbednost" },
      { label: "Elektrika i instalacije", href: "/delovi/elektrika" },
      { label: "Održavanje i hemija", href: "/delovi/odrzavanje" },
      { label: "Enterijer i komfor", href: "/delovi/enterijer" },
      { label: "Prikolice i transport", href: "/delovi/prikolice-transport" },
    ],
  },
  {
    label: "PRODAJ PLOVILO",
    items: [
      { label: "Postavi oglas", href: "/plovila/postavi-oglas" },
      {
        label: "Prodaj sopstveno plovilo",
        href: "/plovila/prodaj-sopstveno-plovilo",
      },
      {
        label: "Oglasi celokupnu ponudu",
        href: "/plovila/oglasi-celokupnu-ponudu",
      },
      { label: "Ubrzaj prodaju", href: "/plovila/ubrzaj-prodaju" },
    ],
  },
  {
    label: "SAVETI I VESTI",
    items: [
      { label: "Saveti za kupovinu plovila", href: "/saveti/kupovina-plovila" },
      { label: "Održavanje i sigurnost", href: "/saveti/odrzavanje-sigurnost" },
      { label: "Nautičke vesti", href: "/vesti/nautika" },
    ],
  },
  {
    label: "PONUDA ZA OGLAŠAVANJE",
    items: [
      { label: "Objavi oglas", href: "/oglasavanje/objavi-oglas" },
      { label: "Paketi oglašavanja", href: "/oglasavanje/paketi" },
      { label: "Premium isticanje", href: "/oglasavanje/premium" },
      { label: "Cenovnik i uslovi", href: "/oglasavanje/cenovnik" },
    ],
  },
  {
    label: "RENTAL / IZNAJMLJIVANJE PLOVILA",
    items: [
      { label: "Iznajmi plovilo", href: "/rental/pretraga" },
      { label: "Charter ponuda", href: "/rental/charter" },
      { label: "Ponudi plovilo za najam", href: "/rental/oglasavanje" },
    ],
  },
];
