# ⚡ Sandeep Manchinasetti (Sandy) — AI Security Full Stack Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-sandeepmanchinasetti.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://sandeepmanchinasetti.vercel.app/)
[![Next.js 14+](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **"A developer who solves problems through real-world experience and Artificial Intelligence."**  
> Minimal, production-grade personal engineering portfolio for **Sandeep Manchinasetti** (Sandy), an AI Security Full Stack Developer and 3rd-year B.Tech CSE (AI/ML) student at Pydah College of Engineering, Patavala (JNTUK).

---

## 🏗️ Architecture & Features

- **Next.js (App Router) & TypeScript:** Fast, type-safe, component-driven architecture with zero layout shift and automated static route pre-generation.
- **Single Source of Truth (`src/data/content.ts`):** Every piece of text, project, metric, testimonial, and case study is strictly typed and editable in one file.
- **Minimalist Design & One Accent Color:** Electric Cobalt (`#2563EB`) accent, generous whitespace, subtle borders, soft shadows, rounded-xl cards, and zero stock gradients or emojis.
- **Dark & Light Mode:** Seamless system preference detection with zero flash on load (`next-themes`), remembered across visits.
- **Sticky Navbar:** Smooth navigation with animated underline indicators, quick resume link, and theme switcher.
- **Live GitHub Sync (`/api/github`):** Fetches real-time public repository counts, followers, and latest push event telemetry with 1-hour cache and graceful fallback.
- **Interactive Contact Form (`/api/contact`):** Client-side validation with real-time feedback, error containment, and direct mail dispatch.
- **Two Dedicated Case Studies:**
  1. `/case-studies/how-i-became-a-developer`: Honest first-person narrative, 7-stage vertical timeline, numbers-only results.
  2. `/case-studies/hackathon-winning-project`: Team deep-dive on **Secure DMS** (SIH 2026, SIH26190, Team NeoNexSecure DMS) featuring SVG architecture diagram, Merkle/SHA-256 hash chaining, and jury evaluation.
- **Accessibility & Performance:** Semantic HTML5, ARIA labels, keyboard focus rings, `prefers-reduced-motion` compliance, and automated XML sitemap & robots generation.

---

## 📁 Project Directory Structure

```text
MYPORTFOLIO/
├── public/
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-192x192.png
│   ├── favicon-512x512.png
│   ├── google6db689083238e71a.html
│   ├── profile.jpg
│   ├── sandy.pdf
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── github/
│   │   │       └── route.ts
│   │   ├── case-studies/
│   │   │   ├── hackathon-winning-project/
│   │   │   │   └── page.tsx
│   │   │   └── how-i-became-a-developer/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── CaseStudyLayout.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroHook.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsStrip.tsx
│   │   ├── ProofSection.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── content.ts
│   ├── lib/
│   │   ├── github.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── archive/
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js 18.x or newer (Node 20+ recommended)
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Commit and push this codebase to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: migrate portfolio to Next.js App Router + TypeScript + Tailwind"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) with your GitHub account.
3. Import the `MYPORTFOLIO` repository.
4. Next.js will be auto-detected:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click **Deploy**. Vercel will build and assign `sandeepmanchinasetti.vercel.app`.

### Option 2: Deploy with Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 📝 Customizing Content

All site information (bio, skills chips, achievements, projects list, metrics, case studies, and social links) is stored in:
👉 [`src/data/content.ts`](src/data/content.ts)

Simply update the exported objects in this file. The TypeScript compiler guarantees type safety.

---

## 📄 License
Released under the [MIT License](LICENSE). You are welcome to reference the structure and architecture for personal learning with proper attribution.

<!-- daily-activity: [ ] -->
