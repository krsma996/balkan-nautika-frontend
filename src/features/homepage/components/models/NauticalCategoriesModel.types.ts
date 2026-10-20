import gliserImg from "../../../../img/homepage-categories-img/1gliser.jpg";
import jedriliceImg from "../../../../img/homepage-categories-img/2jedrilica.jpg";
import katamaraniImg from "../../../../img/homepage-categories-img/3katamaran.jpg";
import motorImg from "../../../../img/homepage-categories-img/4motorCamac.jpg";
import opremaImg from "../../../../img/homepage-categories-img/5Oprema.jpg";
import marineImg from "../../../../img/homepage-categories-img/6Marine.png";
import servisiImg from "../../../../img/homepage-categories-img/7Servisi.jpg";
import rentAboatImg from "../../../../img/homepage-categories-img/8RentAboat.jpg";

export interface NauticalCategory {
  title: string;
  img: string;
  description: string;
  href: string;
}

export const NAUTICAL_CATEGORIES_MODEL: NauticalCategory[] = [
  {
    title: "Gliseri",
    img: gliserImg,
    href: "/gliseri",
    description:
      "Brzi i pouzdani gliseri za sportsku vožnju, krstarenje i svakodnevnu upotrebu, od kompaktnih do porodičnih modela.",
  },
  {
    title: "Jedrilice",
    img: jedriliceImg,
    href: "/jedrilice",
    description:
      "Jedrilice za rekreativno i regatno jedrenje, nove i polovne, sa proverenom istorijom održavanja.",
  },
  {
    title: "Katamarani",
    img: katamaraniImg,
    href: "/katamarani",
    description:
      "Prostrani i stabilni katamarani za udobna višednevna putovanja, u jedriličarskoj i motornoj izvedbi.",
  },
  {
    title: "Motori",
    img: motorImg,
    href: "/motori",
    description:
      "Vanbrodski i prekobrodski motori vodećih proizvođača, uz savet pri izboru snage i pravog modela.",
  },
  {
    title: "Oprema",
    img: opremaImg,
    href: "/oprema",
    description:
      "Sigurnosna, navigaciona i palubna oprema, kao i dodaci za održavanje plovila, na jednom mestu.",
  },
  {
    title: "Marine",
    img: marineImg,
    href: "/marine",
    description:
      "Pregled marina i privezišta sa informacijama o uslugama, kapacitetima i lokaciji.",
  },
  {
    title: "Servisi",
    img: servisiImg,
    href: "/servisi",
    description:
      "Ovlašćeni i proveren servisi za održavanje, popravke i zimsko skladištenje vašeg plovila.",
  },
  {
    title: "Iznajmljivanje",
    img: rentAboatImg,
    href: "/iznajmljivanje",
    description:
      "Rent-a-boat ponuda za dnevne izlete i duža putovanja, sa skiperom ili bez njega.",
  },
];