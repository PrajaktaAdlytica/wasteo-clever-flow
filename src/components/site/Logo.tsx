import logoUrl from "@/assets/wasteo-logo.svg";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoUrl} alt="Wasteo" className="h-full w-auto object-contain" />
    </div>
  );
}
