"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ContactSection() {
  const email = DATA.contact.email;
  const whatsapp = DATA.contact.tel;

  return (
    <section id="contact" className="w-full py-8 sm:py-12 scroll-mt-4">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className={cn("max-w-2xl mx-auto p-5 sm:p-8", siteTheme.panel)}>
          <div className="flex flex-col items-center text-center gap-5">
            <div className="space-y-2">
              <span className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
                Contact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Get in touch
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
                Open to freelance projects, client websites, full-stack apps, and health-tech consulting. Based in Arusha — happy to work remote across Tanzania and beyond.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("px-5 py-3 text-sm shadow-sm w-full justify-center", siteTheme.primaryBtn)}
              >
                <Icons.whatsapp className="w-4 h-4" style={{ fill: "white", color: "white" }} />
                WhatsApp
              </a>
              <a
                href={`mailto:${email}`}
                className={cn("px-5 py-3 text-sm w-full justify-center break-all sm:break-normal", siteTheme.outlineBtn)}
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {email}
              </a>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageCircle className="w-3.5 h-3.5" />
              Usually reply within a few hours
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
