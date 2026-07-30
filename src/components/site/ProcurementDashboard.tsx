import {
  BarChart3,
  Bell,
  FileCheck2,
  LayoutDashboard,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const suppliers = [
  { name: "NordForm Sp. z o.o.", country: "Poland", match: "92%", risk: "Low", quote: "€184k" },
  { name: "Baltic Components", country: "Lithuania", match: "89%", risk: "Low", quote: "€179k" },
  { name: "Vela Manufacturing", country: "Czechia", match: "86%", risk: "Review", quote: "€176k" },
];

export function ProcurementDashboard() {
  const nav = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: Search, label: "Find" },
    { icon: FileCheck2, label: "RFQs" },
    { icon: ShieldCheck, label: "Risk" },
    { icon: Users, label: "Suppliers" },
    { icon: BarChart3, label: "Reports" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className="glass-strong rounded-2xl p-4 md:p-5"
      aria-label="Illustrative Wastexa procurement dashboard"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
          Illustrative product data
        </p>
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-primary">
          Demo workspace
        </span>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <aside className="col-span-3 rounded-xl border border-white/8 bg-black/30 p-3">
          <div className="flex items-center gap-2 px-2 pb-3 pt-1">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Sparkles size={12} />
            </span>
            <span className="text-xs font-semibold text-white/80">Wastexa</span>
          </div>
          <nav className="space-y-1" aria-label="Illustrative product navigation">
            {nav.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs ${item.active ? "bg-primary/15 text-primary" : "text-white/60"}`}
                >
                  <Icon size={13} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="col-span-9 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Sourcing workspace</p>
              <p className="text-[10px] text-white/45">Packaging components · EU region</p>
            </div>
            <span className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/70">
              Q3 2026 ▾
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Kpi label="Suppliers shortlisted" value="12" detail="from 148 matches" />
            <Kpi label="RFQ responses" value="8 / 10" detail="2 due Friday" tone="primary" />
            <Kpi label="Documents reviewed" value="94%" detail="3 need attention" tone="accent" />
          </div>

          <div className="overflow-hidden rounded-xl border border-white/8 bg-black/25">
            <div className="flex items-center justify-between border-b border-white/8 px-3 py-2.5">
              <p className="text-[11px] font-medium text-white/70">Supplier comparison</p>
              <p className="text-[9px] uppercase tracking-wider text-white/35">Example data</p>
            </div>
            <div className="divide-y divide-white/5">
              {suppliers.map((supplier) => (
                <div
                  key={supplier.name}
                  className="grid grid-cols-[1.5fr_.8fr_.55fr_.65fr] items-center gap-2 px-3 py-2.5 text-[10px]"
                >
                  <div>
                    <p className="font-medium text-white/80">{supplier.name}</p>
                    <p className="text-white/40">{supplier.country}</p>
                  </div>
                  <span className="font-mono text-primary">{supplier.match} match</span>
                  <span className={supplier.risk === "Low" ? "text-primary" : "text-accent"}>
                    {supplier.risk}
                  </span>
                  <span className="text-right font-mono text-white/75">{supplier.quote}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/8 bg-black/25 p-3">
              <p className="text-[11px] font-medium text-white/70">Risk signals</p>
              <div className="mt-2 space-y-2">
                <Signal label="Financial stability" status="Clear" />
                <Signal label="Sanctions screening" status="Clear" />
                <Signal label="Certificate expiry" status="1 review" warn />
              </div>
            </div>
            <div className="rounded-xl border border-white/8 bg-black/25 p-3">
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-primary" />
                <p className="text-[11px] font-medium text-white/70">Decision brief</p>
              </div>
              <p className="mt-2 text-[10px] leading-4 text-white/50">
                Baltic Components has the strongest price-to-risk balance. Confirm the ISO
                certificate renewal before award.
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-wider text-primary">
                Illustrative recommendation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  detail,
  tone = "white",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "white" | "primary" | "accent";
}) {
  const valueClass =
    tone === "primary" ? "text-primary" : tone === "accent" ? "text-accent" : "text-white";
  return (
    <div className="rounded-xl border border-white/8 bg-black/25 p-3">
      <p className="text-[10px] text-white/45">{label}</p>
      <p className={`mt-1 font-mono text-lg font-semibold ${valueClass}`}>{value}</p>
      <p className="mt-0.5 text-[9px] text-white/40">{detail}</p>
    </div>
  );
}

function Signal({
  label,
  status,
  warn = false,
}: {
  label: string;
  status: string;
  warn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between text-[10px]">
      <span className="text-white/50">{label}</span>
      <span className={warn ? "text-accent" : "text-primary"}>{status}</span>
    </div>
  );
}
