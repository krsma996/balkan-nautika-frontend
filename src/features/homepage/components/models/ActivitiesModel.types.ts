import cruiseImg from "../../../../img/Activities/cruiseNight.jpg";
import dayCruise from "../../../../img/Activities/dayCruise.jpg";
import waterSports from "../../../../img/Activities/waterSports.jpg";
import saltWater from "../../../../img/Activities/saltWaterFishing.jpg";
import freshWater from "../../../../img/Activities/freshWaterFishing.jpg";
import sailing from "../../../../img/Activities/sailing.jpg";
import pwc from "../../../../img/Activities/pwc.jpg";
import kayak from "../../../../img/Activities/kayak.jpg";
import ronjenje from "../../../../img/Activities/ronjenje.jpg";

export interface Activity {
  id: string;
  title: string;
  img: string;
  path: string;
  tag: string;
  description: string;
}

export const ACTIVITIES_LINKS: Activity[] = [
  {
    id: "nocno-krstarenje",
    title: "Noćno krstarenje",
    img: cruiseImg,
    path: "/aktivnosti/nocno-krstarenje",
    tag: "Krstarenje",
    description:
      "Zalazak sunca, mirno more i svetla obale iz drugog ugla. Večernje ture za parove, društva i posebne prilike.",
  },
  {
    id: "dnevno-krstarenje",
    title: "Dnevno krstarenje",
    img: dayCruise,
    path: "/aktivnosti/dnevno-krstarenje",
    tag: "Krstarenje",
    description:
      "Kupanje u uvalama, ručak na palubi i opuštena plovidba duž obale u sopstvenom ritmu.",
  },
  {
    id: "pecanje-slana-voda",
    title: "Pecanje na slanoj vodi",
    img: saltWater,
    path: "/aktivnosti/pecanje-na-slanoj-vodi",
    tag: "Pecanje",
    description:
      "Izlasci na otvoreno more sa iskusnim vodičima i kompletnom opremom za trolling i spining.",
  },
  {
    id: "vodeni-sportovi",
    title: "Vodeni sportovi",
    img: waterSports,
    path: "/aktivnosti/vodeni-sportovi",
    tag: "Sport",
    description:
      "Skijanje na vodi, wakeboard i tubing uz sertifikovane instruktore i sigurnosnu opremu.",
  },
  {
    id: "pecanje-slatka-voda",
    title: "Pecanje na slatkoj vodi",
    img: freshWater,
    path: "/aktivnosti/pecanje-na-slatkoj-vodi",
    tag: "Pecanje",
    description:
      "Reke i jezera sa proverenim pecaroškim lokacijama, od sportskog pecanja do mirnog jutra na vodi.",
  },
  {
    id: "jedrenje",
    title: "Jedrenje",
    img: sailing,
    path: "/aktivnosti/jedrenje",
    tag: "Jedrenje",
    description:
      "Naučite osnove ili uživajte u plovidbi pod jedrima, uz skipera ili samostalno.",
  },
  {
    id: "licna-plovila",
    title: "Lična plovila",
    img: pwc,
    path: "/aktivnosti/licna-plovila",
    tag: "Adrenalin",
    description:
      "Jet ski i skuteri za brzu vožnju po vodi, uz kratku obuku i pravila bezbednosti pre polaska.",
  },
  {
    id: "kajakarenje",
    title: "Kajakarenje",
    img: kayak,
    path: "/aktivnosti/kajakarenje",
    tag: "Priroda",
    description:
      "Tiho veslanje kroz skrivene uvale i uz obalu, pogodno za početnike i porodice.",
  },
  {
    id: "ronjenje",
    title: "Ronjenje",
    img: ronjenje,
    path: "/aktivnosti/ronjenje",
    tag: "Podvodni svet",
    description:
      "Ronjenje sa bocom i ronjenje na dah uz sertifikovane centre, za početnike i iskusne ronioce.",
  },
];