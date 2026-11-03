"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { TechIcon } from "./TechIcon";
import {
  caseStudyHowIBecameADeveloper,
  caseStudyHackathonWinningProject,
} from "@/data/content";
import { ArrowUpRight, Clock, FileText, Lock, ShieldCheck, Trophy, UserCheck } from "lucide-react";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      ...caseStudyHowIBecameADeveloper,
      icon: UserCheck,
      badge: "Narrative Retrospective",
      highlightMetric: "70+ Repos · GFG Rank #1",
    },
    {
      ...caseStudyHackathonWinningProject,
      icon: Trophy,
      badge: "CODESTORM S2 Champion",
      highlightMetric: "0 Scheduling Collisions · <180ms Latency",
    },
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          label="How I Think & Work"
          title="Depth Meets Perspective."
          italicWord="From idea to system."
          subtitle="Choose a case study. Follow the thinking. Two comprehensive architectural dissections detailing real-world problems and verified execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-2xl border border-line bg-surface/60 hover:border-black/20 dark:hover:border-white/20 hover:bg-surface/90 transition-all duration-300"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-medium uppercase tracking-eyebrow text-accent">
                        {cs.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                      <Clock className="w-3 h-3" />
                      <span>{cs.readingTime}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-ink group-hover:text-accent transition-colors mb-3">
                    <Link href={`/case-studies/${cs.slug}`} className="hover:underline underline-offset-4">
                      {cs.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-sans">
                    {cs.subtitle}
                  </p>

                  {/* Benchmark pill */}
                  <div className="p-3.5 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-line mb-6 flex items-center justify-between text-xs">
                    <span className="font-mono text-muted text-[11px] uppercase tracking-wider">
                      Key Benchmark:
                    </span>
                    <span className="font-mono font-medium text-ink">
                      {cs.highlightMetric}
                    </span>
                  </div>
                </div>

                {/* Footer with Tech Icons & Pill link */}
                <div>
                  <div className="pt-4 border-t border-line flex flex-wrap gap-2 mb-6 items-center">
                    {cs.summary.techStack.map((tech) => (
                      <TechIcon key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="pill-link pill-link-primary text-[10px] py-2 px-4 inline-flex items-center gap-2"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
