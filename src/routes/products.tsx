import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, Search, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Wastexa" },
      {
        name: "description",
        content:
          "Wastexa Find, RFQ and Risk connect supplier discovery, bid comparison and evidence-led risk review.",
      },
    ],
  }),
  component: ProductsPage,
});

const items = [
  {
    slug: "/products/find",
    name: "Wastexa Find",
    icon: Search,
    tag: "Supplier discovery",
    tone: "primary",
    d: "Build a qualified supplier shortlist with visible match reasons, evidence and freshness.",
  },
  {
    slug: "/products/rfq",
    name: "Wastexa RFQ",
    icon: FileCheck2,
    tag: "Comparable sourcing",
    tone: "accent",
    d: "Create structured events, collect supplier responses and compare like with like.",
  },
  {
    slug: "/products/risk",
    name: "Wastexa Risk",
    icon: ShieldCheck,
    tag: "Risk & compliance",
    tone: "info",
    d: "Review risk signals, document status and source evidence before supplier award.",
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Products"
        title="Three focused products. One supplier decision workflow."
        subtitle="Start with supplier discovery, RFQ or risk review—or connect all three from first search to defensible award."
      >
        <div className="mb-6 rounded-xl border border-primary/15 bg-primary/[0.06] px-4 py-3 text-xs leading-5 text-white/65">
          Illustrative product suite: all capabilities, suppliers, scores and outcomes shown on this
          demo are examples.
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((product) => {
            const Icon = product.icon;
            const tone =
              product.tone === "primary"
                ? "text-primary border-primary/25 bg-primary/10"
                : product.tone === "accent"
                  ? "text-accent border-accent/25 bg-accent/10"
                  : "text-info border-info/25 bg-info/10";
            return (
              <Link to={product.slug} key={product.name} className="card-surface block p-6">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${tone}`}
                >
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-white/50">
                  {product.tag}
                </p>
                <h2 className="mt-1 text-xl font-semibold text-white">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">{product.d}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Explore product <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              See the connected sourcing workflow.
            </h2>
            <p className="mt-1 text-sm text-white/60">
              A 30-minute illustrative walkthrough tailored to your procurement scenario.
            </p>
          </div>
          <LiquidButton to="/request-demo">Discuss a Pilot</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
