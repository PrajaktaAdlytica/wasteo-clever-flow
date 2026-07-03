import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  CheckCircle2,
  Eye,
  Euro,
  FileText,
  LayoutGrid,
  Recycle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";
import { WasteFlow } from "@/components/site/WasteFlow";
import { WasteDashboard } from "@/components/site/WasteDashboard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Problem />
      <TrustedBy />
      <Solution />
      <Platform />
      <Benefits />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/[0.06] to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-24 lg:grid-cols-[1.05fr_0.9fr] lg:pt-28">
        <div className="fade-up">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            AI Waste Intelligence Platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-[62px] lg:leading-[1.05]">
            Turn industrial waste into <span className="text-primary-solid">measurable value.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Track waste streams, understand disposal costs and optimise recycling performance from one intelligent operational platform.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            <Link to="/products" className="btn-ghost">
              Explore Platform
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
            {["ISO 14001 aligned", "EU data residency", "GDPR compliant", "SOC 2 in progress"].map((x) => (
              <span key={x} className="inline-flex items-center gap-2">
                <CheckCircle2 size={13} className="text-primary" /> {x}
              </span>
            ))}
          </div>
        </div>
        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <WasteFlow />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */

function Problem() {
  const items = [
    { t: "Manual Tracking", d: "Factories manually record waste data.", viz: <SpreadsheetViz /> },
    { t: "Unknown Costs", d: "Waste disposal costs are difficult to measure.", viz: <CostViz /> },
    { t: "Poor Visibility", d: "Sites cannot compare waste performance.", viz: <MapViz /> },
    { t: "Missed Recovery", d: "Recyclable materials are often lost.", viz: <RecoveryViz /> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Waste data shouldn't live in spreadsheets.
      </h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.t} className="card-surface p-5">
            <h3 className="text-base font-semibold text-white">{it.t}</h3>
            <p className="mt-2 text-sm text-white/60">{it.d}</p>
            <div className="mt-4 h-24 rounded-md border border-white/8 bg-black/30 p-3">
              {it.viz}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SpreadsheetViz() {
  return (
    <div className="flex h-full items-center justify-between gap-2">
      <div className="grid h-full flex-1 grid-cols-3 grid-rows-4 gap-0.5 rounded-sm border border-white/10 bg-white/5 p-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-[1px] bg-white/10" />
        ))}
      </div>
      <ArrowRight size={14} className="text-primary" />
      <svg viewBox="0 0 60 40" className="h-full flex-1">
        <rect x="4" y="24" width="6" height="12" fill="#22C55E" opacity="0.7" />
        <rect x="14" y="16" width="6" height="20" fill="#22C55E" opacity="0.8" />
        <rect x="24" y="10" width="6" height="26" fill="#22C55E" opacity="0.9" />
        <rect x="34" y="20" width="6" height="16" fill="#22C55E" opacity="0.75" />
        <rect x="44" y="6" width="6" height="30" fill="#22C55E" />
      </svg>
    </div>
  );
}

function CostViz() {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-full">
      <defs>
        <linearGradient id="cv" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 32 L15 28 L30 30 L45 22 L60 18 L75 10 L100 4 L100 40 L0 40 Z" fill="url(#cv)" />
      <path d="M0 32 L15 28 L30 30 L45 22 L60 18 L75 10 L100 4" stroke="#F59E0B" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function MapViz() {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-full">
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 20 }).map((_, c) => {
          const on = Math.random() > 0.6;
          return <circle key={`${r}-${c}`} cx={c * 5 + 2} cy={r * 5 + 2} r="0.9" fill={on ? "#22C55E" : "#ffffff"} opacity={on ? 0.9 : 0.15} />;
        })
      )}
    </svg>
  );
}

function RecoveryViz() {
  return (
    <div className="flex h-full items-center justify-around">
      <Recycle size={22} className="text-primary" />
      <div className="flex flex-col gap-1">
        <div className="h-3 w-8 rounded-sm border border-white/15 bg-white/5" />
        <div className="h-3 w-8 rounded-sm border border-white/15 bg-white/5" />
      </div>
      <Recycle size={22} className="text-primary" />
    </div>
  );
}

/* ---------------- TRUSTED BY ---------------- */

const LOGOS = ["ORLEN", "LPP", "SAINT-GOBAIN", "Ciech", "ALBA", "VEOLIA", "STENA", "REMONDIS", "PGE", "SUEZ"];

function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-[#0a1120]/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          Trusted by industry leaders
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee flex w-max gap-16 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span key={i} className="text-xl font-bold tracking-tight text-white/45 transition hover:text-white/80">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */

function Solution() {
  const products = [
    { name: "Wasteo Track", desc: "Monitor waste generation across every facility.", tone: "primary" as const, viz: <TrackViz /> },
    { name: "Wasteo Cost", desc: "Understand disposal costs and identify savings.", tone: "accent" as const, viz: <CostAnalyticsViz /> },
    { name: "Wasteo Sort", desc: "Automatically classify waste streams using AI.", tone: "info" as const, viz: <SortViz /> },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">The Solution</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            One platform for industrial waste intelligence.
          </h2>
          <p className="mt-5 max-w-md text-base text-white/60">
            Monitor waste generation, classify materials, optimise recovery and reduce operational costs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {products.map((p) => {
            const border =
              p.tone === "primary" ? "border-primary/40" : p.tone === "accent" ? "border-accent/40" : "border-info/40";
            const icon =
              p.tone === "primary" ? <Recycle size={16} className="text-primary" /> :
              p.tone === "accent" ? <Euro size={16} className="text-accent" /> :
              <Brain size={16} className="text-info" />;
            const bg =
              p.tone === "primary" ? "bg-primary/10" : p.tone === "accent" ? "bg-accent/10" : "bg-info/10";
            return (
              <div key={p.name} className={`card-surface p-5 border ${border}`}>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${bg}`}>{icon}</span>
                  <p className="text-sm font-semibold text-white">{p.name}</p>
                </div>
                <p className="mt-2 text-xs text-white/60">{p.desc}</p>
                <div className="mt-4 rounded-md border border-white/8 bg-black/30 p-2.5 h-24">
                  {p.viz}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrackViz() {
  return (
    <svg viewBox="0 0 100 40" className="h-full w-full">
      <defs>
        <linearGradient id="tv" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 28 L15 24 L30 26 L45 18 L60 20 L75 12 L100 8 L100 40 L0 40 Z" fill="url(#tv)" />
      <path d="M0 28 L15 24 L30 26 L45 18 L60 20 L75 12 L100 8" stroke="#22C55E" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function CostAnalyticsViz() {
  return (
    <div className="flex h-full items-end justify-around gap-1.5 px-1">
      {[16, 22, 12, 26, 20, 28].map((h, i) => (
        <div key={i} className="w-3 rounded-sm bg-accent" style={{ height: `${h * 2}%`, opacity: 0.5 + i * 0.08 }} />
      ))}
    </div>
  );
}

function SortViz() {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="h-14 w-14 rounded-full"
        style={{
          background:
            "conic-gradient(#38BDF8 0 42%, #ffffff90 42% 70%, #F59E0B 70% 86%, #22C55E 86% 100%)",
        }}
      >
        <div className="m-2 h-10 w-10 rounded-full bg-[#0d1522]" />
      </div>
    </div>
  );
}

/* ---------------- PLATFORM ---------------- */

function Platform() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.55fr] lg:items-start">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Platform Overview</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            All waste intelligence. One operational dashboard.
          </h2>
          <p className="mt-5 max-w-md text-base text-white/60">
            Get real-time insights across your entire waste management operation.
          </p>
          <div className="mt-8">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
          </div>
        </div>
        <WasteDashboard />
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */

function Benefits() {
  const items = [
    { icon: Eye, t: "Real-time Monitoring" },
    { icon: Euro, t: "Lower Disposal Costs" },
    { icon: Recycle, t: "Higher Recovery Rates" },
    { icon: LayoutGrid, t: "Operational Visibility" },
    { icon: Brain, t: "AI Classification" },
    { icon: FileText, t: "Executive Reporting" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.6fr] lg:items-center">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Benefits</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[38px] md:leading-[1.1]">
            Built for measurable waste performance.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.t} className="card-surface flex flex-col items-center p-5 text-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={16} />
                </span>
                <p className="mt-3 text-xs font-medium leading-tight text-white">{it.t}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */

function Stats() {
  const stats = [
    ["18M", "tonnes", "Waste Processed"],
    ["2,300", "", "Sites Connected"],
    ["89%", "", "Recovery Rate"],
    ["€240M", "", "Annual Savings"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center gap-4">
        <p className="mr-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Trusted by Data</p>
        <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map(([v, unit, label]) => (
            <div key={label as string} className="flex items-baseline gap-2">
              <Counter value={v as string} />
              {unit && <span className="text-sm text-white/50">{unit}</span>}
              <span className="ml-2 text-xs text-white/60">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const num = parseFloat(value.replace(/[^\d.]/g, ""));
    if (!num) { setDisplay(value); return; }
    let started = false;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1400;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const v = num * (1 - Math.pow(1 - p, 3));
            const formatted = Number.isInteger(num) ? Math.floor(v).toLocaleString("en-US") : v.toFixed(1);
            setDisplay(value.replace(String(num), formatted));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className="font-mono text-2xl font-semibold text-white md:text-3xl">{display}</span>;
}

/* ---------------- PRICING ---------------- */

function Pricing() {
  const plans = [
    { n: "Track", tone: "primary", desc: "Monitor waste generation.", price: "€1,500", per: "/site/month", cta: "Request Demo" },
    { n: "Cost", tone: "accent", desc: "Analyse costs and savings.", price: "€1,800", per: "/site/month", cta: "Request Demo" },
    { n: "Sort", tone: "info", desc: "AI-powered waste classification.", price: "€2,200", per: "/site/month", cta: "Request Demo" },
    { n: "Enterprise", tone: "white", desc: "Custom solutions for complex operations.", price: "Contact Sales", per: "Volume pricing available", cta: "Contact Sales" },
  ];
  return (
    <Section eyebrow="Pricing" title="Simple, per-site pricing.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => {
          const border =
            p.tone === "primary" ? "border-l-primary" :
            p.tone === "accent" ? "border-l-accent" :
            p.tone === "info" ? "border-l-info" :
            "border-l-white/25";
          const text =
            p.tone === "primary" ? "text-primary" :
            p.tone === "accent" ? "text-accent" :
            p.tone === "info" ? "text-info" :
            "text-white";
          return (
            <div key={p.n} className={`card-surface p-6 border-l-2 ${border}`}>
              <p className={`text-sm font-semibold ${text}`}>{p.n}</p>
              <p className="mt-2 text-xs text-white/60">{p.desc}</p>
              {p.price.startsWith("€") ? (
                <>
                  <p className="mt-6 font-mono text-3xl font-semibold text-white">{p.price}<span className="ml-1 text-sm font-normal text-white/50">{p.per}</span></p>
                  <p className="text-[11px] text-white/50">Billed annually</p>
                </>
              ) : (
                <>
                  <p className="mt-6 text-lg font-semibold text-white">{p.price}</p>
                  <p className="text-[11px] text-white/50">{p.per}</p>
                </>
              )}
              <Link
                to="/request-demo"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-transparent px-4 py-2 text-xs font-semibold ${text} transition hover:bg-white/5 hover:border-white/30`}
              >
                {p.cta}
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    quote: "Wasteo pomógł nam znacząco poprawić segregację i obniżyć koszty wywozu odpadów.",
    name: "Jan Kowalski",
    role: "Kierownik Ochrony Środowiska, ORLEN",
  },
  {
    quote: "Dzięki Wasteo mamy pełną kontrolę nad strumieniami odpadów we wszystkich zakładach.",
    name: "Anna Nowak",
    role: "ESG Manager, LPP",
  },
  {
    quote: "AI klasyfikacja odpadów to przełom w naszej codziennej operacji.",
    name: "Piotr Zieliński",
    role: "Dyrektor Operacyjny, ALBA Polska",
  },
  {
    quote: "Widzimy dokładnie ile odpadów generuje każda lokalizacja — bez arkuszy kalkulacyjnych.",
    name: "Katarzyna Wiśniewska",
    role: "Head of Sustainability, Ciech",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const perView = 3;
  const max = TESTIMONIALS.length - perView;
  return (
    <Section eyebrow="Testimonials" title="From European waste operators.">
      <div className="relative">
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.slice(i, i + perView).map((t) => (
            <blockquote key={t.name} className="card-surface p-6">
              <p className="text-3xl text-primary/60 leading-none">"</p>
              <p className="mt-2 text-sm text-white/80">{t.quote}</p>
              <footer className="mt-6 border-t border-white/5 pt-4">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: max + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  ["What is Wasteo?", "Wasteo is an AI-powered waste intelligence platform that helps industrial operators track waste streams, understand disposal costs and optimise recycling performance."],
  ["How does AI classification work?", "Wasteo Sort uses computer vision and machine learning models trained on millions of material images to automatically classify waste streams by type, contamination and recyclability."],
  ["Can Wasteo integrate with our systems?", "Yes — Wasteo integrates with ERP, MES, IoT sensors, weighbridges and existing waste management software through open APIs and pre-built connectors."],
  ["Is my data secure?", "Your data is stored exclusively in the EU with region choice — Frankfurt, Warsaw or Paris — GDPR by design, ISO 27001 aligned and encrypted end-to-end."],
  ["How is pricing calculated?", "Pricing is per site, per month, billed annually. Enterprise volume pricing is available for operators with more than 20 sites."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.4fr] lg:items-start">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            Your questions, answered.
          </h2>
          <Link to="/resources" className="mt-8 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80">
            View all FAQ <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
          {FAQS.map(([q, a], idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={q}
                onClick={() => setOpen(isOpen ? null : idx)}
                className="block w-full px-6 py-5 text-left transition hover:bg-white/[0.02]"
              >
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
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-[#0d1a1a] via-[#0f1f18] to-[#0a1521] p-10 md:p-14">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Measure every tonne.<br />Optimise every decision.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <LiquidButton to="/request-demo">Request Demo</LiquidButton>
            <Link to="/about" className="btn-ghost">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
