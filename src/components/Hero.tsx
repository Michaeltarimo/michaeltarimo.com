"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typewriter } from 'react-simple-typewriter';
import { Sparkles, MapPin, ArrowDown } from 'lucide-react';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import BlurFade from '@/components/magicui/blur-fade';
import { GlobeBackground } from '@/components/globe-background';
import { DATA } from '@/data/resume';
import { siteTheme } from '@/lib/site-theme';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative -mx-2 sm:-mx-1 md:mx-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-200/40 dark:border-emerald-900/30 min-h-[420px] sm:min-h-[460px]"
    >
      <GlobeBackground />

      <div className="relative z-10 px-3 sm:px-5 py-6 sm:py-8">
        <div className="mx-auto w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-5 md:gap-0 md:space-x-10">
          <div className="relative flex flex-col items-center md:items-start w-full md:w-auto">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-24 sm:size-28 md:size-36 border-2 border-white/80 dark:border-neutral-800 shadow-xl relative z-10 ring-2 ring-emerald-500/30 backdrop-blur-sm">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2.5 sm:space-y-3 w-full max-w-xl min-w-0">
            <BlurFade delay={BLUR_FADE_DELAY + 0.02}>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40 bg-background/70 dark:bg-emerald-950/50 backdrop-blur-sm px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for projects
              </div>
            </BlurFade>
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold tracking-tighter text-foreground">
                Hi, I&apos;m{' '}
                <Typewriter
                  words={[DATA.name.split(' ')[0]]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </span>
              <Sparkles className="text-emerald-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" aria-hidden="true" />
            </div>
            <BlurFadeText
              delay={BLUR_FADE_DELAY + 0.05}
              className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground"
              text={DATA.tagline}
            />
            <BlurFade delay={BLUR_FADE_DELAY + 0.06}>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {DATA.location}
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl flex flex-col items-center md:items-start space-y-4 mt-5 sm:mt-6">
          <BlurFadeText
            className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert text-center md:text-left leading-relaxed"
            delay={BLUR_FADE_DELAY + 0.1}
            text={DATA.description}
          />
          <BlurFade delay={BLUR_FADE_DELAY + 0.12}>
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                href="#projects"
                className={cn("w-full sm:w-auto justify-center text-sm shadow-sm", siteTheme.primaryBtn)}
              >
                View my work
                <ArrowDown className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className={cn("w-full sm:w-auto justify-center text-sm", siteTheme.outlineBtn)}
              >
                Contact me
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
