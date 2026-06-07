import { useState } from "react";
import img1 from "../../../../img/biznisProdavci/1.jpg";
import img2 from "../../../../img/biznisProdavci/2.jpg";
import img3 from "../../../../img/biznisProdavci/3.jpg";
import img4 from "../../../../img/biznisProdavci/4.jpg";
import img5 from "../../../../img/biznisProdavci/5.jpg";
import img6 from "../../../../img/biznisProdavci/6.jpg";

const businesses = [
  { img: img1, name: "OZI - VOZI DOO", ads: 14 },
  { img: img2, name: "S LINE TEAM d.o.o.", ads: 12 },
  { img: img3, name: "ALPROS AUTO B...", ads: 48 },
  { img: img4, name: "Porsche Inter Au...", ads: 207 },
  { img: img5, name: "AVIO AUTO SALON", ads: 32 },
  { img: img6, name: "Glacier d.o.o.", ads: 1 },
];

export const NauticalBusinessDirectoryHub = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? businesses.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === businesses.length - 1 ? 0 : i + 1));

  return (
    <div className="py-10 w-full flex flex-col items-center">
      {/* TITLE */}
      <h1 className="text-xl font-semibold mb-6 text-center">
        Biznis prodavci – pravna lica
      </h1>

      {/* WRAPPER */}
      <div className="relative w-full max-w-7xl bg-white rounded-xl shadow-lg p-6 overflow-hidden">
        {/* TRACK (THIS IS REAL CAROUSEL LOGIC) */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 220}px)`,
          }}
        >
          {businesses.map((b, i) => (
            <div
              key={i}
              className="min-w-[200px] mx-2 bg-white rounded-lg shadow p-3 text-center transition"
            >
              <img
                src={b.img}
                alt={b.name}
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm font-medium">{b.name}</p>
              <p className="text-xs text-gray-500">{b.ads} oglasa</p>
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 
          w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 
          w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
};