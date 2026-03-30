
import { HOMEPAGE_PREMIUM_PLANS } from "./PremiumAdsModel";

export const PremiumAds = () => {
    return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-12">
        Premium oglasi
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {HOMEPAGE_PREMIUM_PLANS.map((plan, i) => (
          <div key={i} className="bg-white border border-white rounded-xl p-6 shadow-sm hover:shadow-lg transition cursor-pointer text-center">
            <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
            <p className="text-gray-800 text-xl font-semibold mb-2">{plan.price}</p>
            <p className="text-gray-600 mb-4">{plan.desc}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Saznaj više
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};