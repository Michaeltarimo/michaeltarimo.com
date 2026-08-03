"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const MARKERS: COBEOptions["markers"] = [
  { location: [-3.3869, 36.683], size: 0.12 },
  { location: [-6.7924, 39.2083], size: 0.06 },
  { location: [-3.0674, 37.3556], size: 0.05 },
  { location: [-5.069, 39.098], size: 0.04 },
  { location: [51.5074, -0.1278], size: 0.03 },
  { location: [37.7749, -122.4194], size: 0.03 },
];

const ARCS: COBEOptions["arcs"] = [
  { from: [-3.3869, 36.683], to: [-6.7924, 39.2083] },
  { from: [-3.3869, 36.683], to: [37.7749, -122.4194] },
  { from: [-3.3869, 36.683], to: [51.5074, -0.1278] },
  { from: [-6.7924, 39.2083], to: [-5.069, 39.098] },
];

type GlobeProps = {
  className?: string;
};

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let frameId = 0;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onResize = () => {
      if (canvas) width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio ?? 1, isMobile ? 1.5 : 2);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta: 0.25,
      dark: isDark ? 1 : 0,
      diffuse: isDark ? 1.2 : 1.6,
      mapSamples: isMobile ? 12000 : 20000,
      mapBrightness: isDark ? 7 : 4.5,
      baseColor: isDark ? [0.1, 0.2, 0.16] : [0.48, 0.65, 0.55],
      markerColor: isDark ? [0.3, 0.95, 0.65] : [0.04, 0.68, 0.45],
      glowColor: isDark ? [0.12, 0.28, 0.2] : [0.55, 0.78, 0.68],
      arcColor: isDark ? [0.3, 0.85, 0.58] : [0.06, 0.62, 0.4],
      arcWidth: isDark ? 0.45 : 0.6,
      arcHeight: 0.25,
      markers: MARKERS,
      arcs: ARCS,
    });

    const animate = () => {
      phi += 0.003;
      globe.update({ phi });
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("aspect-square w-full max-w-[650px]", className)}
      aria-hidden="true"
    />
  );
}

export function GlobeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 flex items-center justify-center translate-y-6 sm:translate-y-4">
        <Globe className="w-[130%] sm:w-[115%] max-w-none opacity-90 dark:opacity-75 sm:opacity-85 sm:dark:opacity-70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background/85 dark:from-background/35 dark:via-background/55 dark:to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15 dark:from-background/25 dark:via-transparent dark:to-background/25" />
    </div>
  );
}
