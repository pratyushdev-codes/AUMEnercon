import { ShieldCheck, BadgeCheck, Globe } from 'lucide-react';
import Reveal from './Reveal';

const trustItems = [
  { icon: ShieldCheck, label: 'Class "A" Electrical Contractor' },
  { icon: BadgeCheck, label: 'NSIC Certified Co.' },
  { icon: BadgeCheck, label: 'MSME Registered' },
  { icon: Globe, label: 'India Operations' },
];

export default function TrustBand() {
  return (
    <section className="relative border-y border-line/80 bg-gradient-to-r from-bg-soft via-white/90 to-bg-soft py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
      <Reveal>
        <div className="max-w-container mx-auto px-4 lg:px-0 flex items-center justify-between flex-wrap gap-8">
          <span className="font-mono text-[0.68rem] tracking-[0.22em] uppercase text-muted-2">
            Certified &middot; Insured &middot; Trusted
          </span>
          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 lg:gap-x-10">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 font-semibold text-ink text-[0.9rem]"
              >
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/80 border border-line/80 shadow-soft-inset shrink-0">
                  <item.icon className="w-[18px] h-[18px] text-brand-600" strokeWidth={2} />
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
