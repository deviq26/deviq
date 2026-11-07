import React from 'react';
import { ArrowUpRight, Code2, ShieldCheck, CheckCircle2, Zap, Lock } from 'lucide-react';
import { Button } from '../common/Button';
import { HeroVisualShowcase } from './HeroVisualShowcase';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <section className="relative pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Text Content Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-start z-10">
            {/* High-Tech Pill Beacon Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 text-slate-800 text-xs font-semibold shadow-2xs mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-indigo-700 font-bold">DevIQ Enterprise</span>
              <span className="text-slate-400">•</span>
              <span>
                {language === 'ar' ? 'حلول برمجية وذكاء اصطناعي متطورة' : 'Advanced Software & AI Engineering'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.18] sm:leading-[1.15]">
              {isRtl ? (
                <>
                  نحوّل أفكارك إلى{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
                    أنظمة برمجية وحلول ذكاء اصطناعي
                  </span>{' '}
                  تصنع الفارق
                </>
              ) : (
                <>
                  Transforming Ideas into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
                    High-Impact Software & Enterprise AI
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Subtext */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal max-w-2xl">
              {t.hero.supportingText}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                to="/contact"
                size="lg"
                variant="primary"
                rightIcon={<ArrowUpRight className={`w-5 h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
                className="w-full sm:w-auto shadow-md shadow-indigo-900/10"
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                to="/portfolio"
                size="lg"
                variant="secondary"
                leftIcon={<Code2 className="w-4 h-4 text-indigo-700" />}
                className="w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Value Indicators Ticker */}
            <div className="mt-10 pt-6 border-t border-slate-200/90 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900">
                  {language === 'ar' ? 'كود معياري 100%' : '100% Clean Code'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900">
                  {language === 'ar' ? 'استقرار 99.98%' : '99.98% High Uptime'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900">
                  {language === 'ar' ? 'استجابة فائقة السرعة' : '< 50ms Edge Latency'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="text-xs font-bold text-slate-900">
                  {language === 'ar' ? 'اتفاقيات سرية NDA' : 'Strict NDA & Security'}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Showcase: 5 cols */}
          <div className="lg:col-span-5 flex items-center justify-center w-full z-10">
            <HeroVisualShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};
