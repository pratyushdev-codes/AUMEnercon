import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function GradientText({ children, className = '', dark }: GradientTextProps) {
  return (
    <span
      className={
        dark
          ? `bg-gradient-to-r from-blue-50 via-blue-100 to-[#4ddbff] bg-clip-text text-transparent ${className}`
          : `bg-gradient-to-r from-brand-800 via-brand-500 to-accent bg-[length:120%_auto] bg-clip-text text-transparent ${className}`
      }
    >
      {children}
    </span>
  );
}
