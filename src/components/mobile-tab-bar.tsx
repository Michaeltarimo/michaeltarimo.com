"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Briefcase, Home, Mail, NotebookIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", icon: Home, hash: false },
  { href: "/#projects", label: "Work", icon: Briefcase, hash: true },
  { href: "/blog", label: "Blog", icon: NotebookIcon, hash: false },
  { href: "/#contact", label: "Contact", icon: Mail, hash: true },
] as const;

export default function MobileTabBar() {
  const pathname = usePathname();

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-emerald-200/60 dark:border-emerald-900/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      aria-label="Mobile navigation"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5 items-end px-1 pt-1">
        {tabs.map(({ href, label, icon: Icon, hash }) => {
          const active = isActive(href.replace("/#", "/"), hash);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-h-[52px] px-1 py-1.5 rounded-lg transition-colors active:scale-95",
                active
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", active && "stroke-[2.5]")} />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </Link>
          );
        })}
        <div className="flex flex-col items-center justify-center gap-0.5 min-h-[52px] px-1 py-1.5">
          <ModeToggle className="h-9 w-9" />
          <span className="text-[10px] font-medium leading-none text-muted-foreground">Theme</span>
        </div>
      </div>
    </nav>
  );
}
