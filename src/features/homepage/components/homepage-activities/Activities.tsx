import { ArrowUpRight, Compass, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { ACTIVITIES_LINKS } from "./ActivitiesModel";



export const Activities = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f8fa] px-5 py-20 text-[#222831] sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#8fcbd1]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-16 h-96 w-96 rounded-full bg-[#385170]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#385170]/15 bg-white/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#385170] shadow-sm backdrop-blur"
            >
              <Waves className="h-3.5 w-3.5" />
              Doživljaji na vodi
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
            >
              Izaberi svoju sledeću
              <span className="block bg-gradient-to-r from-[#385170] to-[#5d9ca3] bg-clip-text text-transparent">
                avanturu na moru.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-base leading-7 text-[#222831]/60">
              Od tihih uvala do otvorenog mora, pronađi iskustvo koje odgovara
              tvom ritmu i otkrij obalu na potpuno drugačiji način.
            </p>
            <a
              href="#sve-aktivnosti"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#385170] transition-colors hover:text-[#222831]"
            >
              Istraži sve aktivnosti
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[290px] lg:grid-cols-3">
          {ACTIVITIES_LINKS.map((activity, index) => {
            const featured = index === 0;

            return (
              <motion.a
                key={activity.title}
                href={activity.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.5 }}
                className={`group relative isolate overflow-hidden rounded-[28px] bg-[#222831] shadow-[0_18px_45px_-26px_rgba(34,40,49,0.5)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-26px_rgba(34,40,49,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#385170] focus-visible:ring-offset-4 ${
                  featured
                    ? "sm:col-span-2 lg:row-span-2 lg:min-h-[600px]"
                    : ""
                }`}
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055]"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#111820]/90" />
                <div className="absolute inset-0 bg-[#385170]/0 transition-colors duration-500 group-hover:bg-[#385170]/10" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-6 sm:top-6">
                  <Compass className="h-3 w-3" />
                  {activity.tag}
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-6">
                  <div className={featured ? "max-w-xl" : "max-w-[80%]"}>
                    <h3
                      className={`font-black tracking-[-0.025em] text-white ${
                        featured
                          ? "text-3xl sm:text-4xl lg:text-5xl"
                          : "text-2xl"
                      }`}
                    >
                      {activity.title}
                    </h3>
                    <p
                      className={`mt-2 overflow-hidden leading-6 text-white/70 transition-all duration-500 ${
                        featured
                          ? "max-h-20 text-sm opacity-100 sm:text-base"
                          : "max-h-0 text-sm opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                      }`}
                    >
                      {activity.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white text-[#222831] shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#8fcbd1]">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
