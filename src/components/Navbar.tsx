import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import BrandLogo from './BrandLogo';

const navLinks = [
  { label: 'About', to: '/about-us' },
  { label: 'What We Do', to: '/what-we-do' },
  { label: 'Projects', to: '/projects' },
  { label: 'Organization', to: '/organization' },
  { label: 'Contact', to: '/contact' },
] as const;

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === '/';
  const navSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        navSolid
          ? 'bg-black border-b border-line/80 shadow-soft-1 backdrop-blur-xl backdrop-saturate-150'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto flex items-center min-h-[76px] py-2 sm:py-2.5 px-4 lg:px-0">
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            to="/"
            className="group/logo min-w-0 pr-2 transition-opacity hover:opacity-95"
            onClick={() => {
              setMobileOpen(false);
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Aum Enercon Private Limited — Home"
          >
            <BrandLogo variant="nav" />
          </Link>
        </div>

        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3.5 py-2 text-[0.92rem] font-semibold rounded-full transition-all duration-300 text-white/90 hover:text-white hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 justify-end">
          <button
            className="p-2 text-white transition-colors lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-line"
          >
            <div className="max-w-container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-left px-4 py-3 text-[1rem] font-medium text-ink-2 rounded-xl hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-line mt-2">
                <Button to="/contact" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
