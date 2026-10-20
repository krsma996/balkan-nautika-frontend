import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {ArrowUpRight,ChevronLeft,ChevronRight,Pause,Play} from "lucide-react";
import { Link } from "react-router-dom";
import { ACTIVITIES_LINKS } from "../models/ActivitiesModel.types";
import {Anchor, Compass,Fish, LifeBuoy,Sailboat, ShieldCheck,Waves} from "lucide-react";

const SLIDE_DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;
const TOTAL = ACTIVITIES_LINKS.length;

export const Activities = () => {
  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const paused = hoverPaused || userPaused || !!reduceMotion;

  const railRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(0);

  const current = ACTIVITIES_LINKS[active];

  const goTo = (index: number) => setActive((index + TOTAL) % TOTAL);

  // Reset progresa kad se promeni aktivna kartica
  useEffect(() => {
    elapsed.current = 0;
    barRefs.current.forEach((bar) => {
      if (bar) bar.style.transform = "scaleX(0)";
    });
  }, [active]);

  // Autoplay + progress (bez re-rendera na svakom frejmu)
  useEffect(() => {
    if (paused) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      elapsed.current += now - last;
      last = now;

      const progress = Math.min(elapsed.current / SLIDE_DURATION, 1);
      const bar = barRefs.current[active];
      if (bar) bar.style.transform = `scaleX(${progress})`;

      if (progress >= 1) {
        setActive((i) => (i + 1) % TOTAL);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  // Horizontalno centriranje aktivne sličice (bez skrolovanja cele stranice)
  useEffect(() => {
    const rail = railRef.current;
    const thumb = thumbRefs.current[active];
    if (!rail || !thumb) return;

    rail.scrollTo({
      left: thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [active, reduceMotion]);

  return (
    <section
      aria-labelledby="activities-heading"
      className="relative overflow-hidden px-5 py-20 text-[#222831] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="relative mx-auto max-w-[1400px]">
      {/* Header */}
<div className="mb-8 grid items-end gap-6 lg:grid-cols-[1fr_0.6fr] lg:gap-16">
  <div className="flex items-start gap-5">
    <span
      aria-hidden="true"
      className="mt-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#385170] text-white shadow-[0_12px_28px_-12px_rgba(56,81,112,0.7)] sm:flex"
    >
      <Anchor size={26} strokeWidth={1.75} />
    </span>

    <h2
      id="activities-heading"
      className="max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
    >
      Izaberi svoju sledeću avanturu na vodi.
    </h2>
  </div>

  <p className="max-w-xl text-base leading-7 text-[#222831]/65 lg:pb-2">
    Od tihih uvala do otvorenog mora, pronađi iskustvo koje odgovara tvom
    ritmu i otkrij obalu na potpuno drugačiji način.
  </p>
</div>

{/* Prednosti */}
<ul className="mb-6 grid grid-cols-1 divide-y divide-[#385170]/10 overflow-hidden rounded-2xl border border-[#385170]/10 bg-white/70 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
  {[
    {
      icon: Compass,
      title: "Iskusni vodiči",
      text: "Lokalni stručnjaci na svakoj turi",
    },
    {
      icon: LifeBuoy,
      title: "Oprema uključena",
      text: "Sigurnosna oprema je u ceni",
    },
    {
      icon: ShieldCheck,
      title: "Proverene usluge",
      text: "Sertifikovani organizatori",
    },
  ].map(({ icon: Icon, title, text }) => (
    <li key={title} className="flex items-center gap-4 px-5 py-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#385170]/10 text-[#385170]">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-sm font-bold text-[#222831]">{title}</p>
        <p className="text-xs leading-5 text-[#222831]/60">{text}</p>
      </div>
    </li>
  ))}
</ul>

        {/* Stage */}
        <div
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocus={() => setHoverPaused(true)}
          onBlur={() => setHoverPaused(false)}
          className="relative isolate flex min-h-[680px] flex-col overflow-hidden rounded-3xl bg-[#111820] shadow-[0_40px_90px_-40px_rgba(17,24,32,0.7)] lg:min-h-[760px]"
        >
          {/* Background images */}
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <AnimatePresence initial={false}>
              <motion.img
                key={current.id}
                src={current.img}
                alt=""
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1, ease: "easeOut" },
                  scale: { duration: 9, ease: "easeOut" },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Čitljivost teksta */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111820]/85 via-[#111820]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111820]/95 via-transparent to-[#111820]/40" />
          </div>

          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 p-5 sm:p-8">
            <p className="text-sm font-semibold text-white/80">
              Aktivnosti na vodi
            </p>

            <div className="flex items-center gap-2">
              <span
                className="mr-2 text-sm font-semibold tabular-nums text-white/80"
                aria-hidden="true"
              >
                {String(active + 1).padStart(2, "0")}
                <span className="text-white/40">
                  {" "}
                  / {String(TOTAL).padStart(2, "0")}
                </span>
              </span>

              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Prethodna aktivnost"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#222831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Sledeća aktivnost"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#222831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight size={18} />
              </button>
              {!reduceMotion && (
                <button
                  type="button"
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={
                    userPaused ? "Pokreni automatsku smenu" : "Pauziraj automatsku smenu"
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#222831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {userPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
            </div>
          </div>

          {/* Active content */}
          <div
            className="flex flex-1 items-end px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12"
            aria-live={paused ? "polite" : "off"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="max-w-2xl"
              >
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                  {current.tag}
                </span>

                <h3 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                  {current.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  {current.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {/* Primary CTA */}
                  <Link
                    to={current.path}
                    className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-bold text-[#222831] transition-colors duration-500 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 origin-left scale-x-0 rounded-full bg-[#385170] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-100 motion-reduce:transition-none"
                    />
                    <span className="relative z-10">Saznaj više</span>
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#222831] text-white transition-colors duration-500 group-hover/cta:bg-white group-hover/cta:text-[#385170]">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-y-7 group-hover/cta:translate-x-7"
                      />
                      <ArrowUpRight
                        size={18}
                        className="absolute -translate-x-7 translate-y-7 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0 group-hover/cta:translate-y-0"
                      />
                    </span>
                  </Link>

                  {/* Secondary CTA */}
                  <Link
                    to="/aktivnosti"
                    className="inline-flex h-[52px] items-center rounded-full border border-white/30 px-6 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    Sve aktivnosti
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail rail */}
          <div
            ref={railRef}
            role="tablist"
            aria-label="Izbor aktivnosti"
            className="relative flex snap-x gap-3 overflow-x-auto px-5 pb-5 [scrollbar-width:none] sm:px-8 sm:pb-8 lg:px-12 [&::-webkit-scrollbar]:hidden"
          >
            {ACTIVITIES_LINKS.map((activity, index) => {
              const isActive = index === active;

              return (
                <button
                  key={activity.id}
                  ref={(el) => {
                    thumbRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={activity.title}
                  onClick={() => goTo(index)}
                  className={`group/thumb relative h-24 w-36 shrink-0 snap-start overflow-hidden rounded-xl text-left transition-all duration-500 sm:h-28 sm:w-48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? "ring-2 ring-white"
                      : "opacity-70 ring-1 ring-white/20 hover:opacity-100"
                  }`}
                >
                  <img
                    src={activity.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/thumb:scale-110 motion-reduce:transition-none"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#111820]/90 via-[#111820]/20 to-transparent"
                  />
                  <span className="absolute inset-x-3 bottom-3 text-xs font-bold leading-tight text-white sm:text-sm">
                    {activity.title}
                  </span>

                  {/* Progress */}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-white/25">
                      <span
                        ref={(el) => {
                          barRefs.current[index] = el;
                        }}
                        className="block h-full w-full origin-left bg-white"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};