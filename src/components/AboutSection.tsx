"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personalData, skillCategories, achievementsList } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { TechIcon } from "./TechIcon";
import { Achievement } from "@/types";
import {
  Award,
  Bug,
  CheckCircle2,
  ChevronRight,
  Flame,
  Palette,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
} from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const achievementTabs = [
    { id: "all", label: "All Milestones", count: 7 },
    { id: "contests", label: "Podiums & Contests", count: 3 },
    { id: "certifications", label: "Certifications & Internships", count: 2 },
    { id: "leadership", label: "Leadership & Design", count: 2 },
  ];

  const filteredAchievements = achievementsList.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "contests") {
      return item.category === "Hackathon" || item.category === "Competitive";
    }
    if (activeTab === "certifications") {
      return (
        (item.category === "Certification" && item.themeColor !== "fuchsia") ||
        item.category === "Internship"
      );
    }
    if (activeTab === "leadership") {
      return item.category === "Leadership" || item.themeColor === "fuchsia";
    }
    return true;
  });

  function getAchievementVisuals(item: Achievement) {
    switch (item.themeColor) {
      case "amber":
        return {
          icon: Trophy,
          iconBox: "bg-amber-500/10 border-amber-500/25 text-amber-400",
          badgeStyle: "bg-amber-500/15 text-amber-300 border-amber-500/30",
          indicatorColor: "bg-amber-400",
          glowBorder: "hover:border-amber-500/40",
        };
      case "emerald":
        return {
          icon: Flame,
          iconBox: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
          badgeStyle: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
          indicatorColor: "bg-emerald-400",
          glowBorder: "hover:border-emerald-500/40",
          pulse: true,
        };
      case "sky":
        return {
          icon: ShieldCheck,
          iconBox: "bg-sky-500/10 border-sky-500/25 text-sky-400",
          badgeStyle: "bg-sky-500/15 text-sky-300 border-sky-500/30",
          indicatorColor: "bg-sky-400",
          glowBorder: "hover:border-sky-500/40",
        };
      case "purple":
        return {
          icon: Award,
          iconBox: "bg-purple-500/10 border-purple-500/25 text-purple-400",
          badgeStyle: "bg-purple-500/15 text-purple-300 border-purple-500/30",
          indicatorColor: "bg-purple-400",
          glowBorder: "hover:border-purple-500/40",
        };
      case "orange":
        return {
          icon: Bug,
          iconBox: "bg-orange-500/10 border-orange-500/25 text-orange-400",
          badgeStyle: "bg-orange-500/15 text-orange-300 border-orange-500/30",
          indicatorColor: "bg-orange-400",
          glowBorder: "hover:border-orange-500/40",
        };
      case "rose":
        return {
          icon: Users,
          iconBox: "bg-rose-500/10 border-rose-500/25 text-rose-400",
          badgeStyle: "bg-rose-500/15 text-rose-300 border-rose-500/30",
          indicatorColor: "bg-rose-400",
          glowBorder: "hover:border-rose-500/40",
        };
      case "fuchsia":
        return {
          icon: Palette,
          iconBox: "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-400",
          badgeStyle: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
          indicatorColor: "bg-fuchsia-400",
          glowBorder: "hover:border-fuchsia-500/40",
        };
      default:
        return {
          icon: Trophy,
          iconBox: "bg-accent/10 border-accent/25 text-accent",
          badgeStyle: "bg-accent/15 text-accent border-accent/30",
          indicatorColor: "bg-accent",
          glowBorder: "hover:border-accent/40",
        };
    }
  }

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          label="The Person Behind The Work"
          title="Technical Arsenal &"
          italicWord="Foundational Craft."
          subtitle="A disciplined engineering mindset combining full-stack web platforms, defensive AI security protocols, and daily algorithmic rigor."
        />

        {/* Bio Left, Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Bio text (Left side - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5 text-ink/85 text-sm sm:text-base leading-relaxed font-sans"
          >
            <div className="p-4 sm:p-5 rounded-2xl border-l-2 border-l-accent bg-surface/60 border border-line mb-6">
              <p className="font-serif italic text-base sm:text-lg text-ink leading-relaxed">
                &ldquo;A well-engineered interface is meaningless without resilient backend architecture, just as sophisticated AI models are useless without clean, practical integration.&rdquo;
              </p>
            </div>

            {personalData.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {/* Practice & Public building callouts */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-line bg-surface/50">
                <div className="flex items-center gap-2 mb-1.5">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                    DSA &amp; Competitive
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Rank #1 at GFG Institute with continuous 50-day streak &amp; 146+ problems solved in Python.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-line bg-surface/50">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                    Building in Public
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Completed &apos;30 WebApps in 30 Days&apos; (29 repos); running &apos;30 Python Projects in 30 Days&apos;.
                </p>
              </div>
            </div>

            {/* Beyond Code */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted">
              <span className="text-ink font-semibold uppercase tracking-wider">
                Beyond Code:
              </span>
              <span>{personalData.beyondCode}</span>
            </div>
          </motion.div>

          {/* Profile Photo (Right side - 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-sm rounded-2xl p-2.5 border border-line bg-surface/80 shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src="/profile.jpg"
                  alt="Sandeep Manchinasetti - AI Security Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              <div className="mt-3.5 px-2 pb-1.5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-ink">
                    {personalData.name}
                  </h3>
                  <p className="text-[11px] font-mono text-muted">
                    B.Tech CSE (AI/ML) · Pydah College, Patavala
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent font-medium border border-accent/25">
                  Sec · QC Club
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Arsenal - Full Width Interactive Vector Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-8 rounded-2xl border border-line bg-surface/50 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-line">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg sm:text-xl text-ink">
                  Technical Arsenal
                </h3>
                <p className="text-xs font-mono text-muted">
                  30 production frameworks, languages, and defensive security protocols
                </p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-eyebrow px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              Vector Icon Stack
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-4 rounded-xl border border-line/70 bg-black/[0.02] dark:bg-black/30 hover:border-black/20 dark:hover:border-white/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-semibold text-ink tracking-wider uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {group.category}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {group.skills.length} tools
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 items-center">
                    {group.skills.map((skill) => (
                      <TechIcon
                        key={skill}
                        name={skill}
                        size="md"
                        className="hover:scale-105"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Verifiable Record - Premier Milestone & Credential Vault */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                <Trophy className="w-4 h-4" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent font-semibold">
                VERIFIABLE RECORD // MILESTONES
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
              Proof of Capability.{" "}
              <span className="font-serif italic font-normal text-muted">
                Earned, not claimed.
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1.5 max-w-xl font-sans">
              A verified track record of hackathon podiums, competitive algorithmic consistency, enterprise certifications, and student leadership.
            </p>

            {/* Centered Expanded Filter Bar — Exactly like Project Filter */}
            <div className="mt-8 flex justify-center">
              <div
                className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-line"
                role="tablist"
                aria-label="Filter milestones by category"
              >
                {achievementTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-xl transition-all uppercase tracking-wider font-mono text-xs flex items-center gap-2 ${
                        isActive
                          ? "bg-accent text-black font-semibold shadow-md"
                          : "text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive
                            ? "bg-black/20 text-black font-bold"
                            : "bg-black/[0.04] dark:bg-white/5 text-muted"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Milestone Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredAchievements.map((item, idx) => {
                const visual = getAchievementVisuals(item);
                const Icon = visual.icon;

                return (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className={`group relative p-6 sm:p-7 rounded-2xl border border-line bg-surface/50 hover:bg-surface/85 transition-all duration-300 flex flex-col justify-between ${visual.glowBorder}`}
                  >
                    <div>
                      {/* Top Bar: Icon Box + Kicker (Left) & Badge (Right) */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${visual.iconBox}`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-muted/90 block">
                              {item.kicker || item.category}
                            </span>
                            <span className="font-mono text-[11px] text-ink font-semibold">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        {item.badge && (
                          <span
                            className={`font-mono text-[10px] font-medium px-2.5 py-1 rounded-full border shrink-0 flex items-center gap-1.5 ${visual.badgeStyle}`}
                          >
                            {visual.pulse && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="text-base sm:text-lg font-semibold text-ink group-hover:text-accent transition-colors font-sans leading-snug mb-2">
                        {item.title}
                      </h4>

                      {/* Full description */}
                      <p className="text-xs sm:text-sm text-ink/75 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom: Highlight Benchmark Tag */}
                    <div className="mt-5 pt-3.5 border-t border-line/70 flex items-center justify-between text-xs font-mono">
                      <div className="inline-flex items-center gap-1.5 text-[11px] text-accent/90 bg-accent/5 px-2.5 py-1 rounded-md border border-accent/15">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                        <span>{item.highlightMetric}</span>
                      </div>
                      <span className="text-[10px] text-muted/60 uppercase">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
