import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const tracks = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-track]"));
    let frame = 0;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    if (!reducedMotion.matches) {
      root.classList.add("motion-ready");
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const update = () => {
      frame = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      root.style.setProperty("--scroll-progress", progress.toString());

      if (reducedMotion.matches) return;

      const heroProgress = Math.min(window.scrollY / 720, 1);
      root.style.setProperty("--hero-scroll", heroProgress.toString());

      tracks.forEach((track) => {
        const rect = track.getBoundingClientRect();
        const trackProgress = Math.min(
          Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),
          1,
        );
        track.style.setProperty("--track-shift", `${(trackProgress - 0.5) * -140}px`);
      });
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--hero-scroll");
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
