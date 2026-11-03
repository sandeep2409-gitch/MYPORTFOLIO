export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  problemStatement?: string;
  keyResult?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  category: "Certification" | "Internship" | "Hackathon" | "Leadership" | "Competitive";
  date?: string;
  badge?: string;
  highlightMetric?: string;
  kicker?: string;
  themeColor?: "amber" | "emerald" | "sky" | "purple" | "orange" | "rose" | "fuchsia" | "zinc";
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  source?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  companyOrOrg: string;
  content: string;
  avatarPlaceholder: string;
  projectTag?: string;
}

export interface TimelineMilestone {
  stage: string;
  title: string;
  period: string;
  description: string;
  details?: string[];
  tag?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  readingTime: string;
  heroKicker: string;
  publishedDate: string;
  summary: {
    projectName: string;
    hackathonOrContext: string;
    placementOrMilestone: string;
    teamSizeOrRole: string;
    techStack: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
  };
  tableOfContents: { id: string; label: string }[];
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  stars: number;
  recentActivity: string;
  lastUpdated: string;
}
