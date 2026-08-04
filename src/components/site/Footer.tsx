import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/products/find", label: "Wastexa Find" },
      { to: "/products/rfq", label: "Wastexa RFQ" },
      { to: "/products/risk", label: "Wastexa Risk" },
      { to: "/products", label: "Platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Procurement Teams" },
      { to: "/solutions", label: "Manufacturers" },
      { to: "/solutions", label: "Retailers" },
      { to: "/solutions", label: "Supply Chain" },
      { to: "/solutions", label: "Risk & Compliance" },
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
      { to: "/news/funding-announcement", label: "Funding announcement" },
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
              Supplier intelligence and sourcing workspace for European procurement teams.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white/40">
              Illustrative demo website. Product screens, example organisations, pricing and
              performance metrics are illustrative. Published company announcements are identified
              separately.
            </p>
            <div className="mt-6 max-w-sm rounded-xl border border-primary/15 bg-primary/[0.05] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                Company record
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/80">
                <span>Backed by Dlabs</span>
                <span className="font-mono text-white">$505K funding</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                {[
                  ["Dlabs portfolio", "https://d-labs-site.vercel.app/companies"],
                  ["LinkedIn", "https://www.linkedin.com/company/wastexa/"],
                  ["Crunchbase", "https://www.crunchbase.com/organization/wastexa"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-white/60 transition hover:text-primary focus-visible:text-primary"
                  >
                    {label} <ArrowUpRight size={11} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/wastexa/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Wastexa on LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white/55 transition hover:border-primary/30 hover:text-primary"
              >
                <Linkedin size={14} />
              </a>
              {[Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Illustrative ${["X", "YouTube"][i]} link`}
                  title="Illustrative social link"
                  className="inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white/45"
                >
                  <Icon size={14} />
                </button>
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Contact
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-white/70">
              <p className="text-white/90">Wastexa Sp. z o.o.</p>
              <p>Prosta 70</p>
              <p>00-838 Warsaw</p>
              <p>Poland</p>
              <p className="pt-2">
                <a href="mailto:hello@wastexa.com" className="hover:text-primary">
                  hello@wastexa.com
                </a>
              </p>
              <p className="pt-1 text-[11px] text-white/40">Illustrative company details</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Wastexa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white/70">
              Privacy Policy (demo)
            </Link>
            <Link to="/about" className="hover:text-white/70">
              Terms (demo)
            </Link>
            <Link to="/about" className="hover:text-white/70">
              Cookies (demo)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
