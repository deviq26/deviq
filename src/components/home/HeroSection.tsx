import React from 'react';
import { ArrowUpRight, Code, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { HeroVisualShowcase } from './HeroVisualShowcase';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col items-start text-start z-10">
            {/* Pill Badge */}
            <div className="mb-5">
              <Badge variant="cyan" dot size="md">
                {t.hero.badge}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.2] sm:leading-[1.18]">
              {isRtl ? (
                <>
                  نحوّل أفكارك إلى{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-indigo-700 to-purple-700">
                    حلول رقمية مبتكرة
                  </span>
                </>
              ) : (
                <>
                  Transforming Your Ideas into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-indigo-700 to-purple-700">
                    Innovative Digital Solutions
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Subtext (Darkened for eye comfort & crisp readability) */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed font-medium max-w-2xl">
              {t.hero.supportingText}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                to="/contact"
                size="lg"
                variant="primary"
                rightIcon={<ArrowUpRight className={`w-5 h-5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
                className="w-full sm:w-auto"
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                to="/portfolio"
                size="lg"
                variant="secondary"
                leftIcon={<Code className="w-4 h-4 text-teal-700" />}
                className="w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Value Indicators */}
            <div className="mt-10 pt-6 border-t border-[#e2e0d8] w-full grid grid-cols-3 gap-3 text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {t.hero.metrics.cleanCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {t.hero.metrics.delivery}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  {t.hero.metrics.satisfaction}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Workspace / Animated Figure Visual Column: 5 cols */}
          <div className="lg:col-span-5 flex items-center justify-center w-full z-10">
            <HeroVisualShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};
