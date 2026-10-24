import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {Anchor,ArrowRight,ArrowUpRight,ChevronLeft,ChevronRight,Clock3,Compass,LifeBuoy,MapPin,Pause,Play,ShieldCheck,Sparkles,Users} from "lucide-react";
import { Link } from "react-router-dom";
import { ACTIVITIES_LINKS } from "../models/ActivitiesModel.types";

const SLIDE_DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    icon: Compass,
    eyebrow: "Lokalno znanje",
    title: "Iskusni vodiči",
    text: "Provereni stručnjaci koji poznaju svaku rutu.",
  },
  {
    icon: LifeBuoy,
    eyebrow: "Bez skrivenih troškova",
    title: "Oprema je uključena",
    text: "Kompletna sigurnosna oprema u okviru rezervacije.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Standard kvaliteta",
    title: "Proverene usluge",
    text: "Pouzdani i sertifikovani organizatori aktivnosti.",
  },
];

export const Activities = () => {
  const reduceMotion = useReducedMotion();
  const headingId = useId();
  const total = ACTIVITIES_LINKS.length;

  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const railRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLSpanElement>(null);
  const elapsedRef = useRef(0);

  const paused = hoverPaused || userPaused || Boolean(reduceMotion);
  const current = ACTIVITIES_LINKS[active];

  const goTo = (index: number) => {
    if (!total) return;
    setActive((index + total) % total);
  };

  useEffect(() => {
    elapsedRef.current = 0;
    if (progressRef.current) {
      progressRef.current.style.transform = "scaleX(0)";
    }
  }, [active]);

  useEffect(() => {
    if (paused || total <= 1) return;

    let frame = 0;
    let previous = performance.now();

    const tick = (now: number) => {
      elapsedRef.current += now - previous;
      previous = now;

      const progress = Math.min(elapsedRef.current / SLIDE_DURATION, 1);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (progress >= 1) {
        setActive((value) => (value + 1) % total);
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, paused, total]);

  useEffect(() => {
    const rail = railRef.current;
    const thumb = thumbRefs.current[active];
    if (!rail || !thumb) return;

    rail.scrollTo({
      left: thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [active, reduceMotion]);

  if (!current || total === 0) return null;

  return (
    <section
      aria-labelledby={headingId}
      className="relative isolate overflow-hidden px-5 py-20 text-[#222831] sm:px-8 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] 
                   bg-[radial-gradient(circle_at_18%_8%,rgba(56,81,112,0.16),transparent_34%),
                   radial-gradient(circle_at_82%_18%,rgba(56,81,112,0.10),transparent_30%)]"
      />

      <div className="mx-auto max-w-[1460px]">
        <header className="mb-10 grid gap-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.55fr)] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#385170] text-white shadow-[0_12px_28px_-12px_rgba(56,81,112,0.8)]">
                <Anchor size={19} strokeWidth={1.8} />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#385170]">
                Doživljaji na vodi
              </span>
              <span className="h-px w-12 bg-[#385170]/25" />
            </div>

            <h2
              id={headingId}
              className="max-w-4xl text-[clamp(2.75rem,6vw,5.5rem)] font-black leading-[0.93] tracking-[-0.045em] text-[#222831]"
            >
              Tvoja sledeća
              <span className="block text-[#385170]">avantura počinje ovde.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-[#222831]/65 sm:text-lg sm:leading-8">
              Od skrivenih uvala do otvorenog mora, izaberi iskustvo koje prati
              tvoj ritam i upoznaj obalu iz potpuno nove perspektive.
            </p>
            <Link
              to="/aktivnosti"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#385170] 
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#385170] focus-visible:ring-offset-4"
            >
              Istraži kompletnu ponudu
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </header>

        <div className="mb-6 grid overflow-hidden rounded-2xl border border-[#385170]/10 bg-white/70 
                        shadow-[0_16px_45px_-32px_rgba(34,40,49,0.35)] backdrop-blur-xl sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, eyebrow, title, text }, index) => (
            <div
              key={title}
              className={`group flex min-h-28 items-center gap-4 p-5 transition-colors hover:bg-white/80 sm:p-6 ${
                index ? "border-t border-[#385170]/10 sm:border-l sm:border-t-0" : ""
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl
                               bg-[#385170]/10 text-[#385170] transition-transform duration-300 group-hover:-translate-y-1">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#385170]/65">
                  {eyebrow}
                </p>
                <p className="text-sm font-extrabold text-[#222831]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#222831]/55">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          onMouseEnter={() => setHoverPaused(true)}
          onMouseLeave={() => setHoverPaused(false)}
          onFocusCapture={() => setHoverPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setHoverPaused(false);
            }
          }}
          className="group/stage relative isolate min-h-[760px] overflow-hidden rounded-[28px] bg-[#111820] 
                     shadow-[0_45px_100px_-42px_rgba(17,24,32,0.9)] sm:min-h-[800px] lg:min-h-[760px] lg:rounded-[34px]"
        >
          <div className="absolute inset-0 -z-20" aria-hidden="true">
            <AnimatePresence initial={false}>
              <motion.img
                key={current.id}
                src={current.img}
                alt=""
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.9, ease: "easeOut" },
                  scale: { duration: 9, ease: "easeOut" },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,24,32,0.94)_0%,rgba(17,24,32,0.68)_38%,rgba(17,24,32,0.14)_72%),
                       linear-gradient(0deg,rgba(17,24,32,0.97)_0%,transparent_48%,rgba(17,24,32,0.38)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
                       linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] 
                       [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
          />

          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                Aktivnosti na vodi
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-2 hidden text-xs font-bold tabular-nums tracking-wider text-white/75 sm:inline">
                {String(active + 1).padStart(2, "0")}
                <span className="text-white/35"> / {String(total).padStart(2, "0")}</span>
              </span>

              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Prethodna aktivnost"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 
                           text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#222831] 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Sledeća aktivnost"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 
                           text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#222831] 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight size={18} />
              </button>

              {!reduceMotion && (
                <button
                  type="button"
                  onClick={() => setUserPaused((value) => !value)}
                  aria-pressed={userPaused}
                  aria-label={
                    userPaused
                      ? "Pokreni automatsku smenu"
                      : "Pauziraj automatsku smenu"
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 
                             bg-white/10 text-white backdrop-blur-md transition-all hover:border-white hover:bg-white 
                             hover:text-[#222831] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {userPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
            </div>
          </div>

          <div className="grid min-h-[610px] grid-rows-[1fr_auto] lg:min-h-[600px] lg:grid-cols-[minmax(0,1fr)_390px] lg:grid-rows-1">
            <div className="flex items-end px-5 pb-9 pt-16 sm:px-8 lg:px-12 lg:pb-12">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.48, ease: EASE }}
                  className="max-w-3xl"
                >
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full 
                                     border border-white/20 bg-white/10 px-3.5 
                                     py-1.5 text-xs font-bold text-white backdrop-blur-lg">
                      <Sparkles size={13} />
                      {current.tag}
                    </span>
                 
                  </div>

                  <h3 className="mt-6 max-w-3xl text-[clamp(3.25rem,8vw,7rem)] font-black leading-[0.86] tracking-[-0.055em] text-white">
                    {current.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                    {current.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/62 sm:text-sm">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={15} /> Fleksibilni termini
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Users size={15} /> Male grupe
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={15} /> Proverene lokacije
                    </span>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      to={current.path}
                      className="group/cta relative inline-flex h-[54px] items-center gap-4 overflow-hidden rounded-full 
                                 bg-white pl-6 pr-1.5 text-sm font-extrabold text-[#222831] shadow-[0_14px_30px_-16px_rgba(255,255,255,0.75)] 
                                focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-[#385170] 
                                       transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                                       group-hover/cta:scale-x-100 motion-reduce:transition-none" />
                      <span className="relative z-10 transition-colors duration-500 group-hover/cta:text-white">
                        Pogledaj detalje
                      </span>
                      <span className="relative z-10 flex h-11 w-11 items-center justify-center overflow-hidden 
                                       rounded-full bg-[#222831] text-white transition-colors 
                                       duration-500 group-hover/cta:bg-white group-hover/cta:text-[#385170]">
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                                     group-hover/cta:-translate-y-7 group-hover/cta:translate-x-7"
                        />
                        <ArrowUpRight
                          size={18}
                          className="absolute -translate-x-7 translate-y-7 transition-transform duration-500 
                                     ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0 group-hover/cta:translate-y-0"
                        />
                      </span>
                    </Link>

                    <Link
                      to="/aktivnosti"
                      className="inline-flex h-[54px] items-center rounded-full border border-white/25 bg-white/5 px-6 
                                 text-sm font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/12 
                                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                    >
                      Sve aktivnosti
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <aside className="border-t border-white/10 bg-[#111820]/28 p-5 backdrop-blur-sm sm:p-8 lg:border-l lg:border-t-0 lg:p-7">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    Izaberi iskustvo
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">Istraži aktivnosti</p>
                </div>
                <span className="text-xs font-semibold text-white/40">{total} opcija</span>
              </div>

              <div
                ref={railRef}
                role="tablist"
                aria-label="Izbor aktivnosti"
                className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:max-h-[502px] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden [&::-webkit-scrollbar]:hidden"
              >
                {ACTIVITIES_LINKS.map((activity, index) => {
                  const isActive = index === active;

                  return (
                    <button
                      key={activity.id}
                      ref={(element) => {
                        thumbRefs.current[index] = element;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`activity-panel-${activity.id}`}
                      onClick={() => goTo(index)}
                      className={`group/thumb relative h-40 w-64 shrink-0 snap-start overflow-hidden rounded-2xl text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:h-[112px] lg:w-full ${
                        isActive
                          ? "ring-2 ring-white shadow-[0_14px_35px_-18px_rgba(0,0,0,0.8)]"
                          : "opacity-60 ring-1 ring-white/15 hover:opacity-100 hover:ring-white/35"
                      }`}
                    >
                      <img
                        src={activity.img}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/thumb:scale-105 motion-reduce:transition-none"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#111820]/95 via-[#111820]/38 to-transparent lg:bg-gradient-to-r"
                      />

                      <span className="absolute inset-x-4 bottom-4 lg:inset-y-0 lg:flex lg:items-center lg:justify-between">
                        <span>
                          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                            {activity.tag}
                          </span>
                          <span className="mt-1 block text-sm font-extrabold leading-tight text-white">
                            {activity.title}
                          </span>
                        </span>
                        <span
                          className={`mt-3 hidden h-8 w-8 items-center justify-center rounded-full border text-white transition-all lg:flex ${
                            isActive
                              ? "border-white bg-white text-[#222831]"
                              : "border-white/25 bg-white/5"
                          }`}
                        >
                          <ArrowUpRight size={14} />
                        </span>
                      </span>

                      {isActive && (
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
                          <span
                            ref={progressRef}
                            className="block h-full w-full origin-left bg-white will-change-transform"
                            style={{ transform: "scaleX(0)" }}
                          />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 px-1 text-xs text-[#222831]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Pažljivo odabrana iskustva za siguran i kvalitetan boravak na vodi.</p>
          <p className="font-semibold text-[#385170]/75">Oprema · Vodiči · Podrška</p>
        </div>
      </div>
    </section>
  );
};
