import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Add Project type
export type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: string[];
  links?: {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
  images?: string[];
  themeColor?: string;
  bgColor?: string;
};

export const DATA = {
  name: "Michael Tarimo",
  initials: "Dr",
  url: "https://michaeltarimo.com",
  location: "Arusha, TZ",
  locationLink: "https://maps.app.goo.gl/dS4qGRDDq3FrV8A99",
  description:
    "Medical doctor and full-stack developer based in Tanzania. I design and ship modern web apps for clients while pursuing advanced professional training. Open to freelance work, collaborations, and meaningful projects.",
  summary:
    "Before I ever wore a white coat, I was already building websites, teaching web design, and exploring blockchain and game development. I earned my [medical degree at MUHAS](/#education), completed hospital rotations across Tanzania, and led health outreach programs that showed me where healthcare and technology collide.\n\nI taught myself software development to solve those problems — founding [Rezour](https://rezour.com) for clinical research automation and [Seedbase Africa](https://seedbase.africa) for startup empowerment. After my clinical postings wrapped up in mid-2025, I continued building for clients: custom cake-ordering platforms, social media agency sites, AI-powered tools, and more.\n\nI'm currently finishing advanced professional training and **open to freelance projects, client work, and collaborations**. Whether you need a polished website, a full-stack app, or health-tech consulting — [let's talk](/#contact).",
  tagline: "Doctor. Developer. Explorer.",
  avatarUrl: "/michael.png",
  skillGroups: [
    {
      group: "Frontend",
      color: "green",
      skills: [
        { label: "React", icon: "react", level: "Expert" },
        { label: "React Native", icon: "react", level: "Expert" },
        { label: "Next.js", icon: "nextjs", level: "Expert" },
        { label: "Expo Go", icon: "expo", level: "Proficient" },
        { label: "TailwindCSS", icon: "tailwind", level: "Expert" },
        { label: "DaisyUI", icon: "daisyui", level: "Familiar" },
        { label: "Shadcn UI", icon: "shadcn", level: "Familiar" },
        { label: "React Query", icon: "reactquery", level: "Familiar" },
        { label: "HTML", icon: "html", level: "Expert" },
        { label: "CSS", icon: "css", level: "Expert" },
        { label: "JavaScript", icon: "js", level: "Expert" },
        { label: "TypeScript", icon: "typescript", level: "Proficient" }
      ]
    },
    {
      group: "Backend",
      color: "blue",
      skills: [
        { label: "Node.js", icon: "nodejs", level: "Proficient" },
        { label: "Express.js", icon: "express", level: "Proficient" },
        { label: "PHP", icon: "php", level: "Familiar" },
        { label: "Python", icon: "python", level: "Proficient" },
        { label: "FHIR.js", icon: "fhir", level: "Familiar" },
        { label: "API Design", icon: "api", level: "Proficient" },
        { label: "REST", icon: "rest", level: "Proficient" },
        { label: "WebSockets", icon: "websocket", level: "Familiar" }
      ]
    },
    {
      group: "Databases",
      color: "purple",
      skills: [
        { label: "MongoDB", icon: "mongodb", level: "Proficient" },
        { label: "PostgreSQL", icon: "postgresql", level: "Proficient" },
        { label: "MySQL", icon: "mysql", level: "Familiar" },
        { label: "Prisma", icon: "prisma", level: "Proficient" },
        { label: "Neon", icon: "neon", level: "Familiar" },
        { label: "Supabase", icon: "supabase", level: "Familiar" }
      ]
    },
    {
      group: "Cloud & DevOps",
      color: "emerald",
      skills: [
        { label: "Vercel", icon: "vercel", level: "Familiar" },
        { label: "Appwrite", icon: "appwrite", level: "Familiar" },
        { label: "Firebase", icon: "firebase", level: "Familiar" },
        { label: "Supabase", icon: "supabase", level: "Familiar" },
        { label: "Linux", icon: "linux", level: "Proficient" },
        { label: "Git", icon: "git", level: "Proficient" },
        { label: "CI/CD", icon: "cicd", level: "Familiar" },
        { label: "Docker", icon: "docker", level: "Familiar" },
        { label: "AWS", icon: "aws", level: "Familiar" },
      ]
    },
    {
      group: "Operating Systems & Server Management",
      color: "orange",
      skills: [
        { label: "Ubuntu", icon: "ubuntu", level: "Expert" },
        { label: "Kali Linux", icon: "kali", level: "Proficient" },
        { label: "Linux (General)", icon: "linux", level: "Expert" },
        { label: "macOS", icon: "macos", level: "Proficient" },
        { label: "Terminal", icon: "terminal", level: "Expert" },
        { label: "SSH", icon: "ssh", level: "Expert" },
        { label: "Server Interaction", icon: "server", level: "Expert" },
        { label: "Deployments", icon: "deploy", level: "Expert" },
        { label: "Domains & DNS", icon: "dns", level: "Proficient" }
      ]
    },
    {
      group: "AI & Data",
      color: "yellow",
      skills: [
        { label: "OpenAI API", icon: "openai", level: "Familiar" },
        { label: "Llama (Meta AI)", icon: "llama", level: "Familiar" },
        { label: "Claude (Anthropic)", icon: "claude", level: "Familiar" },
        { label: "AI-driven Solutions", icon: "ai", level: "Familiar" },
        { label: "D3.js", icon: "d3", level: "Familiar" },
        { label: "Data Visualization", icon: "dataviz", level: "Familiar" },
        { label: "Healthcare Interoperability (FHIR.js)", icon: "fhir", level: "Familiar" }
      ]
    },
    {
      group: "Testing & Quality",
      color: "pink",
      skills: [
        { label: "Jest", icon: "jest", level: "Familiar" },
        { label: "Prettier", icon: "prettier", level: "Familiar" },
        { label: "ESLint", icon: "eslint", level: "Familiar" }
      ]
    },
    {
      group: "Other Software/Computer Skills",
      color: "gray",
      skills: [
        { label: "Blockchain", icon: "blockchain", level: "Familiar" },
        { label: "Game Development", icon: "game", level: "Familiar" },
        { label: "Teaching Web Design", icon: "teaching", level: "Proficient" },
        { label: "CLI Tools", icon: "cli", level: "Proficient" },
        { label: "Bash/Shell", icon: "bash", level: "Proficient" }
      ]
    },
    {
      group: "Medical & Clinical",
      color: "blue",
      skills: [
        { label: "Physical Examinations", icon: "stethoscope", level: "Expert" },
        { label: "Diagnostic Skills", icon: "diagnosis", level: "Expert" },
        { label: "Treatment Planning", icon: "treatment", level: "Expert" },
        { label: "Emergency Care", icon: "emergency", level: "Proficient" },
        { label: "Patient Management", icon: "patient", level: "Expert" },
        { label: "Ethical Practice", icon: "ethics", level: "Expert" },
        { label: "Interprofessional Collaboration", icon: "team", level: "Proficient" },
        { label: "Lifelong Learning", icon: "learning", level: "Proficient" }
      ]
    },
    {
      group: "Surgical Skills",
      color: "red",
      skills: [
        { label: "Surgical Assistance", icon: "scalpel", level: "Proficient" },
        { label: "Minor Surgical Procedures", icon: "syringe", level: "Proficient" },
        { label: "Major Surgical Procedures", icon: "surgery", level: "Familiar" },
        { label: "Aseptic Technique", icon: "aseptic", level: "Expert" },
        { label: "Wound Closure & Suturing", icon: "suture", level: "Proficient" },
        { label: "Pre- and Post-Operative Care", icon: "care", level: "Proficient" },
        { label: "Intraoperative Teamwork", icon: "team", level: "Proficient" },
        { label: "Emergency Surgical Response", icon: "emergency", level: "Familiar" }
      ]
    },
    {
      group: "Research",
      color: "purple",
      skills: [
        { label: "Clinical Trial Design", icon: "trial", level: "Proficient" },
        { label: "Data Analysis", icon: "data", level: "Proficient" },
        { label: "Statistical Methods", icon: "stats", level: "Familiar" },
        { label: "Patient Recruitment", icon: "recruitment", level: "Familiar" },
        { label: "Regulatory Compliance", icon: "compliance", level: "Familiar" },
        { label: "Literature Review", icon: "literature", level: "Proficient" },
        { label: "Protocol Development", icon: "protocol", level: "Familiar" },
        { label: "Grant Writing", icon: "grant", level: "Familiar" },
        { label: "Collaborative Research", icon: "collab", level: "Proficient" }
      ]
    },
    {
      group: "Community & Outreach",
      color: "yellow",
      skills: [
        { label: "Community Engagement", icon: "community", level: "Proficient" },
        { label: "Health Education", icon: "education", level: "Proficient" },
        { label: "Screening Programs", icon: "screening", level: "Familiar" },
        { label: "NGO Collaboration", icon: "ngo", level: "Familiar" },
        { label: "Advocacy", icon: "advocacy", level: "Familiar" },
        { label: "Public Speaking", icon: "speaking", level: "Proficient" },
        { label: "Program Evaluation", icon: "evaluation", level: "Familiar" }
      ]
    },
  ],
  clinicalskills: [
    "Physical Examinations",
    "Diagnostic Skills",
    "Treatment Planning",
    "Patient Management",
    "Emergency Care",
    "Patient Education",
    "Cultural Competence",
    "Ethical Practice",
    "Interprofessional Collaboration",
    "Lifelong Learning"
  ],
  researchskills: [
    "Clinical Trial Design",
    "Data Collection and Analysis",
    "Statistical Methods",
    "Patient Recruitment",
    "Regulatory Compliance",
    "Publication and Presentation of Findings",
    "Literature Review",
    "Protocol Development",
    "Grant Writing",
    "Collaborative Research"
  ],
  outreachskills: [
    "Community Engagement",
    "Health Education Workshops",
    "Screening Programs",
    "Collaboration with NGOs",
    "Advocacy for Health Initiatives",
    "Cultural Sensitivity in Outreach",
    "Needs Assessment",
    "Public Speaking",
    "Partnership Development",
    "Program Evaluation"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "michaeltarimo4@gmail.com",
    tel: "+255767644497",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/michaeltarimo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/michaeltarimo",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gutoshix",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@michaeltarimo1930",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance & Client Work",
      href: "https://michaeltarimo.com/#projects",
      badges: ["Open"],
      location: "Remote · Tanzania",
      title: "Full-Stack Developer & Consultant",
      logoUrl: "/michael.png",
      start: "July 2025",
      end: "Present",
      description:
        "Building modern web applications for clients across Tanzania and beyond — from custom business websites and e-commerce flows to AI-powered SaaS platforms. Recent work includes Cheryl's Cakes, Social Bean, and Hashly.ai. Available for new projects and collaborations."
    },
    {
      company: "Seedbase",
      href: "https://seedbase.africa",
      badges: [],
      location: "Remote",
      title: "Founder & Lead Developer",
      logoUrl: "/seedbase.png",
      start: "May 2025",
      end: "Present",
      description:
        "Founded Seedbase Africa, a platform empowering African startups and entrepreneurs through technology-driven solutions, mentorship, and access to resources. Building the MVP and growing the community alongside client work."
    },
    {
      company: "Tanga Regional Referral Hospital",
      href: "http://tangarrh.go.tz",
      badges: [],
      location: "Tanga, Tanzania",
      title: "MD, Surgical Dept.",
      logoUrl: "/trrh.jpg",
      start: "May 2025",
      end: "June 2025",
      description: "Assisting major and minor surgical procedures, contributing to improved surgical outcomes and reduced operation time. Managing pre- and post-operative patient care, helping speed up patient recovery. Helping coordinate ward rounds and documentation of patient details."
    },
    {
      company: "Tanga Regional Referral Hospital",
      href: "http://tangarrh.go.tz",
      badges: [],
      location: "Tanga, Tanzania",
      title: "MD, Emergency Dept.",
      logoUrl: "/trrh.jpg",
      start: "Oct 2024",
      end: "May 2025",
      description: "Handled emergency cases and triaged patients quickly. Assisted with critical care and emergency procedures. Supported early diagnosis and patient referrals."
    },
    {
      company: "Rezour Inc",
      href: "https://rezour.com",
      badges: [],
      location: "Remote",
      title: "Founder & Lead Developer",
      logoUrl: "/rezour.png",
      start: "Sept 2024",
      end: "Feb 2025",
      description:
        "Architected and wrote the entire MVP of Rezour using Next.js, Prisma, Neon, and D3.js for real-time data visualization. Integrated OpenAI API for AI-driven research tasks, FHIR.js for healthcare data interoperability, and implemented unit testing with Jest and CI/CD pipelines using GitHub Actions."
    },
    {
      company: "Momentam Ltd",
      href: "https://momentam.io",
      badges: [],
      location: "Remote",
      title: "Senior Software Developer",
      logoUrl: "/momentam.png",
      start: "Aug 2024",
      end: "Jan 2025",
      description:
        "Architected and developed mobile applications for photographers and clients using React Native, NativeWind, and the Expo Go framework. Integrated secure data storage solutions with Appwrite and Firebase. Designed and launched the web application and administration system with Next.js, utilizing Prisma for database management in Neon."
    },
    {
      company: "Amana Regional Referral Hospital",
      href: "http://amanarrh.go.tz/",
      badges: [],
      location: "Dar es Salaam, Tanzania",
      title: "Intern Doctor",
      logoUrl: "/amana.png",
      start: "Nov 2022",
      end: "Dec 2023",
      description: "Rotated through all core departments including Medicine, Surgery, Pediatrics, OBGYN and Emergency. Gained hands-on experience in patient care, procedures, ward work and team work."
    },
    {
      company: "Kilimanjaro Christian Medical Center",
      href: "https://www.kcmc.ac.tz/",
      badges: [],
      location: "Moshi, Tanzania",
      title: "Medical Doctor",
      logoUrl: "/kcmc.png",
      start: "Nov 2022",
      end: "Apr 2023",
      description:
        "Delivered holistic patient care in a general practitioner role, conducting thorough physical examinations and developing individualized care plans for chronic condition management. Fostered effective communication and collaboration with specialists to maintain seamless patient care. Prioritized early intervention through regular health screenings and committed to ongoing professional growth by engaging in workshops and medical education."
    },
  ],
  education: [
    {
      school: "Muhimbili University of Health & Allied Science (MUHAS)",
      href: "https://muhas.ac.tz/",
      degree: "Doctor of Medicine",
      logoUrl: "/muhas.png",
      start: "2017",
      end: "2022",
    },
    {
      school: "Kibaha Secondary School",
      href: "https://www.kec.or.tz/",
      degree: "Advanced Certificate of Secondary Education Examination (ACSEE)",
      logoUrl: "/kibaha.png",
      start: "2015",
      end: "2017",
    },
    {
      school: "Christ the King Sec School",
      href: "https://maps.app.goo.gl/G7HYxtYZ3a7ZcCBj9",
      degree: "Certificate of Secondary Education Examination (CSEE)",
      logoUrl: "/ctk.png",
      start: "2012",
      end: "2014",
    },
    {
      school: "St Francis De Sales Seminary",
      href: "https://msfs-eastafrica.com/",
      degree: "Aspirant class - English & Bible knowledge",
      logoUrl: "/msfs.png",
      start: "2010",
      end: "2012",
    },
    {
      school: "Airwing Primary School",
      href: "#",
      degree: "Primary Education (PE)",
      logoUrl: "/airwing.png",
      start: "Jan 2003",
      end: "Sept 2009",
    },
  ],
  adventures: [
    {
      title: "Summited Mount Kilimanjaro",
      location: "Uhuru Peak · 5,895m",
      description:
        "Reached the roof of Africa — a multi-day trek through rainforest, alpine desert, and glacier fields to the highest point on the continent.",
      icon: "mountain",
      image: "/adventures/kilimanjaro.jpg",
      credit: "Furtwängler Glacier · Wikimedia Commons",
    },
    {
      title: "Dived the Marangu Waters",
      location: "Marangu · Kilimanjaro Region",
      description:
        "Explored some of Tanzania's coldest underwater terrain near Marangu — a completely different world from the summit, just as unforgettable.",
      icon: "waves",
      image: "/adventures/marangu.jpg",
      credit: "Marangu waterfalls · Wikimedia Commons",
    },
    {
      title: "Makuyuni Wildlife Park",
      location: "Tarangire–Manyara Corridor",
      description:
        "Tracked elephants, giraffes, and lions through Makuyuni's rolling savannas — a 49 km² wildlife corridor between Tarangire and Lake Manyara, far from the crowds.",
      icon: "trees",
      image: "/adventures/makuyuni.jpg",
      credit: "Tarangire–Manyara corridor · Wikimedia Commons",
    },
    {
      title: "Always Exploring",
      location: "Arusha · Home base",
      description:
        "Based in Arusha now — gateway to Kilimanjaro, the northern circuit, and endless wildlife. From city streets to national park edges, this is where I recharge between builds.",
      icon: "compass",
      image: "/adventures/arusha.jpg",
      credit: "Arusha National Park · Wikimedia Commons",
    },
  ],
  projects: [
    {
      title: "Cheryl's Cakes",
      href: "https://cherylscakes.vercel.app",
      dates: "Jan 2026 - Present",
      active: true,
      themeColor: "from-amber-800",
      bgColor: "bg-amber-50",
      description:
        "Designed and built a full custom cake ordering platform for a Dar es Salaam bakery — interactive cake designer, real-time pricing in Tsh, WhatsApp order flow, portfolio gallery, and a mobile-first experience baked with love.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://cherylscakes.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cherylscakes.png",
    },
    {
      title: "Social Bean",
      href: "https://socialbean.vercel.app",
      dates: "Dec 2025 - Present",
      active: true,
      themeColor: "from-yellow-400",
      bgColor: "bg-yellow-50",
      description:
        "Built a modern landing page and platform showcase for a professional social media management agency — animated dashboards, multi-platform features, client stats, and a polished conversion-focused design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://socialbean.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/socialbean.png",
    },
    {
      title: "Hashly.ai",
      href: "https://hashly.vercel.app",
      dates: "Nov 2025 - Present",
      active: true,
      themeColor: "from-neutral-900",
      bgColor: "bg-neutral-50",
      description:
        "Developed the frontend for an AI-powered social media co-pilot built on Supabase and Next.js — features, pricing, blog, and auth-ready starter architecture.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://hashly.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hashly.png",
    },
    {
      title: "Seedbase",
      href: "https://seedbase.africa",
      dates: "May 2025 - Present",
      active: true,
      themeColor: "from-green-500",
      bgColor: "bg-green-50",
      description:
        "Designed and built Seedbase Africa, a platform empowering African startups and entrepreneurs with tech-driven solutions, mentorship, and access to resources. Built the MVP with Next.js, TypeScript, TailwindCSS, Supabase, and Aceternity UI. Focused on product vision, development, and community growth.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Vercel",
        "Aceternity UI",
        "PostgreSQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://seedbase.africa",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/seed-base",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/screenshots/screen1.png",
        "/screenshots/screen1-light.png",
        "/screenshots/side1.png",
        "/screenshots/side1-light.png",
        "/screenshots/side2.png",
        "/screenshots/side2-light.png",
      ],
    },
    {
      title: "Afarensis GPU",
      href: "https://gpu.afarensis.com",
      dates: "2025",
      active: true,
      themeColor: "from-yellow-500",
      bgColor: "bg-yellow-50",
      description:
        "Architected and deployed Node.js servers on Amazon AWS, building custom APIs to fetch real-time prices and manage inventory. Built the frontend with Next.js, TypeScript, TailwindCSS, and Supabase, focusing on a modern UI, robust product management, and seamless checkout experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://gpu.afarensis.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/gpu/gpu1.png",
        "/gpu/gpu2.png",
        "/gpu/gpu3.png",
        "/gpu/gpu4.png",
        "/gpu/gpu5.png",
        "/gpu/gpu6.png",
        "/gpu/gpu7.png",
      ],
    },
    {
      title: "Rezour",
      href: "https://rezour.com",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      themeColor: "from-slate-800",
      bgColor: "bg-slate-100",
      description:
        "With recent AI advancements, I'm building Rezour, an automated SaaS platform that streamlines clinical study management. Using [OpenAI GPT](https://openai.com/), Rezour simplifies data collection and enhances collaboration among healthcare professionals.",
      technologies: [
        "Next.js",
        "JavaScript",
        "PostgreSQL (Neon)",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk Auth",
        "OpenAI API"
      ],
      links: [
        {
          type: "Website",
          href: "https://rezour.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rezourlab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/rezour/rezour1.jpeg",
        "/rezour/rezour2.jpeg",
        "/rezour/rezour3.jpeg",
        "/rezour/rezour4.jpeg",
        "/rezour/rezour5.jpeg",
        "/rezour/rezour6.jpeg",
        "/rezour/rezour7.jpeg",
        "/rezour/rezour8.jpeg",
        "/rezour/rezour9.jpeg",
      ],
    },
    {
      title: "Tanapa UI",
      href: "https://tanapa.vercel.app",
      dates: "March - April 2024",
      active: true,
      themeColor: "from-orange-500",
      bgColor: "bg-orange-50",
      description:
        "Developed a fully functional website from a well-prepared UI for TANAPA. Delivered a responsive and interactive user experience with optimized performance.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "DaisyUI",
        "Vercel",
        "JavaScript",
        "React Query",
        "ESLint",
        "Prettier",
      ],
      links: [
        {
          type: "Website",
          href: "https://tanapa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/tanapa_demo.mp4",
    },
    {
      title: "Momentam",
      href: "https://momentam.io",
      dates: "August 2024 - current",
      active: true,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "Architected & Developed mobile apps for photographers & clients live requests. Book, schedule and get your photos all in your app.",
      technologies: [
        "React Native",
        "JavaScript",
        "Expo Go",
        "Appwrite",
        "Nativewind",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://momentam.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/momentamtech",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/photographer_demo.mp4",
    },
    {
      title: "CEOs Forum",
      href: "https://ceosforum.tz",
      dates: "July 2024 - August 2024",
      active: true,
      themeColor: "from-emerald-600",
      bgColor: "bg-emerald-50",
      description:
        "Developed a website for CEOs forum, another gig for a client",
      technologies: [
        "HTML",
        "JavaScript",
        "PHP",
        "Mysql",
        "TailwindCSS",
        "Linux",
      ],
      links: [
        {
          type: "Website",
          href: "https://ceosforum.tz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/vids/ceosforum_demo.mp4",
    },
  ] as Project[],
  hackathons: [
    {
      title: "Binary Labs",
      type: "hackathon",
      dates: "May 2024",
      location: "Dar es Salaam, Tanzania",
      description:
        "Built a telemedicine chatbot for patient triage and consultations — merging clinical workflow thinking with rapid prototyping under time pressure.",
      image: "/hackathon.png",
      tags: ["Telemedicine", "Chatbot", "Health Tech"],
      links: [],
    },
    {
      title: "Post-Operative Wound Care Research",
      type: "research",
      dates: "July 2021 – May 2022",
      location: "Muhimbili National Hospital",
      description:
        "Authored a clinical research report on knowledge, practice, and surgical site infection trends in post-operative wound care at MNH.",
      image: "/research.png",
      tags: ["Clinical Research", "SSI", "Wound Care"],
      links: [
        {
          title: "Read Paper",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Michaeltarimo/research/blob/main/Practice%20trends-Post-op%20woundcare%20(MNH).pdf",
        },
      ],
    },
  ],
  additionalTraining: [
    {
      title: "Jeshi la Kujenga Taifa - Tanzania",
      institution: "Ruvu JKT - Operesheni Tanzania ya Viwanda - AT 3322",
      start: "Jun 2017",
      end: "Sept 2017",
      description: "Mafunzo ya awali ya Ulinzi na Usalama pamoja na Mafunzo ya awali kuhusu Uzalishaji Mali.",
      logoUrl: "/jkt.png",
      altText: "Jeshi la Kujenga Taifa - Tanzania"
    }
  ],
  registration: {
    regNo: "MCT20220661",
    qualification: "MD(2022) - Muhimbili University Of Health And Allied Sciences",
    status: "Registered and allowed to practise as MEDICAL DOCTOR (GP)",
    verificationUrl: "https://hprs.moh.go.tz/#/hprs/practitioner-portal",
    logoUrl: "/mct.jpeg",
    summary: `I am fully registered with the Medical Council of Tanganyika (MCT) as a Medical Doctor (Reg. No: MCT20220661), having qualified with an MD from Muhimbili University of Health and Allied Sciences in 2022. My registration status is active and in good standing, allowing me to practise as a General Practitioner. You can verify my credentials on the Tanzania Health Practitioner Registration System (HPRS).`,
  },
} as const;
