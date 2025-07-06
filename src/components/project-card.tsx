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

// Mapping for project card background colors (light and dark mode)
const projectBgColorMap: Record<string, { base: string; hover: string }> = {
  Seedbase: { base: "bg-green-100 dark:bg-green-900/40", hover: "hover:bg-green-500 hover:text-white" },
  "Afarensis GPU": { base: "bg-purple-100 dark:bg-purple-900/40", hover: "hover:bg-purple-500 hover:text-white" },
  Rezour: { base: "bg-slate-100 dark:bg-slate-800/60", hover: "hover:bg-slate-500 hover:text-white" },
  "Tanapa UI": { base: "bg-orange-50 dark:bg-orange-900/40", hover: "hover:bg-orange-500 hover:text-white" },
  Momentam: { base: "bg-sky-100 dark:bg-blue-900/40", hover: "hover:bg-sky-500 hover:text-white" },
  "CEOs Forum": { base: "bg-emerald-50 dark:bg-emerald-900/40", hover: "hover:bg-emerald-500 hover:text-white" },
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
  useEffect(() => {
    if (!images || images.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
        projectBgColorMap[title]?.base || "bg-white dark:bg-slate-900/40",
        projectBgColorMap[title]?.hover || "",
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
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        ) : null}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert group-hover:text-white group-hover:prose-p:text-white group-hover:prose-a:text-white group-hover:prose-strong:text-white">
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