'use client'
import { motion } from 'framer-motion'
import { 
  SiNextdotjs, 
  SiSolidity, 
  SiKotlin,
  SiReact,
} from 'react-icons/si'

const icons = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiSolidity, name: 'Solidity' },
  { icon: SiKotlin, name: 'Kotlin' },
]

export default function TechIcons({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex justify-center items-center gap-4">
        {icons.map(({ icon: Icon, name }) => (
          <motion.div
            key={name}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <span className="text-xs text-text/60 mt-1">{name}</span>
          </motion.div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="flex justify-center items-center gap-8 opacity-60">
      {icons.map(({ icon: Icon, name }) => (
        <motion.div
          key={name}
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <span className="text-xs text-text/60 mt-2">{name}</span>
        </motion.div>
      ))}
    </div>
  )
}
