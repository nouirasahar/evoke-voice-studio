import logoAsset from "@/assets/evoke-logo.png.asset.json";

export function Logo({ className = "h-9 w-9", showWordmark = false }: { className?: string; showWordmark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt="EVOKE"
        className={className + " rounded-md object-cover"}
        style={{ filter: "drop-shadow(0 0 12px rgba(139,92,246,0.45))" }}
      />
      {showWordmark && (
        <span className="font-display text-lg font-semibold tracking-[0.25em] text-foreground">
          EVOKE
        </span>
      )}
    </div>
  );
}
