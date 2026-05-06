import Eyebrow from './ui/Eyebrow';
import Reveal from './Reveal';
import { partners } from '../data/partners';

export default function PartnersMarquee() {
  return (
    <section className="py-12 lg:py-16 overflow-hidden">
      <div className="max-w-container mx-auto px-4 lg:px-0 text-center">
        <Reveal>
          <Eyebrow>Quality Partners</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="mt-5 font-display text-[clamp(1.85rem,3.6vw,2.85rem)] font-semibold text-ink tracking-tight">
            We build with the world&rsquo;s most reliable equipment.
          </h3>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-2 text-muted text-[0.92rem]">
            Exclusive authorized partners for India&rsquo;s leading electrical brands.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] group">
          <div className="flex gap-14 animate-marquee shrink-0 pr-14 group-hover:[animation-play-state:paused]">
            {partners.map((p) => (
              <span
                key={p}
                className="font-display text-[1.9rem] font-bold text-ink-2/45 hover:text-brand-800 whitespace-nowrap transition-colors duration-300 cursor-default tracking-[-0.02em]"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-14 animate-marquee shrink-0 pr-14 group-hover:[animation-play-state:paused]" aria-hidden>
            {partners.map((p) => (
              <span
                key={`dup-${p}`}
                className="font-display text-[1.9rem] font-bold text-ink-2/45 whitespace-nowrap tracking-[-0.02em]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
