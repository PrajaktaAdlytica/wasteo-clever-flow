import { createFileRoute, Link } from "@tanstack/react-router";
import { useId, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/sign-in")({
  head: () => ({
    meta: [
      { title: "Sign In Demo — WasteXa" },
      {
        name: "description",
        content: "Illustrative sign-in screen for the WasteXa sourcing workspace.",
      },
    ],
  }),
  component: SignIn,
});

function SignIn() {
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();
  const [remember, setRemember] = useState(true);
  const [done, setDone] = useState(false);
  const [help, setHelp] = useState(false);
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-md flex-col items-center px-6 py-20">
        <Logo className="h-9" />
        <div className="mt-6 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/45">
          Illustrative authentication screen
        </div>
        <div className="mt-5 w-full glass-strong rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
          <p className="mt-1 text-sm text-white/60">
            Sign in to the illustrative WasteXa sourcing workspace.
          </p>
          {done ? (
            <div
              className="mt-6 rounded-md border border-primary/25 bg-primary/10 p-4"
              role="status"
              aria-live="polite"
            >
              <p className="text-sm font-medium text-primary">Demo sign-in complete.</p>
              <p className="mt-1 text-xs leading-5 text-white/55">
                No credentials were transmitted or stored.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setDone(true);
              }}
            >
              <div>
                <label
                  htmlFor={emailId}
                  className="text-xs font-medium uppercase tracking-widest text-white/65"
                >
                  Email
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.eu"
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor={passwordId}
                  className="text-xs font-medium uppercase tracking-widest text-white/65"
                >
                  Password
                </label>
                <input
                  id={passwordId}
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor={rememberId}
                  className="flex items-center gap-2 text-xs text-white/70"
                >
                  <input
                    id={rememberId}
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    className="h-3.5 w-3.5 rounded border-white/20 bg-black/30 accent-primary"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={() => setHelp((value) => !value)}
                  className="text-xs text-primary hover:text-primary/80"
                  aria-expanded={help}
                >
                  Forgot password?
                </button>
              </div>
              {help && (
                <p className="rounded-md border border-white/8 bg-white/[0.03] p-3 text-xs leading-5 text-white/55">
                  Password recovery is not connected in this illustrative demo.
                </p>
              )}
              <button type="submit" className="liquid-btn w-full">
                Sign In to Demo
              </button>
              <div className="relative py-2 text-center text-[11px] uppercase tracking-widest text-white/40">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/8" />
                <span className="relative bg-[#111827] px-2">or</span>
              </div>
              <button type="button" onClick={() => setDone(true)} className="btn-ghost w-full">
                Continue with Google
              </button>
              <button type="button" onClick={() => setDone(true)} className="btn-ghost w-full">
                Continue with Microsoft
              </button>
            </form>
          )}
        </div>
        <p className="mt-6 text-xs text-white/50">
          Don&apos;t have an account?{" "}
          <Link to="/request-demo" className="text-primary hover:text-primary/80">
            Explore the demo
          </Link>
        </p>
      </section>
    </SiteLayout>
  );
}
