'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'blockchain' | 'mobile'>('all');

  return (
    <section className="py-20 " id='projects'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
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
    className="bg-background dark:bg-primary/10 p-6 rounded-xl shadow-lg"
  >
   {/* Image Section */}
   {project.image && (
      <div className="aspect-video bg-gray-100 dark:bg-primary/20 rounded-lg mb-4">
       <Image
  src={project.image}   // Image source URL (could be a relative path in public folder or external URL)
  alt={project.title}   // Alt text for the image
  layout="responsive"   // Use 'responsive' to make the image responsive
  width={500}           // Set width for the image
  height={280}          // Set height for the image
  className="rounded-lg" // Optional, for styling
/>

      </div>
    )}
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-text/80 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      {project.github && (
        <a href={project.github} className="text-accent hover:underline">
          GitHub
        </a>
      )}
      {project.demo && (
        <a href={project.demo} className="text-accent hover:underline">
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);