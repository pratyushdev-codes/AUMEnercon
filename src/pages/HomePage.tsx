import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Compass, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBand from '../components/TrustBand';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Leadership from '../components/Leadership';
import PartnersMarquee from '../components/PartnersMarquee';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Eyebrow from '../components/ui/Eyebrow';
import { aboutVisionMission } from '../data/about';

/**
 * Marketing home: primary landing flow and high-level brand sections.
 */
export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <section className="py-14 lg:py-20">
        <div className="max-w-container mx-auto px-4 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <Reveal>
              <div className="rounded-3xl border border-line bg-gradient-to-br from-brand-50/80 to-white p-8 lg:p-10 h-full">
                <div className="flex items-center gap-2 text-brand-700 mb-1">
                  <Compass className="w-4 h-4" />
                  <Eyebrow className="!mt-0">{aboutVisionMission.visionEyebrow}</Eyebrow>
                </div>
                <p className="mt-4 text-ink leading-[1.65] font-medium">{aboutVisionMission.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-white p-8 lg:p-10 shadow-soft-1 h-full">
                <div className="flex items-center gap-2 text-brand-700 mb-1">
                  <Target className="w-4 h-4" />
                  <Eyebrow className="!mt-0">{aboutVisionMission.missionEyebrow}</Eyebrow>
                </div>
                <ul className="mt-5 space-y-3 text-muted text-[0.92rem] leading-relaxed">
                  {aboutVisionMission.mission.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <TrustBand />
      <Stats />
      <Projects />
      <Clients />
      <Leadership />
      <PartnersMarquee />
      <CTASection />
      <Footer />
    </div>
  );
}
