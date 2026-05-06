import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Organization from '../components/Organization';
import OrganizationDetails from '../components/OrganizationDetails';

export default function OrganizationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14]">
      <Navbar />
      <main>
        <h1 className="sr-only">Organization - Aum Enercon Private Limited</h1>
        <Organization />
        <section className="bg-white py-8 lg:py-12">
          <div className="max-w-container mx-auto px-4 lg:px-0">
            <div className="overflow-hidden rounded-3xl border border-line/80 shadow-soft-1">
              <img
                src="/project-site-team.png"
                alt="Aum Enercon project site team"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="bg-white pb-8 lg:pb-12">
          <div className="max-w-container mx-auto px-4 lg:px-0">
            <div className="rounded-3xl border border-line/80 bg-bg-soft p-6 lg:p-8 shadow-soft-1">
              <h2 className="font-display text-xl lg:text-2xl font-bold text-ink">Contractor License</h2>
              <p className="mt-3 text-muted">
                Official electrical contractor license document for Aum Enercon Private Limited.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
                <iframe
                  src="/Contractor%20License.pdf"
                  title="Contractor License PDF"
                  className="w-full h-[560px]"
                />
              </div>
              <a
                href="/Contractor%20License.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Open or download license
              </a>
            </div>
          </div>
        </section>
        <OrganizationDetails />
      </main>
      <Footer />
    </div>
  );
}
