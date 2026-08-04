import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  FileSearch,
  FileSpreadsheet,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { LiquidButton } from "@/components/site/LiquidButton";
import { ProcurementFlow } from "@/components/site/ProcurementFlow";
import { ProcurementDashboard } from "@/components/site/ProcurementDashboard";
import { EntryExperience } from "@/components/site/EntryExperience";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <EntryExperience />
      <Hero />
      <Problem />
      <TrustedBy />
      <ChapterTransition />
      <Solution />
      <Platform />
      <FundingAnnouncement />
      <Benefits />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}

function DemoLabel({ children = "Illustrative demo content" }: { children?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
      <Sparkles size={10} aria-hidden="true" />
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section id="main-product-story" className="relative scroll-mt-16 overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.9fr] lg:pt-24">
        <div className="hero-copy">
          <div className="fade-up">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              EU Supplier Intelligence & Sourcing
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-[62px] lg:leading-[1.05]">
              Find qualified suppliers.{" "}
              <span className="text-primary-solid">Compare bids. Act on risk.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Bring supplier discovery, RFQs, compliance documents and risk signals into one
              auditable workflow—before you make an award.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LiquidButton to="/products">Explore Interactive Demo</LiquidButton>
              <Link to="/request-demo" className="btn-ghost">
                Discuss a Pilot <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
              {[
                "EU-first workflow",
                "Evidence-led decisions",
                "Human-reviewed AI",
                "Auditable by design",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-primary" /> {item}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <DemoLabel children="Illustrative product capabilities" />
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="fade-up" style={{ animationDelay: "0.15s" }}>
            <ProcurementFlow />
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      icon: Search,
      t: "Fragmented Discovery",
      d: "Buyers search across directories, inboxes and browser tabs.",
    },
    {
      icon: FileSpreadsheet,
      t: "RFQ Spreadsheet Chaos",
      d: "Different bid formats make fair comparison slow and error-prone.",
    },
    {
      icon: FileSearch,
      t: "Document Blind Spots",
      d: "Certificates and compliance files expire without a clear owner.",
    },
    {
      icon: ShieldCheck,
      t: "Late Risk Checks",
      d: "Critical signals appear after the shortlist or award decision.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" data-reveal>
      <h2
        className="mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
        data-reveal
      >
        Supplier decisions shouldn&apos;t live across spreadsheets and inboxes.
      </h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.t}
              className="card-surface p-5"
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-white">{item.t}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{item.d}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const LOGOS = [
  "ORLEN",
  "LPP",
  "SAINT-GOBAIN",
  "Ciech",
  "ALBA",
  "VEOLIA",
  "STENA",
  "REMONDIS",
  "PGE",
  "SUEZ",
];

function TrustedBy() {
  return (
    <section className="relative border-y border-white/5 bg-[#0a1120]/60 py-12" data-reveal>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
            Illustrative customer examples
          </p>
          <DemoLabel children="No customer relationship is implied" />
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div
            className="marquee flex w-max gap-16 whitespace-nowrap"
            aria-label="Illustrative company names"
          >
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="text-xl font-bold tracking-tight text-white/40"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterTransition() {
  return (
    <section
      className="scroll-chapter overflow-hidden border-b border-white/5 py-16 md:py-20"
      aria-label="Wastexa sourcing workflow"
      data-reveal
    >
      <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
        One continuous decision trail
      </p>
      <div className="scroll-chapter-track" data-scroll-track>
        <span>Source</span>
        <i aria-hidden="true" />
        <span>Compare</span>
        <i aria-hidden="true" />
        <span>Verify</span>
        <i aria-hidden="true" />
        <span>Award</span>
      </div>
    </section>
  );
}

function Solution() {
  const products = [
    {
      name: "Wastexa Find",
      icon: Search,
      desc: "Build evidence-backed supplier shortlists by capability, location and fit.",
      tone: "primary",
      to: "/products/find",
    },
    {
      name: "Wastexa RFQ",
      icon: FileCheck2,
      desc: "Collect, normalise and compare supplier responses in one workspace.",
      tone: "accent",
      to: "/products/rfq",
    },
    {
      name: "Wastexa Risk",
      icon: ShieldCheck,
      desc: "Review risk signals, documents and freshness before award.",
      tone: "info",
      to: "/products/risk",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-32" data-reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            The Platform
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            One supplier decision workflow. Three focused products.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/60">
            Move from first search to a defensible award without losing the source, document, quote
            or approval behind the decision.
          </p>
        </div>
        <div className="grid gap-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            const tone =
              product.tone === "primary"
                ? "text-primary border-primary/30 bg-primary/10"
                : product.tone === "accent"
                  ? "text-accent border-accent/30 bg-accent/10"
                  : "text-info border-info/30 bg-info/10";
            return (
              <Link
                key={product.name}
                to={product.to}
                className="card-surface group grid min-h-52 gap-8 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                <span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${tone}`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="mt-5 block text-xl font-semibold text-white">
                    {product.name}
                  </span>
                  <span className="mt-2 block max-w-lg text-sm leading-6 text-white/60">
                    {product.desc}
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary transition group-hover:border-primary/40 group-hover:bg-primary/10">
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.62fr] lg:items-start">
        <div className="lg:sticky lg:top-32" data-reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Platform Overview
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            Every supplier decision, connected and explainable.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/60">
            Compare supplier fit, quote value, document status and risk evidence without rebuilding
            another spreadsheet.
          </p>
          <div className="mt-8">
            <LiquidButton to="/request-demo">Discuss a Pilot</LiquidButton>
          </div>
        </div>
        <div data-reveal style={{ "--reveal-delay": "100ms" } as CSSProperties}>
          <ProcurementDashboard />
        </div>
      </div>
    </section>
  );
}

function FundingAnnouncement() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16" data-reveal>
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-[#0b1622] px-6 py-8 md:px-10 md:py-10">
        <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Funding announcement
            </p>
            <p className="mt-3 font-mono text-xs text-white/55">Jul 2, 2026</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-4xl md:leading-tight">
              Wastexa secures $505K in funding from Dlabs.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/65 md:text-base md:leading-7">
              Wastexa is part of Dlabs’ global portfolio of companies building circular operations
              for complex operating environments.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://d-labs-site.vercel.app/companies"
                target="_blank"
                rel="noreferrer noopener"
                className="liquid-btn"
              >
                View Dlabs portfolio <ArrowRight size={16} />
              </a>
              <Link to="/news/funding-announcement" className="btn-ghost">
                Read announcement <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Search, t: "Faster Shortlists" },
    { icon: FileCheck2, t: "Comparable RFQs" },
    { icon: ShieldCheck, t: "Earlier Risk Review" },
    { icon: BadgeCheck, t: "Auditable Evidence" },
    { icon: Users, t: "Supplier Collaboration" },
    { icon: Scale, t: "Defensible Awards" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16" data-reveal>
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.6fr] lg:items-center">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Benefits
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[38px] md:leading-[1.1]">
            Built for better supplier decisions.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.t}
                className="card-surface flex flex-col items-center p-5 text-center"
                data-reveal
                style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={16} />
                </span>
                <p className="mt-3 text-xs font-medium leading-tight text-white">{item.t}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["48%", "Faster shortlist"],
    ["36h", "Saved per RFQ"],
    ["94%", "Document coverage"],
    ["€1.8M", "Modelled opportunity"],
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12" data-reveal>
      <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Illustrative demo metrics
            </p>
            <p className="mt-2 text-xs text-white/45">
              Example outcomes only—not customer results or performance promises.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                data-reveal
                style={{ "--reveal-delay": `${index * 65}ms` } as CSSProperties}
              >
                <p className="font-mono text-2xl font-semibold text-white md:text-3xl">{value}</p>
                <p className="mt-1 text-xs text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      n: "Find",
      tone: "primary",
      desc: "Supplier discovery and shortlisting.",
      price: "€1,500",
      per: "/workspace/month",
    },
    {
      n: "RFQ",
      tone: "accent",
      desc: "Structured RFQs and bid comparison.",
      price: "€1,800",
      per: "/workspace/month",
    },
    {
      n: "Risk",
      tone: "info",
      desc: "Risk signals and document review.",
      price: "€2,200",
      per: "/workspace/month",
    },
    {
      n: "Platform",
      tone: "white",
      desc: "Connected sourcing for larger teams.",
      price: "Custom",
      per: "Illustrative packaging",
    },
  ];
  return (
    <Section
      eyebrow="Illustrative Pricing"
      title="Simple module-based packaging."
      subtitle="Example pricing for this demo—not a commercial offer."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => {
          const border =
            plan.tone === "primary"
              ? "border-l-primary"
              : plan.tone === "accent"
                ? "border-l-accent"
                : plan.tone === "info"
                  ? "border-l-info"
                  : "border-l-white/25";
          const text =
            plan.tone === "primary"
              ? "text-primary"
              : plan.tone === "accent"
                ? "text-accent"
                : plan.tone === "info"
                  ? "text-info"
                  : "text-white";
          return (
            <div key={plan.n} className={`card-surface border-l-2 p-6 ${border}`}>
              <p className={`text-sm font-semibold ${text}`}>{plan.n}</p>
              <p className="mt-2 text-xs text-white/60">{plan.desc}</p>
              <p className="mt-6 font-mono text-2xl font-semibold text-white">
                {plan.price}
                {plan.price.startsWith("€") && (
                  <span className="ml-1 text-xs font-normal text-white/50">{plan.per}</span>
                )}
              </p>
              {!plan.price.startsWith("€") && (
                <p className="mt-1 text-[11px] text-white/45">{plan.per}</p>
              )}
              <Link
                to="/request-demo"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-primary/40 hover:bg-white/5"
              >
                Discuss a Pilot
              </Link>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Wastexa pozwoliła nam porównać dostawców na podstawie tych samych kryteriów, bez kolejnego arkusza.",
    name: "Jan Kowalski",
    role: "Illustrative Procurement Director, ORLEN",
  },
  {
    quote:
      "Dokumenty, ryzyko i oferty są w jednym miejscu, więc zespół widzi pełny kontekst decyzji.",
    name: "Anna Nowak",
    role: "Illustrative Strategic Sourcing Lead, LPP",
  },
  {
    quote:
      "Zespół szybciej tworzy shortlistę i potrafi wyjaśnić, dlaczego dostawca został rekomendowany.",
    name: "Piotr Zieliński",
    role: "Illustrative Supply Chain Director, ALBA Polska",
  },
];

function Testimonials() {
  return (
    <Section
      eyebrow="Illustrative Testimonials"
      title="Example feedback from European sourcing teams."
      subtitle="Fictional people and quotes shown only to demonstrate the intended page experience."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <blockquote
            key={testimonial.name}
            className="card-surface p-6"
            data-reveal
            style={{ "--reveal-delay": `${index * 75}ms` } as CSSProperties}
          >
            <p className="text-3xl leading-none text-primary/60">&ldquo;</p>
            <p className="mt-2 text-sm leading-6 text-white/80">{testimonial.quote}</p>
            <footer className="mt-6 border-t border-white/5 pt-4">
              <p className="text-sm font-medium text-white">{testimonial.name}</p>
              <p className="text-xs text-white/50">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

const FAQS = [
  [
    "What is Wastexa?",
    "Wastexa is an illustrative supplier intelligence and sourcing workspace for European procurement teams. This website demonstrates the intended product experience.",
  ],
  [
    "How does supplier matching work?",
    "The demo shows capability, geography and requirement-fit signals with explainable match reasons. All suppliers and scores displayed are fictional.",
  ],
  [
    "Can suppliers respond without an account?",
    "The proposed RFQ workflow supports secure response links, structured bid templates and clarification threads. This is an illustrative capability.",
  ],
  [
    "How is supplier risk explained?",
    "Risk cards separate source, freshness, severity and review status so buyers can inspect evidence before an award. Demo signals are fictional.",
  ],
  [
    "Is the product production-ready?",
    "No. This is an illustrative demo website and product concept. Certifications, hosting regions, pricing and outcomes shown are examples only.",
  ],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" data-reveal>
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.4fr] lg:items-start">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
            Your questions, answered.
          </h2>
          <Link
            to="/resources"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80"
          >
            View resources <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
          {FAQS.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <button
                key={question}
                onClick={() => setOpen(isOpen ? null : index)}
                className="block w-full px-6 py-5 text-left transition hover:bg-white/[0.02]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-white">{question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-white/50 transition ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-6 text-white/60">{answer}</p>
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

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20" data-reveal>
      <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-[#0d1a1a] via-[#0f1f18] to-[#0a1521] p-10 md:p-14">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              From supplier search to defensible award.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/55">
              Explore an illustrative workflow or discuss how a real pilot could be scoped.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LiquidButton to="/products">Explore Demo</LiquidButton>
            <Link to="/request-demo" className="btn-ghost">
              Discuss a Pilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
