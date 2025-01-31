'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone, FiMail, FiX, FiMenu, FiGithub, FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const navItems = [
    { id: 'projects', label: 'Projects', icon: FiCode },
    { id: 'skills', label: 'Skills', icon: FiServer },
    { id: 'services', label: 'Services', icon: FiSmartphone },
    { id: 'contact', label: 'Contact', icon: FiMail }
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-accent/10 transition-colors text-primary"
        aria-label="Open navigation menu"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-16 bg-surface/95 backdrop-blur-lg z-40"
          >
            <nav className="p-4 border-t border-primary/10 bg-primary">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex text-accent items-center gap-4 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-accent font-medium">
                        {item.label}
                      </span>
                      <motion.span
                        className="ml-auto h-px bg-accent/20 flex-1 transition-all group-hover:bg-accent/50"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links Section */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/Mbdulrohim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <FiGithub className="w-6 h-6 text-accent hover:text-primary" />
                  </a>
                
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}