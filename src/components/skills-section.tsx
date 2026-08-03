"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import { ChevronDown, Code2, Stethoscope } from "lucide-react";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const MEDICINE_GROUPS = new Set([
  "Medical & Clinical",
  "Surgical Skills",
  "Research",
  "Community & Outreach",
]);

const levelDot = {
  Expert: "bg-emerald-500",
  Proficient: "bg-teal-400",
  Familiar: "bg-gray-400",
} as const;

type Tab = "tech" | "medicine";

export default function SkillsSection() {
  const [tab, setTab] = useState<Tab>("tech");
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const techGroups = DATA.skillGroups.filter((g) => !MEDICINE_GROUPS.has(g.group));
  const medicineGroups = DATA.skillGroups.filter((g) => MEDICINE_GROUPS.has(g.group));
  const activeGroups = tab === "tech" ? techGroups : medicineGroups;

  const toggleGroup = (name: string) => {
    setOpenGroup((prev) => (prev === name ? null : name));
  };

  const switchTab = (next: Tab) => {
    setTab(next);
    setOpenGroup(null);
  };

  return (
    <section id="skills" className="scroll-mt-4">
      <div className="py-8 space-y-5">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="space-y-3">
            <span className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
              Skills
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Skills & expertise</h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Full-stack development and clinical medicine — browse by area.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 9.2}>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <div className={cn("flex w-full sm:w-auto rounded-xl border p-1", siteTheme.cardBorder, siteTheme.cardBg)}>
              <button
                type="button"
                onClick={() => switchTab("tech")}
                className={cn(
                  "inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 sm:py-1.5 text-sm font-medium transition-colors min-h-11 sm:min-h-0",
                  tab === "tech"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Code2 className="w-3.5 h-3.5" />
                Development
              </button>
              <button
                type="button"
                onClick={() => switchTab("medicine")}
                className={cn(
                  "inline-flex flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 sm:py-1.5 text-sm font-medium transition-colors min-h-11 sm:min-h-0",
                  tab === "medicine"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                Healthcare
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Expert
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                Proficient
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-400" />
                Familiar
              </span>
            </div>
          </div>
        </BlurFade>

        <div className="space-y-2">
          {activeGroups.map((group, id) => {
            const isOpen = openGroup === group.group;
            return (
              <BlurFade key={group.group} delay={BLUR_FADE_DELAY * 9.3 + id * 0.03}>
                <div className={cn("rounded-lg border overflow-hidden", siteTheme.cardBorder, siteTheme.cardBg)}>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.group)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:py-3 text-left hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-colors min-h-[52px] active:bg-emerald-50/80"
                  >
                    <span className="font-medium text-sm">{group.group}</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      {group.skills.length} skills
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3 flex flex-wrap gap-1.5 border-t border-emerald-100/80 dark:border-emerald-900/30 pt-3">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill.label}
                          variant="secondary"
                          className="text-[11px] px-2 py-0.5 font-normal gap-1"
                        >
                          {skill.level && (
                            <span
                              className={cn(
                                "inline-block w-1.5 h-1.5 rounded-full",
                                levelDot[skill.level as keyof typeof levelDot]
                              )}
                            />
                          )}
                          {skill.label}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
