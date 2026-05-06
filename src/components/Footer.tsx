import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

const serviceLinks = ['High Tension', 'Low Tension', 'ELV & Smart Systems', 'Turnkey Lighting', 'Homeland Security'];
const companyLinks = [
  { label: 'About', to: '/about-us' as const },
  { label: 'What We Do', to: '/what-we-do' as const },
  { label: 'Projects', to: '/#projects' as const },
  { label: 'Leadership', to: '/#leadership' as const },
  { label: 'Clients', to: '/#clients' as const },
  { label: 'Careers', to: '/#contact' as const },
];

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-b from-ink via-[#071a38] to-[#050f22] text-[#c0cce4] pt-14 pb-8 mt-14 lg:mt-16 border-t border-white/[0.07]">
      <div className="max-w-container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-14 pb-14 border-b border-white/8">
          {/* Col 1 — Brand */}
          <div>
            <div className="mb-4 max-w-sm">
              <BrandLogo variant="footer" />
            </div>
            <p className="text-[#a6b4d0] text-[0.88rem] leading-[1.6] max-w-[320px]">
              A Government Approved Class &ldquo;A&rdquo; Electrical Contractor delivering turnkey HT, LT and ELV solutions for India&rsquo;s most demanding projects since 2011.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-[38px] h-[38px] border border-white/15 rounded-lg grid place-items-center text-white/60 hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@aumenercon.com"
                className="w-[38px] h-[38px] border border-white/15 rounded-lg grid place-items-center text-white/60 hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+917926762201"
                className="w-[38px] h-[38px] border border-white/15 rounded-lg grid place-items-center text-white/60 hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-white mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/#services" className="text-[0.9rem] text-[#a6b4d0] hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-white mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <Link to={c.to} className="text-[0.9rem] text-[#a6b4d0] hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div>
            <h4 className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-white mb-5">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-[0.88rem]">
              <a href="mailto:info@aumenercon.com" className="text-[#a6b4d0] hover:text-white transition-colors">
                info@aumenercon.com
              </a>
              <a href="tel:+917926762201" className="text-[#a6b4d0] hover:text-white transition-colors">
                +91-79-26762201
              </a>
              <a href="tel:+917940307574" className="text-[#a6b4d0] hover:text-white transition-colors">
                +91-79-40307574
              </a>
              <p className="text-[#8794AE] text-[0.82rem] leading-snug mt-1">
                UL-15-17, Arjun Tower, Nr. Maruti Tower, Opp. Deepkala Junction, Shivranjani Cross Road, Satellite, Ahmedabad — 380015
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex justify-between items-center flex-wrap gap-5 text-[0.82rem] text-[#8794AE]">
          <span>&copy; {new Date().getFullYear()} Aum Enercon Private Limited. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
