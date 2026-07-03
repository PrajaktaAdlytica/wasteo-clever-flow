import {
  BarChart3,
  Bell,
  LayoutDashboard,
  MapPin,
  PieChart,
  Recycle,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react";

/**
 * Full platform dashboard shell for the "Platform" section.
 * Widgets: Waste Generated, Recovery Rate, Disposal Cost, Material Categories,
 * Site Performance, CO2 Reduction, Collection Schedule, AI Recommendations,
 * Monthly Savings.
 */
export function WasteDashboard() {
  const nav = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: MapPin, label: "Sites" },
    { icon: Recycle, label: "Waste Streams" },
    { icon: BarChart3, label: "Analytics" },
    { icon: PieChart, label: "Reports" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="glass-strong rounded-2xl p-4 md:p-5">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="col-span-3 rounded-xl border border-white/8 bg-black/30 p-3">
          <div className="flex items-center gap-2 px-2 pb-3 pt-1">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 text-primary"><Recycle size={12} /></span>
            <span className="text-xs font-semibold text-white/80">Wasteo</span>
          </div>
          <nav className="space-y-1">
            {nav.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.label}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs ${n.active ? "bg-primary/15 text-primary" : "text-white/60 hover:text-white/80"}`}
                >
                  <Icon size={13} />
                  <span>{n.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <div className="col-span-9 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Dashboard</p>
            <div className="flex gap-2">
              <span className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/70">All Sites ▾</span>
              <span className="rounded-md border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/70">This Month ▾</span>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            <Kpi label="Waste Generated" value="12,450 t" delta="+2.5% vs last month" tone="white" />
            <Kpi label="Recovery Rate" value="89%" delta="+5.2% vs last month" tone="primary" />
            <Kpi label="Disposal Cost" value="€1.24M" delta="-8.3% vs last month" tone="accent" negativeGood />
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-3 gap-3">
            <Card title="Material Categories">
              <div className="flex items-center gap-4">
                <Donut />
                <div className="space-y-1.5 text-[10px]">
                  {[
                    ["Plastic", "42%", "bg-info"],
                    ["Metal", "28%", "bg-white/70"],
                    ["Paper", "16%", "bg-accent"],
                    ["Organic", "10%", "bg-primary"],
                    ["Other", "4%", "bg-white/30"],
                  ].map(([n, p, c]) => (
                    <div key={n} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${c}`} />
                      <span className="text-white/60 w-12">{n}</span>
                      <span className="text-white/80 font-mono">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            <Card title="Site Performance">
              <p className="mb-2 text-[10px] text-white/50">Top 5 Sites</p>
              <div className="space-y-1.5">
                {[
                  ["Site A", 92],
                  ["Site B", 84],
                  ["Site C", 78],
                  ["Site D", 65],
                  ["Site E", 52],
                ].map(([n, v]) => (
                  <div key={n} className="flex items-center gap-2 text-[10px]">
                    <span className="w-10 text-white/60">{n}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-info" style={{ width: `${v}%` }} />
                    </div>
                    <span className="w-6 font-mono text-white/70 text-right">{v}%</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="CO₂ Reduction" trailing={<TrendingUp size={12} className="text-primary" />}>
              <p className="font-mono text-2xl text-white">3,450 <span className="text-sm text-white/50">t</span></p>
              <p className="text-[10px] text-primary">+18.7% vs last month</p>
              <MiniChart />
            </Card>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-3 gap-3">
            <Card title="Collection Schedule">
              <p className="mb-2 text-[10px] text-white/50">Next 7 Days</p>
              <div className="space-y-1.5 text-[10px]">
                {[
                  ["Site A", "Tomorrow"],
                  ["Site B", "2 Oct"],
                  ["Site C", "3 Oct"],
                ].map(([s, d]) => (
                  <div key={s} className="flex items-center justify-between rounded border border-white/5 bg-white/[0.02] px-2 py-1.5">
                    <span className="text-white/70">{s}</span>
                    <span className="text-white/50">{d}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="AI Recommendations" trailing={<Sparkles size={12} className="text-primary" />}>
              <p className="mb-2 text-[10px] text-white/50">3 new recommendations</p>
              <ul className="space-y-1.5 text-[10px] text-white/70">
                <li className="flex gap-1.5"><span className="text-primary">•</span> Improve segregation at Site A</li>
                <li className="flex gap-1.5"><span className="text-primary">•</span> Review frequent contamination</li>
                <li className="flex gap-1.5"><span className="text-primary">•</span> Increase cardboard recovery</li>
              </ul>
            </Card>
            <Card title="Monthly Savings">
              <p className="font-mono text-2xl text-white">€210K</p>
              <p className="text-[10px] text-primary">+14.3% vs last month</p>
              <MiniChart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, delta, negativeGood = false }: { label: string; value: string; delta: string; tone?: string; negativeGood?: boolean }) {
  const positive = delta.startsWith("+");
  const good = negativeGood ? !positive : positive;
  return (
    <div className="rounded-xl border border-white/8 bg-black/30 p-4">
      <p className="text-[10px] text-white/50">{label}</p>
      <p className="mt-1 font-mono text-2xl font-semibold text-white">{value}</p>
      <p className={`mt-1 text-[10px] ${good ? "text-primary" : "text-danger"}`}>{delta}</p>
    </div>
  );
}

function Card({ title, trailing, children }: { title: string; trailing?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/8 bg-black/30 p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[11px] font-medium text-white/70">{title}</p>
        {trailing}
      </div>
      {children}
    </div>
  );
}

function Donut() {
  // simple donut using conic-gradient
  return (
    <div
      className="relative h-16 w-16 rounded-full"
      style={{
        background:
          "conic-gradient(#38BDF8 0 42%, rgba(255,255,255,0.6) 42% 70%, #F59E0B 70% 86%, #22C55E 86% 96%, rgba(255,255,255,0.25) 96% 100%)",
      }}
    >
      <div className="absolute inset-2 rounded-full bg-[#0d1522]" />
    </div>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 100 24" className="mt-2 h-8 w-full">
      <defs>
        <linearGradient id="mc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 18 L10 15 L20 17 L30 12 L40 14 L50 8 L60 11 L70 6 L80 9 L90 4 L100 6 L100 24 L0 24 Z" fill="url(#mc)" />
      <path d="M0 18 L10 15 L20 17 L30 12 L40 14 L50 8 L60 11 L70 6 L80 9 L90 4 L100 6" stroke="#22C55E" strokeWidth="1" fill="none" />
    </svg>
  );
}
