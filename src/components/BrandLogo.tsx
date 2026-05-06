type BrandLogoProps = {
  variant: 'nav' | 'footer';
  className?: string;
};

/**
 * Full horizontal lockup (graphic + wordmark + lines) as a single image asset.
 */
export default function BrandLogo({ variant, className = '' }: BrandLogoProps) {
  const sizeClass =
    variant === 'footer'
      ? 'h-12 sm:h-14 md:h-16 max-w-full'
      : 'h-9 w-auto max-w-[min(100%,260px)] sm:h-10 sm:max-w-[300px] md:h-11 md:max-w-[340px] lg:h-12 lg:max-w-[380px]';

  return (
    <img
      src="/brand-logo-full.png"
      alt="Aum Enercon — Electrical Engineers and Contractors. Power with Excellence."
      width={380}
      height={120}
      className={`${sizeClass} w-auto shrink-0 object-contain object-left ${className}`}
      decoding="async"
    />
  );
}
