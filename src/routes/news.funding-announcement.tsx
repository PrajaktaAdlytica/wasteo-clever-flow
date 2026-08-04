import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Wastexa secures $505K in funding from Dlabs. — Wastexa";
const DESCRIPTION = "Wastexa has secured $505K in funding from Dlabs.";

export const Route = createFileRoute("/news/funding-announcement")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2026-07-02" },
    ],
    links: [{ rel: "canonical", href: "https://wastexa.com/news/funding-announcement" }],
  }),
  component: FundingAnnouncementPage,
});

function FundingAnnouncementPage() {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-24 md:pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
        >
          <ArrowLeft size={15} aria-hidden="true" /> Back to Wastexa
        </Link>
        <article className="mt-10">
          <header className="border-b border-white/8 pb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Funding announcement
            </p>
            <time dateTime="2026-07-02" className="mt-4 block font-mono text-xs text-white/50">
              Jul 2, 2026
            </time>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Wastexa secures $505K in funding from Dlabs.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              Wastexa is part of Dlabs’ global portfolio of companies building circular operations
              for complex operating environments.
            </p>
          </header>

          <div className="grid gap-10 py-10 md:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-5 text-base leading-8 text-white/70">
              <p>Wastexa has secured $505K in funding from Dlabs.</p>
              <p>Wastexa operates in the circular operations sector.</p>
              <a
                href="https://d-labs-site.vercel.app/companies"
                target="_blank"
                rel="noreferrer noopener"
                className="liquid-btn mt-3"
              >
                View Dlabs portfolio <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <aside className="h-fit rounded-xl border border-white/8 bg-white/[0.025] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">
                Announcement details
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                {[
                  ["Date", "Jul 2, 2026"],
                  ["Funding", "$505K"],
                  ["Investor", "Dlabs"],
                  ["Sector", "Circular operations"],
                ].map(([term, detail]) => (
                  <div key={term} className="border-b border-white/6 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs text-white/40">{term}</dt>
                    <dd className="mt-1 text-white/85">{detail}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </article>
      </main>
    </SiteLayout>
  );
}
