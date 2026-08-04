import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wastexa" },
      {
        name: "description",
        content:
          "Wastexa is an illustrative Warsaw-based supplier intelligence and sourcing product concept.",
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
        subtitle="Wastexa is a demo-stage supplier intelligence and sourcing concept for procurement teams, manufacturers, retailers and supply-chain managers."
      >
        <div className="mb-8 rounded-xl border border-primary/15 bg-primary/[0.06] px-5 py-4 text-sm leading-6 text-white/70">
          This is an illustrative company profile. The legal entity, founding year, team size,
          locations, contact information and regulatory statements shown across this website are
          fictional examples. Published company announcements are identified separately.
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Jul 2, 2026", "Funding announcement"],
            ["EU", "Intended product market"],
            ["Demo", "Current website stage"],
          ].map(([value, label]) => (
            <div key={value} className="card-surface p-6">
              <p className="font-mono text-3xl text-white">{value}</p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>
        <section className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.05] p-6 md:p-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
            Company credibility record
          </p>
          <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-xl font-semibold text-white">Backed by Dlabs</h2>
              <p className="mt-2 font-mono text-2xl text-white">$505K funding</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                ["Dlabs portfolio", "https://d-labs-site.vercel.app/companies"],
                ["LinkedIn", "https://www.linkedin.com/company/wastexa/"],
                ["Crunchbase", "https://www.crunchbase.com/organization/wastexa"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-white/65 transition hover:text-primary focus-visible:text-primary"
                >
                  {label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Explore the Wastexa product concept.
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Wastexa Sp. z o.o. · Prosta 70, 00-838 Warsaw · Poland
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
