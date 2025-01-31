import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TestimonialsSection from '@/components/sections/TestimonialSection'; // Keep if needed
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const { theme } = useTheme();

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
