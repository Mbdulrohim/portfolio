'use client';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & HTMLMotionProps<'button'>; // This will ensure motion props are correctly passed to motion.button

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
      {...props} // Spread the rest of the props
    >
      {children}
    </motion.button>
  );
}
