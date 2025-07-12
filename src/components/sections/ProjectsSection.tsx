'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'blockchain' | 'mobile'>('all');

  return (
    <section className="py-20 bg-background-primary" id='projects'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Showcasing my expertise across multiple platforms and technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {(['all', 'web', 'blockchain', 'mobile'] as ('all' | 'web' | 'blockchain' | 'mobile')[]).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'secondary'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => 
              selectedCategory === 'all' ? true : project.category === selectedCategory
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-background-elevated p-6 rounded-xl shadow-custom-lg border border-color-border hover:shadow-custom-lg transition-all duration-300"
  >
   {/* Image Section */}
   {project.image && (
      <div className="aspect-video bg-surface-100 dark:bg-surface-800 rounded-lg mb-4 overflow-hidden">
       <Image
          src={project.image}   
          alt={project.title}   
          layout="responsive"   
          width={500}           
          height={280}          
          className="rounded-lg object-cover" 
        />
      </div>
    )}
    <h3 className="text-xl font-semibold mb-2 text-text-primary">{project.title}</h3>
    <p className="text-text-secondary mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm rounded-full bg-accent-50 text-accent-700 dark:bg-accent-900 dark:text-accent-300"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {project.github && (
        <a href={project.github} className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">
          GitHub
        </a>
      )}
      {project.demo && (
        <a href={project.demo} className="text-accent-600 hover:text-accent-700 hover:underline transition-colors">
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);