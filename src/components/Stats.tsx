import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  label: string;
  target: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

function StatItem({ label, target, prefix = '', suffix = '', description }: StatItemProps) {
  const { ref, value } = useCountUp(target);

  return (
    <div ref={ref} className="px-6 py-6 lg:py-8 lg:px-8">
      <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-brand-700 mb-2">
        {label}
      </div>
      <div className="font-display text-[clamp(3.15rem,6.2vw,5.1rem)] font-bold text-ink leading-none">
        {prefix}{value}<span className="text-brand-500 text-[0.6em]">{suffix}</span>
      </div>
      <div className="text-[0.95rem] text-muted mt-2 leading-snug">{description}</div>
    </div>
  );
}

const stats = [
  { label: 'Heritage', target: 15, suffix: '+', description: 'Years of industrial authority since 2011' },
  { label: 'Portfolio', target: 30, suffix: '+', description: 'Mega projects delivered across India & UAE' },
  { label: 'Execution Value', target: 100, prefix: '\u20B9', suffix: 'Cr+', description: 'In successfully executed project value' },
  { label: 'Workforce', target: 100, suffix: '+', description: 'Engineers, administrators & skilled labour' },
];

export default function Stats() {
  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal className="text-center">
          <Eyebrow>By the Numbers</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Proven scale. Measurable <GradientText>trust.</GradientText>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-3xl border border-line/90 bg-white/90 backdrop-blur-sm shadow-soft-2 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-line/80">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
