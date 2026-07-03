import { createFileRoute } from "@tanstack/react-router";
import { Recycle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/track")({
  head: () => ({
    meta: [
      { title: "Wasteo Track — Monitor waste generation" },
      { name: "description", content: "Real-time waste tracking across every facility with site-level dashboards and weighbridge integrations." },
      { property: "og:title", content: "Wasteo Track — Monitor waste generation" },
      { property: "og:description", content: "Real-time waste tracking across every facility." },
    ],
  }),
  component: TrackPage,
});

function TrackPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="primary"
        eyebrow="Wasteo Track"
        icon={<Recycle size={12} />}
        title="Monitor waste generation across every facility."
        subtitle="Wasteo Track replaces spreadsheets and paper logs with one live picture of every tonne generated, moved and recovered — across every site."
        bullets={[
          "Real-time waste generation tracking per site and stream",
          "Weighbridge, IoT and scale integrations out of the box",
          "Automatic contamination and anomaly detection",
          "Executive dashboards ready for ESG reporting",
        ]}
        benefits={[
          { t: "Real-time visibility", d: "See every tonne across every site as it moves through your operation." },
          { t: "Zero-effort reporting", d: "Auto-generate ESG and regulatory reports in one click." },
          { t: "Site benchmarking", d: "Compare performance across facilities and identify best practices." },
        ]}
        preview={<TrackDashboard />}
        faqs={[
          ["Do we need new hardware?", "No. Wasteo Track works with your existing weighbridges, scales, IoT sensors and even manual entry."],
          ["Which ESG frameworks are supported?", "CSRD, GRI, ISO 14001 and national waste reporting — pre-formatted exports."],
          ["How long does deployment take?", "First site live in under 2 weeks. Enterprise rollouts typically in 8-12 weeks."],
        ]}
      />
    </SiteLayout>
  );
}

function TrackDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">WASTE TRACKING · Warsaw Plant</p>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">LIVE</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Today", "42.8 t", "+3.2%"],
          ["This Week", "312.5 t", "-1.8%"],
          ["This Month", "1,248 t", "+2.5%"],
        ].map(([l, v, d]) => (
          <div key={l} className="rounded-md border border-white/8 bg-black/30 p-3">
            <p className="text-[10px] text-white/50">{l}</p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">{v}</p>
            <p className={`text-[10px] ${d.startsWith("+") ? "text-primary" : "text-danger"}`}>{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-white/8 bg-black/30 p-4">
        <p className="text-[11px] font-medium text-white/70">Waste by Stream · 30d</p>
        <svg viewBox="0 0 200 60" className="mt-3 h-24 w-full">
          <defs>
            <linearGradient id="tk" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 16 L160 24 L180 12 L200 18 L200 60 L0 60 Z" fill="url(#tk)" />
          <path d="M0 45 L20 38 L40 42 L60 30 L80 34 L100 22 L120 28 L140 16 L160 24 L180 12 L200 18" stroke="#22C55E" strokeWidth="1.4" fill="none" />
        </svg>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[
          ["Plastic", "42%", "bg-info"],
          ["Metal", "28%", "bg-white/70"],
          ["Paper", "16%", "bg-accent"],
          ["Organic", "10%", "bg-primary"],
        ].map(([n, p, c]) => (
          <div key={n} className="flex items-center justify-between rounded-md border border-white/8 bg-black/30 px-3 py-2 text-[11px]">
            <span className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full ${c}`} /><span className="text-white/70">{n}</span></span>
            <span className="font-mono text-white/80">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
