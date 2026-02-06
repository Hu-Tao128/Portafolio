import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  primary: 'bg-[#2563eb]/20 text-[#2563eb] border-[#2563eb]/30',
  secondary: 'bg-[#2563eb]/10 text-[#93c5fd] border-[#2563eb]/20',
  accent: 'bg-[#0f172a] text-[#f1f5f9] border border-[#334155]',
  dark: 'bg-[#0f172a] text-[#94a3b8] border-[#334155]',
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
