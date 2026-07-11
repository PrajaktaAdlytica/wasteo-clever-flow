import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WasteXa" },
      { name: "description", content: "WasteXa is a Warsaw-based waste intelligence platform for European industry." },
      { property: "og:title", content: "About — WasteXa" },
      { property: "og:description", content: "Warsaw-based waste intelligence for European industry." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <Section
        eyebrow="Company"
        title="Built in Warsaw. Trusted across Europe."
        subtitle="WasteXa is on a mission to turn industrial waste from a compliance burden into a measurable operational advantage."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["2022", "Founded in Warsaw"],
            ["45", "Team across EU"],
            ["EU27", "Regulatory ready"],
          ].map(([a, b]) => (
            <div key={a} className="card-surface p-6">
              <p className="font-mono text-3xl text-white">{a}</p>
              <p className="mt-2 text-sm text-white/60">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Talk to the WasteXa team.</h3>
              <p className="mt-2 text-sm text-white/60">WasteXa Sp. z o.o. · Prosta 70, 00-838 Warsaw · Poland</p>
              <p className="mt-1 text-sm text-white/60">hello@wastexa.com</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
