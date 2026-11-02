import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Send, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { DevIQLogo } from '../common/DevIQLogo';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_CONFIG } from '../../config/contact';
import { servicesData } from '../../data/servicesData';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/services', label: t.nav.services },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/about', label: t.nav.about },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-[#f1efe9] border-t border-slate-300/80 pt-16 pb-10 overflow-hidden">
      {/* Background subtle light glow */}
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-96 h-24 bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-300/70">
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-4">
              <DevIQLogo size="lg" showTagline={true} />
            </Link>

            <p className="text-sm text-slate-800 leading-relaxed max-w-sm mt-2 font-medium">
              {t.footer.brandDesc}
            </p>

            {/* Direct Contact Highlights */}
            <div className="mt-5 flex flex-col gap-2 text-xs text-slate-800">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="font-mono text-slate-950 font-bold">{CONTACT_CONFIG.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-700 shrink-0" />
                <span className="font-semibold">{CONTACT_CONFIG.location[language]}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {CONTACT_CONFIG.socialLinks.github && (
                <a
                  href={CONTACT_CONFIG.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-teal-800 hover:border-teal-500 shadow-xs transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {CONTACT_CONFIG.socialLinks.linkedin && (
                <a
                  href={CONTACT_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-teal-800 hover:border-teal-500 shadow-xs transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {CONTACT_CONFIG.socialLinks.x && (
                <a
                  href={CONTACT_CONFIG.socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-teal-800 hover:border-teal-500 shadow-xs transition-colors"
                  aria-label="X / Twitter"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {CONTACT_CONFIG.socialLinks.telegram && (
                <a
                  href={CONTACT_CONFIG.socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-teal-800 hover:border-teal-500 shadow-xs transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-800 hover:text-teal-800 font-semibold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/admin"
                  className="text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5 text-xs pt-1 font-semibold"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                  <span>{t.nav.adminNote}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider mb-4">
              {t.footer.servicesLinks}
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-slate-800 hover:text-teal-800 font-semibold transition-colors"
                  >
                    {service.title[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Return to top & Action (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <div>
              <h4 className="text-sm font-extrabold text-slate-950 uppercase tracking-wider mb-2">
                DevIQ
              </h4>
              <p className="text-xs text-slate-700 font-medium">
                {t.brand.tagline}
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 hover:text-teal-800 hover:border-teal-500 shadow-xs transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-teal-700" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 font-medium">
          <p>
            &copy; {currentYear} DevIQ. {t.footer.rightsReserved}
          </p>

          <p className="flex items-center gap-1 font-mono text-slate-700">
            <span>{t.footer.builtWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
