import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Button from './ui/Button';
import Reveal from './Reveal';

const contactRows = [
  {
    icon: MapPin,
    label: 'Head Office',
    value: 'UL-15-17, Arjun Tower, Nr. Maruti Tower, Opp. Deepkala Junction, Shivranjani Cross Road, Satellite, Ahmedabad — 380015',
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: '+91-79-26762201 · +91-79-40307574',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@aumenercon.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon — Sat · 10:00 AM — 7:00 PM IST',
  },
];

export default function CTASection() {
  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal>
          <div className="relative bg-gradient-to-br from-brand-900 via-brand-900 to-ink rounded-3xl mx-0 overflow-hidden text-white shadow-premium ring-1 ring-white/10">
            {/* Radial overlays */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-300/10 rounded-full blur-[80px]" />
            {/* Grid pattern */}
            <div className="absolute inset-0 cta-grid-pattern" style={{ maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 70%)' }} />

            <div className="relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 p-10 lg:p-20">
              {/* Left */}
              <div>
                <Eyebrow dark>Let&rsquo;s get to work</Eyebrow>

                <h2 className="mt-6 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                  Ready to engineer your <GradientText dark>next landmark project?</GradientText>
                </h2>

                <p className="mt-5 text-white/70 leading-[1.6] max-w-[480px]">
                  Speak directly with our engineering team. We&rsquo;ll review your scope, share comparable case studies, and quote a delivery plan within 48 hours.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:info@aumenercon.com"
                    className="group inline-flex items-center gap-2.5 bg-white text-ink px-6 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Email the Team
                  </a>
                  <Button
                    variant="ghost"
                    dark
                    href="tel:+917926762201"
                  >
                    +91-79-26762201
                  </Button>
                </div>
              </div>

              {/* Right — Frosted Contact Card */}
              <div className="bg-white/6 border border-white/14 rounded-xl-2 p-7 backdrop-blur-md">
                {contactRows.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.label}
                      className={`flex gap-3.5 py-3.5 ${i < contactRows.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <div className="w-[38px] h-[38px] bg-white/8 rounded-lg grid place-items-center shrink-0">
                        <Icon className="w-4 h-4 text-white/70" />
                      </div>
                      <div>
                        <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-white/50">
                          {row.label}
                        </div>
                        <div className="text-white font-semibold text-[0.9rem] mt-0.5 leading-snug">
                          {row.label === 'Email' ? (
                            <a href="mailto:info@aumenercon.com" className="hover:text-accent transition-colors">
                              {row.value}
                            </a>
                          ) : row.label === 'Direct Line' ? (
                            <a href="tel:+917926762201" className="hover:text-accent transition-colors">
                              {row.value}
                            </a>
                          ) : (
                            row.value
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
