import { faFire, faStar, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOMEPAGE_PREMIUM_PLANS } from "./PremiumAdsModel";

const icons = [faFire, faStar, faCrown];

const gradients = [
  "from-orange-500 to-red-500",
  "from-sky-500 to-blue-600",
  "from-yellow-400 to-amber-500",
];

export const PremiumAds = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-[#222831]">
          Premium oglasi
        </h2>

        <p className="mt-3 text-gray-600">
          Istakni svoj oglas i privuci više potencijalnih kupaca.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {HOMEPAGE_PREMIUM_PLANS.map((plan, i) => (
          <div
            key={i}
            className="
              relative
              bg-white
              rounded-2xl
              p-8
              text-center
              shadow-sm
              border border-gray-100
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 text-xs font-medium bg-[#f5f7f8] px-3 py-1 rounded-full text-gray-600">
              Premium
            </span>

            {/* Icon */}
            <div
              className={`
                mx-auto mb-5
                w-14 h-14
                rounded-xl
                bg-gradient-to-r
                ${gradients[i]}
                flex items-center
                justify-center
              `}
            >
              <FontAwesomeIcon
                icon={icons[i]}
                color="white"
                size="lg"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#222831] mb-2">
              {plan.title}
            </h3>

            {/* Price */}
            <p className="text-3xl font-bold text-[#222831] mb-3">
              {plan.price}
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-600 mb-5">
              {plan.desc}
            </p>

            {/* Button */}
            <button
              className="
                bg-[#222831]
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-[#393e46]
                transition
                font-medium
              "
            >
              Saznaj više
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};