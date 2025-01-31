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
  SiPostgresql
} from 'react-icons/si'

const icons = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiSolidity, name: 'Solidity' },
  { icon: SiKotlin, name: 'Kotlin' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
]

export default function TechIcons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-4'} gap-4`}>
      {icons.map(({ icon: Icon, name }) => (
        <motion.div
          key={name}
          className="flex flex-col items-center text-secondary"
          whileHover={{ scale: 1.1 }}
        >
          <div className={`p-2 rounded-lg bg-secondary/10 ${compact ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center`}>
            <Icon className={`${compact ? 'w-6 h-6' : 'w-8 h-8'} text-accent`} />
          </div>
          {!compact && (
            <span className="text-xs text-background/80 mt-1">{name}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}
