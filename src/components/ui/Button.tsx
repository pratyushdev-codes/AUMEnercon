import { ArrowRight } from 'lucide-react';
import { Link, type To } from 'react-router-dom';
import type { ReactNode, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  dark?: boolean;
  /** When set, renders a React Router {@link Link} instead of {@code <a>}. */
  to?: To;
  href?: string;
}

export default function Button({
  variant = 'primary',
  children,
  dark,
  className = '',
  to,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const sharedAnchorProps = { onClick, ...props };

  if (variant === 'ghost') {
    if (dark) {
      const cls = `group inline-flex items-center gap-2.5 bg-white/[0.1] border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-white/[0.16] hover:border-white/35 ${className}`;
      if (to !== undefined) {
        return (
          <Link to={to} className={cls} {...sharedAnchorProps}>
            {children}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        );
      }
      return (
        <a className={cls} href={href ?? '#'} {...sharedAnchorProps}>
          {children}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      );
    }
    const cls = `group inline-flex items-center gap-2.5 bg-white/50 text-ink border border-line/90 px-6 py-3.5 rounded-full font-semibold shadow-hairline backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-ink/25 hover:shadow-soft-2 ${className}`;
    if (to !== undefined) {
      return (
        <Link to={to} className={cls} {...sharedAnchorProps}>
          {children}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      );
    }
    return (
      <a className={cls} href={href ?? '#'} {...sharedAnchorProps}>
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  const cls = `group inline-flex items-center gap-2.5 bg-ink text-white px-6 py-3.5 rounded-full font-semibold shadow-premium ring-1 ring-white/10 transition-all duration-300 ease-out hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-soft-3 active:translate-y-0 ${className}`;
  if (to !== undefined) {
    return (
      <Link to={to} className={cls} {...sharedAnchorProps}>
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    );
  }
  return (
    <a className={cls} href={href ?? '#'} {...sharedAnchorProps}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
