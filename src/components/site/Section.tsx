import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 ${className}`} data-reveal>
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-[42px] md:leading-[1.1]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
