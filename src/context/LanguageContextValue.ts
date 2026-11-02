import { createContext } from 'react';
import type { Language } from '../types';
import { translations } from '../i18n/translations';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.ar;
  isRtl: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
