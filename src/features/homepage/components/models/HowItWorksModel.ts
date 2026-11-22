import {Search,MessageCircle,Handshake} from "lucide-react";

export const STEPS = [
  {
    number: "01",
    label: "ISTRAŽITE PONUDU",
    title: "Pronađite ono što tražite.",
    description:
      "Pretražite oglase za plovila, nautičku opremu i usluge. Koristite filtere i brzo suzite izbor prema svojim potrebama.",
    icon: Search,
    highlights: ["Detaljna pretraga", "Različite kategorije"],
  },
  {
    number: "02",
    label: "POVEŽITE SE",
    title: "Kontaktirajte prodavca direktno.",
    description:
      "Pronađite informacije o prodavcu, postavite pitanja i dogovorite sve detalje kupovine ili saradnje bez nepotrebnih posrednika.",
    icon: MessageCircle,
    highlights: ["Direktna komunikacija", "Kontakt sa prodavcem"],
  },
  {
    number: "03",
    label: "ZAVRŠITE DOGOVOR",
    title: "Napravite sledeći korak.",
    description:
      "Dogovorite uslove, proverite detalje i pronađite pravo rešenje za svoje nautičke potrebe.",
    icon: Handshake,
    highlights: ["Dogovor sa prodavcem", "Jednostavan proces"],
  },
];