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
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f7f6f2]/92 backdrop-blur-md border-b border-[#e5e3dc] shadow-2xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-lg"
            aria-label="DevIQ Home"
          >
            <DevIQLogo size="md" showTagline={false} />
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-2xl bg-white border border-[#e5e3dc] shadow-2xs backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-teal-950 bg-[#eef6f5] border border-teal-300 shadow-2xs'
                      : 'text-slate-800 hover:text-slate-950 hover:bg-[#f5f3ec]'
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
              rightIcon={<ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
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
              className="p-2 rounded-xl text-slate-800 hover:text-slate-950 bg-white border border-[#e5e3dc] focus:outline-none focus:ring-2 focus:ring-teal-700 shadow-2xs"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-teal-700" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#f7f6f2]/98 border-b border-[#e5e3dc] shadow-xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 p-5 z-40 max-h-[calc(100vh-70px)] overflow-y-auto">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? 'text-teal-950 bg-[#eef6f5] border border-teal-300'
                      : 'text-slate-800 hover:text-slate-950 hover:bg-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-[#e5e3dc] flex flex-col gap-3">
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
