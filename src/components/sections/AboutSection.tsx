'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>(new Array(skills.length).fill(false));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6"
              >
                🚀 About Me
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
                Passionate Developer
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                <p>
                  I'm a <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack developer</span> with a passion for creating innovative solutions that bridge traditional development with cutting-edge Web3 technologies.
                </p>
                
                <p>
                  My expertise spans across <span className="font-semibold text-blue-600 dark:text-blue-400">modern web frameworks</span>, <span className="font-semibold text-green-600 dark:text-green-400">mobile development</span>, and <span className="font-semibold text-orange-600 dark:text-orange-400">blockchain technologies</span>, allowing me to build comprehensive solutions for complex challenges.
                </p>
                
                <p>
                  I believe in writing clean, efficient code and creating user experiences that not only look great but also solve real-world problems.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative"
                onViewportEnter={() => {
                  setTimeout(() => {
                    setVisibleSkills(prev => {
                      const newSkills = [...prev];
                      newSkills[index] = true;
                      return newSkills;
                    });
                  }, index * 100);
                }}
              >
                <div className="relative p-6 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-3xl group-hover:bg-white/10 dark:group-hover:bg-white/10 transition-all duration-300">
                  {/* Skill Icon and Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl">
                      <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: visibleSkills[index] ? `${skill.level}%` : 0 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "easeOut",
                          delay: 0.2
                        }}
                      />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}