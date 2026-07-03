import { Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";

export type Tone = "primary" | "accent" | "info";

export function ProductTemplate({
  eyebrow,
  icon,
  title,
  subtitle,
  bullets,
  benefits,
  preview,
  tone,
  faqs,
}: {
  eyebrow: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bullets: string[];
  benefits: { t: string; d: string }[];
  preview: React.ReactNode;
  tone: Tone;
  faqs: [string, string][];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const toneBadge =
    tone === "primary" ? "text-primary border-primary/25 bg-primary/10" :
    tone === "accent" ? "text-accent border-accent/25 bg-accent/10" :
    "text-info border-info/25 bg-info/10";
  return (
    <>
      {/* Hero */}
      <Section>
        <Link to="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white">
          <ArrowLeft size={14} /> All products
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-widest ${toneBadge}`}>
              <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span>
              {eyebrow}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-white/60">{subtitle}</p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 size={16} className={`mt-0.5 ${tone === "primary" ? "text-primary" : tone === "accent" ? "text-accent" : "text-info"}`} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-3">
              <LiquidButton to="/request-demo">Request Demo</LiquidButton>
              <Link to="/products" className="btn-ghost">Compare products</Link>
            </div>
          </div>
          <div className="glass-strong rounded-2xl p-5">{preview}</div>
        </div>
      </Section>

      {/* Dashboard preview strip */}
      <Section eyebrow="Dashboard Preview" title="A realistic operational surface.">
        <div className="glass-strong rounded-2xl p-5">{preview}</div>
      </Section>

      {/* Features / Benefits */}
      <Section eyebrow="Benefits" title="Built for measurable outcomes.">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.t} className="card-surface p-6">
              <h3 className="text-base font-semibold text-white">{b.t}</h3>
              <p className="mt-2 text-sm text-white/60">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Answers before the demo call.">
        <div className="mx-auto max-w-3xl divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <button key={q} onClick={() => setOpen(isOpen ? null : i)} className="block w-full px-6 py-5 text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-white">{q}</span>
                  <ChevronDown size={18} className={`text-white/50 transition ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </div>
                <div className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-white/60">{a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-[#0d1a1a] via-[#0f1f18] to-[#0a1521] p-10 md:p-12">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Ready to see it on your waste data?
            </h2>
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
          </div>
        </div>
      </section>
    </>
  );
}
