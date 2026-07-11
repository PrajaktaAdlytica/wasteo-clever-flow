import logoUrl from "@/assets/wastexa-logo.svg?url";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoUrl} alt="WasteXa" className="h-full w-auto object-contain" />
    </div>
  );
}
