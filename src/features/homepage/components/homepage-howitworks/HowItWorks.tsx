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
    <section className="relative max-w-7xl mx-auto px-4 py-28 overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#385170]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-[#385170]/10 rounded-full blur-[140px]" />

      {/* Header */}
      <div className="relative text-center max-w-3xl mx-auto mb-20">
        <h2
          className="
            mt-6
            text-5xl
            md:text-6xl
            font-bold
            text-[#222831]
            tracking-tight
          "
        >
          Kako funkcioniše ?
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          Sve što vam je potrebno za kupovinu ili prodaju plovila,
          opreme i nautičkih usluga na jednom mestu.
        </p>
      </div>

      {/* Cards */}
      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Connection Line */}
        <div
          className="
            hidden
            md:block
            absolute
            top-12
            left-[16%]
            right-[16%]
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#385170]/30
            to-transparent
          "
        />

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                p-[1px]
                bg-gradient-to-br
                from-white/80
                via-white/40
                to-[#385170]/20
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-[1.02]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-[radial-gradient(circle_at_top_left,rgba(56,81,112,0.25),transparent_55%)]
                "
              />

              {/* Reflection */}
              <div
                className="
                  absolute
                  -top-10
                  -left-24
                  w-32
                  h-[200%]
                  rotate-12
                  bg-white/20
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                "
              />

              {/* Inner Card */}
              <div
                className="
                  relative
                  h-full
                  rounded-[31px]
                  bg-white/60
                  backdrop-blur-2xl
                  border
                  border-white/50
                  p-8
                  shadow-[0_8px_32px_rgba(31,38,135,0.10)]
                "
              >
                {/* Huge Number */}
                <div
                  className="
                    absolute
                    top-4
                    right-6
                    text-7xl
                    font-black
                    text-[#385170]/10
                    select-none
                  "
                >
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    bg-gradient-to-br
                    from-[#222831]
                    via-[#2e3640]
                    to-[#385170]
                    shadow-xl
                  "
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/10" />

                  <Icon
                    size={30}
                    className="text-white relative z-10"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#222831] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Hover Line */}
                <div
                  className="
                    mt-8
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#385170]
                    to-transparent
                    group-hover:w-full
                    transition-all
                    duration-700
                  "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};