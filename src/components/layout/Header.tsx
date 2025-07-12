'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import MobileNav from './MobileNav'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-background-secondary/95 backdrop-blur-sm text-text-primary sticky top-0 z-50 shadow-custom-sm border-b border-color-border">
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
              <span className="text-2xl font-bold bg-accent-600 text-white px-3 py-1 rounded-lg shadow-custom-md transition-all duration-300 group-hover:bg-accent-700">
                AM
              </span>
              <span className="hidden md:inline-block text-xl font-semibold ml-2 text-text-primary hover:text-accent-600 transition-colors">
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
                  className="relative px-2 py-1 text-sm font-medium text-text-secondary hover:text-accent-600 transition-colors"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                  <motion.span
                    className="absolute left-0 -bottom-0.5 w-full h-px bg-accent-600 origin-left scale-x-0"
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
              className="p-2 rounded-lg hover:bg-accent-50 dark:hover:bg-accent-950 transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <motion.div
                  key="dark"
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <SunIcon className="w-6 h-6 text-accent-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  initial={{ rotate: 30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <MoonIcon className="w-6 h-6 text-accent-600" />
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