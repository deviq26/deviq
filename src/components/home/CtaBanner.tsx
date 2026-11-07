import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CtaBanner: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <section className="py-16 sm:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 md:p-16 bg-gradient-to-br from-slate-950 via-slate-900 to-[#080d1a] border border-slate-800 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] text-center text-white">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 start-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 end-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Live Status Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-semibold shadow-xs mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {language === 'ar' ? 'فريق DevIQ الهندسي متاح الآن لاستقبال طلباتكم' : 'DevIQ Engineering is Ready for New Scopes'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {t.ctaBanner.headline}
            </h2>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              {t.ctaBanner.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                variant="primary"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                rightIcon={<ArrowUpRight className={`w-5 h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
                className="bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
              >
                {t.ctaBanner.button}
              </Button>

              <Button
                to="/services"
                size="lg"
                variant="secondary"
                className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700"
              >
                {t.nav.services}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
