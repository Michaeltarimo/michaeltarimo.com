"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import { Download, FileText } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CvSection() {
  return (
    <section id="cv-download" className="w-full py-6 sm:py-8 scroll-mt-4">
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className={cn("max-w-xl mx-auto p-5 sm:p-8", siteTheme.panel)}>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="rounded-full bg-emerald-500/10 p-3">
              <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-2">
              <span className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
                Resume
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Download my CV
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
                Full overview of experience, education, skills, and projects — medical background and dev work in one place.
              </p>
            </div>
            <a
              href="/cv/michaeltarimo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className={cn("w-full sm:w-auto justify-center text-sm shadow-sm", siteTheme.primaryBtn)}
            >
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
