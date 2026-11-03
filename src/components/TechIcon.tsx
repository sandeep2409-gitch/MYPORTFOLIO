"use client";

import React, { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiDocker,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiGooglegemini,
  SiPytorch,
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiWireshark,
  SiWebgl,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  Shield,
  Terminal,
  Brain,
  Network,
  Key,
} from "lucide-react";

interface TechIconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { icon: "w-3.5 h-3.5", box: "w-7 h-7 text-xs" },
  md: { icon: "w-4 h-4", box: "w-8 h-8 text-xs" },
  lg: { icon: "w-6 h-6", box: "w-12 h-12 text-sm" },
  xl: { icon: "w-8 h-8", box: "w-16 h-16 text-base" },
};

export function getTechIconComponent(name: string) {
  const clean = name.toLowerCase().trim();

  // Languages
  if (clean.includes("python")) return SiPython;
  if (clean.includes("javascript")) return SiJavascript;
  if (clean.includes("typescript")) return SiTypescript;
  if (clean.includes("dart")) return SiDart;
  if (clean.includes("rust")) return SiRust;

  // Frontend
  if (clean === "react" || clean.includes("react js")) return SiReact;
  if (clean.includes("next")) return SiNextdotjs;
  if (clean.includes("tailwind")) return SiTailwindcss;
  if (clean.includes("three")) return SiThreedotjs;
  if (clean.includes("webgl")) return SiWebgl;
  if (clean.includes("flutter")) return SiFlutter;

  // Backend
  if (clean.includes("node")) return SiNodedotjs;
  if (clean.includes("express")) return SiExpress;
  if (clean.includes("fastapi")) return SiFastapi;
  if (clean.includes("flask")) return SiFlask;
  if (clean.includes("django")) return SiDjango;

  // AI & ML
  if (clean.includes("gemini")) return SiGooglegemini;
  if (clean.includes("pytorch")) return SiPytorch;
  if (clean.includes("tensorflow") || clean.includes("efficientnet")) return SiTensorflow;
  if (clean.includes("ollama") || clean.includes("qlora") || clean.includes("unsloth") || clean.includes("llm")) return Brain;

  // Cloud & DevOps
  if (clean.includes("docker")) return SiDocker;
  if (clean.includes("aws")) return FaAws;
  if (clean.includes("gcp") || clean.includes("cloud run")) return SiGooglecloud;
  if (clean.includes("kubernetes")) return SiKubernetes;
  if (clean.includes("terraform")) return SiTerraform;
  if (clean.includes("github actions") || clean.includes("ci/cd")) return SiGithubactions;
  if (clean.includes("git") && !clean.includes("actions")) return SiGit;

  // Design
  if (clean.includes("figma")) return SiFigma;

  // Databases
  if (clean.includes("mongo")) return SiMongodb;
  if (clean.includes("postgres")) return SiPostgresql;
  if (clean.includes("sqlite")) return SiSqlite;

  // Security & Forensic
  if (clean.includes("osint")) return SearchSecurityIcon;
  if (clean.includes("forensic") || clean.includes("wireshark")) return SiWireshark;
  if (clean.includes("network security")) return Network;
  if (clean.includes("sha-256") || clean.includes("cryptograph") || clean.includes("hash")) return Key;
  if (clean.includes("security") || clean.includes("rbac") || clean.includes("audit")) return Shield;

  // Fallback
  return Terminal;
}

/**
 * Authentic Official Brand Colors
 */
export function getTechBrandColor(name: string): string {
  const clean = name.toLowerCase().trim();

  // Languages
  if (clean.includes("python")) return "#3776AB"; // Official Python Blue
  if (clean.includes("javascript")) return "#F7DF1E"; // Official JavaScript Yellow
  if (clean.includes("typescript")) return "#3178C6"; // Official TypeScript Blue
  if (clean.includes("dart")) return "#0175C2"; // Official Dart Blue
  if (clean.includes("rust")) return "#DEA584"; // Official Rust Terracotta

  // Frontend
  if (clean === "react" || clean.includes("react js")) return "#61DAFB"; // Official React Cyan
  if (clean.includes("next")) return "var(--ink)"; // Next.js monochrome
  if (clean.includes("tailwind")) return "#06B6D4"; // Tailwind Cyan
  if (clean.includes("three")) return "var(--ink)"; // Three.js monochrome
  if (clean.includes("webgl")) return "#990000"; // WebGL Crimson
  if (clean.includes("flutter")) return "#54C5F8"; // Official Flutter Cyan

  // Backend
  if (clean.includes("node")) return "#339933"; // Official Node Green
  if (clean.includes("express")) return "var(--ink)"; // Express monochrome
  if (clean.includes("fastapi")) return "#009688"; // Official FastAPI Teal
  if (clean.includes("flask")) return "var(--ink)"; // Flask monochrome
  if (clean.includes("django")) return "#44B78B"; // Official Django Mint/Green

  // AI & ML
  if (clean.includes("gemini")) return "#8E75FF"; // Google Gemini Indigo/Violet
  if (clean.includes("pytorch")) return "#EE4C2C"; // Official PyTorch Flame
  if (clean.includes("tensorflow") || clean.includes("efficientnet")) return "#FF6F00"; // Official TF Amber
  if (clean.includes("ollama") || clean.includes("qlora") || clean.includes("unsloth") || clean.includes("llm")) return "#A855F7";

  // Cloud & DevOps
  if (clean.includes("docker")) return "#2496ED"; // Official Docker Blue
  if (clean.includes("aws")) return "#FF9900"; // Official AWS Amber/Gold
  if (clean.includes("gcp") || clean.includes("cloud run")) return "#4285F4"; // Official Google Cloud Blue
  if (clean.includes("kubernetes")) return "#326CE5"; // Official K8s Blue
  if (clean.includes("terraform")) return "#844FBA"; // Official Terraform Purple
  if (clean.includes("github actions") || clean.includes("ci/cd")) return "#2088FF"; // GitHub Blue
  if (clean.includes("git") && !clean.includes("actions")) return "#F05032"; // Official Git Orange

  // Design
  if (clean.includes("figma")) return "#F24E1E"; // Official Figma Coral

  // Databases
  if (clean.includes("mongo")) return "#47A248"; // Official MongoDB Green
  if (clean.includes("postgres")) return "#4169E1"; // Official PostgreSQL Royal Blue
  if (clean.includes("sqlite")) return "#003B57"; // Official SQLite Navy

  // Security & Forensic
  if (clean.includes("fortinet")) return "#EE3124"; // Official Fortinet Red
  if (clean.includes("wireshark") || clean.includes("forensic")) return "#1679A7"; // Official Wireshark Blue
  if (clean.includes("osint")) return "#ff8c59"; // Flame accent
  if (clean.includes("sha-256") || clean.includes("cryptograph") || clean.includes("hash")) return "#F59E0B";
  if (clean.includes("security") || clean.includes("rbac") || clean.includes("audit")) return "#10B981";

  // Default fallback accent
  return "var(--blue)";
}

function SearchSecurityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M11 8v6M8 11h6" strokeLinecap="round" />
    </svg>
  );
}

export function TechIcon({
  name,
  size = "md",
  showLabel = false,
  className = "",
}: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = getTechIconComponent(name);
  const brandColor = getTechBrandColor(name);
  const { icon: iconSize, box: boxSize } = sizeMap[size];

  const isInkColor = brandColor === "var(--ink)";
  const activeColor = isInkColor ? "var(--ink)" : brandColor;
  const activeBg = isInkColor ? "rgba(255, 255, 255, 0.08)" : `${brandColor}18`;
  const activeBorder = isInkColor ? "var(--line-strong)" : `${brandColor}66`;
  const activeShadow = isInkColor ? "0 0 12px rgba(255, 255, 255, 0.15)" : `0 0 14px ${brandColor}33`;

  if (!showLabel) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          color: isHovered ? activeColor : undefined,
          borderColor: isHovered ? activeBorder : undefined,
          backgroundColor: isHovered ? activeBg : undefined,
          boxShadow: isHovered ? activeShadow : undefined,
        }}
        className={`group/icon relative inline-flex items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 text-ink/80 transition-all duration-200 cursor-default shadow-sm ${boxSize} ${className}`}
        title={name}
        aria-label={name}
      >
        <IconComponent
          className={`${iconSize} transition-transform duration-200 ${
            isHovered ? "scale-110" : ""
          }`}
          style={{ color: isHovered ? activeColor : undefined }}
        />

        {/* Tooltip on hover */}
        <span
          className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wider uppercase bg-surface dark:bg-[#141414] border border-line text-ink whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity z-30 shadow-lg"
          style={{
            borderColor: isHovered && !isInkColor ? `${brandColor}55` : undefined,
          }}
        >
          {name}
        </span>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? activeBorder : undefined,
        backgroundColor: isHovered ? activeBg : undefined,
      }}
      className={`group/icon inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 transition-all text-xs font-mono text-muted hover:text-ink cursor-default ${className}`}
      title={name}
    >
      <IconComponent
        className={`${iconSize} transition-transform duration-200 ${
          isHovered ? "scale-110" : ""
        }`}
        style={{ color: isHovered ? activeColor : undefined }}
      />
      <span className="font-medium text-[11px] tracking-wide">{name}</span>
    </div>
  );
}
