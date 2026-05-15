import { useEffect, useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Button from './ui/Button';
import Reveal from './Reveal';
import { projects } from '../data/projects';

// function HeroStatNumber({ value }: { value: string }) {
//   if (!value.endsWith('+')) {
//     return <>{value}</>;
//   }
//   return (
//     <>
//       {value.slice(0, -1)}
//       <span className="text-brand-400">+</span>
//     </>
//   );
// }

export default function Hero() {
  const heroProjects = useMemo(() => {
    const featuredProject = {
      title: 'Rajpath Arena, Ahmedabad',
      tag: 'Public Infrastructure',
      location: 'Ahmedabad',
      image: '/hero-rajpath-arena.png',
    };

    const otherProjects = projects.slice(0, 5).map((project) => ({
      title: project.title,
      tag: project.tag,
      location: project.location.split(',')[0] || project.location,
      image: project.image,
    }));

    return [featuredProject, ...otherProjects];
  }, []);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    if (heroProjects.length <= 1) {
      return;
    }

    const rotationTimer = window.setInterval(() => {
      setActiveProjectIndex((currentIndex) => (currentIndex + 1) % heroProjects.length);
    }, 3500);

    return () => window.clearInterval(rotationTimer);
  }, [heroProjects.length]);

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-[76px] pb-10 min-h-dvh lg:min-h-0 lg:h-dvh lg:max-h-dvh lg:pb-0 lg:flex lg:flex-col">
      {/* Full-bleed photo + gradient (reference layout) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="City skyline and infrastructure"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 lg:px-0 w-full lg:flex-1 lg:flex lg:items-center lg:min-h-0 lg:overflow-hidden lg:py-2 lg:pb-7">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-10 items-center w-full">
          {/* Left column */}
          <div className="lg:min-w-0">
            <Reveal>
              <Eyebrow dark>Govt. Approved Class &ldquo;A&rdquo; Contractors &middot; Est. 2011</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-3 lg:mt-2 font-display text-[clamp(2.35rem,5.2vw+0.35rem,4.65rem)] lg:text-[clamp(2.65rem,4.8vw+0.5rem,4.95rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white text-balance">
                Engineering reliable <GradientText dark>electrical solutions</GradientText> for critical infrastructure.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-3 lg:mt-2 text-slate-300 text-[clamp(0.9rem,1.35vw,1rem)] lg:leading-[1.55] leading-[1.6] max-w-[34rem] font-medium">
                From 66KV switchyards to homeland security &mdash; Aum Enercon delivers turnkey HT, LT and ELV systems for India&rsquo;s most demanding industrial, commercial and government projects since 2011.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-4 lg:mt-3 flex flex-wrap gap-3 sm:gap-4">
                <Button
                  className="!bg-brand-600 hover:!bg-brand-700 !shadow-lg !shadow-brand-600/25 !ring-white/15"
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Start a Project
                </Button>
                <Button variant="ghost" dark to="/what-we-do">
                  Explore More
                </Button>
                {/* <Button
                  variant="ghost"
                  dark
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Explore Our Work
                </Button> */}
              </div>
            </Reveal>

            {/* <Reveal delay={0.4}>
              <div className="mt-5 lg:mt-4 pt-4 lg:pt-3 border-t border-white/15 flex flex-wrap gap-5 lg:gap-8">
                {[
                  { num: '15+', label: 'Years Industrial Authority' },
                  { num: '50+', label: 'Mega Projects Delivered' },
                  { num: '\u20B9100cr+', label: 'Project Value Executed' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-[clamp(1.65rem,2.8vw,2.35rem)] font-bold text-white tabular-nums tracking-tight">
                      <HeroStatNumber value={stat.num} />
                    </div>
                    <div className="font-mono text-[0.65rem] lg:text-[0.68rem] tracking-[0.14em] uppercase text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal> */}
          </div>

          {/* Right column — Layered Card Stack */}
          <Reveal delay={0.2} className="hidden lg:block lg:justify-self-end w-full max-w-[520px] lg:self-center">
            <div className="group relative ml-auto w-full aspect-[1/1.05] max-h-[min(380px,calc(100dvh-6.25rem))] max-w-[min(480px,40vw)]">
              {/* Main card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-premium ring-1 ring-ink/[0.06]">
                {heroProjects.map((project, index) => (
                  <img
                    key={project.title}
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-all duration-700 ease-out group-hover:scale-105 ${
                      index === activeProjectIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-2xl font-semibold text-white tracking-tight">
                    {heroProjects[activeProjectIndex]?.title}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/82 text-[0.85rem] mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {heroProjects[activeProjectIndex]?.location} &middot; {heroProjects[activeProjectIndex]?.tag}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
