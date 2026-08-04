import { Info } from "lucide-react";

export function DemoNotice() {
  return (
    <aside className="relative z-20 bg-transparent" aria-label="Demonstration website notice">
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-6 py-2.5 text-[10px] leading-5 text-white/60">
        <Info className="mt-1 shrink-0 text-primary/75" size={12} aria-hidden="true" />
        <p>
          <strong className="font-semibold text-white/75">Illustrative demo website.</strong>{" "}
          Product screens, testimonials, example organisations, pricing, certifications and
          performance metrics are illustrative. Published company announcements are identified
          separately.
        </p>
      </div>
    </aside>
  );
}
