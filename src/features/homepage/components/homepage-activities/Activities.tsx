import cruiseImg from "../../../../img/Activities/cruiseNight.jpg";
import dayCruise from "../../../../img/Activities/dayCruise.jpg";
import waterSports from "../../../../img/Activities/waterSports.jpg";
import saltWater from "../../../../img/Activities/saltWaterFishing.jpg";
import freshWater from "../../../../img/Activities/freshWaterFishing.jpg";
import sailing from "../../../../img/Activities/sailing.jpg";
import pwc from "../../../../img/Activities/pwc.jpg";
import kayak from "../../../../img/Activities/kayak.jpg";
import ronjenje from "../../../../img/Activities/ronjenje.jpg";



export const Activities = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center bg-[#f5f7f8] mt-10 mb-10 w-full pb-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-center pt-5">
            Istražite plovidbu po aktivnostima
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Image Card 1 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={cruiseImg}
                  alt="Day Cruise"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Noćno krstarenje</h3>
              </figcaption>
            </figure>

            {/* Image Card 2 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={dayCruise}
                  alt="Day Cruise"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Dnevno krstarenje</h3>
              </figcaption>
            </figure>

            {/* Image Card 3 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={waterSports}
                  alt="Vodeni-Sportovi"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Vodeni sportovi</h3>
              </figcaption>
            </figure>

            {/* Image Card 4 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={saltWater}
                  alt="Pecanje-Po-Slanoj-Vodi"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Pecanje na slanoj vodi</h3>
              </figcaption>
            </figure>

            {/* Image Card 5 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={freshWater}
                  alt="Pecanje-Po-SlatkojVodi"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">
                  Pecanje na slatkoj vodi
                </h3>
              </figcaption>
            </figure>

            {/* Image Card 6 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={sailing}
                  alt="Slika aktivnosti 3"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Jedrenje</h3>
              </figcaption>
            </figure>

            {/* Image Card 7 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={pwc}
                  alt="pwc-slika"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Licna plovila na vodi</h3>
              </figcaption>
            </figure>
            {/* Image Card 8 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={kayak}
                  alt="pwc-slika"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Kayakarenje</h3>
              </figcaption>
            </figure>
            {/* Image Card 9 */}
            <figure className="relative overflow-hidden group">
              <a href="#">
                <img
                  className="rounded-lg w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  src={ronjenje}
                  alt="pwc-slika"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <h3 className="text-white font-bold">Ronjenje</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
