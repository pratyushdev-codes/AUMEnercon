import { Zap, LayoutGrid, Cog, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Button from './ui/Button';
import Reveal from './Reveal';
import { services } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  LayoutGrid,
  Cog,
  Lightbulb,
  ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-bg-soft to-white py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-10 mb-10">
          <div>
            <Reveal>
              <Eyebrow>Solutions</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                Turnkey solutions, executed with <GradientText>precision.</GradientText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted max-w-[540px] leading-[1.6]">
                From high-tension switchyards to homeland security perimeters, we deliver complete electrical engineering solutions under one contract, one timeline, one accountable partner.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button variant="ghost" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Talk to an Engineer
            </Button>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isFeatured = service.featured;

            return (
              <Reveal
                key={service.id}
                delay={0.1 + i * 0.08}
                className={`col-span-12 ${service.span === 6 ? 'md:col-span-6' : 'md:col-span-4'}`}
              >
                <div
                  className={`group relative flex flex-col p-8 md:p-9 rounded-3xl border overflow-hidden transition-all duration-350 ease-out hover:-translate-y-1 hover:shadow-premium hover:border-brand-100/90 ${
                    isFeatured
                      ? 'bg-gradient-to-br from-brand-700 to-brand-900 text-white border-transparent'
                      : 'bg-white border-line'
                  }`}
                >
                  {/* Bottom accent line */}
                  <div className="after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-gradient-to-r after:from-brand-500 after:to-accent after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100" />

                  {/* Radial overlays for featured */}
                  {isFeatured && (
                    <>
                      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
                      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-300/10 rounded-full blur-[60px]" />
                    </>
                  )}

                  <div className="relative z-10">
                    <span className={`font-mono text-[0.72rem] tracking-[0.14em] uppercase ${isFeatured ? 'text-white/50' : 'text-muted-2'}`}>
                      {service.number}
                    </span>

                    <div className="mt-5 flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl grid place-items-center shrink-0 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${
                          isFeatured
                            ? 'bg-white/10 group-hover:bg-brand-500'
                            : 'bg-brand-50 group-hover:bg-brand-700'
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`w-6 h-6 transition-colors ${
                              isFeatured
                                ? 'text-white/80 group-hover:text-white'
                                : 'text-brand-700 group-hover:text-white'
                            }`}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className={`font-display text-[1.6rem] md:text-[1.9rem] font-semibold leading-tight ${isFeatured ? 'text-white' : 'text-ink'}`}>
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <span className={`font-mono text-[0.72rem] tracking-[0.1em] ${isFeatured ? 'text-accent' : 'text-brand-500'}`}>
                            {service.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className={`mt-4 text-[0.92rem] leading-[1.55] ${isFeatured ? 'text-white/75' : 'text-muted'}`}>
                      {service.description}
                    </p>

                    <ul className="mt-5 flex flex-col gap-2">
                      {service.bullets.map((b) => (
                        <li key={b} className={`flex items-start gap-2.5 text-[0.88rem] ${isFeatured ? 'text-white/70' : 'text-muted'}`}>
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-[7px] shrink-0 ${
                              isFeatured ? 'bg-accent' : 'bg-brand-500'
                            }`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                      className={`inline-flex items-center gap-1.5 mt-6 text-[0.88rem] font-semibold transition-colors ${
                        isFeatured ? 'text-accent hover:text-white' : 'text-brand-700 hover:text-brand-500'
                      }`}
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
