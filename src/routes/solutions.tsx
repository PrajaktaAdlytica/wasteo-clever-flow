import { createFileRoute } from "@tanstack/react-router";
import { Building2, Factory, Store, Trash2, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Wasteo" },
      { name: "description", content: "Wasteo for factories, manufacturers, retailers, municipalities and waste operators." },
      { property: "og:title", content: "Solutions — Wasteo" },
      { property: "og:description", content: "One platform. Five operating contexts." },
    ],
  }),
  component: Solutions,
});

const items = [
  { icon: Factory, t: "Factories", d: "Reduce disposal costs and hit recovery targets across production lines." },
  { icon: Trash2, t: "Manufacturers", d: "Track material flows across every plant and benchmark performance." },
  { icon: Store, t: "Retailers", d: "Cut store-level waste, standardise reporting across the entire estate." },
  { icon: Building2, t: "Municipalities", d: "Track city-wide collection, contamination and recovery in one platform." },
  { icon: Truck, t: "Waste Operators", d: "Optimise routes, container fills and vendor performance with live data." },
];

function Solutions() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Solutions"
        title="One platform. Five operating contexts."
        subtitle="Wasteo adapts to how your sector actually works — the regulators, the reporting cycles and the escalation paths."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((x) => {
            const Icon = x.icon;
            return (
              <div key={x.t} className="card-surface p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{x.t}</h3>
                <p className="mt-2 text-sm text-white/60">{x.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Not sure which fits your operation?</h3>
            <p className="text-sm text-white/60">30-minute call — we'll tell you honestly.</p>
          </div>
          <LiquidButton to="/request-demo">Request Demo</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
