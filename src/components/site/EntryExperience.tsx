import { ArrowRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const SCENES = [
  {
    id: "supply-atlas",
    number: "01",
    label: "Supply Atlas",
    eyebrow: "EU Supplier Intelligence",
    titleLead: "Source Europe with",
    titleAccent: "evidence.",
    support: "Find. Compare. Verify.",
    video: "/entry-motion/atlas.mp4",
    poster: "/entry-motion/atlas-poster.png",
    position: "64% center",
  },
  {
    id: "rfq-lens",
    number: "02",
    label: "RFQ Lens",
    eyebrow: "Structured Sourcing",
    titleLead: "Turn responses into a",
    titleAccent: "decision.",
    support: "Normalize every quote. See every risk.",
    video: "/entry-motion/rfq.mp4",
    poster: "/entry-motion/rfq-poster.png",
    position: "66% center",
  },
  {
    id: "compliance-passage",
    number: "03",
    label: "Compliance Passage",
    eyebrow: "Supplier Risk & Compliance",
    titleLead: "Know who is safe to",
    titleAccent: "source from.",
    support: "Evidence before award.",
    video: "/entry-motion/compliance.mp4",
    poster: "/entry-motion/compliance-poster.png",
    position: "65% center",
  },
] as const;

const CROSSFADE_MS = 1200;
const AUTOPLAY_MS = 9000;

export function EntryExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const pauseTimeoutRef = useRef<number | undefined>(undefined);

  const selectScene = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex) return;
      const previousIndex = activeIndex;
      if (!reducedMotion && !isPaused && isVisible) {
        void videoRefs.current[nextIndex]?.play().catch(() => undefined);
      }
      window.clearTimeout(pauseTimeoutRef.current);
      setActiveIndex(nextIndex);
      pauseTimeoutRef.current = window.setTimeout(() => {
        videoRefs.current[previousIndex]?.pause();
      }, CROSSFADE_MS);
    },
    [activeIndex, isPaused, isVisible, reducedMotion],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused || !isVisible) {
      videoRefs.current.forEach((video) => video?.pause());
      return;
    }
    void videoRefs.current[activeIndex]?.play().catch(() => undefined);
  }, [activeIndex, isPaused, isVisible, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || isPaused || !isVisible) return;
    const timer = window.setTimeout(
      () => selectScene((activeIndex + 1) % SCENES.length),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, isVisible, reducedMotion, selectScene]);

  useEffect(
    () => () => {
      window.clearTimeout(pauseTimeoutRef.current);
    },
    [],
  );

  const activeScene = SCENES[activeIndex];
  const enterSite = () => {
    document.getElementById("main-product-story")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="entry-experience relative isolate -mt-[6.5rem] min-h-svh overflow-hidden bg-[#070c15]"
      aria-label="Explore three Wastexa product perspectives"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          selectScene((activeIndex + 1) % SCENES.length);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          selectScene((activeIndex - 1 + SCENES.length) % SCENES.length);
        }
      }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {SCENES.map((scene, index) =>
          reducedMotion ? (
            <img
              key={scene.id}
              src={scene.poster}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectPosition: scene.position,
                transitionDuration: "0ms",
                filter: "brightness(1.16) saturate(1.16) contrast(1.06)",
              }}
            />
          ) : (
            <video
              key={scene.id}
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              muted
              loop
              playsInline
              preload="auto"
              poster={scene.poster}
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity ease-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                objectPosition: scene.position,
                transitionDuration: `${CROSSFADE_MS}ms`,
                filter: "brightness(1.16) saturate(1.16) contrast(1.06)",
              }}
            >
              <source src={scene.video} type="video/mp4" />
            </video>
          ),
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,15,0.87)_0%,rgba(4,8,15,0.5)_31%,rgba(4,8,15,0.04)_68%,rgba(4,8,15,0.16)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,0.04)_0%,transparent_48%,rgba(5,9,16,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col px-6 pb-7 pt-28 md:pb-9 md:pt-28">
        <div className="flex max-w-lg flex-1 items-center py-12">
          <div key={activeScene.id} className="entry-copy">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary md:text-[11px]">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />
              {activeScene.eyebrow}
            </p>
            <h1 className="max-w-[10ch] text-[clamp(2.35rem,4.4vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
              {activeScene.titleLead}{" "}
              <span className="text-primary-solid">{activeScene.titleAccent}</span>
            </h1>
            <p className="mt-6 text-sm font-medium tracking-[-0.01em] text-white/70 md:text-base">
              {activeScene.support}
            </p>
            <button
              type="button"
              onClick={enterSite}
              className="group mt-9 inline-flex items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-[#07140b] shadow-[0_12px_35px_-12px_rgba(34,197,94,0.75)] transition hover:-translate-y-0.5 hover:bg-[#36d36d]"
            >
              Enter Wastexa
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="border-t border-white/18 pt-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/42 md:text-[10px]">
              Three ways to see the signal
            </p>
            <div className="flex items-center gap-4">
              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setIsPaused((value) => !value)}
                  className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
                  aria-label={isPaused ? "Play background motion" : "Pause background motion"}
                >
                  {isPaused ? <Play size={12} /> : <Pause size={12} />}
                  {isPaused ? "Play" : "Pause"}
                </button>
              )}
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/45">
                {activeScene.number} — 03
              </span>
            </div>
          </div>
          <div
            className="grid gap-5 md:grid-cols-3 md:gap-8"
            role="tablist"
            aria-label="Wastexa entry scenes"
          >
            {SCENES.map((scene, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={scene.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectScene(index)}
                  className={`group relative flex min-h-12 items-center gap-2 border-b text-left transition md:min-h-14 ${
                    isActive
                      ? "border-primary text-white"
                      : "border-white/18 text-white/48 hover:border-white/45 hover:text-white/78"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] transition ${
                      isActive ? "text-primary" : "text-white/32"
                    }`}
                  >
                    {scene.number}
                  </span>
                  <span className="text-white/24" aria-hidden="true">
                    /
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] md:text-[11px]">
                    {scene.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
