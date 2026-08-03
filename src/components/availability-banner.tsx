"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AvailabilityBanner() {
  return (
    <BlurFade delay={0.15}>
      <div className={cn("rounded-2xl sm:rounded-xl p-4 sm:p-5", siteTheme.panel)}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="relative flex h-3 w-3 mt-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm sm:text-base">Open for work & collaborations</p>
                <Sparkles className="w-4 h-4 text-emerald-500 hidden sm:block" />
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Freelance projects, client websites, full-stack apps, and health-tech consulting — let&apos;s build something together.
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className={cn("w-full sm:w-auto flex-shrink-0 self-stretch sm:self-center justify-center px-4 py-3 sm:py-2 text-sm", siteTheme.primaryBtn)}
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}
