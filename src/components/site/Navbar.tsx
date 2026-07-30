import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const products = [
  { to: "/products/find", label: "Wastexa Find", desc: "Discover qualified suppliers." },
  { to: "/products/rfq", label: "Wastexa RFQ", desc: "Collect comparable offers." },
  { to: "/products/risk", label: "Wastexa Risk", desc: "Review risk and compliance." },
];

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "Company" },
  { to: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Wastexa home">
          <Logo className="h-7" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm text-white/75 transition hover:text-white"
              aria-expanded={prodOpen}
              aria-haspopup="menu"
            >
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
          <Link to="/sign-in" className="text-sm text-white/75 transition hover:text-white">
            Sign In
          </Link>
          <Link to="/request-demo" className="liquid-btn">
            Request Demo
          </Link>
        </div>
        <button
          className="rounded-md p-2 text-white/80 transition hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto border-t border-white/10 bg-[#08101d]/[0.98] shadow-2xl backdrop-blur-2xl md:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6"
            aria-label="Mobile navigation"
          >
            {products.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {p.label}
              </Link>
            ))}
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/sign-in" onClick={() => setOpen(false)} className="flex-1 btn-ghost">
                Sign In
              </Link>
              <Link to="/request-demo" onClick={() => setOpen(false)} className="flex-1 liquid-btn">
                Request Demo
              </Link>
            </div>
            <p className="mt-6 border-t border-white/8 pt-5 text-xs leading-5 text-white/45">
              Illustrative demo website. All company and product data is fictional.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
