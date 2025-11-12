import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
  onClick?: () => void;
}

export const Badge = ({ children, variant = 'primary', className = '', onClick }: BadgeProps) => {
  const variants = {
    primary: 'bg-[#2563EB] text-white',
    secondary: 'bg-[#D4AF37] text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-orange-500 text-white',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
