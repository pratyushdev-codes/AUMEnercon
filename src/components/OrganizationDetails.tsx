import { CheckCircle2, HardHat, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Reveal from './Reveal';
import {
  organizationSafety,
  organizationTraining,
  organizationWorkforce,
} from '../data/organizationPage';

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-muted text-[0.92rem] leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function OrganizationDetails() {
  return (
    <section className="py-14 lg:py-20 bg-white border-y border-line/70">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <div className="rounded-3xl border border-line bg-white p-8 lg:p-10 shadow-soft-1">
          <Reveal>
            <div className="flex items-center gap-2 text-brand-700 mb-2">
              <Users className="w-5 h-5" aria-hidden />
            </div>
            <h2 className="font-display text-xl lg:text-2xl font-bold text-ink">{organizationWorkforce.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted leading-[1.65] max-w-3xl">{organizationWorkforce.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 max-w-3xl">
              <BulletList items={organizationWorkforce.bullets} />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-muted leading-[1.65] max-w-3xl">{organizationWorkforce.closing}</p>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 lg:gap-10">
          <Reveal>
            <div className="h-full rounded-3xl bg-ink text-white p-8 lg:p-10 relative overflow-hidden">
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
              <div className="relative z-[1]">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <HardHat className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{organizationSafety.title}</h3>
                <p className="mt-4 text-white/85 leading-[1.65] text-[0.92rem]">{organizationSafety.lead}</p>
                <p className="mt-3 text-white/70 leading-[1.65] text-[0.9rem]">{organizationSafety.sub}</p>
                <ul className="mt-6 space-y-2.5 text-white/82 text-[0.9rem] leading-relaxed">
                  {organizationSafety.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-white/75 text-[0.9rem] leading-relaxed italic">{organizationSafety.closing}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-line bg-bg-soft p-8 lg:p-10">
              <div className="flex items-center gap-2 text-brand-700 mb-2">
                <Sparkles className="w-5 h-5" aria-hidden />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">{organizationTraining.title}</h3>
              <p className="mt-4 text-muted leading-[1.65] text-[0.92rem]">{organizationTraining.lead}</p>
              <div className="mt-6">
                <BulletList items={organizationTraining.bullets} />
              </div>
              <p className="mt-6 text-muted leading-[1.65] text-[0.92rem]">{organizationTraining.closing}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
