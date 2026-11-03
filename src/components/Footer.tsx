"use client";

import Link from "next/link";
import { personalData } from "@/data/content";
import { ArrowUp } from "lucide-react";
import { snappyScrollTo } from "@/lib/scroll";

export function Footer() {
  const scrollToTop = () => {
    snappyScrollTo("main-content", 0, 320);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12 bg-bg text-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          <span className="text-ink font-semibold">&copy; {currentYear} {personalData.name}</span>
          <span>•</span>
          <span className="uppercase">{personalData.role}</span>
          <span>•</span>
          <span>{personalData.location}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="text-ink/80">Updated: Nov 2026</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-ink transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px]"
            title="Return to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
