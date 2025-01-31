'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import MobileNav from './MobileNav'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-surface/95 backdrop-blur-sm text-primary sticky top-0 z-50 shadow-sm dark:shadow-accent/10 border-b border-primary/10">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-3 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo/Name with enhanced interaction */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <span className="text-2xl font-bold bg-accent text-surface px-3 py-1 rounded-lg shadow-md transition-all duration-300 group-hover:bg-accent/90">
                AM
              </span>
              <span className="hidden md:inline-block text-xl font-semibold ml-2 text-primary hover:text-accent transition-colors">
                Abdulrohim Mustapha
              </span>
            </Link>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['projects', 'skills', 'contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="relative px-2 py-1 text-sm font-medium text-primary/90 hover:text-accent transition-colors"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <motion.span
                    className="absolute left-0 -bottom-0.5 w-full h-px bg-accent origin-left scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <motion.div
                  key="dark"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <SunIcon className="w-6 h-6 text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <MoonIcon className="w-6 h-6 text-accent" />
                </motion.div>
              )}
            </motion.button>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  )
}