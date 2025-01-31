'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode } from 'react-icons/fi'
import TechIcons from '@/components/icons/TechIcons'
import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-primary text-background py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* About Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Abdulrohim Mustapha
            </motion.h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Building innovative solutions across Web3, mobile, and cloud platforms
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:your@email.com"
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Send email"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/yourprofile"
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="GitHub profile"
              >
                <FiCode className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <nav>
              <ul className="space-y-2">
                {['Home', 'Projects', 'Services', 'Contact'].map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-background/80 hover:text-accent transition-colors flex items-center gap-2"
                    >
                      <span className="text-accent">▹</span>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
            <div className="grid grid-cols-2 gap-2">
              <TechIcons compact />
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiGithub, name: 'GitHub', url: 'https://github.com/Mbdulrohim' },
                // { icon: FiLinkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
                { icon: FiTwitter, name: 'Twitter', url: 'https://twitter.com/Mbdulrohim' },
              ].map(({ icon: Icon, name, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Abdulrohim Mustapha. Crafted with
            <span className="text-accent mx-1">⚡</span>
            by a developer for developers
          </p>
        </div>
      </div>
    </footer>
  )
}