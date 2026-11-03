import { Metadata } from "next";
import Link from "next/link";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import {
  caseStudyHowIBecameADeveloper,
  howIBecameADeveloperTimeline,
  personalData,
} from "@/data/content";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: How I Became a Developer — Sandeep Manchinasetti",
  description: caseStudyHowIBecameADeveloper.metaDescription,
  openGraph: {
    title: caseStudyHowIBecameADeveloper.title,
    description: caseStudyHowIBecameADeveloper.metaDescription,
    url: "https://sandeepmanchinasetti.vercel.app/case-studies/how-i-became-a-developer",
    images: [{ url: "/profile.jpg" }],
  },
};

export default function HowIBecameADeveloperPage() {
  return (
    <CaseStudyLayout
      caseStudy={caseStudyHowIBecameADeveloper}
      nextCaseStudy={{
        slug: "hackathon-winning-project",
        title: "College 360: Engineering a Zero-Conflict Campus Operating System",
      }}
    >
      {/* 1. Context */}
      <section id="context" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            STAGE 01 // THE CATALYST
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Context: Where I Started &amp; What Pushed Me Toward Coding
        </h2>

        <p className="text-muted leading-relaxed">
          I wrote my first real lines of code in 2023 in Kakinada, Andhra Pradesh. Growing up, technology had always seemed like magic from afar, but entering the Artificial Intelligence &amp; Data Science program at Pydah College of Engineering, Patavala (JNTUK), was the catalyst that turned passive curiosity into obsession.
        </p>

        <p className="text-muted leading-relaxed">
          The turning point arrived during my second semester. Looking at the standard academic curriculum, I noticed a stark divide: lab assignments were focused on trivial console scripts—calculators, toy arrays, and static syntax drills. Meanwhile, the software powering the real world was running high-throughput distributed microservices, zero-trust token authentication, and complex deep-learning inference pipelines.
        </p>

        <p className="text-muted leading-relaxed">
          I realized quickly: <em>if I wanted to build software that mattered, I could not wait for university lectures to catch up with industry reality.</em> I had to create my own self-directed engineering crucible.
        </p>
      </section>

      {/* 2. Problem Statement */}
      <section id="problem" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            STAGE 02 // OBSTACLES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Problem Statement: What I Lacked
        </h2>

        <div className="p-5 sm:p-6 rounded-2xl border-l-2 border-l-accent bg-surface/60 border border-line">
          <p className="font-serif italic text-base sm:text-lg text-ink leading-relaxed">
            &ldquo;How does a student outside tier-1 tech hubs transition from beginner syntax to engineering production-grade full-stack architectures, fortified AI security systems, and high-frequency problem solving?&rdquo;
          </p>
        </div>

        <p className="text-muted leading-relaxed">
          The obstacles were neither theoretical nor romantic. They were three distinct, unforgiving friction points:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-mono text-[11px] font-semibold text-accent block mb-2 uppercase tracking-wider">
              01 // Algorithmic Hesitation
            </span>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Tree traversals, dynamic programming matrices, and graph algorithms felt overwhelming without daily disciplined problem-solving and rigorous time-complexity analysis.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-mono text-[11px] font-semibold text-accent block mb-2 uppercase tracking-wider">
              02 // Production Architecture
            </span>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Tutorials demonstrated trivial CRUD applications. Real platforms demanded role-based access control, schema indexing, cryptographic validation, and error boundaries.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-mono text-[11px] font-semibold text-accent block mb-2 uppercase tracking-wider">
              03 // AI Isolation
            </span>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Jupyter notebooks trap machine learning inside isolated environments. Real-world deployment required packaging models into sub-second async web endpoints and securing them against jailbreaks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Process Timeline */}
      <section id="process" className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            STAGE 03 // EXECUTION TIMELINE
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Process: Vertical Timeline of Milestones
        </h2>

        <p className="text-muted leading-relaxed">
          Instead of collecting passive certificates, I adopted an iterative shipping regimen. Every step was anchored by public commits and verifiable code:
        </p>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-line space-y-8 my-8 font-sans">
          {howIBecameADeveloperTimeline.map((item) => (
            <div key={item.stage} className="relative group">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-bg bg-line group-hover:bg-accent transition-colors" />

              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/5 border border-black/[0.08] dark:border-white/5 text-muted uppercase">
                  STAGE {item.stage}
                </span>
                <span className="font-mono text-xs text-muted">
                  {item.period}
                </span>
                {item.tag && (
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent/15 text-accent font-medium border border-accent/25">
                    {item.tag}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-ink mt-1">
                {item.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                {item.description}
              </p>

              {item.details && (
                <ul className="mt-2.5 space-y-1 text-xs text-muted/90 font-mono">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Results */}
      <section id="results" className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            STAGE 04 // EMPIRICAL PROOF
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Results: Numbers Only
        </h2>

        <p className="text-muted leading-relaxed">
          I judge engineering progress strictly through empirical metrics:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              70+
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              Public Repositories
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              #1
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              GFG Institute Rank
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              29
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              WebApps Challenge Repos
            </span>
          </div>

          <div className="p-5 rounded-2xl border border-line bg-surface/50">
            <span className="font-serif text-4xl sm:text-5xl font-normal text-ink block">
              4
            </span>
            <span className="font-mono text-[10px] uppercase text-muted tracking-wider mt-2 block">
              Internships &amp; Certs
            </span>
          </div>
        </div>
      </section>

      {/* 5. Conclusion */}
      <section id="conclusion" className="space-y-4 pt-6 border-t border-line">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent font-semibold">
            STAGE 05 // THE HORIZON
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-normal text-ink font-sans">
          Conclusion: What I Learned &amp; What&apos;s Next
        </h2>

        <p className="text-muted leading-relaxed">
          The most important lesson I&apos;ve learned is that engineering capability is not talent—it is compounded feedback loops. By writing code every day, testing under hackathon time limits, and submitting code to public review, fear of difficult problems disappears.
        </p>

        <p className="text-muted leading-relaxed">
          <strong>What&apos;s Next:</strong> Deepening my mastery of AI infrastructure security—specifically securing agentic LLM workflows against indirect prompt injection, evaluating adversarial robustness in fine-tuned models, and mastering declarative infrastructure as code with Terraform and Kubernetes.
        </p>

        {/* Contact CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-line bg-surface/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-sans font-semibold text-ink text-base">
              Interested in collaborating or discussing opportunities?
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1 font-sans">
              I am open to full-stack, AI, and cybersecurity developer roles for 2026.
            </p>
          </div>
          <Link
            href="/#contact"
            className="pill-link pill-link-primary text-xs shrink-0"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
