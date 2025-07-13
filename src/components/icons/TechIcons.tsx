'use client'
import { motion } from 'framer-motion'
import { 
  SiNextdotjs, 
  SiSolidity, 
  SiKotlin,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiMongodb
} from 'react-icons/si'

const icons = [
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiSolidity, name: 'Solidity', color: '#363636' },
  { icon: SiKotlin, name: 'Kotlin', color: '#7F52FF' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
]

export default function TechIcons({ compact = false }: { compact?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  }

  return (
    <motion.div 
      className={`grid ${compact ? 'grid-cols-3 gap-3' : 'grid-cols-4 md:grid-cols-6 gap-6'} max-w-4xl mx-auto`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {icons.map(({ icon: Icon, name, color }, index) => (
        <motion.div
          key={name}
          className="group flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.15,
            y: -8,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`relative ${compact ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center`}>
            {/* Background glow */}
            <div 
              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ backgroundColor: `${color}40` }}
            />
            
            {/* Main container */}
            <div className="relative w-full h-full bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 dark:group-hover:bg-white/10 group-hover:border-white/40 dark:group-hover:border-white/20">
              <Icon 
                className={`${compact ? 'w-6 h-6' : 'w-8 h-8'} transition-all duration-300 group-hover:scale-110`}
                style={{ color: color }}
              />
            </div>
            
            {/* Floating particles effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              whileHover={{
                scale: [1, 1.2, 1],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 0.6 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ 
                    backgroundColor: color,
                    left: `${20 + (i * 12)}%`,
                    top: `${20 + (i * 8)}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          {!compact && (
            <motion.span 
              className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {name}
            </motion.span>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
