import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WasteXa" },
      {
        name: "description",
        content:
          "WasteXa is an illustrative Warsaw-based supplier intelligence and sourcing product concept.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Illustrative Company Profile"
        title="Designed in Warsaw for European supplier decisions."
        subtitle="WasteXa is a demo-stage supplier intelligence and sourcing concept for procurement teams, manufacturers, retailers and supply-chain managers."
      >
        <div className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.06] px-5 py-4 text-sm leading-6 text-white/70">
          This is an illustrative company profile. The legal entity, founding year, team size,
          locations, contact information and regulatory statements shown across this website are
          fictional examples.
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["2026", "Illustrative founding year"],
            ["EU", "Intended product market"],
            ["Demo", "Current website stage"],
          ].map(([value, label]) => (
            <div key={value} className="card-surface p-6">
              <p className="font-mono text-3xl text-white">{value}</p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Explore the WasteXa product concept.
              </h2>
              <p className="mt-2 text-sm text-white/60">
                WasteXa Sp. z o.o. · Prosta 70, 00-838 Warsaw · Poland
              </p>
              <p className="mt-1 text-xs text-white/40">Illustrative company and contact details</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <LiquidButton to="/request-demo">Discuss a Pilot</LiquidButton>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            [
              "Privacy Policy (demo)",
              "No personal data is transmitted by this illustrative frontend demo.",
            ],
            [
              "Terms of Service (demo)",
              "All product, company, customer, pricing and performance information is illustrative.",
            ],
            [
              "Cookie Policy (demo)",
              "This demo does not represent a production consent or analytics implementation.",
            ],
          ].map(([title, text]) => (
            <section key={title} className="card-surface p-6">
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              <p className="mt-2 text-xs leading-5 text-white/55">{text}</p>
            </section>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
