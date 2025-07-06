import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useEffect, useRef } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { Sparkles, Circle } from 'lucide-react';
import Hero from "@/components/Hero";
import React from "react";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";

const BLUR_FADE_DELAY = 0.04;

// Types for skill groups
type SkillGroup = typeof DATA.skillGroups[number];
type Skill = SkillGroup['skills'][number];

// Skill level dot color mapping
const levelDot = {
  Expert: "bg-green-500",
  Proficient: "bg-yellow-400",
  Familiar: "bg-gray-400",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
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
              <a href={DATA.registration.verificationUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Verify on Medical Council of Tanganyika
              </a>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
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
            <h2 className="text-xl font-bold">Education</h2>
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
            <h2 className="text-xl font-bold">Additional Training</h2>
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
      <section id="skills">
        <div className="max-w-4xl mx-auto py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold mb-4">Skills & Expertise</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {/* Computer & Software boundary (no line) */}
            <div className="col-span-full my-4">
              <div className="text-center text-xs text-muted-foreground mt-2 mb-4 tracking-widest uppercase font-semibold">Computer & Software</div>
            </div>
            {DATA.skillGroups.map((group: SkillGroup, idx: number) => {
              // Insert a separator before the first medicine-related group
              const medicineGroups = ["Medical & Clinical", "Surgical Skills", "Research", "Community & Outreach"];
              const isFirstMedicine = medicineGroups.includes(group.group) &&
                (idx === 0 || !medicineGroups.includes(DATA.skillGroups[idx - 1].group));
              return (
                <React.Fragment key={group.group}>
                  {isFirstMedicine && (
                    <div className="col-span-full my-4">
                      <div className="text-center text-xs text-muted-foreground mt-2 mb-4 tracking-widest uppercase font-semibold">Medicine & Healthcare</div>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`font-semibold mb-2 ${group.color ? `text-${group.color}-700 dark:text-${group.color}-400` : ''}`}>{group.group}</h3>
                    <div className="flex items-center gap-4 mb-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>Expert</span>
                      <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>Proficient</span>
                      <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-gray-400"></span>Familiar</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill: Skill, sid: number) => {
                        const iconKey = skill.icon as keyof typeof Icons;
                        const IconComponent = skill.icon && Icons[iconKey] ? Icons[iconKey] : null;
                        return (
                          <Badge key={skill.label} className="flex items-center gap-1 px-3 py-1 text-xs font-medium border-0 bg-muted text-foreground">
                            {IconComponent ? (
                              <span className="inline-block w-4 h-4 mr-1 align-middle">
                                {IconComponent({ className: "w-4 h-4" })}
                              </span>
                            ) : skill.icon ? (
                              <span className="inline-block w-4 h-4 mr-1 align-middle text-muted-foreground"><Circle className="w-4 h-4" /></span>
                            ) : null}
                            {skill.level && (
                              <span className={`inline-block w-2 h-2 rounded-full mr-1 ${levelDot[skill.level]}`}></span>
                            )}
                            {skill.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 text-background px-3 py-1 text-sm font-semibold shadow-md">
                  My Projects
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                  <span className="text-3xl sm:text-4xl">Check out my latest work</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2">
                  From simple websites to complex web & mobile apps, here are a few projects where I merged design, code, and real-world impact.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
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
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 text-background px-3 py-1 text-sm font-semibold shadow-md">
                  Hackathons & Research
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                  <span className="text-3xl sm:text-4xl">I like solving things</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2">
                  During my time in university I was able to do part-time gigs to finance my medical school, I&apos;ve written clinical research papers, attended {DATA.hackathons.length}+ hackathons and met curious well trained tech & non tech founders who guided me through the tech industry.
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 text-xs font-semibold">{DATA.hackathons.length} events</span>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <Card className="flex flex-col h-full group border-0 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 dark:from-green-900/30 dark:via-yellow-900/20 dark:to-green-900/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 p-4 pb-2">
                      <Avatar className="border size-14 bg-white dark:bg-neutral-900">
                        <AvatarImage src={project.image} alt={project.title} className="object-contain" />
                        <AvatarFallback>{project.title[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="font-semibold text-lg leading-tight mb-1">{project.title}</h3>
                        <time className="text-xs text-muted-foreground">{project.dates}</time>
                        {project.location && <span className="text-xs text-muted-foreground">{project.location}</span>}
                      </div>
                    </div>
                    <div className="px-4 pb-2">
                      <span className="prose dark:prose-invert text-sm text-muted-foreground">{project.description}</span>
                    </div>
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-row flex-wrap items-start gap-2 px-4 pb-4 mt-auto">
                        {project.links.map((link, idx) => (
                          <Link href={link.href} key={idx} target="_blank">
                            <Badge key={idx} title={link.title} className="flex gap-2 px-2 py-1 text-xs">
                              {link.icon}
                              {link.title}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    )}
                  </Card>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      {/* CV Download Section */}
      <section id="cv-download" className="w-full flex justify-center py-8">
        <div className="flex flex-col items-center gap-4 max-w-xl w-full">
          <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 text-background px-3 py-1 text-sm font-semibold shadow-md mb-2">
            Download My Latest CV
          </div>
          <p className="text-muted-foreground text-center text-base max-w-md">
            Want a full overview of my experience, education, and skills? You can download my latest CV as a PDF below.
          </p>
          <a
            href="/cv/michaeltarimo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 rounded-md border border-black bg-white text-black font-semibold px-4 py-1.5 shadow-sm transition-colors duration-200 text-base hover:bg-black hover:text-white hover:shadow-md mt-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
            Download CV (PDF)
          </a>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat directly? Reach out to me instantly on WhatsApp for anything professional, collaboration, or just to say hi!
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href="https://wa.me/255767644497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white font-semibold px-4 py-1.5 shadow-sm transition-colors duration-200 text-base hover:bg-[#1DA851]"
                >
                  <Icons.whatsapp className="w-4 h-4" style={{ fill: 'white', color: 'white' }} />
                  Message me on WhatsApp
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
