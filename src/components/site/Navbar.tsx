import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const products = [
  { to: "/products/track", label: "Wasteo Track", desc: "Monitor waste generation." },
  { to: "/products/cost", label: "Wasteo Cost", desc: "Analyse disposal costs." },
  { to: "/products/sort", label: "Wasteo Sort", desc: "AI waste classification." },
];

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "Company" },
  { to: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#0B1220]/80 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-7" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-white/75 transition hover:text-white">
              Product <ChevronDown size={14} />
            </button>
            {prodOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-white/10 bg-[#111827] p-2 shadow-2xl">
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                    >
                      <p className="text-sm font-medium text-white">{p.label}</p>
                      <p className="text-xs text-white/50">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-white/75 transition hover:text-white"
              activeProps={{ className: "text-sm text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/sign-in"
            className="text-sm text-white/75 transition hover:text-white"
          >
            Sign In
          </Link>
          <Link
            to="/request-demo"
            className="liquid-btn"
          >
            Request Demo
          </Link>
        </div>
        <button
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0B1220]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {products.map((p) => (
              <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5">{p.label}</Link>
            ))}
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5">{n.label}</Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/sign-in" onClick={() => setOpen(false)} className="flex-1 btn-ghost">Sign In</Link>
              <Link to="/request-demo" onClick={() => setOpen(false)} className="flex-1 liquid-btn">Request Demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
