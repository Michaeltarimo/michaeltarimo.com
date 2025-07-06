"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typewriter } from 'react-simple-typewriter';
import { Sparkles } from 'lucide-react';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero">
      <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 md:top-8 w-[340px] h-[180px] md:w-[480px] md:h-[260px] bg-gradient-to-tr from-blue-400/30 via-purple-400/20 to-pink-400/10 dark:from-blue-900/40 dark:via-purple-900/20 dark:to-pink-900/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>
      <div className="relative mx-auto w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-14 pt-10 z-10">
        <div className="relative flex flex-col items-center md:items-start w-full md:w-auto">
          <span className="absolute inset-0 m-auto w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-blue-400/30 via-purple-400/20 to-pink-400/10 dark:from-blue-900/40 dark:via-purple-900/20 dark:to-pink-900/10 blur-2xl animate-pulse z-0" aria-hidden="true"></span>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-24 md:size-32 border border-white dark:border-neutral-800 shadow-lg relative z-10">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <div className="flex flex-col items-start text-left space-y-2 w-full max-w-xl min-w-0 break-words">
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tighter bg-gradient-to-r from-black via-green-600 to-green-400 dark:from-black dark:via-green-400 dark:to-green-300 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-move">
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
            <Sparkles className="text-green-500 w-7 h-7 md:w-8 md:h-8" aria-label="sparkles" />
          </div>
        </div>
      </div>
      {/* Tagline and description in their own row/container */}
      <div className="mx-auto w-full max-w-2xl flex flex-col items-start text-left space-y-2 mt-6 mb-8">
        <BlurFadeText
          delay={BLUR_FADE_DELAY + 0.05}
          className="text-base md:text-lg font-semibold text-muted-foreground"
          text={"Doctor. Developer. Dreamer."}
        />
        <BlurFadeText
          className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-left"
          delay={BLUR_FADE_DELAY + 0.1}
          text={DATA.description}
        />
      </div>
    </section>
  );
} 