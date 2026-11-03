"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { CaseStudy } from "@/types";
import { TechIcon } from "./TechIcon";
import { snappyScrollTo } from "@/lib/scroll";
import { ArrowLeft, ArrowRight, ChevronDown, Clock, Calendar, ExternalLink, Github, List, ArrowUpRight } from "lucide-react";

interface CaseStudyLayoutProps {
  caseStudy: CaseStudy;
  nextCaseStudy?: {
    slug: string;
    title: string;
  };
  children: React.ReactNode;
}

export function CaseStudyLayout({
  caseStudy,
  nextCaseStudy,
  children,
}: CaseStudyLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = caseStudy.tableOfContents.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(caseStudy.tableOfContents[i].id);
          return;
        }
      }
      if (caseStudy.tableOfContents.length > 0) {
        setActiveSection(caseStudy.tableOfContents[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [caseStudy.tableOfContents]);

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Case Study Sub-header */}
      <div className="sticky top-0 z-30 w-full backdrop-blur-xl bg-bg/80 border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs font-mono">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-muted hover:text-ink transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Case Studies</span>
          </Link>

          {/* Mobile TOC Trigger */}
          <div className="lg:hidden relative">
            <button
              type="button"
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-surface text-muted text-[11px] tracking-wider uppercase"
              aria-label="Toggle table of contents"
            >
              <List className="w-3.5 h-3.5 text-accent" />
              <span>Index</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {mobileTocOpen && (
              <div className="absolute right-0 mt-2 w-72 p-3 rounded-2xl border border-line bg-surface shadow-2xl space-y-1 z-50">
                {caseStudy.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileTocOpen(false);
                      snappyScrollTo(item.id, 96);
                      window.history.pushState(null, "", `#${item.id}`);
                      setActiveSection(item.id);
                    }}
                    className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                      activeSection === item.id
                        ? "bg-accent text-[#030303] font-semibold"
                        : "text-muted hover:text-ink hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-muted text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-accent" />
              {caseStudy.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-accent" />
              {caseStudy.publishedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-28">
        {/* Header */}
        <header className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-medium tracking-eyebrow uppercase text-accent">
              {caseStudy.heroKicker}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ink leading-[1.12]">
            {caseStudy.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed font-sans">
            {caseStudy.subtitle}
          </p>

          {/* Quick specs matrix */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-line bg-surface/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="block text-[10px] uppercase text-muted tracking-wider mb-1">
                Project
              </span>
              <span className="font-semibold text-ink">
                {caseStudy.summary.projectName}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted tracking-wider mb-1">
                Context
              </span>
              <span className="font-semibold text-ink">
                {caseStudy.summary.hackathonOrContext}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted tracking-wider mb-1">
                Milestone
              </span>
              <span className="font-semibold text-accent">
                {caseStudy.summary.placementOrMilestone}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-muted tracking-wider mb-1">
                Focus
              </span>
              <span className="font-semibold text-ink">
                {caseStudy.summary.teamSizeOrRole}
              </span>
            </div>
          </div>

          {/* Tech Icons row and links */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-mono text-[10px] text-muted uppercase tracking-wider mr-1">
                Stack:
              </span>
              {caseStudy.summary.techStack.map((t) => (
                <TechIcon key={t} name={t} size="sm" />
              ))}
            </div>

            <div className="flex items-center gap-3">
              {caseStudy.summary.githubUrl && (
                <Link
                  href={caseStudy.summary.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link text-[10px] py-2 px-3.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </Link>
              )}
              {caseStudy.summary.liveDemoUrl && (
                <Link
                  href={caseStudy.summary.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link pill-link-primary text-[10px] py-2 px-3.5"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (8 cols) */}
          <article className="lg:col-span-8 space-y-12 text-ink/85 leading-relaxed text-sm sm:text-base font-sans">
            {children}
          </article>

          {/* Desktop Sticky Table of Contents (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 pl-8 border-l border-line font-mono text-xs">
            <span className="section-eyebrow block mb-4">
              Contents
            </span>
            <nav className="space-y-2.5" aria-label="Table of Contents">
              {caseStudy.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    snappyScrollTo(item.id, 96);
                    window.history.pushState(null, "", `#${item.id}`);
                    setActiveSection(item.id);
                  }}
                  className={`block py-1 transition-all ${
                    activeSection === item.id
                      ? "text-accent font-semibold translate-x-1"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-12 p-5 rounded-2xl border border-line bg-surface/50">
              <span className="font-mono text-xs font-semibold text-ink block mb-1">
                Have questions on this?
              </span>
              <p className="text-xs text-muted mb-4 font-sans leading-relaxed">
                Let&apos;s discuss architecture choices, threat models, or engineering tradeoffs.
              </p>
              <Link
                href="/#contact"
                className="pill-link pill-link-primary text-[10px] py-1.5 px-3.5"
              >
                <span>Reach out directly ↗</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* Next Case Study Navigation */}
        {nextCaseStudy && (
          <div className="mt-20 pt-10 border-t border-line flex justify-end">
            <Link
              href={`/case-studies/${nextCaseStudy.slug}`}
              className="group p-6 rounded-2xl border border-line bg-surface/50 hover:border-white/20 transition-all max-w-md w-full flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase text-accent tracking-eyebrow block mb-1">
                  Next Case Study
                </span>
                <span className="text-base font-medium text-ink group-hover:text-accent transition-colors font-sans">
                  {nextCaseStudy.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-muted group-hover:translate-x-1 group-hover:text-accent transition-all shrink-0 ml-4" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
