import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import OrganizationFlowChart from './OrganizationFlowChart';

export default function Organization() {
  return (
    <section id="organization" className="py-14 lg:py-20 bg-bg-soft border-y border-line/80">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal>
          <Eyebrow>How we&apos;re structured</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            Organizational <GradientText>flow.</GradientText>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted max-w-[620px] leading-[1.6]">
            Aum Enercon Pvt. Ltd. runs a clear line from joint leadership through departments to on-ground
            teams — with Engineering and Admin paired on the largest branch.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-2xl bg-white/90 border border-line px-4 py-3 shadow-soft-1 font-mono text-[0.7rem] sm:text-[0.72rem] tracking-wide text-ink-2">
            <span className="font-semibold text-brand-700">Managing Director</span>
            <span className="text-muted-2">+</span>
            <span className="font-semibold text-brand-700">Technical Director</span>
            <span className="text-muted-2 hidden sm:inline">→</span>
            <span className="w-full sm:w-auto sm:hidden text-center text-muted-2">↓</span>
            <span>Departments</span>
            <span className="text-muted-2">→</span>
            <span>Teams</span>
          </div>
        </Reveal>

        <Reveal delay={0.22} className="mt-10">
          <OrganizationFlowChart />
        </Reveal>

      </div>
    </section>
  );
}
