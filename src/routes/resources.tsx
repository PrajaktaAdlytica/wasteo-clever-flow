import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileText, GraduationCap, Newspaper } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Wasteo" },
      { name: "description", content: "Documentation, case studies, guides and blog from the Wasteo team." },
    ],
  }),
  component: Resources,
});

const items = [
  { icon: BookOpen, t: "Documentation", d: "Product docs, API references and integration guides." },
  { icon: FileText, t: "Case Studies", d: "How European operators cut disposal costs with Wasteo." },
  { icon: Newspaper, t: "Blog", d: "Latest thinking on waste intelligence, circularity and ESG." },
  { icon: GraduationCap, t: "Guides", d: "Playbooks for sustainability, procurement and operations teams." },
];

function Resources() {
  return (
    <SiteLayout>
      <Section eyebrow="Resources" title="Everything you need to run measurable waste operations.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((x) => {
            const Icon = x.icon;
            return (
              <Link key={x.t} to="/resources" className="card-surface block p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={16} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{x.t}</h3>
                <p className="mt-1 text-xs text-white/60">{x.d}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Explore <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>
    </SiteLayout>
  );
}
