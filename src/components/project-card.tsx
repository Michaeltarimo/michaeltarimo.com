'use client';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  images?: string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  themeColor?: string;
  bgColor?: string;
}

// Brand-matched card colors (base tint + hover from each project's palette)
const projectBgColorMap: Record<string, { base: string; hover: string; proseHover: string }> = {
  "Cheryl's Cakes": {
    base: "bg-amber-50 dark:bg-amber-950/25 border-amber-200/50 dark:border-amber-900/40",
    hover: "hover:bg-amber-900 hover:border-amber-900 hover:text-amber-50",
    proseHover: "group-hover:text-amber-50 group-hover:prose-p:text-amber-50 group-hover:prose-a:text-amber-50 group-hover:prose-strong:text-amber-50",
  },
  "Social Bean": {
    base: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200/60 dark:border-yellow-900/30",
    hover: "hover:bg-yellow-400 hover:border-yellow-400 hover:text-black",
    proseHover: "group-hover:text-black group-hover:prose-p:text-black/80 group-hover:prose-a:text-black group-hover:prose-strong:text-black",
  },
  "Hashly.ai": {
    base: "bg-neutral-50 dark:bg-neutral-900/40 border-neutral-200/60 dark:border-neutral-800",
    hover: "hover:bg-neutral-950 hover:border-neutral-950 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-neutral-200 group-hover:prose-a:text-amber-400 group-hover:prose-strong:text-white",
  },
  Seedbase: {
    base: "bg-green-100 dark:bg-green-900/40",
    hover: "hover:bg-green-600 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
  "Afarensis GPU": {
    base: "bg-purple-100 dark:bg-purple-900/40",
    hover: "hover:bg-purple-500 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
  Rezour: {
    base: "bg-slate-100 dark:bg-slate-800/60",
    hover: "hover:bg-slate-700 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
  "Tanapa UI": {
    base: "bg-orange-50 dark:bg-orange-900/40",
    hover: "hover:bg-orange-500 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
  Momentam: {
    base: "bg-sky-100 dark:bg-blue-900/40",
    hover: "hover:bg-sky-500 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
  "CEOs Forum": {
    base: "bg-emerald-50 dark:bg-emerald-900/40",
    hover: "hover:bg-emerald-600 hover:text-white",
    proseHover: "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white",
  },
};

const projectGradientMap: Record<string, string> = {
  "Cheryl's Cakes": "from-amber-900 via-amber-800 to-stone-800",
  "Social Bean": "from-yellow-400 via-yellow-300 to-amber-200",
  "Hashly.ai": "from-neutral-100 via-white to-amber-100",
};

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  images,
  links,
  className,
  themeColor,
}: Props) {
  // Slideshow state
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);
  useEffect(() => {
    if (!images || images.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  const styles = projectBgColorMap[title];

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden border hover:shadow-lg active:scale-[0.99] transition-all duration-300 ease-out h-full",
        styles?.base || "bg-white dark:bg-slate-900/40",
        styles?.hover || "",
        className
      )}
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {/* Slideshow for images array */}
        {images && images.length > 0 ? (
          <div className="relative h-40 w-full">
            {images.map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                width={500}
                height={300}
                className={
                  "absolute left-0 top-0 h-40 w-full object-cover object-top transition-opacity duration-700" +
                  (idx === current ? " opacity-100 z-10" : " opacity-0 z-0")
                }
                priority={idx === 0}
              />
            ))}
            {/* Optional: Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={
                    "block h-1.5 w-1.5 rounded-full transition-all duration-300 " +
                    (idx === current ? "bg-primary/80 scale-110" : "bg-muted/60 scale-90")
                  }
                />
              ))}
            </div>
          </div>
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        ) : image && !imageError ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
            onError={() => setImageError(true)}
          />
        ) : projectGradientMap[title] ? (
          <div className={`h-40 w-full bg-gradient-to-br ${projectGradientMap[title]} flex items-end p-4`}>
            <span className="text-white/90 font-semibold text-sm drop-shadow-md">{title}</span>
          </div>
        ) : null}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className={cn(
            "prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert",
            styles?.proseHover || "group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white"
          )}>
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}