"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { personalData } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.socials.email.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05"
          label="The Next Chapter"
          title="Let's Make It Matter."
          italicWord="Open to meaningful conversations."
          subtitle="Something great starts with a hello. Available for software engineering internships, applied AI roles, and open-source collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* GitHub Card */}
            <Link
              href={personalData.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-line bg-surface/50 hover:border-white/20 hover:bg-surface/80 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-[#030303] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">
                    GitHub
                  </h4>
                  <p className="font-mono text-xs text-muted">
                    @{personalData.socials.github.username}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </Link>

            {/* LinkedIn Card */}
            <Link
              href={personalData.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-line bg-surface/50 hover:border-white/20 hover:bg-surface/80 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-[#030303] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">
                    LinkedIn
                  </h4>
                  <p className="font-mono text-xs text-muted">
                    {personalData.socials.linkedin.username}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </Link>

            {/* Instagram Card */}
            <Link
              href={personalData.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-line bg-surface/50 hover:border-white/20 hover:bg-surface/80 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 flex items-center justify-center text-ink group-hover:bg-accent group-hover:text-[#030303] transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">
                    Instagram
                  </h4>
                  <p className="font-mono text-xs text-muted">
                    {personalData.socials.instagram.username}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </Link>

            {/* Email Direct & Copy */}
            <div className="p-5 rounded-2xl border border-line bg-surface/50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/[0.08] dark:border-white/10 flex items-center justify-center text-ink">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">
                      Direct Dispatch
                    </h4>
                    <p className="font-mono text-xs text-muted truncate max-w-[190px] sm:max-w-none">
                      {personalData.socials.email.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={personalData.socials.email.url}
                  className="pill-link pill-link-primary text-[10px] py-2 flex-1 justify-center"
                >
                  Compose Mail ↗
                </Link>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="pill-link text-[10px] py-2 px-3.5"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-7 sm:p-9 rounded-2xl border border-line bg-surface/60"
          >
            <h3 className="text-xl font-normal text-ink mb-1.5 font-sans">
              Send a Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-muted mb-6 font-sans">
              Have an engineering role, security audit challenge, or hackathon collaboration? Let&apos;s talk.
            </p>

            {status === "success" ? (
              <div className="p-7 rounded-2xl bg-accent/10 border border-accent/25 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto" />
                <h4 className="text-sm font-semibold text-ink">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs text-muted max-w-sm mx-auto">
                  Thank you! Sandy will review your dispatch and reply via email within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-3 text-xs font-mono underline text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-medium text-muted uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-line bg-black/[0.03] dark:bg-black/40 text-ink text-sm focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-black/60 transition-all placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-medium text-muted uppercase tracking-wider mb-1.5"
                  >
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-line bg-black/[0.03] dark:bg-black/40 text-ink text-sm focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-black/60 transition-all placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-muted uppercase tracking-wider mb-1.5"
                  >
                    Project / Message Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, timeline, or architecture challenge..."
                    className="w-full px-4 py-3 rounded-xl border border-line bg-black/[0.03] dark:bg-black/40 text-ink text-sm focus:outline-none focus:border-accent focus:bg-white dark:focus:bg-black/60 transition-all placeholder:text-muted/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="pill-link pill-link-primary w-full justify-center py-3 text-xs"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Dispatch</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
