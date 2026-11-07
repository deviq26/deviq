import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { DevIQLogo } from '../common/DevIQLogo';
import { LanguageToggle } from '../common/LanguageToggle';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 sm:px-6 py-2.5'
            : 'bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-xs px-4 sm:px-6 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-lg group"
            aria-label="DevIQ Home"
          >
            <DevIQLogo size="md" showTagline={false} />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100/70 border border-slate-200/60 backdrop-blur-xs">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-slate-950 bg-white shadow-xs font-bold border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area: Language Switcher + Request Project CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />

            <Button
              to="/contact"
              size="sm"
              variant="primary"
              rightIcon={<ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
            >
              {t.nav.requestProject}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle variant="compact" />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-slate-950 bg-slate-100/80 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-2xs"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-indigo-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 border border-slate-200/90 shadow-2xl rounded-2xl backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200 p-5 z-40">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-indigo-950 bg-indigo-50/70 border border-indigo-200/80 font-bold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Button
              to="/contact"
              size="md"
              variant="primary"
              fullWidth
              onClick={() => setIsMobileMenuOpen(false)}
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              {t.nav.requestProject}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
