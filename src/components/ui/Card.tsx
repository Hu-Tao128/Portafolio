import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ children, className = '', hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`
        rounded-xl p-6
        ${glass ? 'glass-effect' : 'bg-[#0f172a] border border-[#334155]'}
        ${hover ? 'hover:shadow-xl hover:shadow-[#2563eb]/10' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
