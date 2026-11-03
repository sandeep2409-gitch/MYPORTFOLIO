import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { personalData } from "@/data/content";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
    { media: "(prefers-color-scheme: light)", color: "#fcfbf9" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sandeepmanchinasetti.vercel.app"),
  title: {
    default: "Sandeep Manchinasetti | AI Security Full Stack Developer",
    template: "%s | Sandeep Manchinasetti",
  },
  description:
    "A developer who solves problems through real-world experience and Artificial Intelligence. Explore Sandeep Manchinasetti's work across full-stack systems, AI security, and cryptographic audit architectures.",
  authors: [{ name: "Sandeep Manchinasetti", url: "https://sandeepmanchinasetti.vercel.app" }],
  creator: "Sandeep Manchinasetti",
  keywords: [
    "Sandeep Manchinasetti",
    "Sandy",
    "AI Security",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "ReconX",
    "Secure DMS",
    "Smart India Hackathon",
    "Cybersecurity",
    "Patavala",
    "Kakinada",
  ],
  alternates: {
    canonical: "https://sandeepmanchinasetti.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sandeepmanchinasetti.vercel.app",
    title: "Sandeep Manchinasetti | AI Security Full Stack Developer",
    description:
      "A developer who solves problems through real-world experience and Artificial Intelligence. Explore projects, metrics, and case studies.",
    siteName: "Sandeep Manchinasetti",
    images: [
      {
        url: "/profile.jpg",
        width: 1103,
        height: 1426,
        alt: "Sandeep Manchinasetti — AI Security Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Manchinasetti | AI Security Full Stack Developer",
    description:
      "A developer who solves problems through real-world experience and Artificial Intelligence.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    alternateName: "Sandy",
    url: "https://sandeepmanchinasetti.vercel.app",
    image: "https://sandeepmanchinasetti.vercel.app/profile.jpg",
    jobTitle: personalData.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pydah College of Engineering, Patavala",
    },
    sameAs: [
      personalData.socials.github.url,
      personalData.socials.linkedin.url,
      personalData.socials.instagram.url,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Full Stack Web Development",
      "Machine Learning",
      "OSINT",
      "Prompt Injection Defense",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink selection:bg-accent/20">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-surface text-ink border border-line rounded-lg text-xs font-mono"
          >
            Skip to main content
          </a>
          <CustomCursor />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
