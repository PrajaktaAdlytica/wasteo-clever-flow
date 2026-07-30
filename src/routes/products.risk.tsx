import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/risk")({
  head: () => ({
    meta: [
      { title: "Wastexa Risk — Supplier risk and compliance review" },
      {
        name: "description",
        content:
          "Inspect supplier risk signals, evidence freshness and compliance-document status before award.",
      },
    ],
  }),
  component: RiskPage,
});

function RiskPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="info"
        eyebrow="Wastexa Risk"
        icon={<ShieldCheck size={12} />}
        title="See the evidence behind every supplier-risk signal."
        subtitle="Bring financial, sanctions, operational and compliance evidence into the sourcing decision with visible sources, dates and review status."
        bullets={[
          "Supplier risk taxonomy with source and freshness",
          "Certificate collection, expiry and review status",
          "Entity, location and event-level context",
          "Alerts, reviewer notes and pre-award approval history",
        ]}
        benefits={[
          {
            t: "Earlier intervention",
            d: "Surface review items while the shortlist and RFQ are still open.",
          },
          {
            t: "Explainable signals",
            d: "Separate source facts, supplier evidence and generated summaries.",
          },
          {
            t: "Audit-ready context",
            d: "Keep dates, reviewers and decisions attached to every risk item.",
          },
        ]}
        preview={<RiskPreview />}
        faqs={[
          [
            "Does Wastexa guarantee compliance?",
            "No. The proposed workflow helps teams collect and review evidence; it does not provide legal advice or guarantee compliance.",
          ],
          [
            "How fresh are risk signals?",
            "A production version would display source-specific refresh timestamps. Dates shown in this demo are fictional.",
          ],
          [
            "Can suppliers update documents?",
            "The proposed flow supports secure supplier uploads followed by internal review and approval.",
          ],
        ]}
      />
    </SiteLayout>
  );
}

function RiskPreview() {
  const signals = [
    ["Sanctions screening", "Clear", "Checked 2h ago", "text-primary"],
    ["Financial stability", "Monitor", "Updated 4 days ago", "text-accent"],
    ["ISO 9001 certificate", "Valid", "Expires 14 Mar 2027", "text-primary"],
    ["Cyber questionnaire", "Review", "2 answers missing", "text-accent"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">
          NORDForm SP. Z O.O. · EXAMPLE DATA
        </p>
        <span className="rounded-full bg-info/15 px-2 py-0.5 text-[10px] font-semibold text-info">
          LOW–MEDIUM
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Signals", "12"],
          ["Clear", "9"],
          ["Review", "3"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/8 bg-black/30 p-3">
            <p className="text-[10px] text-white/45">{label}</p>
            <p className="mt-1 font-mono text-lg text-white/80">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 divide-y divide-white/5 overflow-hidden rounded-lg border border-white/8 bg-black/25">
        {signals.map(([label, status, detail, color]) => (
          <div
            key={label}
            className="grid grid-cols-[1.2fr_.5fr_1fr] items-center gap-3 px-3 py-3 text-[10px]"
          >
            <span className="font-medium text-white/75">{label}</span>
            <span className={color}>{status}</span>
            <span className="text-right text-white/40">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
