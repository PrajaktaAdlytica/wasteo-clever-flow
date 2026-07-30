import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Illustrative Pricing — WasteXa" },
      {
        name: "description",
        content: "Illustrative module-based pricing for the WasteXa procurement product demo.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    n: "Find",
    tone: "primary",
    price: "€1,500",
    per: "/workspace/month",
    desc: "Supplier discovery and shortlisting.",
    f: [
      "Supplier search",
      "Match explanations",
      "Saved shortlists",
      "CSV import/export",
      "Email support",
    ],
  },
  {
    n: "RFQ",
    tone: "accent",
    price: "€1,800",
    per: "/workspace/month",
    desc: "Structured RFQs and bid comparison.",
    f: [
      "RFQ templates",
      "Supplier response links",
      "Bid normalisation",
      "Comparison workspace",
      "Priority support",
    ],
    featured: true,
  },
  {
    n: "Risk",
    tone: "info",
    price: "€2,200",
    per: "/workspace/month",
    desc: "Risk signals and document review.",
    f: ["Risk evidence", "Document expiry", "Review workflow", "Alerts", "Priority support"],
  },
  {
    n: "Platform",
    tone: "white",
    price: "Custom",
    per: "Illustrative enterprise packaging",
    desc: "Connected sourcing for larger teams.",
    f: [
      "All products",
      "Workflow configuration",
      "Example integrations",
      "Named pilot lead",
      "Illustrative SLA",
    ],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Illustrative Pricing"
        title="Simple module-based packaging."
        subtitle="All prices and package details are fictional examples—not a commercial offer."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const border =
              plan.tone === "primary"
                ? "border-l-primary"
                : plan.tone === "accent"
                  ? "border-l-accent"
                  : plan.tone === "info"
                    ? "border-l-info"
                    : "border-l-white/25";
            const text =
              plan.tone === "primary"
                ? "text-primary"
                : plan.tone === "accent"
                  ? "text-accent"
                  : plan.tone === "info"
                    ? "text-info"
                    : "text-white";
            return (
              <div
                key={plan.n}
                className={`card-surface flex flex-col border-l-2 p-6 ${border} ${plan.featured ? "ring-1 ring-accent/40" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${text}`}>{plan.n}</p>
                  {plan.featured && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase text-accent">
                      Example
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs text-white/60">{plan.desc}</p>
                <p className="mt-5 font-mono text-3xl font-semibold text-white">
                  {plan.price}
                  {plan.price.startsWith("€") && (
                    <span className="ml-1 text-sm font-normal text-white/50">{plan.per}</span>
                  )}
                </p>
                {!plan.price.startsWith("€") && (
                  <p className="text-[11px] text-white/50">{plan.per}</p>
                )}
                {plan.price.startsWith("€") && (
                  <p className="text-[11px] text-white/50">Illustrative annual billing</p>
                )}
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.f.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-white/75">
                      <CheckCircle2 size={13} className={`mt-0.5 ${text}`} /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <LiquidButton to="/request-demo">Discuss a Pilot</LiquidButton>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
