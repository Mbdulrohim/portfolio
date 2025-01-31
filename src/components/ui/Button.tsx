'use client';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
        variant === 'primary'
          ? 'bg-accent text-white'
          : 'bg-background dark:bg-primary/20 text-text border border-accent'
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
}