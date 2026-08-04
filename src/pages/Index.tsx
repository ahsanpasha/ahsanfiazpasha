import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full relative">
      <BackgroundEffects />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
