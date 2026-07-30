import { Info } from "lucide-react";

export function DemoNotice() {
  return (
    <aside className="relative z-20 bg-transparent" aria-label="Demonstration website notice">
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-6 py-2.5 text-xs leading-5 text-white/75">
        <Info className="mt-0.5 shrink-0 text-primary" size={14} aria-hidden="true" />
        <p>
          <strong className="font-semibold text-white">Illustrative demo website.</strong> Company
          names, testimonials, metrics, pricing, locations, certifications and product data are
          fictional examples.
        </p>
      </div>
    </aside>
  );
}
