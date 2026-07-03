import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Wasteo" },
      { name: "description", content: "Simple per-site pricing for Wasteo Track, Cost and Sort. Enterprise volume pricing available." },
      { property: "og:title", content: "Pricing — Wasteo" },
      { property: "og:description", content: "Simple per-site pricing." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    n: "Track", tone: "primary", price: "€1,500", per: "/site/month",
    desc: "Monitor waste generation across every facility.",
    f: ["Real-time waste tracking", "Site-level dashboards", "Weighbridge integrations", "5 operators", "Email support"],
  },
  {
    n: "Cost", tone: "accent", price: "€1,800", per: "/site/month",
    desc: "Understand disposal costs and identify savings.",
    f: ["Cost analytics", "Vendor benchmarking", "Savings recommendations", "Unlimited operators", "Priority support"], featured: true,
  },
  {
    n: "Sort", tone: "info", price: "€2,200", per: "/site/month",
    desc: "Automatically classify waste streams using AI.",
    f: ["AI computer vision", "Contamination detection", "Recovery optimisation", "Custom material models", "24/7 support"],
  },
  {
    n: "Enterprise", tone: "white", price: "Custom", per: "Volume pricing available",
    desc: "For operators with complex, multi-country operations.",
    f: ["All modules included", "On-prem / air-gapped", "Custom integrations", "Named account team", "SLA + on-call"],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <Section eyebrow="Pricing" title="Transparent. Per site. European." subtitle="No PDFs. No games. Prices you can put into procurement today.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p) => {
            const border =
              p.tone === "primary" ? "border-l-primary" :
              p.tone === "accent" ? "border-l-accent" :
              p.tone === "info" ? "border-l-info" :
              "border-l-white/25";
            const text =
              p.tone === "primary" ? "text-primary" :
              p.tone === "accent" ? "text-accent" :
              p.tone === "info" ? "text-info" :
              "text-white";
            return (
              <div key={p.n} className={`card-surface flex flex-col p-6 border-l-2 ${border} ${p.featured ? "ring-1 ring-accent/40" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${text}`}>{p.n}</p>
                  {p.featured && <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase text-accent">Popular</span>}
                </div>
                <p className="mt-2 text-xs text-white/60">{p.desc}</p>
                <p className="mt-5 font-mono text-3xl font-semibold text-white">
                  {p.price}{p.price.startsWith("€") && <span className="ml-1 text-sm font-normal text-white/50">{p.per}</span>}
                </p>
                {!p.price.startsWith("€") && <p className="text-[11px] text-white/50">{p.per}</p>}
                {p.price.startsWith("€") && <p className="text-[11px] text-white/50">Billed annually</p>}
                <ul className="mt-5 flex-1 space-y-2">
                  {p.f.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-xs text-white/75">
                      <CheckCircle2 size={13} className={`mt-0.5 ${text}`} /> {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LiquidButton to="/request-demo">Request Demo</LiquidButton>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
