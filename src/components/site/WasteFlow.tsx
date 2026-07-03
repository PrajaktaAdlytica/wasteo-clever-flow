import { Factory, Cpu, Recycle, Euro, LayoutDashboard, Package } from "lucide-react";

/**
 * Hero operational workflow: Factory → Waste Streams → AI Classification →
 * Recovery Rate → Cost Savings → Executive Dashboard.
 * Uses subtle flow animation only (no particles, no radar).
 */
export function WasteFlow() {
  const streams = [
    { label: "Plastic", color: "text-info" },
    { label: "Metal", color: "text-white/80" },
    { label: "Paper", color: "text-accent" },
    { label: "Organic", color: "text-primary" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-8 -z-10">
        <div className="absolute right-4 top-4 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-info/10 blur-3xl" />
      </div>

      <div className="space-y-2.5">
        <Node icon={<Factory size={14} />} label="Factory" tone="white" />
        <Connector />

        <div className="card-surface p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Waste Streams</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {streams.map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-md border border-white/8 bg-black/30 px-2.5 py-1.5">
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5 ${s.color}`}>
                  <Package size={10} />
                </span>
                <span className="text-xs text-white/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Connector />
        <Node icon={<Cpu size={14} />} label="AI Classification" tone="primary" />
        <Connector />
        <Node icon={<Recycle size={14} />} label="Recovery Rate" tone="info" />
        <Connector />
        <Node icon={<Euro size={14} />} label="Cost Savings" tone="accent" />
        <Connector />
        <Node icon={<LayoutDashboard size={14} />} label="Executive Dashboard" tone="primary" bold />
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
    <div className={`card-surface flow-node flex items-center gap-3 px-4 py-3 ${bold ? "border-primary/30" : ""}`}>
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md border ${toneClass}`}>
        {icon}
      </span>
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-0.5">
      <svg width="12" height="18" viewBox="0 0 12 18" className="text-primary/60">
        <line x1="6" y1="0" x2="6" y2="14" stroke="currentColor" strokeWidth="1.4" className="flow-line" />
        <path d="M2 12 L6 17 L10 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
