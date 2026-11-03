import { HeroHook } from "@/components/HeroHook";
import { ProjectsStrip } from "@/components/ProjectsStrip";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ProofSection } from "@/components/ProofSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Home / Hook */}
      <HeroHook />

      {/* 2. Projects Strip */}
      <ProjectsStrip />

      {/* 3. Case Studies Spotlight */}
      <CaseStudiesSection />

      {/* 4. Proof Section ("Numbers Matter") */}
      <ProofSection />

      {/* 5. About Me & Technical Arsenal */}
      <AboutSection />

      {/* 6. Contact Me */}
      <ContactSection />
    </div>
  );
}
