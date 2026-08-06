import { cn } from "@/lib/utils";

type GlobeProps = {
  className?: string;
};

function Globe({ className }: GlobeProps) {
  return (
    <div
      className={cn(
        "aspect-square w-full max-w-[650px] rounded-full",
        "bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.35),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.25),transparent_50%),radial-gradient(circle,rgba(16,185,129,0.15)_0%,transparent_70%)]",
        "dark:bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.2),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.15),transparent_50%),radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]",
        className
      )}
      aria-hidden="true"
    />
  );
}

export function GlobeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex items-center justify-center translate-y-6 sm:translate-y-4">
        <Globe className="w-[130%] sm:w-[115%] max-w-none opacity-90 dark:opacity-75 sm:opacity-85 sm:dark:opacity-70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background/85 dark:from-background/35 dark:via-background/55 dark:to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15 dark:from-background/25 dark:via-transparent dark:to-background/25" />
    </div>
  );
}
