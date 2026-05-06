import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Eyebrow({ children, className = '', dark }: EyebrowProps) {
  if (dark) {
    return (
      <span
        className={`inline-flex items-center gap-2.5 px-4 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.82rem] sm:text-[0.9rem] tracking-[0.16em] sm:tracking-[0.18em] uppercase bg-white/[0.09] text-blue-100 border border-white/18 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${className}`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-brand-300 shrink-0" style={{ boxShadow: '0 0 0 4px rgba(110,168,255,.25)' }} />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 px-4 py-2 sm:px-4 sm:py-2.5 font-mono text-[0.82rem] sm:text-[0.9rem] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-brand-800 bg-gradient-to-b from-brand-50 to-brand-50/70 border border-brand-100/90 rounded-full shadow-soft-inset ${className}`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-brand-500 shrink-0" style={{ boxShadow: '0 0 0 4px rgba(22,112,240,.18)' }} />
      {children}
    </span>
  );
}
