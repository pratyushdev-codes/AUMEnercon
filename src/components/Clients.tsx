import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import { clients } from '../data/clients';

export default function Clients() {
  return (
    <section id="clients" className="py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-end flex-wrap gap-10 mb-10">
          <div>
            <Reveal>
              <Eyebrow>Our Clients</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Trusted by India&rsquo;s <GradientText>most respected names.</GradientText>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-muted max-w-[380px] leading-[1.6]">
              From Fortune-500 conglomerates to government bodies, our client roster reflects the trust we&rsquo;ve built over two decades.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-3xl p-px bg-gradient-to-br from-line/90 via-line/50 to-line/80 shadow-soft-2 ring-1 ring-ink/[0.04]">
            <div className="rounded-[1.4rem] bg-white/92 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line/55">
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="bg-white/95 p-8 md:p-9 flex flex-col items-center justify-center gap-3 min-h-[100px] group cursor-default transition-colors duration-300 hover:bg-gradient-to-b hover:from-brand-50/90 hover:to-white"
                  >
                    {client.logoSrc ? (
                      <img
                        src={client.logoSrc}
                        alt=""
                        className="max-h-12 md:max-h-14 w-auto max-w-[min(100%,9rem)] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    ) : null}
                    <span className="font-display font-semibold text-ink-2 text-[1.12rem] md:text-[1.2rem] tracking-tight text-center transition-colors duration-300 group-hover:text-brand-800">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
