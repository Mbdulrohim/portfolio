'use client';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiSmartphone, FiCloud, FiTrendingUp } from 'react-icons/fi';
import { BiTestTube, BiPalette, BiSupport } from 'react-icons/bi';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Full-stack solutions with Next.js, React, and Node.js for modern, responsive web applications',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Modern Frameworks'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiServer,
    title: 'Blockchain Development',
    description: 'Smart contracts, DApps, and Web3 integration for decentralized applications',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Cross-platform development with Kotlin Multiplatform and React Native',
    features: ['Cross-Platform', 'Native Performance', 'App Store Ready', 'Modern UI/UX'],
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: FiCloud,
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, cloud infrastructure, and deployment automation',
    features: ['CI/CD Pipelines', 'Cloud Deployment', 'Monitoring', 'Scalability'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BiTestTube,
    title: 'Testing & QA',
    description: 'Comprehensive testing strategies to ensure code quality and reliability',
    features: ['Unit Testing', 'Integration Tests', 'E2E Testing', 'Performance Testing'],
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: BiPalette,
    title: 'UI/UX Design',
    description: 'User-centered design approach for intuitive and engaging experiences',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Consulting',
    description: 'Technical consulting and architecture planning for complex projects',
    features: ['Architecture Planning', 'Tech Stack Selection', 'Code Reviews', 'Best Practices'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: BiSupport,
    title: 'Maintenance',
    description: 'Ongoing support and maintenance for your applications and systems',
    features: ['Bug Fixes', 'Updates', 'Monitoring', '24/7 Support'],
    color: 'from-cyan-500 to-teal-500'
  }
];

export default function ServicesSection() {
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
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id='services'>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-4"
          >
            🛠️ What I Offer
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 dark:from-white dark:via-cyan-200 dark:to-blue-200 bg-clip-text text-transparent">
            Comprehensive Services
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            From concept to deployment, I provide end-to-end solutions that bring your ideas to life with modern technologies and best practices
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-6 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-3xl group-hover:bg-white/10 dark:group-hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-500"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Ready to bring your project to life? Let's discuss how I can help.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-3">
              <span>Get Started</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}