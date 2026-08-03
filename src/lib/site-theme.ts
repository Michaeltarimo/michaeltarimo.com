/** Shared site palette — emerald / teal / cyan */
export const siteTheme = {
  badge:
    "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 text-white shadow-md",
  panel:
    "rounded-2xl sm:rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-cyan-50/80 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/20",
  primaryBtn:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-medium transition-all min-h-11 px-5",
  contrastBtn:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98] font-medium transition-all min-h-11 px-5",
  outlineBtn:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 bg-background/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 active:scale-[0.98] text-foreground font-medium transition-all min-h-11 px-5",
  pill:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  pillAlt:
    "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  timelineSpine:
    "bg-gradient-to-b from-emerald-300 via-teal-300 to-cyan-300 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-800",
  dot: "bg-emerald-500",
  dotAlt: "bg-teal-500",
  cardBorder: "border-emerald-200/60 dark:border-emerald-900/40",
  cardBg: "bg-emerald-50/60 dark:bg-emerald-950/15",
  cardBgAlt: "bg-teal-50/60 dark:bg-teal-950/15",
  accent: "from-emerald-600 to-teal-500",
  accentAlt: "from-teal-600 to-cyan-500",
} as const;
