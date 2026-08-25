import { cn } from "@/lib/utils";

const WP: Record<string, string> = {
  bloom: "wp-bloom",
  flow: "wp-flow",
  dusk: "wp-dusk",
  forest: "wp-forest",
  night: "wp-night",
  accent: "wp-accent",
};

export function Wallpaper({
  id,
  className,
  dim,
}: {
  id: string;
  className?: string;
  dim?: boolean;
}) {
  return (
    <div
      className={cn("absolute inset-0", WP[id] ?? "wp-bloom", className)}
      aria-hidden
    >
      {id === "bloom" ? (
        <div
          className="absolute inset-x-0 bottom-0 h-3/5 opacity-50"
          style={{
            background:
              "conic-gradient(from 210deg at 50% 100%, transparent 0deg, rgb(255 255 255 / 18%) 6deg, transparent 14deg, transparent 22deg, rgb(255 255 255 / 10%) 28deg, transparent 38deg, transparent 50deg, rgb(255 255 255 / 14%) 56deg, transparent 68deg)",
          }}
        />
      ) : null}
      {dim ? <div className="absolute inset-0 bg-black/45" /> : null}
    </div>
  );
}
