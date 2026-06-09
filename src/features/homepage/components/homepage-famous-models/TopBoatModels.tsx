import img1 from "../../../../img/popular-boats-component/1.svg";
import img2 from "../../../../img/popular-boats-component/2.png";
import img3 from "../../../../img/popular-boats-component/3.png";
import img4 from "../../../../img/popular-boats-component/4.png";
import img5 from "../../../../img/popular-boats-component/5.png";
import img6 from "../../../../img/popular-boats-component/6.png";
import img7 from "../../../../img/popular-boats-component/7.png";
import img8 from "../../../../img/popular-boats-component/8.png";
import img9 from "../../../../img/popular-boats-component/9.png";
import img10 from "../../../../img/popular-boats-component/10.png";
import img11 from "../../../../img/popular-boats-component/11.png";
import img12 from "../../../../img/popular-boats-component/12.png";
import img13 from "../../../../img/popular-boats-component/13.svg";
import img14 from "../../../../img/popular-boats-component/14.png";
import img15 from "../../../../img/popular-boats-component/15.svg";

const TOP_BOAT_MODELS = [
  {img: img1, name: "Bayliner", country: "Sjedinjene Američke Države"      },
  {img: img2, name: "Jeanneau", country: "Francuska"                       },
  {img: img3, name: "Horizon Yachts",country: "Tajvan"                     },
  {img: img4, name: "Palm Beach Motor Yachts",country: "Australija"        },
  {img: img5, name: "Hanover Yachts",country: "Brazil"                     },
  {img: img6, name: "East Marine Boats",country: "Turska"                  },
  {img: img7, name: "Deo Juvante Yachts", country: "Srbija"                },
  {img: img8, name: "Ocean Yachts",country: "Sjedinjene Američke Države"   },
  {img: img9, name: "Passport Yachts",country: "Sjedinjene Američke Države"},
  {img: img10,name: "Cobrey Yachts",country: "Poljska"                     },
  {img: img11,name: "Extreme Boats",country: "Novi Zeland"                 },
  {img: img12,name: "Cutwater",country: "Sjedinjene Američke Države"       },
  {img: img13,name: "Bavaria Yachts",country: "Nemačka"                    },
  {img: img14,name: "Bavaria Yachts",country: "Francuska"                    },
  {img: img15,name: "Bavaria Yachts",country: "Francuska"                    },
];

export const TopBoatModels = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-[#222831] mb-12">
        Popularni proizvođači
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-12">
        {TOP_BOAT_MODELS.map((model, index) => (
          <a key={index} href="#" className="flex items-center justify-center">
            <img
              src={model.img}
              alt={model.name}
              className="h-20 object-contain hover:scale-110 transition-transform duration-300"/>
          </a>
        ))}
      </div>
    </div>
  );
};
