"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { metricsData, testimonialsData, personalData } from "@/data/content";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionHeading } from "./SectionHeading";
import { GitHubStats } from "@/types";
import { fallbackGitHubStats } from "@/lib/github";
import { ArrowUpRight, GitBranch, GitCommit, GitPullRequest, Github, Quote, Users } from "lucide-react";

export function ProofSection() {
  const [gitHubStats, setGitHubStats] = useState<GitHubStats>(fallbackGitHubStats);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function loadGitHub() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setGitHubStats(data);
          setIsLive(true);
        }
      } catch {
        // Fallback remains active
      }
    }
    loadGitHub();
  }, []);

  return (
    <section id="proof" className="py-20 sm:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="04"
          label="The Work, Multiplied"
          title="Numbers Matter."
          italicWord="Proof over promises."
          subtitle="Engineering capability is measured through verifiable evidence—continuous algorithmic streaks, production repositories, and live telemetry."
        />

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {metricsData.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-5 rounded-2xl border border-line bg-surface/50 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-ink leading-tight">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix || ""}
                    suffix={m.suffix || ""}
                    decimals={m.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <h3 className="mt-3 text-[11px] font-mono font-medium uppercase tracking-wider text-muted">
                  {m.label}
                </h3>
              </div>
              <p className="mt-2 text-[10px] font-mono text-muted/80 leading-tight">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sarthak-style Live GitHub Data Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-16 p-6 sm:p-8 rounded-2xl border border-line bg-surface/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-ink flex items-center justify-center shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-ink">
                  github.com/{personalData.socials.github.username}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent/15 text-accent border border-accent/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {isLive ? "Live Telemetry" : "Cached Sync"}
                </span>
              </div>
              <p className="text-xs text-muted mt-1 font-sans">
                {gitHubStats.recentActivity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-ink/80">
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-accent" />
              <span>
                <strong>{gitHubStats.publicRepos}</strong> Repos
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-accent" />
              <span>
                <strong>{gitHubStats.followers}</strong> Followers
              </span>
            </div>
            <Link
              href={personalData.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link text-[10px] py-1.5 px-3.5"
            >
              <span>Audit</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>

        {/* Current Project Testimonials / Reactions */}
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="section-eyebrow">
              Project Reactions &amp; Peer Reviews
            </span>
            <span className="text-[11px] font-mono text-muted">
              Verified Project Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="p-6 sm:p-7 rounded-2xl border border-line bg-surface/50 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-accent/40" />
                    {t.projectTag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent/15 text-accent font-medium border border-accent/25">
                        {t.projectTag}
                      </span>
                    )}
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-ink/90 leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-accent">
                    {t.avatarPlaceholder}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-ink">
                      {t.name}
                    </h4>
                    <p className="text-[11px] font-mono text-muted">
                      {t.role} · {t.companyOrOrg}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
