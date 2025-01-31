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
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-text/80">
          Building <span className="text-highlight">Web3</span> &{" "}
          <span className="text-accent">Cross-Platform</span> Solutions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-accent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium flex items-center gap-2 cursor-pointer"
          >
            View My Work
            <svg
              className="w-4 h-4"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-accent text-accent px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Tech Stack Grid */}
        <section id="skills">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-64 h-64 sm:w-72 sm:h-72 blur-[100px] rounded-full ${
                  theme === "dark" ? "bg-accent/20" : "bg-accent/10"
                }`}
              />
            </div>
            <TechIcons />
          </div>
        </section>
      </motion.div>
    </section>
  );
}
