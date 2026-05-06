import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhatWeDoDetailLayout from '../components/whatWeDoDetail/WhatWeDoDetailLayout';
import Services from '../components/Services';

/**
 * Dedicated capabilities page: distinct UI and deeper structured content vs. the landing section.
 */
export default function WhatWeDoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14]">
      <Navbar />
      <main>
        <h1 className="sr-only">What We Do — capabilities and delivery — Aum Enercon Private Limited</h1>
        <WhatWeDoSection />
        <WhatWeDoDetailLayout />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
