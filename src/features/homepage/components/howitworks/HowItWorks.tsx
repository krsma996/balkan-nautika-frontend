
import {
  Search,
  MessageCircle,
  Handshake,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Compass,
} from "lucide-react";

const STEPS = [
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

export const HowItWorks = () => {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#385170]/[0.07] blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-white/70 blur-[100px]" />
        <div className="absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#7897B7]/[0.08] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">

          {/* Heading */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#385170]/15 bg-white/70 text-[#385170] shadow-sm">
                <Compass size={16} strokeWidth={1.8} />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#385170]/75">
                NAUTIKA OGLASI · JEDNOSTAVAN PROCES
              </span>

              <span className="h-px w-10 bg-[#385170]/30" />
            </div>

            {/* Main title */}
            <h2
              id="how-it-works-title"
              className="font-[Roboto_Condensed] text-4xl font-bold leading-[1.08] tracking-tight text-[#222831] sm:text-5xl lg:text-[56px]"
            >
              Kako funkcioniše
              <span className="mt-1 block bg-gradient-to-r from-[#385170] to-[#7897B7] bg-clip-text text-transparent">
                Nautika Oglasi?
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-xl lg:pb-1">
            <p className="text-base leading-8 text-[#222831]/65 sm:text-lg">
              Sve što vam je potrebno za kupovinu, prodaju i pronalaženje
              nautičkih usluga. Tri jednostavna koraka vode vas od pretrage
              do direktnog kontakta sa prodavcem.
            </p>
          </div>

        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">

          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.5%] right-[16.5%] top-[43px] hidden h-px bg-gradient-to-r from-transparent via-[#385170]/25 to-transparent md:block"
          />

          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#385170]/10 bg-white/75 p-7 shadow-[0_8px_30px_rgba(34,40,49,0.045)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#385170]/25 hover:bg-white hover:shadow-[0_20px_50px_rgba(34,40,49,0.10)] sm:p-8"
              >
                {/* Card top */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#385170]/10 bg-[#e7eaf6] text-[#385170] transition-all duration-300 group-hover:border-[#385170] group-hover:bg-[#385170] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.9} />
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#385170]/70">
                      KORAK {step.number}
                    </span>
                  </div>

                  <span className="text-4xl font-bold tracking-tighter text-[#385170]/[0.12] transition-colors duration-300 group-hover:text-[#385170]/25">
                    {step.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-9 flex flex-1 flex-col">
                  <h3 className="max-w-[280px] text-2xl font-bold leading-tight tracking-tight text-[#222831]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#222831]/65">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-7 flex flex-col gap-3 border-t border-[#385170]/10 pt-6">
                    {step.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#385170]/[0.08] text-[#385170]">
                          <Check size={12} strokeWidth={2.5} />
                        </span>

                        <span className="text-xs font-medium text-[#222831]/75">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#385170] to-[#8BA7C5] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Trust / information strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#385170]/10 bg-white/55 px-6 py-6 shadow-sm backdrop-blur-md sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#222831] text-white shadow-md">
              <ShieldCheck size={23} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#222831]">
                Vaša sledeća nautička avantura počinje ovde.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#222831]/55">
                Jedinstveno mesto za nautičke oglase, opremu i usluge.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#385170]">
            <span>Otkrijte Nautiku</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </div>
        </div>

      </div>
    </section>
  );
};
