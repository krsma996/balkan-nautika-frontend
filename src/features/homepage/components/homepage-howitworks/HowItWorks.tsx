import { Search, MessageCircle, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Pretraži oglase",
      desc: "Pronađi plovila, opremu ili usluge koristeći jednostavnu pretragu.",
      icon: Search,
    },
    {
      title: "Kontaktiraj direktno",
      desc: "Javi se prodavcu bez posrednika i dogovori detalje.",
      icon: MessageCircle,
    },
    {
      title: "Kupi ili prodaj",
      desc: "Zaključi dogovor brzo i bez komplikacija.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-[#222831]">
          Kako funkcioniše
        </h2>

        <p className="mt-3 text-gray-600">
          Kupovina i prodaja nautičke opreme u samo nekoliko koraka.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
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
            "
          >

            {/* Icon */}
            <div className="mx-auto mb-5 w-14 h-14 rounded-xl bg-[#222831] flex items-center justify-center">
              <step.icon size={26} color="white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#222831] mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-600">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};