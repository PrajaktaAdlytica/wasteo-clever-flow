import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/products/track", label: "WasteXa Track" },
      { to: "/products/cost", label: "WasteXa Cost" },
      { to: "/products/sort", label: "WasteXa Sort" },
      { to: "/products", label: "Platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Factories" },
      { to: "/solutions", label: "Manufacturers" },
      { to: "/solutions", label: "Retailers" },
      { to: "/solutions", label: "Municipalities" },
      { to: "/solutions", label: "Waste Operators" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/resources", label: "Documentation" },
      { to: "/resources", label: "Case Studies" },
      { to: "/resources", label: "Blog" },
      { to: "/resources", label: "Guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/about", label: "Careers" },
      { to: "/about", label: "Partners" },
      { to: "/about", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[#0a1120]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo className="h-8" />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              AI-powered waste intelligence platform helping industries transform waste into measurable value.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-primary/40 hover:text-primary">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/70 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Contact</p>
            <div className="mt-4 space-y-1.5 text-sm text-white/70">
              <p className="text-white/90">WasteXa Sp. z o.o.</p>
              <p>Prosta 70</p>
              <p>00-838 Warsaw</p>
              <p>Poland</p>
              <p className="pt-2"><a href="mailto:hello@wastexa.com" className="hover:text-primary">hello@wastexa.com</a></p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} WasteXa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white/70">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white/70">Terms of Service</Link>
            <Link to="/about" className="hover:text-white/70">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
