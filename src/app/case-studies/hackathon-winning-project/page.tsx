import { Metadata } from "next";
import Link from "next/link";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { caseStudyHackathonWinningProject } from "@/data/content";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Lock,
  Network,
  Shield,
  ShieldAlert,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: College 360 — CODESTORM S2 Champion",
  description: caseStudyHackathonWinningProject.metaDescription,
  openGraph: {
    title: caseStudyHackathonWinningProject.title,
    description: caseStudyHackathonWinningProject.metaDescription,
    url: "https://sandeepmanchinasetti.vercel.app/case-studies/hackathon-winning-project",
    images: [{ url: "/profile.jpg" }],
  },
};

export default function HackathonWinningProjectPage() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudyHackathonWinningProject}
      nextCaseStudy={{
        slug: "how-i-became-a-developer",
        title: "How I Became a Developer: An Engineering Journey",
      }}
    >
      {/* 1. Hero Summary */}
      <section id="hero-summary" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            01 // EXECUTIVE SUMMARY
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Project Overview: College 360
        </h2>

        <p className="text-muted leading-relaxed">
          During the <strong>CODESTORM S2 College Hackathon</strong>, our engineering squad—<strong>Sandeep (Lead Systems Architect &amp; Full Stack Engineer)</strong> and <strong>Siva Teja (Frontend &amp; UI/UX Architect)</strong>—set out to solve one of the most frustrating bottlenecks in collegiate operations: the fragmentation of student records, faculty schedules, and lecture hall allocations across uncoordinated spreadsheets, manual notice boards, and brittle legacy portals.
        </p>

        <p className="text-muted leading-relaxed">
          We architected <strong>College 360</strong>: a high-concurrency, zero-conflict campus operating system. Powered by a greedy graph-coloring timetable constraint engine, granular multi-tenant role-based access control (RBAC), and a normalized PostgreSQL transactional schema, the platform delivers sub-200ms response times and completely eliminates cross-departmental scheduling collisions.
        </p>
      </section>

      {/* 2. What was the problem? */}
      <section id="problem" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            02 // THE PROBLEM
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          The Campus Bottleneck &amp; Concurrency Collisions
        </h2>

        <p className="text-muted leading-relaxed">
          In higher education institutions with thousands of enrolled students and dozens of departments, administrative operations break down across three persistent operational fault lines:
        </p>

        <div className="space-y-3 pt-2">
          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <h3 className="text-sm font-semibold text-ink flex items-center gap-2 font-sans">
              <ShieldAlert className="w-4 h-4 text-accent" />
              <span>Combinatorial Scheduling Clashes</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed font-sans">
              When interdisciplinary electives, laboratory sessions, and regular lectures share finite physical infrastructure, manual timetable generation invariably creates faculty double-booking and room overlap crises.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <h3 className="text-sm font-semibold text-ink flex items-center gap-2 font-sans">
              <Layers className="w-4 h-4 text-accent" />
              <span>Data Concurrency Race Conditions</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed font-sans">
              During peak windows—such as morning attendance logging or semester elective registration—hundreds of simultaneous writes overwrite un-locked database records, triggering phantom bookings and desynchronized records.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <h3 className="text-sm font-semibold text-ink flex items-center gap-2 font-sans">
              <Lock className="w-4 h-4 text-accent" />
              <span>Coarse Access Privileges &amp; Information Silos</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Traditional portals lack departmental isolation. Faculty, Heads of Department (HODs), exam cell coordinators, and students are either granted dangerous global privileges or locked behind manual bureaucratic bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How did we solve it? (With clean SVG Architecture Diagram) */}
      <section id="solution" className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            03 // TECHNICAL ARCHITECTURE
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          How We Solved It: Architecture &amp; Key Decisions
        </h2>

        <p className="text-muted leading-relaxed">
          We built College 360 around a modular, three-tier service architecture with strict departmental namespacing and an algorithmic constraint solver to guarantee zero timetable collisions.
        </p>

        {/* Clean SVG Architecture Diagram */}
        <div className="p-6 sm:p-8 rounded-2xl border border-line bg-surface/80 shadow-2xl overflow-hidden">
          <div className="mb-4 flex items-center justify-between border-b border-line pb-3 font-mono">
            <span className="text-xs font-semibold text-ink flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" />
              <span>College 360 Systems Architecture</span>
            </span>
            <span className="text-[10px] text-muted uppercase tracking-wider">
              Zero-Conflict Flow
            </span>
          </div>

          <div className="w-full overflow-x-auto py-2">
            <svg
              viewBox="0 0 760 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full min-w-[640px] text-ink"
            >
              {/* Background grid accents */}
              <defs>
                <pattern id="college-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.05" />
                </pattern>
              </defs>
              <rect width="760" height="260" fill="url(#college-grid)" />

              {/* Node 1: Client Interfaces */}
              <g transform="translate(20, 70)">
                <rect width="135" height="110" rx="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
                <text x="67" y="32" textAnchor="middle" fill="var(--ink)" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Client Portals</text>
                <text x="67" y="52" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="monospace">React + Tailwind</text>
                <text x="67" y="72" textAnchor="middle" fill="var(--blue)" fontSize="9" fontFamily="monospace" fontWeight="600">Students / Faculty</text>
                <rect x="18" y="84" width="100" height="18" rx="4" fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />
                <text x="67" y="96" textAnchor="middle" fill="var(--muted)" fontSize="8" fontFamily="monospace">Optimistic UI State</text>
              </g>

              {/* Arrow 1 */}
              <path d="M 157 125 L 193 125" stroke="var(--blue)" strokeWidth="2" strokeDasharray="4 2" />
              <polygon points="195,125 189,121 189,129" fill="var(--blue)" />

              {/* Node 2: RBAC Security Gateway */}
              <g transform="translate(197, 50)">
                <rect width="145" height="150" rx="12" fill="var(--surface)" stroke="var(--blue)" strokeWidth="1.5" />
                <text x="72" y="30" textAnchor="middle" fill="var(--blue)" fontSize="11" fontFamily="sans-serif" fontWeight="bold">RBAC Gateway</text>
                <text x="72" y="50" textAnchor="middle" fill="var(--ink)" fontSize="9" fontFamily="monospace" fontWeight="600">Multi-Tenant Guard</text>
                <line x1="15" y1="62" x2="130" y2="62" stroke="var(--line)" />
                <text x="22" y="80" fill="var(--muted)" fontSize="9" fontFamily="monospace">• JWT Verification</text>
                <text x="22" y="98" fill="var(--muted)" fontSize="9" fontFamily="monospace">• Dept Namespacing</text>
                <text x="22" y="116" fill="var(--muted)" fontSize="9" fontFamily="monospace">• Route Middleware</text>
                <text x="22" y="134" fill="var(--blue)" fontSize="9" fontFamily="monospace" fontWeight="bold">✓ Scope Enforced</text>
              </g>

              {/* Arrow 2 */}
              <path d="M 344 105 L 380 80" stroke="var(--muted)" strokeWidth="2" />
              <polygon points="382,78 374,78 378,85" fill="var(--muted)" />

              <path d="M 344 145 L 380 170" stroke="var(--muted)" strokeWidth="2" />
              <polygon points="382,172 378,165 374,172" fill="var(--muted)" />

              {/* Node 3A: Algorithmic Constraint Engine */}
              <g transform="translate(385, 25)">
                <rect width="170" height="100" rx="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
                <text x="85" y="28" textAnchor="middle" fill="var(--ink)" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Constraint Solver</text>
                <text x="18" y="50" fill="var(--muted)" fontSize="9" fontFamily="monospace">1. Graph-Coloring Matrix</text>
                <text x="18" y="68" fill="var(--muted)" fontSize="9" fontFamily="monospace">2. Bitmask Room Checker</text>
                <text x="18" y="86" fill="var(--blue)" fontSize="9" fontFamily="monospace" fontWeight="bold">3. 112ms Zero Clash</text>
              </g>

              {/* Node 3B: Operations & Alert Bus */}
              <g transform="translate(385, 135)">
                <rect width="170" height="100" rx="12" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
                <text x="85" y="28" textAnchor="middle" fill="var(--ink)" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Operations Dispatch</text>
                <text x="18" y="50" fill="var(--muted)" fontSize="9" fontFamily="monospace">1. Attendance Aggregator</text>
                <text x="18" y="68" fill="var(--muted)" fontSize="9" fontFamily="monospace">2. Exam Notice Broadcast</text>
                <text x="18" y="86" fill="var(--blue)" fontSize="9" fontFamily="monospace" fontWeight="bold">3. WebSockets SSE Sync</text>
              </g>

              {/* Arrows to Storage */}
              <path d="M 557 75 L 595 105" stroke="var(--muted)" strokeWidth="2" />
              <polygon points="597,107 593,100 589,106" fill="var(--muted)" />

              <path d="M 557 185 L 595 155" stroke="var(--muted)" strokeWidth="2" />
              <polygon points="597,153 589,154 593,160" fill="var(--muted)" />

              {/* Node 4: Storage & Transaction Engine */}
              <g transform="translate(600, 70)">
                <rect width="145" height="115" rx="12" fill="var(--surface)" stroke="var(--blue)" strokeWidth="1.5" />
                <text x="72" y="32" textAnchor="middle" fill="var(--blue)" fontSize="11" fontFamily="sans-serif" fontWeight="bold">PostgreSQL ACID</text>
                <text x="72" y="52" textAnchor="middle" fill="var(--muted)" fontSize="9" fontFamily="monospace">Relational Pool</text>
                <line x1="15" y1="62" x2="130" y2="62" stroke="var(--line)" />
                <text x="18" y="80" fill="var(--blue)" fontSize="9" fontFamily="monospace">✓ Optimistic Locks</text>
                <text x="18" y="98" fill="var(--ink)" fontSize="9" fontFamily="monospace">&lt; 180ms Latency</text>
              </g>
            </svg>
          </div>
          <figcaption className="text-[11px] font-mono text-muted text-center mt-4 pt-3 border-t border-line">
            Figure 1.0: End-to-end architecture of College 360: from RBAC gateway to the graph-coloring conflict solver and PostgreSQL transaction pool.
          </figcaption>
        </div>

        {/* Technical Decisions Table */}
        <div className="space-y-3 pt-2">
          <span className="section-eyebrow block">
            Key Architectural Decisions &amp; Tradeoffs
          </span>

          <div className="border border-line rounded-2xl overflow-hidden text-xs bg-surface/40">
            <div className="grid grid-cols-12 bg-surface p-3.5 font-mono font-semibold text-muted border-b border-line uppercase tracking-wider">
              <span className="col-span-4">Decision</span>
              <span className="col-span-4">Alternative Considered</span>
              <span className="col-span-4">Reason Chosen</span>
            </div>

            <div className="grid grid-cols-12 p-4 border-b border-line items-center">
              <span className="col-span-4 font-semibold text-ink">
                Graph-Coloring Constraint Solver
              </span>
              <span className="col-span-4 text-muted">
                Naive Recursive Backtracking
              </span>
              <span className="col-span-4 text-ink/80">
                Backtracking exploded exponentially ($O(k^n)$) with 60+ electives. Greedy graph-coloring with bitmask checks generated zero-clash schedules in 112ms.
              </span>
            </div>

            <div className="grid grid-cols-12 p-4 border-b border-line items-center">
              <span className="col-span-4 font-semibold text-ink">
                Department-Namespaced RBAC
              </span>
              <span className="col-span-4 text-muted">
                Monolithic Admin Privileges
              </span>
              <span className="col-span-4 text-ink/80">
                Guarantees faculty and HODs only modify records within their authorized scope while maintaining audit visibility for central leadership.
              </span>
            </div>

            <div className="grid grid-cols-12 p-4 items-center">
              <span className="col-span-4 font-semibold text-ink">
                PostgreSQL with Optimistic Locking
              </span>
              <span className="col-span-4 text-muted">
                Document Store / Unstructured NoSQL
              </span>
              <span className="col-span-4 text-ink/80">
                Relational integrity and versioned row checks prevent phantom registrations when hundreds of students enroll in limited-capacity courses simultaneously.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How we built it */}
      <section id="how-we-built-it" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            04 // SPRINT EXECUTION
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          How We Built It: 36-Hour Sprint &amp; The Hardest Challenge
        </h2>

        <p className="text-muted leading-relaxed">
          We structured our hackathon team into tightly coordinated execution streams:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-accent font-bold">›</span>
            <span>
              <strong>Sandeep (Lead Systems Architect &amp; Full Stack Engineer):</strong> Designed the relational PostgreSQL schema, authored the graph-coloring timetable engine, configured Express/Node.js REST routes, and implemented JWT/RBAC middleware.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="font-mono text-accent font-bold">›</span>
            <span>
              <strong>Siva Teja (Frontend &amp; UI/UX Architect):</strong> Created the interactive drag-and-drop timetable grid, conflict visualizer, responsive role-based dashboards in Tailwind CSS, and seeded mock departmental datasets for validation.
            </span>
          </li>
        </ul>

        <div className="p-5 sm:p-6 rounded-2xl border border-line bg-surface/50 space-y-2.5 mt-4">
          <h3 className="text-sm font-bold text-ink flex items-center gap-2 font-sans">
            <Zap className="w-4 h-4 text-accent" />
            <span>The Hardest Challenge: Resolving Combinatorial Gridlock in Interdisciplinary Electives</span>
          </h3>
          <p className="text-xs text-muted leading-relaxed">
            <strong>The Problem:</strong> When generating semester schedules, interdisciplinary electives caused deep recursion locks in the scheduling engine. Because students from CSE, ECE, and Mechanical shared common faculty and lab resources, naive depth-first search stalled the Node.js event loop for over 8.4 seconds.
          </p>
          <p className="text-xs text-muted leading-relaxed">
            <strong>The Fix:</strong> We re-framed room and faculty availability as 64-bit integer bitmasks. Time-slot collisions were detected via bitwise AND operations (`slot_mask &amp; room_mask === 0`). Combined with a largest-degree-first greedy graph-coloring heuristic, matrix calculation latency plunged from 8,400ms down to <strong>112ms</strong>.
          </p>
        </div>
      </section>

      {/* 5. What happened after we shipped it */}
      <section id="after-shipping" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            05 // EVALUATION &amp; OUTCOME
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Jury Evaluation &amp; Live Stress Test
        </h2>

        <p className="text-muted leading-relaxed">
          During the final jury evaluation, Hackathon Jury Member and HRM <strong>Vamsi Krishna</strong> along with departmental heads evaluated our platform against live operational stress tests.
        </p>

        <p className="text-muted leading-relaxed">
          The evaluators executed simultaneous, conflicting room reservation requests across three separate engineering departments for the exact same hour. Within <strong>45 milliseconds</strong>, College 360 intercepted the clash, flagged the conflicting faculty assignment, suggested the closest vacant lecture theater with adequate seating capacity, and synchronized all departmental views without dropping a single packet.
        </p>

        <p className="text-muted leading-relaxed">
          The panel commended the platform&apos;s architectural maturity and production readiness, awarding <strong>College 360 1st Place Champion</strong> at CODESTORM S2.
        </p>
      </section>

      {/* 6. Numbers: 4 Metric Cards */}
      <section id="numbers" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            06 // MEASURED IMPACT
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Quantified Performance Metrics
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              1st
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              CODESTORM Champion
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              0
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              Scheduling Collisions
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              &lt; 180ms
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              API Response Time
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              2,500+
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              Students Scaled
            </span>
          </div>
        </div>
      </section>

      {/* 7. Lessons Learned & Next Steps */}
      <section id="lessons-learned" className="space-y-4 pt-6 border-t border-line">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            07 // LESSONS &amp; ROADMAP
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Lessons Learned &amp; Future Roadmap
        </h2>

        <p className="text-muted leading-relaxed">
          Building College 360 under hackathon constraints proved that distributed system failures rarely stem from UI bugs—they stem from inadequate constraint enforcement at the persistence layer. By establishing relational ACID guarantees and bitmask matrix validations early, the application remained rock-solid under concurrent stress.
        </p>

        <p className="text-muted leading-relaxed">
          <strong>Future Roadmap:</strong> Expanding the platform with automated biometric attendance sync, predictive elective load forecasting using the Gemini API, and a lightweight offline-first progressive web app (PWA) for faculty field use.
        </p>

        {/* CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-line bg-surface/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-ink text-base">
              Explore the repository or view more projects
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1 font-sans">
              Open-source engineering and verifiable code on GitHub.
            </p>
          </div>
          <Link
            href="https://github.com/sandeep2409-gitch"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link pill-link-primary text-xs shrink-0"
          >
            <span>Audit GitHub Repos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
