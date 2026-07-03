import logoAsset from "@/assets/wasteo-logo.svg.asset.json";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoAsset.url} alt="Wasteo" className="h-full w-auto object-contain" />
    </div>
  );
}
