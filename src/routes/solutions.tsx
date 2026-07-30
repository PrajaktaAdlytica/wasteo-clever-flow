import { createFileRoute } from "@tanstack/react-router";
import { Factory, Scale, ShieldCheck, ShoppingBag, Truck, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — WasteXa" },
      {
        name: "description",
        content:
          "Supplier intelligence and sourcing workflows for procurement, manufacturing, retail, supply chain and compliance teams.",
      },
    ],
  }),
  component: Solutions,
});

const items = [
  {
    icon: Users,
    t: "Procurement Teams",
    d: "Create stronger shortlists, comparable RFQs and reviewable supplier decisions.",
  },
  {
    icon: Factory,
    t: "Manufacturers",
    d: "Source components, packaging and production partners with capability and risk context.",
  },
  {
    icon: ShoppingBag,
    t: "Retailers",
    d: "Compare private-label, packaging and indirect suppliers across markets and categories.",
  },
  {
    icon: Truck,
    t: "Supply-Chain Managers",
    d: "Understand capacity, geography and continuity signals before suppliers are awarded.",
  },
  {
    icon: ShieldCheck,
    t: "Risk & Compliance",
    d: "Review documents, sources, expiry dates and risk evidence in the same workflow.",
  },
  {
    icon: Scale,
    t: "Category Leaders",
    d: "Keep assumptions, reviewer notes and award rationale attached to every event.",
  },
];

function Solutions() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Solutions"
        title="One supplier workspace. Different decision contexts."
        subtitle="WasteXa connects the people who discover, qualify, compare and approve suppliers—without pretending every team uses the same workflow."
      >
        <div className="mb-6 rounded-xl border border-primary/15 bg-primary/[0.06] px-4 py-3 text-xs text-white/65">
          Illustrative use cases for the WasteXa product concept.
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.t} className="card-surface p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{item.t}</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Map the demo to your sourcing process.
            </h2>
            <p className="mt-1 text-sm text-white/60">
              A 30-minute illustrative walkthrough—no backend commitment required.
            </p>
          </div>
          <LiquidButton to="/request-demo">Discuss a Pilot</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
