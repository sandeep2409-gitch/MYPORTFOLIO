"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsList } from "@/data/content";
import { TechIcon } from "./TechIcon";
import { Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const categories = ["All", "AI & ML", "Security", "Full Stack", "Mobile"] as const;
type CategoryType = (typeof categories)[number];

const isAIML = (p: Project) =>
  p.tags.some((t) =>
    ["Gemini API", "EfficientNetB0", "Computer Vision", "PyTorch", "AI Coach", "LLM", "Multi-Agent"].includes(t)
  ) ||
  p.oneLiner.toLowerCase().includes("ai") ||
  p.oneLiner.toLowerCase().includes("gemini") ||
  p.oneLiner.toLowerCase().includes("mri");

const isSecurity = (p: Project) =>
  p.tags.some((t) =>
    ["Security", "OSINT", "Cryptography", "SHA-256", "Digital Forensics", "Evidence Chain", "RBAC", "RBAC+ABAC"].includes(t)
  ) ||
  p.id === "reconx" ||
  p.id === "secure-dms" ||
  p.id === "jocky" ||
  p.id === "college-360";

const isFullStack = (p: Project) =>
  p.tags.some((t) =>
    ["Next.js", "Three.js", "Node.js", "React", "WebSockets", "GCP Cloud Run", "FastAPI", "PostgreSQL", "Flask", "Tailwind"].includes(t)
  ) ||
  p.id === "cosmos" ||
  p.id === "college-360" ||
  p.id === "nexpad" ||
  p.id === "deadlineguard" ||
  p.id === "civic-voice";

const isMobile = (p: Project) =>
  p.tags.some((t) =>
    ["Flutter", "Dart", "Riverpod", "Mobile", "Mobile First"].includes(t)
  ) ||
  p.id === "fitpulse" ||
  p.id === "vitalme" ||
  p.id === "nexpad";

export function ProjectsStrip() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryType>("All");

  const counts: Record<CategoryType, number> = {
    All: projectsList.length,
    "AI & ML": projectsList.filter(isAIML).length,
    Security: projectsList.filter(isSecurity).length,
    "Full Stack": projectsList.filter(isFullStack).length,
    Mobile: projectsList.filter(isMobile).length,
  };

  const filteredProjects = projectsList.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "AI & ML") return isAIML(project);
    if (selectedFilter === "Security") return isSecurity(project);
    if (selectedFilter === "Full Stack") return isFullStack(project);
    if (selectedFilter === "Mobile") return isMobile(project);
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] text-accent tracking-eyebrow font-medium">
              02 /
            </span>
            <span className="font-mono text-[11px] text-muted tracking-eyebrow uppercase font-medium">
              Selected Work
            </span>
          </div>

          {/* Title - Guaranteed in ONE line */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink leading-tight flex flex-wrap items-baseline gap-x-2.5">
            <span>Built. Secured.</span>
            <em className="font-serif italic font-normal text-muted">
              Put into the world.
            </em>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-xs sm:text-sm md:text-base text-muted leading-relaxed max-w-2xl font-sans">
            Ideas are a start. This is the work that followed—spanning adversarial AI defense, tamper-evident cryptographic ledgers, and applied ML architectures.
          </p>

          {/* Expanded Centered Filter Bar */}
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-line"
              role="tablist"
              aria-label="Filter projects by discipline"
            >
              {categories.map((cat) => {
                const isActive = selectedFilter === cat;
                const count = counts[cat];

                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedFilter(cat)}
                    className={`px-4 py-2 rounded-xl transition-all uppercase tracking-wider font-mono text-xs flex items-center gap-2 ${
                      isActive
                        ? "bg-accent text-black font-semibold shadow-md"
                        : "text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-black/20 text-black font-bold"
                          : "bg-black/[0.04] dark:bg-white/5 text-muted"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Compact Cards Grid with Tech Icons */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const indexString = String(idx + 1).padStart(2, "0");

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl border border-line bg-surface/50 hover:border-black/20 dark:hover:border-white/20 hover:bg-surface/80 transition-all duration-300"
                >
                  <div>
                    {/* Top: Index & Outlink */}
                    <div className="flex items-center justify-between mb-3 text-muted">
                      <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-accent">
                        {indexString} //
                      </span>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-ink transition-colors p-1"
                            title="GitHub Repository"
                            aria-label={`View ${project.title} GitHub repo`}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors p-1"
                            title="Live Demo"
                            aria-label={`Open ${project.title} live demo`}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-semibold text-lg text-ink group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* One liner */}
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans mb-5">
                      {project.oneLiner}
                    </p>
                  </div>

                  {/* Tech Icons row */}
                  <div className="pt-4 border-t border-line flex flex-wrap gap-2 items-center">
                    {project.tags.map((tag) => (
                      <TechIcon key={tag} name={tag} size="sm" />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
