import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LiquidButton({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={`liquid-btn ${className}`}>
      {children}
    </Link>
  );
}
