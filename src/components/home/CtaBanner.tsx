import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';

export const CtaBanner: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <section className="py-16 sm:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-14 bg-gradient-to-br from-amber-50/90 via-[#f9f7f2] to-teal-50/70 border border-amber-200/70 shadow-lg shadow-indigo-950/5 text-center">
          {/* Gentle pastel ambient orbs */}
          <div className="absolute -top-24 -start-24 w-72 h-72 rounded-full bg-rose-200/35 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 rounded-full bg-teal-200/35 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Soft decorative mascot chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-amber-200/80 text-teal-950 text-xs font-semibold shadow-xs mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {language === 'ar' ? 'فريق DevIQ جاهز لمساعدتك' : 'DevIQ Team is Ready to Assist'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {t.ctaBanner.headline}
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-800 leading-relaxed font-medium max-w-xl">
              {t.ctaBanner.text}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                variant="primary"
                leftIcon={<MessageCircle className="w-5 h-5" />}
                rightIcon={<ArrowUpRight className={`w-5 h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
              >
                {t.ctaBanner.button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
