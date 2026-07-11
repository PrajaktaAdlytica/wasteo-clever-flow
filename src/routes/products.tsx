import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Euro, Recycle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — WasteXa" },
      { name: "description", content: "WasteXa Track, Cost and Sort — three modules, one waste intelligence platform." },
      { property: "og:title", content: "Products — WasteXa" },
      { property: "og:description", content: "Three modules, one waste intelligence platform." },
    ],
  }),
  component: ProductsPage,
});

const items = [
  { slug: "/products/track", name: "WasteXa Track", icon: Recycle, tag: "Waste monitoring", tone: "primary", d: "Monitor waste generation across every facility with real-time site-level dashboards." },
  { slug: "/products/cost", name: "WasteXa Cost", icon: Euro, tag: "Cost analytics", tone: "accent", d: "Understand disposal costs, benchmark vendors and identify savings across the estate." },
  { slug: "/products/sort", name: "WasteXa Sort", icon: Brain, tag: "AI classification", tone: "info", d: "Automatically classify waste streams using AI vision — plastic, metal, paper, organic." },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Products"
        title="Three modules. One waste intelligence platform."
        subtitle="Buy them together as the WasteXa Platform, or start with the module that closes your most urgent gap."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((p) => {
            const Icon = p.icon;
            const tone =
              p.tone === "primary" ? "text-primary border-primary/25 bg-primary/10" :
              p.tone === "accent" ? "text-accent border-accent/25 bg-accent/10" :
              "text-info border-info/25 bg-info/10";
            return (
              <Link to={p.slug} key={p.name} className="card-surface block p-6">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${tone}`}>
                  <Icon size={18} />
                </div>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-widest text-white/50">{p.tag}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-white/60">{p.d}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Ready to see the full platform?</h3>
            <p className="text-sm text-white/60">30-minute walkthrough on your own waste operation.</p>
          </div>
          <LiquidButton to="/request-demo">Request Demo</LiquidButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
