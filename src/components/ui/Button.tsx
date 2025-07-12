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
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-custom-sm hover:shadow-custom-md ${
        variant === 'primary'
          ? 'bg-accent-600 hover:bg-accent-700 text-white'
          : 'bg-background-elevated text-text-primary border border-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900'
      }`}
      {...props} // Spread the rest of the props
    >
      {children}
    </motion.button>
  );
}
