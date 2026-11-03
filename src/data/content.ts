import {
  Project,
  SkillCategory,
  Achievement,
  Metric,
  Testimonial,
  CaseStudy,
  TimelineMilestone,
} from "@/types";

export const personalData = {
  name: "Sandeep Manchinasetti",
  shortName: "Sandy",
  role: "AI Security Full Stack Developer",
  status: "Available for internships & full-stack roles (2026)",
  location: "Kakinada & Patavala, India",
  college: "Pydah College of Engineering, Patavala (JNTUK)",
  degree: "B.Tech in Computer Science & Engineering (AI/ML), 3rd Year",
  leadership: "Secretary of the Quantum Coders Club",
  beyondCode: "Anime and manga fan exploring narrative architecture & worldbuilding.",
  headline:
    "A developer who solves problems through real-world experience and Artificial Intelligence.",
  subtext:
    "Third-year CSE (AI/ML) undergraduate building resilient full-stack platforms, offensive & defensive AI security tooling, and verified cryptographic architectures.",
  bio: [
    "I'm an AI Security Full Stack Developer and 3rd-year B.Tech CSE (AI/ML) student at Pydah College of Engineering, Patavala (affiliated with JNTUK). As Secretary of the Quantum Coders club, I lead technical workshops and peer hackathon squads.",
    "My focus bridges two critical disciplines: designing bulletproof, high-performance web systems (Next.js, Node.js, FastAPI) and securing modern intelligent systems against novel threat vectors (prompt injection, OWASP LLM Top 10, adversary OSINT correlation, and tamper-evident cryptographic audit logs).",
    "I believe in ruthless consistency over sporadic bursts. I hold Rank #1 on my institute's GeeksforGeeks leaderboard with an active 50-day streak, solved 146+ problems in Python, and actively build in public on LinkedIn—having completed '30 WebApps in 30 Days' (29 published repos) and currently shipping '30 Python Projects in 30 Days'.",
  ],
  socials: {
    github: {
      url: "https://github.com/sandeep2409-gitch",
      username: "sandeep2409-gitch",
      label: "GitHub",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/sandeep-manchinasetti007",
      username: "sandeep-manchinasetti007",
      label: "LinkedIn",
    },
    instagram: {
      url: "https://www.instagram.com/sandeep_manchinasettii",
      username: "@sandeep_manchinasettii",
      label: "Instagram",
    },
    email: {
      url: "mailto:sandeepmanchinasetti007@gmail.com",
      address: "sandeepmanchinasetti007@gmail.com",
      label: "Email",
    },
    resume: {
      url: "/sandy.pdf",
      label: "Download CV",
    },
  },
};

export const featuredProject: Project = {
  id: "reconx",
  title: "ReconX",
  oneLiner:
    "OSINT correlation and username enumeration tool with Gemini-powered narrative threat generation.",
  tags: [
    "Python",
    "Gemini API",
    "OSINT",
    "Threat Intelligence",
    "FastAPI",
    "Security",
  ],
  problemStatement:
    "Security researchers and investigators waste hours cross-referencing dozens of open-source intelligence endpoints and manually synthesizing disparate target footprints.",
  keyResult:
    "Automates enumeration across 40+ platforms and produces cohesive, actionable behavioral intelligence dossiers in under 5 seconds.",
  liveUrl: "https://reconx-lilac.vercel.app",
  githubUrl: "https://github.com/sandeep2409-gitch/ReconX",
  featured: true,
};

export const projectsList: Project[] = [
  featuredProject,
  {
    id: "cosmos",
    title: "COSMOS",
    oneLiner:
      "Interactive 3D universe platform featuring real-time UTC day/night orbital sync, Earth FM live radio globe, and a Gemini-powered astronomy guide.",
    tags: ["Three.js", "WebGL", "Next.js", "Gemini API", "Tailwind CSS"],
    githubUrl: "https://github.com/sandeep2409-gitch/COSMOS",
    liveUrl: "https://cosmos-universe.vercel.app",
  },
  {
    id: "secure-dms",
    title: "Secure DMS (SIH 2026)",
    oneLiner:
      "Tamper-evident legal & investigation document management system (SIH26190, Team NeoNexSecure DMS) with RBAC+ABAC, SHA-256 digital signatures, hash-chained audit trails, and OCR semantic search.",
    tags: [
      "Node.js",
      "Cryptography",
      "SHA-256",
      "RBAC/ABAC",
      "OCR",
      "Smart India Hackathon",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch/Secure-DMS",
    liveUrl: "https://github.com/sandeep2409-gitch/Secure-DMS",
  },
  {
    id: "jocky",
    title: "JOCKY (SIH 2026)",
    oneLiner:
      "Cross-platform digital forensics framework (SIH26148). 'Write once. Investigate anywhere. Preserve every evidence.'",
    tags: [
      "Python",
      "Digital Forensics",
      "Evidence Chain",
      "Cross-Platform",
      "SIH 2026",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch/JOCKY-Forensics",
    liveUrl: "https://github.com/sandeep2409-gitch/JOCKY-Forensics",
  },
  {
    id: "nexpad",
    title: "NexPad",
    oneLiner:
      "AirConsole-style local multiplayer gaming platform turning smartphones into real-time low-latency gamepads via WebSockets.",
    tags: ["WebSockets", "Node.js", "React", "Mobile First", "Gamepad API"],
    githubUrl: "https://github.com/sandeep2409-gitch/NexPad",
    liveUrl: "https://github.com/sandeep2409-gitch/NexPad",
  },
  {
    id: "deadlineguard",
    title: "DeadlineGuard",
    oneLiner:
      "Multi-agent Gemini productivity engine with autonomous task triage, calendar de-confliction, and predictive burnout safeguards (BlockseBlock Hackathon 2026).",
    tags: [
      "Gemini API",
      "Multi-Agent",
      "Next.js",
      "Tailwind",
      "Hackathon 2026",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch/DeadlineGuard",
    liveUrl: "https://github.com/sandeep2409-gitch/DeadlineGuard",
  },
  {
    id: "college-360",
    title: "College 360",
    oneLiner:
      "CODESTORM 1st-place campus operations suite with conflict-free timetable scheduling, RBAC, and sub-200ms API latency.",
    tags: [
      "Node.js",
      "React",
      "PostgreSQL",
      "Tailwind",
      "Hackathon Winner",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch",
    liveUrl: "https://github.com/sandeep2409-gitch",
  },
  {
    id: "civic-voice",
    title: "Civic Voice",
    oneLiner:
      "Civic tech grievance reporting and community resolution system containerized and deployed on GCP Cloud Run.",
    tags: ["GCP Cloud Run", "Docker", "Node.js", "PostgreSQL", "Civic Tech"],
    githubUrl: "https://github.com/sandeep2409-gitch/CivicVoice",
    liveUrl: "https://github.com/sandeep2409-gitch/CivicVoice",
  },
  {
    id: "nuroliq-ai",
    title: "Nuroliq AI",
    oneLiner:
      "Medical deep-learning diagnostic API classifying neuro-MRI brain tumor scans using EfficientNetB0 transfer learning.",
    tags: [
      "EfficientNetB0",
      "PyTorch",
      "Flask",
      "Computer Vision",
      "Healthcare",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch/Nuroliq-AI",
    liveUrl: "https://github.com/sandeep2409-gitch/Nuroliq-AI",
  },
  {
    id: "fitpulse",
    title: "FitPulse",
    oneLiner:
      "Intelligent mobile fitness coach built with Flutter, Riverpod state management, and Clean Architecture.",
    tags: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "Mobile AI"],
    githubUrl: "https://github.com/sandeep2409-gitch/FitPulse",
    liveUrl: "https://github.com/sandeep2409-gitch/FitPulse",
  },
  {
    id: "vitalme",
    title: "VitalMe",
    oneLiner:
      "Mobile health and wellness telemetry tracker tracking biometric logs, hydration schedules, and habit reinforcement.",
    tags: ["Flutter", "Dart", "SQLite", "Biometrics", "Mobile"],
    githubUrl: "https://github.com/sandeep2409-gitch/VitalMe",
    liveUrl: "https://github.com/sandeep2409-gitch/VitalMe",
  },
  {
    id: "jarvis-macos",
    title: "Jarvis AI for macOS",
    oneLiner:
      "Multimodal voice/text AI desktop assistant for macOS powered by the Gemini Live API with automated workspace actions.",
    tags: ["Python", "Gemini API", "macOS Automation", "Audio STT/TTS", "LLM"],
    githubUrl: "https://github.com/sandeep2409-gitch/Jarvis-macOS-AI",
    liveUrl: "https://github.com/sandeep2409-gitch/Jarvis-macOS-AI",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Dart", "Rust (in progress)"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Three.js / WebGL", "Flutter"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js / Express",
      "FastAPI",
      "Flask",
      "Django / DRF (learning)",
      "RESTful APIs",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Gemini API",
      "EfficientNet Transfer Learning",
      "Ollama",
      "Local LLM Fine-Tuning (QLoRA / Unsloth)",
      "Prompt Engineering",
    ],
  },
  {
    category: "Security",
    skills: [
      "OSINT",
      "Network Security",
      "AI/LLM Security (Prompt Injection, OWASP LLM Top 10)",
      "Bug Bounty Methodology",
      "Cryptographic Auditing",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "GCP Cloud Run",
      "Docker",
      "Learning Terraform & Kubernetes",
      "GitHub Actions (CI/CD)",
    ],
  },
];

export const achievementsList: Achievement[] = [
  {
    title: "CODESTORM S2 College Hackathon Winner",
    subtitle: "1st Place / Category Winner",
    description:
      "Awarded 1st place for architecting College360 campus platform with zero data collisions, conflict-free timetable matrix, and sub-200ms latency.",
    category: "Hackathon",
    badge: "1st Place Winner",
    kicker: "HACKATHON FIRST PLACE",
    highlightMetric: "0 Scheduling Collisions · <200ms Latency",
    themeColor: "amber",
  },
  {
    title: "GeeksforGeeks Institute Leaderboard Rank #1",
    subtitle: "Top Spot on Campus Leaderboard",
    description:
      "Maintained an active 50-day Problem-of-the-Day continuous streak with 146+ algorithmic solutions conquered in Python.",
    category: "Competitive",
    badge: "Rank #1",
    kicker: "ALGORITHMIC RIGOR",
    highlightMetric: "50-Day PoTD Streak · 146+ Solved",
    themeColor: "emerald",
  },
  {
    title: "Fortinet Network Security Associate",
    subtitle: "Certified Professional Credential",
    description:
      "Validated enterprise network defense, firewall architectures, threat containment, and secure fabric topology.",
    category: "Certification",
    badge: "Certified",
    kicker: "ENTERPRISE CREDENTIAL",
    highlightMetric: "Network Defense · Firewall Fabric",
    themeColor: "sky",
  },
  {
    title: "EduSkills x AICTE Virtual Internships",
    subtitle: "Triple Specialization Track",
    description:
      "Successfully completed Python Full Stack (awarded 'Excellent' grade), Fortinet Network Security, and AWS Cloud Engineering internships.",
    category: "Internship",
    badge: "Grade: Excellent",
    kicker: "TRIPLE SPECIALIZATION",
    highlightMetric: "Python Full Stack · AWS · Fortinet",
    themeColor: "purple",
  },
  {
    title: "Inter-College Debugging Champion",
    subtitle: "Rapid Code Vulnerability Remediation",
    description:
      "Secured 1st prize in rapid algorithmic debugging, code vulnerability identification, and security edge-case patching.",
    category: "Competitive",
    badge: "1st Prize",
    kicker: "VULNERABILITY REMEDIATION",
    highlightMetric: "Rapid Code Patching · 1st Prize",
    themeColor: "orange",
  },
  {
    title: "Secretary — Quantum Coders Club",
    subtitle: "Student Leadership & Technical Mentorship",
    description:
      "Orchestrating algorithmic workshops, coding hackathons, and fostering a peer culture of open-source contribution.",
    category: "Leadership",
    badge: "Club Secretary",
    kicker: "CAMPUS LEADERSHIP",
    highlightMetric: "Workshops · Hackathons · Mentorship",
    themeColor: "rose",
  },
  {
    title: "EduSkills UI/UX Course (AICTE Recognized)",
    subtitle: "Design Systems & High-Fidelity Prototyping",
    description:
      "Currently enrolled, mastering advanced Figma component variants, accessibility ergonomics, and design-to-code pipelines.",
    category: "Certification",
    badge: "Enrolled",
    kicker: "DESIGN ERGONOMICS",
    highlightMetric: "Figma Components · WCAG · Prototyping",
    themeColor: "fuchsia",
  },
];

export const metricsData: Metric[] = [
  {
    label: "Public GitHub Repos",
    value: 70,
    suffix: "+",
    description: "Full-stack apps, AI microservices, and security tools",
    source: "github.com/sandeep2409-gitch",
  },
  {
    label: "WebApps Challenge",
    value: 29,
    suffix: " Repos",
    description: "'30 WebApps in 30 Days' completed build-in-public milestone",
    source: "LinkedIn Series",
  },
  {
    label: "GFG Institute Leaderboard",
    value: 1,
    prefix: "#",
    description: "Rank #1 with 50-day active streak & 146+ problems solved",
    source: "GeeksforGeeks",
  },
  {
    label: "Certifications & Internships",
    value: 4,
    suffix: "+",
    description: "Fortinet NSA, AWS, EduSkills (Grade: Excellent)",
    source: "AICTE / Fortinet",
  },
  {
    label: "Hackathon Podiums & Wins",
    value: 2,
    suffix: "+",
    description: "CODESTORM S2 Champion, BlockseBlock 2026",
    source: "National Hackathons",
  },
  {
    label: "Academic Standing (CGPA)",
    value: 8.2,
    suffix: "/10",
    description: "B.Tech CSE (AI/ML) at Pydah College of Engineering, Patavala",
    source: "JNTUK",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Teja Jetti",
    role: "Core Team & Security Collaborator",
    companyOrOrg: "ReconX Core Team",
    projectTag: "ReconX",
    content:
      "Building ReconX alongside Sandy proved what happens when OSINT meets real-time AI. Engineering the asynchronous correlation engine across 40+ endpoints and integrating Gemini for automated threat dossiers turned hours of tedious manual reconnaissance into a 5-second automated workflow.",
    avatarPlaceholder: "TJ",
  },
  {
    name: "Venkata Ramana",
    role: "Head of Department (AI & ML)",
    companyOrOrg: "Pydah College of Engineering, Patavala",
    projectTag: "COSMOS",
    content:
      "COSMOS represents an exceptional synthesis of applied artificial intelligence and graphics engineering. Seeing an undergraduate build a real-time UTC-synchronized solar system, layer live Earth FM radio streaming, and integrate Gemini celestial intelligence into an interactive 60 FPS platform is remarkable.",
    avatarPlaceholder: "VR",
  },
  {
    name: "Vamsi Krishna",
    role: "HRM & Hackathon Jury Member",
    companyOrOrg: "CODESTORM Hackathon Jury",
    projectTag: "College 360",
    content:
      "During the CODESTORM hackathon evaluation, College 360 stood out as a clear 1st place winner. Sandy engineered a centralized campus operational platform that resolved critical timetable conflicts, enforced granular role-based access, and delivered zero data collisions with sub-200ms latency. Genuinely production-ready architecture.",
    avatarPlaceholder: "VK",
  },
];

export const howIBecameADeveloperTimeline: TimelineMilestone[] = [
  {
    stage: "01",
    title: "First Lines of Code & The Initial Catalyst",
    period: "2023",
    description:
      "Fascinated by how software can manifest real utility out of pure logic, I wrote my first Python scripts in Kakinada. I quickly moved past basic textbook print statements to building command-line utilities and algorithmic exercises.",
    details: [
      "Wrote foundational Python automation scripts",
      "Committed first public repository to GitHub",
      "Realized the massive chasm between classroom theory and production engineering",
    ],
    tag: "Genesis",
  },
  {
    stage: "02",
    title: "Python Full Stack Virtual Internship (EduSkills x AICTE)",
    period: "Early 2024",
    description:
      "Enrolled in the intensive AICTE-recognized EduSkills program. Completed the course with an 'Excellent' grade by designing end-to-end Flask applications with relational schemas, asynchronous routing, and token-based authentication.",
    details: [
      "Awarded highest 'Excellent' performance grade",
      "Engineered full CRUD APIs and dynamic Jinja/REST pipelines",
      "Deepened database indexing and session handling fundamentals",
    ],
    tag: "Grade: Excellent",
  },
  {
    stage: "03",
    title: "Fortinet Network Security Associate Certification",
    period: "Mid 2024",
    description:
      "To build security from the ground up, I prepared for and earned the Fortinet Network Security Associate credential, mastering firewall topologies, packet filtering, and defense-in-depth principles.",
    details: [
      "Studied threat containment and perimeter defenses",
      "Analyzed OSI model vulnerabilities and network inspection",
      "Applied defensive security patterns to web application architectures",
    ],
    tag: "Certified",
  },
  {
    stage: "04",
    title: "AWS Cloud Engineering & Architecture Immersion",
    period: "Late 2024",
    description:
      "Completed the intensive AWS virtual cloud engineering internship to master IAM policies, S3 bucket storage lifecycles, and EC2 provisioning, applying zero-trust security patterns across web architectures.",
    details: [
      "Designed resilient cloud deployment workflows with AWS best practices",
      "Architected secure IAM role boundaries and tokenized API authorizations",
      "Emphasized zero-downtime database migrations and defensive validation",
    ],
    tag: "Cloud Architecture",
  },
  {
    stage: "05",
    title: "'30 WebApps in 30 Days' Public Challenge",
    period: "2025",
    description:
      "To forge unmatched speed and muscle memory, I announced the '30 WebApps in 30 Days' challenge on LinkedIn. Shipped 29 distinct, documented GitHub repositories—ranging from WebSockets multiplayer to medical AI analyzers.",
    details: [
      "Completed 29 public repositories with live Vercel deployments",
      "Documented daily architectural decisions publicly on LinkedIn",
      "Followed immediately by initiating '30 Python Projects in 30 Days' (currently running)",
    ],
    tag: "Building in Public",
  },
  {
    stage: "06",
    title: "Pivoting into AI Security & ReconX Tooling",
    period: "Late 2025 — 2026",
    description:
      "Integrated my full-stack background with adversarial AI security and threat intelligence. Built ReconX to correlate 40+ OSINT endpoints with Gemini-assisted behavioral narrative synthesis.",
    details: [
      "Investigated prompt injection, jailbreaks, and OWASP LLM Top 10 vulnerabilities",
      "Authored automated reconnaissance tooling with sub-second execution",
      "Engineered local fine-tuning experiments with QLoRA and Unsloth",
    ],
    tag: "AI Security Focus",
  },
  {
    stage: "07",
    title: "National Hackathons: BlockseBlock & Smart India Hackathon 2026",
    period: "2026",
    description:
      "Competed in national-tier hackathons. Built DeadlineGuard for BlockseBlock 2026 and led Team NeoNexSecure DMS on SIH26190 (Secure Document Management) and SIH26148 (JOCKY Digital Forensics Framework).",
    details: [
      "Selected for Smart India Hackathon 2026 with dual security projects",
      "Engineered tamper-evident SHA-256 cryptographic chaining in high-pressure 48-hour sprints",
      "Elected Secretary of Quantum Coders Club to mentor the next wave of engineers",
    ],
    tag: "National Stage",
  },
];

export const caseStudyHowIBecameADeveloper: CaseStudy = {
  slug: "how-i-became-a-developer",
  title: "How I Became a Developer",
  subtitle:
    "From First Lines of Code in Kakinada to AI Security, 70+ Repositories, and National Hackathons.",
  metaDescription:
    "The honest, first-person retrospective of Sandeep Manchinasetti: overcoming lack of guidance, building algorithmic discipline (GFG Rank #1), and engineering production AI security systems.",
  readingTime: "6 min read",
  heroKicker: "First-Person Retrospective • 2023 — 2026",
  publishedDate: "November 2026",
  summary: {
    projectName: "Personal Engineering Transformation",
    hackathonOrContext: "Self-Directed Mastery & Academic Journey",
    placementOrMilestone: "70+ Repos, GFG Rank #1, 4 Internships",
    teamSizeOrRole: "Solo Developer / Continuous Self-Evaluation",
    techStack: [
      "Python",
      "TypeScript",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Gemini API",
      "Docker",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch",
    liveDemoUrl: "https://sandeepmanchinasetti.vercel.app",
  },
  tableOfContents: [
    { id: "context", label: "1. Context & The Spark" },
    { id: "problem", label: "2. The Obstacles & Mindset Gap" },
    { id: "process", label: "3. The 7-Stage Execution Timeline" },
    { id: "results", label: "4. Verifiable Metrics & Numbers" },
    { id: "conclusion", label: "5. What's Next & Vision" },
  ],
};

export const caseStudyHackathonWinningProject: CaseStudy = {
  slug: "hackathon-winning-project",
  title: "College 360: Engineering a Zero-Conflict Campus Operating System",
  subtitle:
    "How We Architected Real-Time Conflict Resolution, Granular Multi-Tenant RBAC, and Sub-200ms API Latency to Win 1st Place at CODESTORM S2.",
  metaDescription:
    "Deep dive into College 360: how our hackathon squad designed a conflict-free timetable engine, relational PostgreSQL schema, and high-concurrency role-based access to win 1st place at CODESTORM S2.",
  readingTime: "7 min read",
  heroKicker: "CODESTORM S2 Hackathon • 1st Place Champion",
  publishedDate: "November 2026",
  summary: {
    projectName: "College 360",
    hackathonOrContext: "CODESTORM S2 College Hackathon",
    placementOrMilestone: "1st Place Winner / Best Architecture Award",
    teamSizeOrRole: "Sandeep and Siva Teja",
    techStack: [
      "Node.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
    ],
    githubUrl: "https://github.com/sandeep2409-gitch",
    liveDemoUrl: "https://github.com/sandeep2409-gitch",
  },
  tableOfContents: [
    { id: "hero-summary", label: "1. Executive Summary" },
    { id: "problem", label: "2. The Campus Dilemma & Data Collisions" },
    { id: "solution", label: "3. Systems Architecture & Constraint Solver" },
    { id: "how-we-built-it", label: "4. The 36-Hour Hackathon Sprint" },
    { id: "after-shipping", label: "5. Jury Evaluation & Live Stress Test" },
    { id: "numbers", label: "6. Quantified Impact Metrics" },
    { id: "lessons-learned", label: "7. Lessons & Future Roadmap" },
  ],
};
