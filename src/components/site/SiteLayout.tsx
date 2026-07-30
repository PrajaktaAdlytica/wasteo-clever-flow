import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoNotice } from "./DemoNotice";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-app">
      <Navbar />
      <main className="pt-16">
        <DemoNotice />
        {children}
      </main>
      <Footer />
    </div>
  );
}
