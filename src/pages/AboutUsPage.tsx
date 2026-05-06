import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-soft">
      <Navbar />
      <main className="pt-[76px] pb-16 lg:pb-24">
        <h1 className="sr-only">About Us — Aum Enercon Private Limited</h1>
        <div className="max-w-container mx-auto px-4 lg:px-0">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-700 transition-colors mb-10 mt-8 lg:mt-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-ink leading-[1.1] tracking-[-0.025em]">
              About Us
            </h2>
          </Reveal>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}
