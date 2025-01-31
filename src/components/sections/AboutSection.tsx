'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export default function AboutSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-text/80 mb-8">
              Full-stack developer with expertise in building cross-platform solutions 
              using modern web and blockchain technologies. Passionate about creating 
              efficient, scalable applications with great user experiences.
            </p>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-4 bg-background dark:bg-primary/10 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <skill.icon className="w-6 h-6 text-accent" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}