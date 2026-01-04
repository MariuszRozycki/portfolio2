import { Hero } from "../components/hero/Hero";
import { About } from "../components/sections/About";
import { ResumeSnapshot } from "../components/sections/ResumeSnapshot";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/projects/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/sections/Footer";

export function Home({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  return (
    <div id="top">
      <Hero />
      <About />
      <ResumeSnapshot />
      <SkillsSection />
      <ProjectsSection onOpenProject={onOpenProject} />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
