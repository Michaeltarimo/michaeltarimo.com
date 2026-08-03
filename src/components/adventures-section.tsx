"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import { Mountain, Waves, Trees, Compass } from "lucide-react";
import Image from "next/image";

const iconMap = {
  mountain: Mountain,
  waves: Waves,
  trees: Trees,
  compass: Compass,
} as const;

const BLUR_FADE_DELAY = 0.04;

export default function AdventuresSection() {
  return (
    <section id="adventures">
      <div className="space-y-8 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
                Beyond the Screen
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tanzania, Up Close
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2">
                When I&apos;m not building products or studying, you&apos;ll find me outdoors — summiting peaks, diving cold waters, and exploring the wild corners of this country.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.adventures.map((adventure, id) => {
            const Icon = iconMap[adventure.icon as keyof typeof iconMap] ?? Compass;
            const hasImage = "image" in adventure && adventure.image;
            return (
              <BlurFade key={adventure.title} delay={BLUR_FADE_DELAY * 10.5 + id * 0.05}>
                <Card className={cn("group relative overflow-hidden border-0 hover:shadow-xl transition-all duration-300 h-full", siteTheme.panel)}>
                  {hasImage && (
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={adventure.image as string}
                        alt={adventure.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base leading-tight text-white drop-shadow-sm">
                            {adventure.title}
                          </h3>
                          <p className="text-xs text-white/85 mt-0.5">{adventure.location}</p>
                        </div>
                        <div className="flex-shrink-0 rounded-lg bg-white/15 backdrop-blur-sm p-2">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-5 flex flex-col gap-3 h-full">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {adventure.description}
                    </p>
                    {"credit" in adventure && adventure.credit ? (
                      <p className="text-[10px] text-muted-foreground/60">{adventure.credit}</p>
                    ) : null}
                  </div>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
