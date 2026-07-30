import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Explore the Demo — WasteXa" },
      {
        name: "description",
        content:
          "Explore an illustrative WasteXa supplier discovery, RFQ and risk-review workflow.",
      },
    ],
  }),
  component: RequestDemo,
});

function RequestDemo() {
  const [done, setDone] = useState(false);
  const sizeId = useId();
  const messageId = useId();
  return (
    <SiteLayout>
      <Section
        eyebrow="Interactive Demo"
        title="See WasteXa on your supplier workflow."
        subtitle="Explore Find, RFQ and Risk through a realistic—but fully illustrative—European sourcing scenario."
      >
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.06] px-5 py-4 text-sm leading-6 text-white/70">
          <Sparkles className="mt-1 shrink-0 text-primary" size={16} />
          <p>
            This form is a frontend demonstration. Submitting it shows an example success state and
            does not send your information.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              [
                "30-minute illustrative walkthrough",
                "Focused on supplier discovery, RFQs and risk review.",
              ],
              ["European sourcing scenario", "Example organisations, regions and requirements."],
              ["No backend commitment", "The demo uses fictional data and simulated states."],
              [
                "Evidence-led product concept",
                "See how sources, documents and bids stay connected.",
              ],
            ].map(([title, description]) => (
              <div key={title} className="card-surface p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-1 text-xs text-white/60">{description}</p>
                  </div>
                </div>
              </div>
            ))}
            <blockquote className="card-surface p-5">
              <p className="text-sm italic leading-6 text-white/80">
                &ldquo;WasteXa pokazuje, jak połączyć discovery, RFQ i risk review w jednym procesie
                decyzyjnym.&rdquo;
              </p>
              <footer className="mt-4">
                <p className="text-xs font-medium text-white">Marta Dąbrowska</p>
                <p className="text-[11px] text-white/50">
                  Illustrative Head of Procurement, Saint-Gobain Polska
                </p>
              </footer>
            </blockquote>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setDone(true);
            }}
            className="glass-strong space-y-4 rounded-2xl p-8"
          >
            {done ? (
              <div
                className="flex flex-col items-center py-14 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="text-primary" size={40} />
                <h2 className="mt-4 text-xl font-semibold text-white">
                  Illustrative request complete.
                </h2>
                <p className="mt-2 max-w-sm text-sm text-white/60">
                  This demo did not transmit your information. In a production build, the team would
                  follow up here.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" placeholder="Anna Kowalska" autoComplete="name" />
                  <Field
                    label="Work Email"
                    placeholder="anna@company.eu"
                    type="email"
                    autoComplete="email"
                  />
                  <Field
                    label="Company"
                    placeholder="Example Manufacturing"
                    autoComplete="organization"
                  />
                  <Field
                    label="Job Title"
                    placeholder="Head of Procurement"
                    autoComplete="organization-title"
                  />
                  <Field label="Country" placeholder="Poland" autoComplete="country-name" />
                  <div>
                    <label
                      htmlFor={sizeId}
                      className="text-xs font-medium uppercase tracking-widest text-white/65"
                    >
                      Company Size
                    </label>
                    <select
                      id={sizeId}
                      name="companySize"
                      className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none focus:border-primary"
                    >
                      <option>1-50</option>
                      <option>51-250</option>
                      <option>251-1,000</option>
                      <option>1,000-5,000</option>
                      <option>5,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor={messageId}
                    className="text-xs font-medium uppercase tracking-widest text-white/65"
                  >
                    Message
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    rows={4}
                    placeholder="Tell us about your sourcing workflow and what you would like to explore."
                    className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary"
                  />
                </div>
                <button type="submit" className="liquid-btn w-full">
                  Show Demo Confirmation
                </button>
                <p className="text-center text-[11px] text-white/45">
                  No information is sent or stored.
                </p>
              </>
            )}
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-widest text-white/65">
        {label}
      </label>
      <input
        id={id}
        name={props.name ?? id}
        {...props}
        className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary"
      />
    </div>
  );
}
