"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/content";
import { snappyScrollTo } from "@/lib/scroll";

const navLinks = [
  { href: "/#projects", id: "projects", label: "Work" },
  { href: "/#case-studies", id: "case-studies", label: "Case Studies" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#proof", id: "proof", label: "Metrics" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);

  // Optimized scroll handler with requestAnimationFrame and scroll-spy
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 25);

    if (pathname === "/") {
      const scrollPos = window.scrollY + 200;
      const sectionIds = navLinks.map((l) => l.id);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    }
  }, [pathname]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // Close mobile drawer on Outside Click or Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  // Snappy navigation handler for instant scroll
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      if (pathname === "/") {
        e.preventDefault();
        snappyScrollTo(targetId);
        window.history.pushState(null, "", `#${targetId}`);
        setActiveSection(targetId);
        setMobileOpen(false);
      } else {
        setMobileOpen(false);
      }
    },
    [pathname]
  );

  // Global anchor listener for all hash links when on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const onAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("/#") || (href.startsWith("#") && href.length > 1)) {
        const id = href.replace(/^\/?#/, "");
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          snappyScrollTo(target);
          window.history.pushState(null, "", `#${id}`);
          setActiveSection(id);
          setMobileOpen(false);
        }
      }
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, [pathname]);

  // Snappy scroll to hash on initial load if present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.slice(1);
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          snappyScrollTo(target);
          setActiveSection(hash);
        }, 80);
      }
    }
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <div
        ref={navRef}
        className={`pointer-events-auto relative w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 h-14 ${
          /* True Glassmorphic Glass Specular Physics */
          "backdrop-blur-2xl backdrop-saturate-150"
        } ${
          scrolled
            ? "bg-white/80 dark:bg-[#080808]/75 border border-black/[0.08] dark:border-white/[0.14] shadow-[0_12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]"
            : "bg-white/60 dark:bg-[#090909]/60 border border-black/[0.06] dark:border-white/[0.10] shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.15)]"
        }`}
      >
        {/* Subtle glass reflection overlay */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.15] dark:from-white/[0.08] via-transparent to-black/[0.03] dark:to-black/20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Wordmark */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
              setActiveSection("");
            }
          }}
          className="relative z-10 flex items-center gap-2.5 text-ink hover:text-accent transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-full py-1"
        >
          <span className="live-dot" title="Available for roles in 2026" />
          <span className="tracking-tight font-sans font-semibold text-xs sm:text-sm">
            {personalData.name}
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-muted tracking-wider uppercase pl-2 border-l border-black/10 dark:border-white/10">
            AI Security
          </span>
        </Link>

        {/* Desktop Frosted Glass Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-muted relative z-10"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === "/"
                ? activeSection === link.id
                : pathname.includes(link.id);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                  isActive
                    ? "text-ink font-semibold bg-black/[0.06] dark:bg-white/[0.12] shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md"
                    : "hover:text-ink hover:bg-black/[0.04] dark:hover:bg-white/[0.07]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Talk CTA & Glass Theme Toggle */}
        <div className="relative z-10 flex items-center gap-2.5">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase bg-gradient-to-r from-accent via-[#ff9d6b] to-accent text-[#030303] font-semibold transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,140,89,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] hover:shadow-[0_0_26px_rgba(255,140,89,0.55)]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-muted hover:text-ink transition-all backdrop-blur-md shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 left-3 right-3 sm:left-4 sm:right-4 max-w-5xl rounded-3xl backdrop-blur-3xl bg-white/95 dark:bg-[#080808]/90 border border-black/[0.08] dark:border-white/[0.14] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)] md:hidden space-y-2 z-50"
          >
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === "/"
                    ? activeSection === link.id
                    : pathname.includes(link.id);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 text-xs font-mono uppercase tracking-wider rounded-xl transition-all ${
                      isActive
                        ? "bg-black/[0.06] dark:bg-white/[0.12] text-ink font-semibold shadow-sm"
                        : "text-muted hover:text-ink hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-3">
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="flex-1 text-center py-2 px-4 rounded-full font-mono text-[11px] uppercase tracking-wider bg-accent text-[#030303] font-semibold shadow-[0_0_16px_rgba(255,140,89,0.35)]"
              >
                Let&apos;s talk ↗
              </Link>
              <Link
                href={personalData.socials.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-4 rounded-full border border-black/10 dark:border-white/10 text-[11px] font-mono uppercase tracking-wider text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-all text-center"
              >
                Resume ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
