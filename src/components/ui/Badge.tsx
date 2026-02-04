import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  primary: 'bg-[#10b981]/20 text-[#34d399] border-[#10b981]/30',
  secondary: 'bg-[#3b82f6]/20 text-[#60a5fa] border-[#3b82f6]/30',
  accent: 'bg-gradient-to-r from-[#10b981]/20 to-[#3b82f6]/20 text-white border border-white/20',
  dark: 'bg-[#1e293b] text-[#94a3b8] border-[#334155]',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

export function Badge({ children, variant = 'secondary', size = 'md', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border
        font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}