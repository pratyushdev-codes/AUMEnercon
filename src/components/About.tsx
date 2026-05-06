import {
  Zap,
  Users,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  HeartHandshake,
} from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import {
  aboutIntro,
  aboutExpertise,
  aboutStrength,
  aboutApproach,
  aboutCommitment,
} from '../data/about';

const heroBullets = [
  {
    icon: Zap,
    title: 'End-to-End EPC Capability',
    description: 'Design, supply, installation, testing & commissioning under one roof',
  },
  {
    icon: Users,
    title: 'Skilled, Structured Workforce',
    description: 'Expert engineers, technicians, and disciplined on-site coordination',
  },
  {
    icon: ShieldCheck,
    title: 'World-Class Quality Partners',
    description: 'Exclusive partners of Siemens, ABB, Schneider, L&T, Legrand & more',
  },
];

/**
 * Company story, expertise, offerings narrative, process, vision, and commitment.
 *
 * Returns:
 *   React element for the About page section.
 */
export default function About() {
  return (
    <section id="about" className="py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        {/* Intro + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium ring-1 ring-ink/[0.06] lg:sticky lg:top-28">
              <img
                src="/project-smart-campus.png"
                alt="Aerial view of a modern sustainable campus with integrated landscaping and infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-6 right-6 bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4">
                <span className="font-display text-[2.4rem] font-bold text-brand-700">
                  {aboutIntro.imageCaptionYear}
                </span>
                <p className="text-[0.9rem] text-muted leading-snug">{aboutIntro.imageCaption}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{aboutIntro.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                {aboutIntro.titleLead} <GradientText>{aboutIntro.titleGradient}</GradientText>
              </h2>
            </Reveal>
            {aboutIntro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <p className="mt-6 text-muted leading-[1.65] first:mt-6">{p}</p>
              </Reveal>
            ))}
            <div className="mt-8 flex flex-col gap-5">
              {heroBullets.map((b, i) => (
                <Reveal key={b.title} delay={0.28 + i * 0.08}>
                  <div className="flex gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 grid place-items-center shrink-0">
                      <b.icon className="w-5 h-5 text-brand-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-[0.95rem]">{b.title}</div>
                      <div className="text-muted text-[0.88rem] mt-0.5">{b.description}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="mt-20 lg:mt-28 max-w-3xl">
          <Reveal>
            <Eyebrow>{aboutExpertise.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-5 font-display text-2xl lg:text-[1.85rem] font-bold text-ink tracking-tight">
              {aboutExpertise.title}
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-muted leading-[1.65]">{aboutExpertise.lead}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 font-semibold text-ink text-[0.95rem]">{aboutExpertise.designFocusLabel}</p>
            <ul className="mt-3 space-y-2.5 text-muted leading-relaxed">
              {aboutExpertise.designFocus.map((item) => (
                <li key={item} className="flex gap-3">
                  <Sparkles className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted leading-[1.65]">{aboutExpertise.closing}</p>
          </Reveal>
        </div>

        {/* Our Strength */}
        <div className="mt-20 lg:mt-28 rounded-3xl bg-bg-soft border border-line/80 px-6 py-10 lg:px-12 lg:py-14">
          <Reveal>
            <Eyebrow>{aboutStrength.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-5 font-display text-2xl lg:text-[1.85rem] font-bold text-ink tracking-tight">
              {aboutStrength.title}
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-muted leading-[1.65] max-w-3xl">{aboutStrength.lead}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 font-semibold text-ink text-[0.95rem]">We bring:</p>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 max-w-4xl">
              {aboutStrength.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 items-start rounded-2xl bg-white/80 border border-line/90 px-4 py-3 text-[0.92rem] text-ink-2"
                >
                  <TrendingUp className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-muted leading-[1.65] max-w-3xl">{aboutStrength.closing}</p>
          </Reveal>
        </div>

        {/* Our Approach */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <Eyebrow>{aboutApproach.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="mt-5 font-display text-2xl lg:text-[1.85rem] font-bold text-ink tracking-tight">
              {aboutApproach.title}
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-muted leading-[1.65] max-w-3xl">{aboutApproach.lead}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-0 lg:mt-10">
              <div className="overflow-x-auto overflow-y-visible pb-2 lg:pb-0 [scrollbar-width:thin]">
                <div className="relative min-w-[52rem] w-full lg:min-w-0">
                  <div
                    className="pointer-events-none absolute left-[10%] right-[10%] top-5 z-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"
                    aria-hidden
                  />
                  <ol className="relative z-[1] m-0 flex w-full list-none p-0">
                    {aboutApproach.steps.map((step, i) => (
                      <li
                        key={step.title}
                        className="flex flex-1 flex-col items-center min-w-0 px-1 text-center first:pl-0 last:pr-0"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-mono text-sm font-bold text-white shadow-[0_0_20px_-4px_rgba(22,112,240,0.7)] ring-4 ring-white">
                          {i + 1}
                        </span>
                        <span className="mt-3 max-w-[11rem] font-semibold text-ink text-[0.85rem] leading-snug sm:text-[0.9rem]">
                          {step.title}
                        </span>
                        <p className="mt-1.5 max-w-[11rem] text-[0.75rem] leading-relaxed text-muted sm:text-[0.8rem]">
                          {step.detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-muted leading-[1.65] max-w-3xl">{aboutApproach.closing}</p>
          </Reveal>
        </div>

        {/* Commitment */}
        <div className="mt-20 lg:mt-28 rounded-3xl bg-ink text-white px-8 py-10 lg:px-12 lg:py-14 relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative z-[1] max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-accent shrink-0" aria-hidden />
                <Eyebrow dark className="!mt-0">
                  {aboutCommitment.eyebrow}
                </Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mt-4 font-display text-2xl lg:text-[1.85rem] font-bold text-white tracking-tight">
                {aboutCommitment.title}
              </h3>
            </Reveal>
            {aboutCommitment.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.06}>
                <p className="mt-5 text-white/82 leading-[1.7]">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
