import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoNotice } from "./DemoNotice";
import { ScrollEffects } from "./ScrollEffects";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-app">
      <ScrollEffects />
      <Navbar />
      <main className="pt-16">
        <DemoNotice />
        {children}
      </main>
      <Footer />
    </div>
  );
}
