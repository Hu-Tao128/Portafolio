import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const variantStyles = {
  primary: 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg',
  secondary: 'bg-[#0f172a] hover:bg-[#1e293b] text-[#f1f5f9] border border-[#334155]',
  ghost: 'bg-transparent hover:bg-[#1e293b] text-[#f1f5f9]',
  outline: 'bg-transparent hover:bg-[#1e293b] text-[#2563eb] border-2 border-[#2563eb] hover:border-[#1d4ed8]',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', disabled, type = 'button', onClick }: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        rounded-lg font-semibold transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
