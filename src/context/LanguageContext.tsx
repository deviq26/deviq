import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';
import { LanguageContext, type LanguageContextType } from './LanguageContextValue';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('deviq_language');
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'ar'; // Arabic is primary
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('deviq_language', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update document title dynamically
    if (language === 'ar') {
      document.title = 'DevIQ | ابنِ. برمج. ابتكر. — تطوير البرمجيات والذكاء الاصطناعي';
    } else {
      document.title = 'DevIQ | Build. Code. Innovate. — Software Development & AI';
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isRtl: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { useLanguage } from './useLanguage';
export type { LanguageContextType };
export default LanguageProvider;
