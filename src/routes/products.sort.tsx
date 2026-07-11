import { createFileRoute } from "@tanstack/react-router";
import { Brain } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/sort")({
  head: () => ({
    meta: [
      { title: "WasteXa Sort — AI waste classification" },
      { name: "description", content: "Automatically classify waste streams using AI computer vision — plastic, metal, paper, organic." },
      { property: "og:title", content: "WasteXa Sort — AI waste classification" },
      { property: "og:description", content: "AI-powered waste stream classification." },
    ],
  }),
  component: SortPage,
});

function SortPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="info"
        eyebrow="WasteXa Sort"
        icon={<Brain size={12} />}
        title="Automatically classify waste streams using AI."
        subtitle="WasteXa Sort uses computer vision trained on millions of material images to classify every stream — automatically, at line speed, with human-verifiable confidence."
        bullets={[
          "Real-time computer-vision classification (plastic, metal, paper, organic)",
          "Contamination detection with confidence scores",
          "Custom material models for your specific waste profile",
          "Edge-deployable — runs on-prem with no cloud dependency",
        ]}
        benefits={[
          { t: "Higher recovery rates", d: "Recover materials that manual sorting misses — every shift, consistently." },
          { t: "Less contamination", d: "Catch contamination before it downgrades an entire container." },
          { t: "Explainable AI", d: "Every classification is visual, auditable and verifiable by an operator." },
        ]}
        preview={<SortDashboard />}
        faqs={[
          ["Do you use our data to train?", "No. Your images stay in your tenant. Custom models are trained per customer."],
          ["What cameras are supported?", "Industrial RGB, hyperspectral and X-ray — most existing sensors work out of the box."],
          ["Can it run air-gapped?", "Yes. Sort is fully deployable on-prem for sovereign or air-gapped environments."],
        ]}
      />
    </SiteLayout>
  );
}

function SortDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">CLASSIFICATION · Line 3</p>
        <span className="rounded-full bg-info/15 px-2 py-0.5 text-[10px] font-semibold text-info">AI · 98.4%</span>
      </div>
      <div className="mt-4 grid grid-cols-[1fr_1fr] gap-3">
        <div className="rounded-md border border-white/8 bg-black/30 p-4">
          <p className="text-[11px] font-medium text-white/70">Live Classification</p>
          <div className="mt-3 flex items-center justify-center py-3">
            <div
              className="relative h-24 w-24 rounded-full"
              style={{ background: "conic-gradient(#38BDF8 0 42%, #ffffff90 42% 70%, #F59E0B 70% 86%, #22C55E 86% 96%, rgba(255,255,255,0.25) 96% 100%)" }}
            >
              <div className="absolute inset-3 flex items-center justify-center rounded-full bg-[#0d1522]">
                <span className="text-[10px] text-white/50">98%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1.5 text-[11px]">
          {[
            ["Plastic", "42%", "text-info"],
            ["Metal", "28%", "text-white/80"],
            ["Paper", "16%", "text-accent"],
            ["Organic", "10%", "text-primary"],
            ["Other", "4%", "text-white/50"],
          ].map(([n, p, c]) => (
            <div key={n as string} className="flex items-center justify-between rounded border border-white/8 bg-black/30 px-3 py-2">
              <span className={c as string}>{n}</span>
              <span className="font-mono text-white/80">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-md border border-white/8 bg-black/30 p-3">
        <p className="text-[11px] font-medium text-white/70">Recent Classifications</p>
        <div className="mt-2 grid grid-cols-6 gap-1.5">
          {["PL", "ME", "PA", "PL", "OR", "PL", "ME", "PA", "PL", "PL", "OR", "ME"].map((t, i) => {
            const color = t === "PL" ? "bg-info/20 text-info" : t === "ME" ? "bg-white/10 text-white/70" : t === "PA" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary";
            return <div key={i} className={`flex h-8 items-center justify-center rounded ${color} text-[10px] font-mono`}>{t}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
