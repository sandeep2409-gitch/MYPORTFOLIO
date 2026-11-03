"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { personalData, featuredProject } from "@/data/content";
import { TechIcon } from "./TechIcon";
import { snappyScrollTo } from "@/lib/scroll";
import { ArrowUpRight, Check, Copy, ExternalLink, ShieldAlert, Sparkles, Terminal } from "lucide-react";

export function HeroHook() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.socials.email.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 border-b border-line overflow-hidden">
      {/* Background Grid Pattern Mask */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Topline metadata */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] tracking-eyebrow text-muted uppercase pb-8 mb-8 border-b border-line"
        >
          <div className="flex items-center gap-2.5">
            <span className="live-dot" />
            <span className="text-ink font-semibold">AI SECURITY. FULL STACK. BUILDER.</span>
          </div>
          <div className="hidden sm:block text-muted">
            BASED IN INDIA · SOLVING REAL-WORLD PROBLEMS
          </div>
        </motion.div>

        {/* Hero Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-4"
        >
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-eyebrow text-accent font-medium">
            ENGINEERING DOSSIER • 2026
          </span>
        </motion.div>

        {/* Primary Giant Title & Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-ink leading-[1.08] mb-6">
            Sandeep <em className="font-serif italic font-normal text-black dark:text-white">Manchinasetti</em>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-ink/90 leading-snug max-w-4xl">
            A developer who solves problems through{" "}
            <em className="font-serif italic font-normal text-black dark:text-white">
              real-world experience
            </em>{" "}
            and{" "}
            <em className="font-serif italic font-normal text-accent">
              Artificial Intelligence
            </em>
            .
          </p>

          <p className="mt-6 text-sm sm:text-base text-muted max-w-2xl leading-relaxed font-sans font-normal">
            {personalData.subtext}
          </p>
        </motion.div>

        {/* Sarthak-style Pill Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              snappyScrollTo("projects");
              window.history.pushState(null, "", "#projects");
            }}
            className="pill-link pill-link-primary"
          >
            <span>Explore Selected Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/#case-studies"
            onClick={(e) => {
              e.preventDefault();
              snappyScrollTo("case-studies");
              window.history.pushState(null, "", "#case-studies");
            }}
            className="pill-link"
          >
            <span>View Case Studies</span>
            <span className="font-sans text-xs">↓</span>
          </Link>

          <Link
            href={personalData.socials.resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            <span>Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={copyEmail}
            className="pill-link group"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent">Copied Email</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-muted group-hover:text-ink transition-colors" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Reach / Big Impact Numbers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-16 pt-10 border-t border-line grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-ink leading-none">
              70<em className="text-accent not-italic text-4xl sm:text-5xl">+</em>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Public GitHub Repositories
            </p>
          </div>

          <div>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-ink leading-none">
              #1
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              GFG Institute Leaderboard (50-Day Streak)
            </p>
          </div>

          <div>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-ink leading-none">
              29<em className="text-accent not-italic text-3xl sm:text-4xl"> Repos</em>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              &apos;30 WebApps in 30 Days&apos; Milestone
            </p>
          </div>

          <div>
            <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-ink leading-none">
              4<em className="text-accent not-italic text-3xl sm:text-4xl"> Active</em>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              Professional &amp; Virtual Internships
            </p>
          </div>
        </motion.div>

        {/* Featured Flagship Project Card (ReconX) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-14"
        >
          <div className="relative rounded-2xl border border-line bg-surface/60 p-6 sm:p-9 backdrop-blur-md transition-all hover:border-black/20 dark:hover:border-white/20">
            {/* Header: Project Name & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-medium uppercase tracking-eyebrow text-accent">
                      Featured AI Security Tool
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-ink font-sans">
                    {featuredProject.title}
                  </h3>
                </div>
              </div>

              {/* Action Buttons: Live Prototype + Repo */}
              <div className="flex items-center gap-2.5 self-start sm:self-center">
                <Link
                  href={featuredProject.liveUrl || featuredProject.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link pill-link-primary text-[10px] py-2 px-4"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Live Prototype</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>

                <Link
                  href={featuredProject.githubUrl || "https://reconx-lilac.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link text-[10px] py-2 px-4"
                >
                  <Terminal className="w-3.5 h-3.5 text-muted" />
                  <span>Source</span>
                </Link>
              </div>
            </div>

            {/* Body: Problem Statement & Key Result */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted font-medium">
                  01 // The Problem
                </span>
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-sans">
                  {featuredProject.problemStatement}
                </p>
                <p className="text-xs text-muted pt-1 font-sans">
                  {featuredProject.oneLiner}
                </p>
              </div>

              <div className="space-y-2 md:border-l md:border-line md:pl-6">
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted font-medium">
                  02 // Key Result
                </span>
                <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-black/40 border border-line">
                  <div className="font-serif text-3xl font-normal text-ink flex items-center gap-2">
                    <span>&lt; 5.0s</span>
                    <span className="font-sans text-xs text-accent uppercase font-mono tracking-wider">
                      Verified synthesis time
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed font-sans">
                    {featuredProject.keyResult}
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Icons row */}
            <div className="mt-6 pt-4 border-t border-line flex flex-wrap gap-2 items-center">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted mr-1">
                Stack:
              </span>
              {featuredProject.tags.map((tag) => (
                <TechIcon key={tag} name={tag} size="sm" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
