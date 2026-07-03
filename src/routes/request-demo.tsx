import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Wasteo" },
      { name: "description", content: "30-minute walkthrough of Wasteo on your own waste operation." },
      { property: "og:title", content: "Request a Demo — Wasteo" },
      { property: "og:description", content: "30-minute walkthrough on your own waste operation." },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  const [done, setDone] = useState(false);
  return (
    <SiteLayout>
      <Section
        eyebrow="Request Demo"
        title="See Wasteo on your own waste operation."
        subtitle="A European solutions engineer walks you through Track, Cost and Sort using your reporting scenario."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              ["30-minute walkthrough", "Focused on your waste flows and reporting."],
              ["European team", "Solutions engineers in Warsaw, Berlin and Paris."],
              ["No hardware commitment", "Works with your existing scales and sensors."],
              ["EU data residency", "Frankfurt, Warsaw or Paris — your choice, contractual."],
            ].map(([t, d]) => (
              <div key={t} className="card-surface p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white">{t}</p>
                    <p className="mt-1 text-xs text-white/60">{d}</p>
                  </div>
                </div>
              </div>
            ))}
            <blockquote className="card-surface p-5">
              <p className="text-sm italic text-white/80">
                "Dzięki Wasteo zaczęliśmy naprawdę rozumieć koszty odpadów. Zwrot z inwestycji w pierwszym kwartale."
              </p>
              <footer className="mt-4">
                <p className="text-xs font-medium text-white">Marta Dąbrowska</p>
                <p className="text-[11px] text-white/50">Head of Operations, SAINT-GOBAIN Polska</p>
              </footer>
            </blockquote>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="glass-strong space-y-4 rounded-2xl p-8"
          >
            {done ? (
              <div className="flex flex-col items-center py-14 text-center">
                <CheckCircle2 className="text-primary" size={40} />
                <h3 className="mt-4 text-xl font-semibold text-white">Request received.</h3>
                <p className="mt-2 text-sm text-white/60">The Wasteo team will reach out within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" placeholder="Anna Kowalska" />
                  <Field label="Work Email" placeholder="anna@company.eu" type="email" />
                  <Field label="Company" placeholder="ORLEN" />
                  <Field label="Job Title" placeholder="Head of Sustainability" />
                  <Field label="Country" placeholder="Poland" />
                  <div>
                    <label className="text-xs font-medium uppercase tracking-widest text-white/60">Company Size</label>
                    <select className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-primary">
                      <option>1-50</option><option>51-250</option><option>251-1,000</option><option>1,000-5,000</option><option>5,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium uppercase tracking-widest text-white/60">Message</label>
                  <textarea rows={4} placeholder="Tell us about your waste operation and what you'd like to see." className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-primary" />
                </div>
                <button type="submit" className="liquid-btn w-full">Request Demo</button>
                <p className="text-center text-[11px] text-white/40">We reply within one business day.</p>
              </>
            )}
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-white/60">{label}</label>
      <input {...rest} className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary" />
    </div>
  );
}
