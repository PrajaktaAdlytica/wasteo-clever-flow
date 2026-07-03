import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign In — Wasteo" },
      { name: "description", content: "Sign in to the Wasteo waste intelligence platform." },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const [remember, setRemember] = useState(true);
  const [done, setDone] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-md flex-col items-center px-6 py-20">
        <Logo className="h-9" />
        <div className="mt-8 w-full glass-strong rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-white/60">Sign in to your Wasteo operational dashboard.</p>
          {done ? (
            <p className="mt-6 rounded-md border border-primary/25 bg-primary/10 p-4 text-sm text-primary">
              Signed in — redirecting to your dashboard.
            </p>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            >
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-white/60">Email</label>
                <input type="email" required placeholder="you@company.eu" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-widest text-white/60">Password</label>
                <input type="password" required placeholder="••••••••" className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-white/70">
                  <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-3.5 w-3.5 rounded border-white/20 bg-black/30 accent-primary" />
                  Remember me
                </label>
                <a href="#" className="text-xs text-primary hover:text-primary/80">Forgot password?</a>
              </div>
              <button type="submit" className="liquid-btn w-full">Sign In</button>
              <div className="relative py-2 text-center text-[11px] uppercase tracking-widest text-white/40">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/8" />
                <span className="relative bg-[#111827] px-2">or</span>
              </div>
              <button type="button" className="btn-ghost w-full">Continue with Google</button>
              <button type="button" className="btn-ghost w-full">Continue with Microsoft</button>
            </form>
          )}
        </div>
        <p className="mt-6 text-xs text-white/50">
          Don't have an account?{" "}
          <Link to="/request-demo" className="text-primary hover:text-primary/80">Request a demo</Link>
        </p>
      </section>
    </SiteLayout>
  );
}
