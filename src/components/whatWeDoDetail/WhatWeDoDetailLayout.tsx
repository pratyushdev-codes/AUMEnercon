import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Cable,
  ClipboardCheck,
  DraftingCompass,
  HardHat,
  Layers,
  Lightbulb,
  Radio,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../Reveal';
import {
  whatWeDoDetailCommitment,
  whatWeDoDetailDesign,
  whatWeDoDetailExperience,
  whatWeDoDetailHero,
  whatWeDoDetailMetrics,
  whatWeDoDetailNav,
  whatWeDoDetailOverview,
  whatWeDoDetailPhases,
  whatWeDoDetailSafety,
  whatWeDoDetailSectors,
  whatWeDoDetailServices,
  whatWeDoDetailTraining,
  whatWeDoDetailWorkforce,
} from '../../data/whatWeDoDetail';

const serviceIcons = [Zap, Cable, Radio, Lightbulb] as const;

export default function WhatWeDoDetailLayout() {
  return (
    <div className="bg-[#050a14] text-slate-200">
      {/* Immersive hero — distinct from landing hero */}
      <header className="relative pt-[76px] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 20% 20%, rgba(22,112,240,0.35), transparent 55%),
              radial-gradient(ellipse 70% 50% at 80% 0%, rgba(0,194,255,0.2), transparent 50%),
              linear-gradient(180deg, #0a1628 0%, #050a14 100%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)] bg-[length:200%_100%] animate-[shimmer_12s_linear_infinite]" />
        <div className="relative max-w-container mx-auto px-4 lg:px-0 py-14 lg:py-20">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              {whatWeDoDetailHero.backLinkLabel}
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent mb-4">{whatWeDoDetailHero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.1rem,4.5vw,3.75rem)] font-bold text-white leading-[1.08] tracking-[-0.03em] max-w-4xl">
              {whatWeDoDetailHero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-3xl">{whatWeDoDetailHero.subtitle}</p>
          </Reveal>
        </div>
      </header>

      {/* Sticky section nav */}
      <nav
        aria-label="On this page"
        className="sticky top-[76px] z-40 border-y border-white/[0.08] bg-[#050a14]/90 backdrop-blur-xl"
      >
        <div className="max-w-container mx-auto px-4 lg:px-0 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex gap-2 min-w-max lg:flex-wrap lg:min-w-0">
            {whatWeDoDetailNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex px-3.5 py-2 rounded-full text-[0.8rem] font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Metrics strip */}
      <section className="border-b border-white/[0.08] bg-gradient-to-r from-brand-900/40 via-[#0a1f44] to-brand-900/30">
        <div className="max-w-container mx-auto px-4 lg:px-0 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {whatWeDoDetailMetrics.map((m, i) => (
              <Reveal key={m.label} delay={0.04 * i}>
                <div className="text-center lg:text-left">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white tabular-nums">{m.value}</div>
                  <div className="mt-2 text-[0.85rem] text-slate-400 leading-snug max-w-[14rem] mx-auto lg:mx-0">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-container mx-auto px-4 lg:px-0 py-14 lg:py-20 space-y-24 lg:space-y-28">
        {/* Overview */}
        <section id="wwd-overview" className="scroll-mt-36">
          <Reveal>
            <div className="flex items-center gap-3 text-accent mb-4">
              <Building2 className="w-5 h-5" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Overview</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">{whatWeDoDetailOverview.title}</h2>
          </Reveal>
          {whatWeDoDetailOverview.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05}>
              <p className="mt-6 text-slate-400 leading-[1.75] max-w-3xl">{p}</p>
            </Reveal>
          ))}
        </section>

        {/* Execution timeline */}
        <section id="wwd-execution" className="scroll-mt-36">
          <Reveal>
            <div className="flex items-center gap-3 text-accent mb-4">
              <Layers className="w-5 h-5" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Turnkey execution</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white max-w-2xl">Five phases. One accountable team.</h2>
            <p className="mt-4 text-slate-400 max-w-2xl">
              Each phase has defined outputs so consultants and owners can see progress — not just activity.
            </p>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-[15px] lg:left-5 top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 via-brand-500/40 to-transparent" aria-hidden />
            <ol className="space-y-10 lg:space-y-12">
              {whatWeDoDetailPhases.map((phase, i) => (
                <Reveal key={phase.title} delay={0.06 * i}>
                  <li className="relative pl-12 lg:pl-16">
                    <span className="absolute left-0 top-1 flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-2xl bg-brand-600 text-white font-mono text-xs font-bold shadow-lg shadow-brand-600/25 ring-4 ring-[#050a14]">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-lg lg:text-xl font-semibold text-white">{phase.title}</h3>
                    <p className="mt-2 text-slate-400 leading-relaxed">{phase.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {phase.outcomes.map((o) => (
                        <li key={o} className="flex gap-2 text-sm text-slate-300">
                          <ClipboardCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Services — bento-style */}
        <section id="wwd-services" className="scroll-mt-36">
          <Reveal>
            <div className="flex items-center gap-3 text-accent mb-4">
              <Zap className="w-5 h-5" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Service depth</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">Capability maps — not brochure blurbs.</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {whatWeDoDetailServices.map((s, i) => {
              const Icon = serviceIcons[i] ?? Zap;
              return (
                <Reveal key={s.title} delay={0.05 * i}>
                  <article className="group h-full rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-transparent p-6 lg:p-8 hover:border-accent/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-accent ring-1 ring-white/10">
                        <Icon className="w-6 h-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                        <p className="mt-1 text-sm text-accent/90 font-medium">{s.tagline}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-slate-400 text-[0.92rem] leading-relaxed">{s.body}</p>
                    <p className="mt-4 text-xs font-mono uppercase tracking-wider text-slate-500">Typical deliverables</p>
                    <ul className="mt-2 space-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="text-sm text-slate-300 flex gap-2">
                          <span className="text-accent mt-1">·</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs text-slate-500 leading-relaxed border-t border-white/10 pt-4">{s.note}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Design + sectors */}
        <section id="wwd-design" className="scroll-mt-36 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-accent mb-4">
                <DraftingCompass className="w-5 h-5" aria-hidden />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Design</span>
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">{whatWeDoDetailDesign.title}</h2>
              <p className="mt-5 text-slate-400 leading-[1.75]">{whatWeDoDetailDesign.intro}</p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {whatWeDoDetailDesign.pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.06 * i}>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
                    <h3 className="font-semibold text-white text-sm">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 text-slate-500 text-sm leading-relaxed italic">{whatWeDoDetailDesign.closing}</p>
            </Reveal>
          </div>
          <aside className="rounded-2xl border border-brand-500/25 bg-brand-950/50 p-6 lg:p-8 lg:sticky lg:top-32">
            <Reveal>
              <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent mb-4">Sectors we routinely serve</h3>
              <ul className="space-y-3">
                {whatWeDoDetailSectors.map((sec, i) => (
                  <li key={sec} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-[0.65rem] font-mono text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {sec}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </section>

        {/* People, safety, training */}
        <section id="wwd-people" className="scroll-mt-36">
          <Reveal>
            <div className="flex items-center gap-3 text-accent mb-4">
              <Users className="w-5 h-5" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">People &amp; safety</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">Organisation built for live sites</h2>
          </Reveal>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 h-full">
                <Users className="w-8 h-8 text-accent mb-4" aria-hidden />
                <h3 className="font-display font-semibold text-white">{whatWeDoDetailWorkforce.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{whatWeDoDetailWorkforce.lead}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {whatWeDoDetailWorkforce.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">{whatWeDoDetailWorkforce.closing}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/40 to-transparent p-6 lg:p-7 h-full">
                <HardHat className="w-8 h-8 text-red-400 mb-4" aria-hidden />
                <h3 className="font-display font-semibold text-white">{whatWeDoDetailSafety.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{whatWeDoDetailSafety.lead}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {whatWeDoDetailSafety.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <ShieldCheck className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">{whatWeDoDetailSafety.closing}</p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7 h-full">
                <Sparkles className="w-8 h-8 text-accent mb-4" aria-hidden />
                <h3 className="font-display font-semibold text-white">{whatWeDoDetailTraining.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{whatWeDoDetailTraining.lead}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {whatWeDoDetailTraining.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-accent">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">{whatWeDoDetailTraining.closing}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Track record */}
        <section id="wwd-record" className="scroll-mt-36 rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-brand-800/30 to-transparent">
              <Reveal>
                <div className="flex items-center gap-3 text-accent mb-4">
                  <Trophy className="w-5 h-5" aria-hidden />
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em]">Track record</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">{whatWeDoDetailExperience.title}</h2>
                <p className="mt-5 text-slate-400 leading-relaxed">{whatWeDoDetailExperience.lead}</p>
              </Reveal>
            </div>
            <div className="p-8 lg:p-12 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/10">
              <Reveal delay={0.1}>
                <ul className="space-y-3">
                  {whatWeDoDetailExperience.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-slate-300 text-sm">
                      <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-slate-500 leading-relaxed">{whatWeDoDetailExperience.closing}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section id="wwd-commit" className="scroll-mt-36 pb-6">
          <Reveal>
            <div className="rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-transparent to-brand-900/20 px-8 py-10 lg:px-12 lg:py-14 text-center lg:text-left">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">{whatWeDoDetailCommitment.title}</h2>
              {whatWeDoDetailCommitment.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 text-slate-400 leading-[1.75] max-w-3xl mx-auto lg:mx-0">
                  {p}
                </p>
              ))}
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button to={whatWeDoDetailCommitment.cta.href}>{whatWeDoDetailCommitment.cta.label}</Button>
                <Button variant="ghost" dark className="!border-white/20" to="/#projects">
                  View projects
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
