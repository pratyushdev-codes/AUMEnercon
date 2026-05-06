import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import { leaders } from '../data/leaders';

function renderInlineBold(text: string) {
  const segments = text.split(/(\*\*.*?\*\*)/g);

  return segments.map((segment, idx) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return <strong key={idx}>{segment.slice(2, -2)}</strong>;
    }

    return <span key={idx}>{segment}</span>;
  });
}

export default function Leadership() {
  return (
    <section id="leadership" className="bg-gradient-to-b from-white to-bg-soft py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            The minds behind <GradientText>Aum Enercon.</GradientText>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted max-w-[540px] leading-[1.6]">
            Visionary leadership with hands-on expertise, driving two decades of engineering excellence and strategic growth.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-7">
          {leaders.map((leader, i) => (
            <Reveal key={leader.name} delay={0.2 + i * 0.1}>
              <div className="bg-white/95 border border-line/90 rounded-3xl p-8 grid grid-cols-[140px_1fr] gap-7 items-start shadow-soft-1 hover:-translate-y-1 hover:shadow-premium hover:border-brand-100 transition-all duration-300 ease-out max-md:grid-cols-[80px_1fr] max-md:gap-5">
                {/* Avatar */}
                <div className="w-[140px] h-[140px] max-md:w-20 max-md:h-20 rounded-[18px] bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-100 grid place-items-center relative overflow-hidden shrink-0">
                  <span className="font-display text-[2.6rem] max-md:text-[1.8rem] font-bold text-brand-700 relative z-10">
                    {leader.initials}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-300/10 to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-[1.75rem] md:text-[2.05rem] font-semibold text-ink">{leader.name}</h3>
                  <span className="font-mono text-[0.72rem] tracking-[0.14em] uppercase text-brand-700 mt-1 block">
                    {leader.role}
                  </span>
                  <p className="mt-3 text-muted text-[0.9rem] leading-[1.55]">{renderInlineBold(leader.bio)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {leader.creds.map((cred) => (
                      <span
                        key={cred}
                        className="text-[0.78rem] bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full font-semibold"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
