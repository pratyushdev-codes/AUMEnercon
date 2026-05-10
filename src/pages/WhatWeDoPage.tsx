import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatWeDoDetailLayout from '../components/whatWeDoDetail/WhatWeDoDetailLayout';

/**
 * Dedicated capabilities page: structured detail layout.
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
        <WhatWeDoDetailLayout />
      </main>
      <Footer />
    </div>
  );
}
