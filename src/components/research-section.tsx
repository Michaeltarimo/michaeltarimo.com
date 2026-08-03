"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import { Code2, FlaskConical, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const typeStyles = {
  hackathon: {
    label: "Hackathon",
    icon: Code2,
    accent: siteTheme.accent,
    border: siteTheme.cardBorder,
    bg: siteTheme.cardBg,
    dot: siteTheme.dot,
    badge: siteTheme.pill,
  },
  research: {
    label: "Research",
    icon: FlaskConical,
    accent: siteTheme.accentAlt,
    border: "border-teal-200/60 dark:border-teal-900/40",
    bg: siteTheme.cardBgAlt,
    dot: siteTheme.dotAlt,
    badge: siteTheme.pillAlt,
  },
} as const;

export default function ResearchSection() {
  const hackathonCount = DATA.hackathons.filter((h) => h.type === "hackathon").length;
  const researchCount = DATA.hackathons.filter((h) => h.type === "research").length;

  return (
    <section id="hackathons">
      <div className="space-y-10 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <div className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
                Hackathons & Research
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Building & studying in parallel
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Part-time gigs funded medical school. Along the way I shipped at hackathons, wrote clinical research, and learned from founders who showed me how tech gets built.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", siteTheme.pill)}>
                  {hackathonCount} hackathon{hackathonCount !== 1 ? "s" : ""}
                </span>
                <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", siteTheme.pillAlt)}>
                  {researchCount} research paper{researchCount !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="relative max-w-3xl mx-auto">
          <div className={cn("absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-px hidden sm:block", siteTheme.timelineSpine)} />

          <div className="flex flex-col gap-6">
            {DATA.hackathons.map((item, id) => {
              const style = typeStyles[item.type as keyof typeof typeStyles] ?? typeStyles.research;
              const Icon = style.icon;

              return (
                <BlurFade key={item.title + item.dates} delay={BLUR_FADE_DELAY * 14 + id * 0.06}>
                  <div className="relative sm:pl-10">
                    <div className={cn("absolute left-0 top-6 z-10 hidden sm:flex items-center justify-center w-[23px] h-[23px] rounded-full border-2 border-background", style.bg)}>
                      <div className={cn("w-2.5 h-2.5 rounded-full", style.dot)} />
                    </div>

                    <Card className={cn("overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-emerald-300/60 dark:hover:border-emerald-700/40", style.border, style.bg)}>
                      <div className="flex flex-col sm:flex-row">
                        <div className={cn("relative flex-shrink-0 sm:w-36 h-28 sm:h-auto bg-gradient-to-br p-4 flex items-center justify-center", style.accent)}>
                          <div className="absolute inset-0 bg-black/10" />
                          {item.image ? (
                            <div className="relative z-10 w-16 h-16 rounded-xl bg-white/90 dark:bg-neutral-900/90 p-2 shadow-md">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <Icon className="relative z-10 w-10 h-10 text-white" />
                          )}
                        </div>

                        <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide", style.badge)}>
                              <Icon className="w-3 h-3" />
                              {style.label}
                            </span>
                            <time className="text-xs text-muted-foreground">{item.dates}</time>
                          </div>

                          <h3 className="font-semibold text-base sm:text-lg leading-snug">{item.title}</h3>

                          {item.location && (
                            <p className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              {item.location}
                            </p>
                          )}

                          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {item.description}
                          </p>

                          {"tags" in item && item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0 font-normal">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {item.links && item.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.links.map((link, idx) => (
                                <Link
                                  href={link.href}
                                  key={idx}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={cn("px-3 py-1.5 text-xs", siteTheme.outlineBtn)}
                                >
                                  {link.icon}
                                  {link.title}
                                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
