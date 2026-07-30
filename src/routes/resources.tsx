import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileText, GraduationCap, Newspaper } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Wastexa" },
      {
        name: "description",
        content:
          "Illustrative documentation, sourcing guides, case studies and product resources from Wastexa.",
      },
    ],
  }),
  component: Resources,
});

const items = [
  {
    icon: BookOpen,
    t: "Documentation",
    d: "Illustrative product, data-methodology and integration documentation.",
  },
  {
    icon: FileText,
    t: "Case Studies",
    d: "Example sourcing workflows and fictional outcome narratives.",
  },
  {
    icon: Newspaper,
    t: "Insights",
    d: "Supplier discovery, RFQ design, risk review and EU procurement thinking.",
  },
  {
    icon: GraduationCap,
    t: "Guides",
    d: "Practical playbooks for procurement, manufacturing and supply-chain teams.",
  },
];

function Resources() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Illustrative Resources"
        title="Build a more defensible supplier decision process."
        subtitle="These cards demonstrate the intended resource centre; no publications or customer studies are claimed."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.t} to="/resources" className="card-surface block p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={16} />
                </span>
                <h2 className="mt-4 text-base font-semibold text-white">{item.t}</h2>
                <p className="mt-1 text-xs leading-5 text-white/60">{item.d}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Explore example <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
