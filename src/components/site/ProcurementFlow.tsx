import {
  BadgeCheck,
  Building2,
  FileCheck2,
  FileSpreadsheet,
  Search,
  ShieldCheck,
} from "lucide-react";

export function ProcurementFlow() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-label="Illustrative sourcing workflow">
      <div className="pointer-events-none absolute -inset-8 -z-10">
        <div className="absolute right-4 top-4 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-info/10 blur-3xl" />
      </div>
      <div className="space-y-2.5">
        <Node icon={<FileSpreadsheet size={14} />} label="Sourcing requirement" tone="white" />
        <Connector />
        <div className="card-surface p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Supplier discovery
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["NordForm Sp. z o.o.", "92% match"],
              ["Baltic Components", "89% match"],
              ["Vela Manufacturing", "86% match"],
              ["Karst Packaging", "82% match"],
            ].map(([supplier, match]) => (
              <div
                key={supplier}
                className="rounded-md border border-white/8 bg-black/30 px-2.5 py-2"
              >
                <div className="flex items-center gap-2">
                  <Building2 size={11} className="shrink-0 text-primary" />
                  <span className="truncate text-[11px] text-white/80">{supplier}</span>
                </div>
                <p className="mt-1 text-[10px] text-white/45">{match} · illustrative</p>
              </div>
            ))}
          </div>
        </div>
        <Connector />
        <Node icon={<Search size={14} />} label="Evidence-based shortlist" tone="primary" />
        <Connector />
        <Node icon={<ShieldCheck size={14} />} label="Risk & compliance review" tone="info" />
        <Connector />
        <Node icon={<FileCheck2 size={14} />} label="Comparable RFQ responses" tone="accent" />
        <Connector />
        <Node
          icon={<BadgeCheck size={14} />}
          label="Auditable supplier decision"
          tone="primary"
          bold
        />
      </div>
    </div>
  );
}

function Node({
  icon,
  label,
  tone,
  bold = false,
}: {
  icon: React.ReactNode;
  label: string;
  tone: "white" | "primary" | "info" | "accent";
  bold?: boolean;
}) {
  const toneClass =
    tone === "primary"
      ? "text-primary border-primary/30 bg-primary/10"
      : tone === "info"
        ? "text-info border-info/30 bg-info/10"
        : tone === "accent"
          ? "text-accent border-accent/30 bg-accent/10"
          : "text-white/80 border-white/15 bg-white/5";
  return (
    <div
      className={`card-surface flow-node flex items-center gap-3 px-4 py-3 ${bold ? "border-primary/30" : ""}`}
    >
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-md border ${toneClass}`}
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-0.5" aria-hidden="true">
      <svg width="12" height="18" viewBox="0 0 12 18" className="text-primary/60">
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.4"
          className="flow-line"
        />
        <path
          d="M2 12 L6 17 L10 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
