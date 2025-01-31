import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {

  return (
    <div >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> Add or remove based on need */}
      <ContactSection />
    </div>
  );
}
