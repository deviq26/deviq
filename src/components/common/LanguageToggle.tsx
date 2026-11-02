import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  variant?: 'pill' | 'compact';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  variant = 'pill',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-cyan-500/50 shadow-xs transition-all text-xs font-semibold ${className}`}
        title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
        aria-label={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
      >
        <Languages className="w-3.5 h-3.5 text-cyan-600" />
        <span>{language === 'ar' ? 'English' : 'العربية'}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-sm text-xs font-medium shadow-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-semibold ${
          language === 'ar'
            ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-800 border border-cyan-500/30 shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'ar'}
      >
        <span>العربية</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 font-semibold ${
          language === 'en'
            ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/15 text-cyan-800 border border-cyan-500/30 shadow-xs'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-pressed={language === 'en'}
      >
        <span>English</span>
      </button>
    </div>
  );
};
