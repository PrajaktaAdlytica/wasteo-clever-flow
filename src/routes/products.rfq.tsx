import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/rfq")({
  head: () => ({
    meta: [
      { title: "WasteXa RFQ — Comparable supplier offers" },
      {
        name: "description",
        content:
          "Collect structured supplier responses and compare commercial and non-price criteria in one workspace.",
      },
    ],
  }),
  component: RfqPage,
});

function RfqPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="accent"
        eyebrow="WasteXa RFQ"
        icon={<FileCheck2 size={12} />}
        title="Collect comparable offers without rebuilding another spreadsheet."
        subtitle="Create a structured sourcing event, invite suppliers, manage clarifications and compare price, terms, capacity and evidence side by side."
        bullets={[
          "Reusable RFQ templates and structured bid sheets",
          "Supplier invitation, clarification and response tracking",
          "Automatic unit, currency and commercial-term normalisation",
          "Multi-criteria comparison with review notes and approvals",
        ]}
        benefits={[
          {
            t: "Comparable responses",
            d: "Keep supplier bids in the same structure from first response to final revision.",
          },
          {
            t: "Less coordination",
            d: "Track invitations, questions, due dates and missing fields in one event workspace.",
          },
          {
            t: "Transparent awards",
            d: "Preserve commercial assumptions and reviewer decisions alongside the recommendation.",
          },
        ]}
        preview={<RfqPreview />}
        faqs={[
          [
            "Do suppliers need an account?",
            "The proposed demo flow supports secure response links and optional supplier accounts. This is an illustrative capability.",
          ],
          [
            "Can we compare landed cost?",
            "The interface can model unit price, logistics, tooling, duties and payment terms when those inputs are supplied.",
          ],
          [
            "Does AI select the winner?",
            "No. The proposed system summarises and normalises evidence; procurement reviewers retain the award decision.",
          ],
        ]}
      />
    </SiteLayout>
  );
}

function RfqPreview() {
  const rows = [
    ["NordForm", "€184,200", "6 weeks", "Net 45", "88"],
    ["Baltic Components", "€179,400", "8 weeks", "Net 30", "91"],
    ["Vela Manufacturing", "€176,800", "10 weeks", "Net 45", "76"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">RFQ 0264 · EXAMPLE DATA</p>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
          8 / 10 responses
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["Due", "12 Aug"],
          ["Currency", "EUR"],
          ["Award", "30 Aug"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/8 bg-black/30 p-3">
            <p className="text-[10px] text-white/45">{label}</p>
            <p className="mt-1 font-mono text-sm text-white/80">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 overflow-hidden rounded-lg border border-white/8 bg-black/25">
        <div className="grid grid-cols-[1.2fr_.8fr_.7fr_.7fr_.35fr] gap-2 border-b border-white/8 px-3 py-2 text-[9px] uppercase tracking-wider text-white/35">
          <span>Supplier</span>
          <span>Quote</span>
          <span>Lead</span>
          <span>Terms</span>
          <span>Score</span>
        </div>
        {rows.map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-[1.2fr_.8fr_.7fr_.7fr_.35fr] gap-2 border-b border-white/5 px-3 py-3 text-[10px] last:border-0"
          >
            <span className="font-medium text-white/80">{row[0]}</span>
            <span className="font-mono text-white/70">{row[1]}</span>
            <span className="text-white/55">{row[2]}</span>
            <span className="text-white/55">{row[3]}</span>
            <span className="text-accent">{row[4]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
