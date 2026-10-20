import { faFacebookF,faInstagram,faLinkedinIn,faYoutube,faXTwitter} from "@fortawesome/free-brands-svg-icons";

export type FooterLink = {
  id: number;
  label: string;
  href: string;
};

export type FooterGroup = {
  id: number;
  label: string;
  items: FooterLink[];
};

export const FOOTER_QUICK_LINKS: FooterGroup[] = [
  {
    id: 1,
    label: "Brzi linkovi",
    items: [
      { id: 1, label: "Kontakt", href: "/kontakt" },
      { id: 2, label: "Uslovi koriscenja", href: "/uslovi-koriscenja" },
      { id: 3, label: "Privatnost", href: "/privatnost" },
      { id: 4, label: "Kolacici", href: "/kolacici" },
      { id: 5, label: "Medijski paket", href: "/medijski-paket" },
      { id: 6, label: "Ugovor za oglasivace", href: "/ugovor-za-oglasivace" },
      { id: 7, label: "Izbor oglasa", href: "/izbor-oglasa" },
      { id: 8, label: "Ne prodaj moje licne podatke", href: "/ne-prodaj-moje-licne-podatke" },
    ],
  },
];

export const FOOTER_QUICK_SEARCH: FooterGroup[] = [
  {
    id: 1,
    label: "Brza Pretraga",
    items: [
      { id: 1, label: "Srbija", href: "/pretraga/region/srbija" },
      { id: 2, label: "Hrvatska", href: "/pretraga/region/hrvatska" },
      { id: 3, label: "Crna Gora", href: "/pretraga/region/crna-gora" },
      { id: 4, label: "Grcka", href: "/pretraga/region/grcka" },
      { id: 5, label: "Slovenija", href: "/pretraga/region/slovenija" },
      { id: 6, label: "Bosna i Hercegovina", href: "/pretraga/region/bosna-i-hercegovina" },
      { id: 7, label: "Rumunija", href: "/pretraga/region/rumunija" },
      { id: 8, label: "Albanija", href: "/pretraga/region/albanija" },
    ],
  },
];

export const SOCIAL_MEDIA_LINKS = [
  { id: 1, icon: faFacebookF, label: "Facebook" },
  { id: 2, icon: faInstagram, label: "Instagram" },
  { id: 3, icon: faYoutube, label: "YouTube" },
  { id: 4, icon: faXTwitter, label: "X" },
  { id: 5, icon: faLinkedinIn, label: "LinkedIn" },
];