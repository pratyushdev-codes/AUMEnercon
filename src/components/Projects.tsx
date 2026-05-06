import { MapPin } from 'lucide-react';
import Eyebrow from './ui/Eyebrow';
import GradientText from './ui/GradientText';
import Reveal from './Reveal';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-soft py-14 lg:py-20">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <Reveal>
          <Eyebrow>Landmark Projects</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-[clamp(2.85rem,5.8vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
            A portfolio that <GradientText>powers landmarks.</GradientText>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-muted max-w-[540px] leading-[1.6]">
            From smart cities to international power authorities, our projects speak to the scale and precision we bring to every engagement.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-5">
          {projects.map((project, i) => {
            const aspectClass =
              project.span === 7
                ? 'aspect-[16/10]'
                : project.span === 5
                ? 'aspect-[16/10]'
                : 'aspect-[4/3]';

            return (
              <Reveal
                key={project.title}
                delay={0.1 + i * 0.06}
                className={`col-span-12 ${project.span === 7 ? 'md:col-span-7' : project.span === 5 ? 'md:col-span-5' : 'md:col-span-4'}`}
              >
                <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-soft-2 ring-1 ring-ink/[0.05] transition-shadow duration-300 hover:shadow-premium">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${aspectClass} object-cover transition-transform duration-700 group-hover:scale-[1.06]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/0 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white text-[0.75rem] font-semibold mb-2">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-[1.35rem] md:text-[1.85rem] lg:text-[2.1rem] font-semibold text-white leading-snug">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-white/82 text-[0.85rem] mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
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
