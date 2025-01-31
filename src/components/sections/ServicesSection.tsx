'use client';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiCloud } from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Full-stack solutions with Next.js, React, and Node.js'
  },
  {
    icon: FiServer,
    title: 'Blockchain',
    description: 'Smart contracts, DApps, and Web3 integration'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform development with Kotlin Multiplatform'
  },
  {
    icon: FiCloud,
    title: 'DevOps',
    description: 'CI/CD pipelines and cloud infrastructure'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-primary/5" id='services'>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Comprehensive solutions for modern digital challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-background dark:bg-primary/10 rounded-xl shadow-lg"
            >
              <service.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}