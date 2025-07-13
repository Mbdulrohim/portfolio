// components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import TechIcons from "../icons/TechIcons";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mt-2"
        >
          <span className="text-sm md:text-base font-semibold">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Abdulrohim Mustapha
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-text/80 max-w-2xl mx-auto">
          Crafting <span className="text-accent">digital experiences</span> that matter
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col items-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 cursor-pointer text-lg mb-4"
          >
            Explore My Work
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-accent text-sm underline underline-offset-4 hover:no-underline transition-all"
          >
            Get in touch
          </motion.button>
        </div>

        {/* Tech Stack - Subtle */}
        <section id="skills">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`w-96 h-96 blur-[120px] rounded-full ${
                  theme === "dark" ? "bg-accent/10" : "bg-accent/5"
                }`}
              />
            </div>
            <div className="relative z-10">
              <TechIcons />
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
}
