import {
  CheckCircle2,
  ClipboardList,
  DraftingCompass,
  Layers,
  Trophy,
} from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Button from './ui/Button';
import Reveal from './Reveal';
import {
  whatWeDoIntro,
  whatWeDoTurnkey,
  whatWeDoCoreServices,
  whatWeDoDesign,
  whatWeDoExperience,
  whatWeDoCommitment,
} from '../data/whatWeDoSection';

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

/**
 * Long-form capabilities, process, services, safety, training, and commitment narrative.
 */
export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-14 lg:py-20 bg-white border-y border-line/70">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            End-to-end infrastructure, delivered with <GradientText>discipline.</GradientText>
          </h2>
        </Reveal>
        {whatWeDoIntro.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.12 + i * 0.04}>
            <p className="mt-6 text-muted leading-[1.65] max-w-3xl">{p}</p>
          </Reveal>
        ))}
        <Reveal delay={0.22}>
          <div className="mt-8">
            <Button to="/what-we-do" variant="ghost">
              Explore more
            </Button>
          </div>
        </Reveal>

        {/* Turnkey */}
        <div className="mt-16 lg:mt-20 rounded-3xl bg-bg-soft border border-line/80 p-8 lg:p-12">
          <Reveal>
            <div className="flex items-center gap-2 text-brand-700 mb-2">
              <Layers className="w-5 h-5" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em]">Turnkey</span>
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-ink">{whatWeDoTurnkey.title}</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted leading-[1.65] max-w-3xl">{whatWeDoTurnkey.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none pl-0">
              {whatWeDoTurnkey.phases.map((phase, i) => (
                <li
                  key={phase}
                  className="flex gap-3 items-start rounded-2xl bg-white border border-line/90 px-4 py-3.5 shadow-soft-1"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white font-mono text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[0.9rem] font-medium text-ink pt-0.5">{phase}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 text-muted leading-[1.65] max-w-3xl">{whatWeDoTurnkey.closing}</p>
          </Reveal>
        </div>

        {/* Core services */}
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <Eyebrow>{whatWeDoCoreServices.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {whatWeDoCoreServices.services.map((s, i) => (
              <Reveal key={s.title} delay={0.06 + i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-gradient-to-br from-white to-bg-tint/50 p-6 lg:p-7 shadow-soft-1 hover:shadow-soft-2 hover:border-brand-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-700">
                    <ClipboardList className="w-4 h-4 shrink-0" aria-hidden />
                    <h3 className="font-display font-semibold text-ink text-lg">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-muted text-[0.92rem] leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Design excellence */}
        <div className="mt-16 lg:mt-20 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 text-brand-700 mb-2">
              <DraftingCompass className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-ink">{whatWeDoDesign.title}</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted leading-[1.65]">{whatWeDoDesign.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6">
              <BulletList items={whatWeDoDesign.points} />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-muted leading-[1.65]">{whatWeDoDesign.closing}</p>
          </Reveal>
        </div>

        {/* Experience */}
        <div className="mt-16 lg:mt-20 max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-2 text-brand-700 mb-2">
              <Trophy className="w-5 h-5" aria-hidden />
            </div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-ink">{whatWeDoExperience.title}</h3>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-muted leading-[1.65]">{whatWeDoExperience.lead}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6">
              <BulletList items={whatWeDoExperience.bullets} />
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-muted leading-[1.65]">{whatWeDoExperience.closing}</p>
          </Reveal>
        </div>

        {/* Commitment */}
        <div className="mt-16 lg:mt-20 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50/90 via-white to-bg-tint px-8 py-10 lg:px-12 lg:py-12">
          <Reveal>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-ink">{whatWeDoCommitment.title}</h3>
          </Reveal>
          {whatWeDoCommitment.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05}>
              <p className="mt-5 text-muted leading-[1.7] max-w-3xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
