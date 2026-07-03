import { createFileRoute } from "@tanstack/react-router";
import { Euro } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/cost")({
  head: () => ({
    meta: [
      { title: "Wasteo Cost — Disposal cost analytics" },
      { name: "description", content: "Understand true disposal costs, benchmark vendors and identify savings across the estate." },
      { property: "og:title", content: "Wasteo Cost — Disposal cost analytics" },
      { property: "og:description", content: "Cost analytics for industrial waste operations." },
    ],
  }),
  component: CostPage,
});

function CostPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="accent"
        eyebrow="Wasteo Cost"
        icon={<Euro size={12} />}
        title="Understand disposal costs and identify savings."
        subtitle="Wasteo Cost turns opaque waste invoices into a live cost dashboard — per stream, per vendor, per site — with savings recommendations."
        bullets={[
          "Automatic invoice ingestion and normalisation",
          "Vendor benchmarking across the entire estate",
          "AI-generated savings recommendations",
          "Budget forecasting with contamination-based cost modelling",
        ]}
        benefits={[
          { t: "See the real cost", d: "Understand the full cost of every tonne, including hidden fees and surcharges." },
          { t: "Beat vendor lock-in", d: "Benchmark your suppliers and know exactly where you're overpaying." },
          { t: "Forecast confidently", d: "Model cost impact of process changes before you commit." },
        ]}
        preview={<CostDashboard />}
        faqs={[
          ["Which invoice formats are supported?", "PDF, XML, EDI and direct EDI/API feeds from major European waste vendors."],
          ["Can it feed our ERP?", "Yes — bi-directional connectors for SAP, Oracle, Dynamics and NetSuite."],
          ["How accurate are savings estimates?", "Recommendations are ranked with confidence intervals and validated on 2 years of your data."],
        ]}
      />
    </SiteLayout>
  );
}

function CostDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">COST ANALYTICS · Estate view</p>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">Q3 2026</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Total Spend", "€1.24M", "-8.3%"],
          ["Savings Identified", "€312K", "+14.1%"],
          ["Avg. Cost/Tonne", "€184", "-5.2%"],
        ].map(([l, v, d]) => (
          <div key={l} className="rounded-md border border-white/8 bg-black/30 p-3">
            <p className="text-[10px] text-white/50">{l}</p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">{v}</p>
            <p className={`text-[10px] ${d.startsWith("-") && !l.includes("Savings") ? "text-primary" : d.startsWith("+") && l.includes("Savings") ? "text-primary" : "text-primary"}`}>{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-white/8 bg-black/30 p-4">
        <p className="text-[11px] font-medium text-white/70">Cost by Vendor · 6 months</p>
        <div className="mt-3 flex h-24 items-end justify-around gap-2">
          {[
            ["ORL", 60], ["ALB", 82], ["VEO", 45], ["REM", 70], ["SEN", 38], ["SUE", 55],
          ].map(([n, v]) => (
            <div key={n as string} className="flex flex-col items-center gap-1">
              <div className="w-6 rounded-t-sm bg-accent" style={{ height: `${v}%` }} />
              <span className="text-[9px] font-mono text-white/40">{n}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-md border border-white/8 bg-black/30 p-3">
        <p className="text-[11px] font-medium text-white/70">Savings Recommendations</p>
        <ul className="mt-2 space-y-1.5 text-[11px] text-white/70">
          <li className="flex items-center justify-between"><span>Consolidate 3 vendors at Site A</span><span className="text-accent font-mono">€48K/yr</span></li>
          <li className="flex items-center justify-between"><span>Reduce contamination at Site D</span><span className="text-accent font-mono">€31K/yr</span></li>
          <li className="flex items-center justify-between"><span>Switch container fleet mix</span><span className="text-accent font-mono">€22K/yr</span></li>
        </ul>
      </div>
    </div>
  );
}
