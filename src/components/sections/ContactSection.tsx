'use client';
import { useState } from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FiGithub, FiSend, FiMail, FiTwitter, FiLinkedin, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactSection() {
  const [loading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'doyextech@gmail.com',
      href: 'mailto:doyextech@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@mbdulrohim',
      href: 'https://github.com/mbdulrohim',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      value: '@Mbdulrohim',
      href: 'https://twitter.com/Mbdulrohim',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Abdulrohim Mustapha',
      href: 'https://linkedin.com/in/abdulrohim-mustapha',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id='contact'>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full text-pink-700 dark:text-pink-300 text-sm font-semibold mb-4"
          >
            💬 Get In Touch
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pink-800 to-purple-800 dark:from-white dark:via-pink-200 dark:to-purple-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Have an exciting project in mind? I'd love to hear about it! Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="group"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="group"
              >
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Prefer direct contact? Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="group flex items-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-3xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${contact.color} rounded-2xl text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {contact.value}
                    </p>
                  </div>
                  
                  <motion.svg
                    className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-500 transition-colors"
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
                </motion.a>
              ))}
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-800/50"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I typically respond within 24 hours. For urgent projects, feel free to reach out directly via email.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}