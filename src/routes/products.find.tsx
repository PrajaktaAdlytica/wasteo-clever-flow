import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductTemplate } from "@/components/site/ProductTemplate";

export const Route = createFileRoute("/products/find")({
  head: () => ({
    meta: [
      { title: "Wastexa Find — Supplier discovery" },
      {
        name: "description",
        content:
          "Build evidence-backed supplier shortlists by capability, geography and requirement fit.",
      },
    ],
  }),
  component: FindPage,
});

function FindPage() {
  return (
    <SiteLayout>
      <ProductTemplate
        tone="primary"
        eyebrow="Wastexa Find"
        icon={<Search size={12} />}
        title="Build a supplier shortlist with evidence, not browser tabs."
        subtitle="Translate a sourcing requirement into a focused supplier search, inspect why each supplier matched and move the strongest candidates directly into an RFQ."
        bullets={[
          "Search by capability, geography, certification and category",
          "Visible match reasons, confidence and source freshness",
          "Supplier profiles with legal entity and document context",
          "Shortlist collaboration and direct RFQ handoff",
        ]}
        benefits={[
          {
            t: "Faster discovery",
            d: "Move from an open-ended search to a focused, reviewable shortlist.",
          },
          {
            t: "Explainable matches",
            d: "See which requirement, source and evidence contributed to every result.",
          },
          {
            t: "Reusable intelligence",
            d: "Preserve supplier research for future categories and sourcing events.",
          },
        ]}
        preview={<FindPreview />}
        faqs={[
          [
            "Where does supplier data come from?",
            "The demo illustrates public, partner and supplier-submitted sources. A production methodology would document coverage and refresh cadence.",
          ],
          [
            "Are suppliers verified?",
            "No universal verification is claimed. The proposed workflow separates discovered, supplier-submitted and reviewer-confirmed evidence.",
          ],
          [
            "Can we import existing suppliers?",
            "The proposed experience supports structured CSV imports and entity matching. This is an illustrative capability.",
          ],
        ]}
      />
    </SiteLayout>
  );
}

function FindPreview() {
  const rows = [
    ["NordForm Sp. z o.o.", "Poland", "Stamped aluminium", "92%"],
    ["Baltic Components", "Lithuania", "Machined assemblies", "89%"],
    ["Vela Manufacturing", "Czechia", "Precision forming", "86%"],
    ["Karst Industries", "Slovakia", "Metal fabrication", "82%"],
  ];
  return (
    <div>
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium tracking-wide text-white/70">
          SUPPLIER DISCOVERY · EXAMPLE DATA
        </p>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
          148 matches
        </span>
      </div>
      <div className="mt-4 rounded-lg border border-white/8 bg-black/30 p-3">
        <p className="text-[10px] uppercase tracking-wider text-white/40">Requirement</p>
        <p className="mt-1 text-sm text-white/80">
          EU aluminium component manufacturer · ISO 9001 · 50k units/year
        </p>
      </div>
      <div className="mt-3 divide-y divide-white/5 overflow-hidden rounded-lg border border-white/8 bg-black/25">
        {rows.map(([name, country, capability, match]) => (
          <div
            key={name}
            className="grid grid-cols-[1.3fr_.7fr_1fr_.45fr] items-center gap-2 px-3 py-3 text-[10px]"
          >
            <span className="font-medium text-white/80">{name}</span>
            <span className="text-white/45">{country}</span>
            <span className="text-white/55">{capability}</span>
            <span className="text-right font-mono text-primary">{match}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
