import { useEffect } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

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

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-soft">
      <Navbar />
      <main className="pt-[76px] pb-16 lg:pb-24">
        <h1 className="sr-only">Contact — Aum Enercon Private Limited</h1>
        <section className="py-12 lg:py-16">
          <div className="max-w-container mx-auto px-4 lg:px-0">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-[1.1] tracking-[-0.025em]">
                Contact
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 bg-white border border-line rounded-3xl p-6 md:p-8 lg:p-10 shadow-soft-1">
                {contactRows.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.label}
                      className={`flex gap-3.5 py-4 ${i < contactRows.length - 1 ? 'border-b border-line' : ''}`}
                    >
                      <div className="w-[38px] h-[38px] bg-brand-50 rounded-lg grid place-items-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-700" />
                      </div>
                      <div>
                        <div className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted">
                          {row.label}
                        </div>
                        <div className="text-ink font-semibold text-[0.98rem] mt-1 leading-snug">
                          {row.label === 'Email' ? (
                            <a href="mailto:info@aumenercon.com" className="hover:text-brand-700 transition-colors">
                              {row.value}
                            </a>
                          ) : row.label === 'Direct Line' ? (
                            <a href="tel:+917926762201" className="hover:text-brand-700 transition-colors">
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
