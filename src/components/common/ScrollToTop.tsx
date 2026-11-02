import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

export const FloatingScrollTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={language === 'ar' ? 'العودة إلى أعلى الصفحة' : 'Scroll to top'}
      title={language === 'ar' ? 'العودة إلى أعلى الصفحة' : 'Scroll to top'}
      className="fixed bottom-6 end-6 z-40 p-3 rounded-xl bg-white/95 text-cyan-700 border border-slate-200 shadow-xl shadow-slate-300/40 hover:bg-slate-50 hover:text-cyan-800 hover:border-cyan-400 hover:scale-105 active:scale-95 transition-all backdrop-blur-md cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
