import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { siteTheme } from "@/lib/site-theme";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import Hero from "@/components/Hero";
import React from "react";
import AvailabilityBanner from "@/components/availability-banner";
import AdventuresSection from "@/components/adventures-section";
import ResearchSection from "@/components/research-section";
import CvSection from "@/components/cv-section";
import ContactSection from "@/components/contact-section";
import SkillsSection from "@/components/skills-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 sm:space-y-10 scroll-mt-4">
      <Hero />
      <AvailabilityBanner />
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert prose-a:text-emerald-700 dark:prose-a:text-emerald-400 prose-strong:text-foreground">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="registration">
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <ResumeCard
            logoUrl={DATA.registration.logoUrl}
            altText="Medical Council of Tanganyika"
            title="Professional Registration"
            subtitle={DATA.registration.qualification}
            period={DATA.registration.status}
            description={DATA.registration.summary}
            href={DATA.registration.verificationUrl}
            badges={[]}
          />
          <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-2 space-y-1 opacity-80">
            <div><strong>Reg. No:</strong> {DATA.registration.regNo}</div>
            <div>
              <a href={DATA.registration.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 dark:text-emerald-400 underline underline-offset-2">
                Verify on Tanzania Health Practitioner Registration System (HPRS)
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold text-foreground">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="additional-training">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold text-foreground">Additional Training</h2>
          </BlurFade>
          {DATA.additionalTraining && DATA.additionalTraining.map((training, id) => (
            <BlurFade key={training.title} delay={BLUR_FADE_DELAY * 8.6 + id * 0.05}>
              <ResumeCard
                key={training.title}
                logoUrl={training.logoUrl}
                altText={training.altText}
                title={training.title}
                subtitle={training.institution}
                period={`${training.start} - ${training.end}`}
                description={training.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <SkillsSection />
      <section id="projects" className="scroll-mt-4">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className={cn("inline-block rounded-lg px-3 py-1 text-sm font-semibold", siteTheme.badge)}>
                  My Projects
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Latest work
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2">
                  From bakery ordering platforms to AI-powered tools — recent client work and side projects where design, code, and real-world impact meet.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image || undefined}
                  video={project.video || undefined}
                  links={project.links}
                  images={project.images}
                  themeColor={project.themeColor}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <AdventuresSection />
      <ResearchSection />
      <CvSection />
      <ContactSection />
    </main>
  );
}
