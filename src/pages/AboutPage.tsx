import React from 'react';
import { ShieldCheck, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Badge } from '../components/common/Badge';
import { CtaBanner } from '../components/home/CtaBanner';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  const renderValueIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-6 h-6 text-cyan-600" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 2:
      default:
        return <Cpu className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        {/* Mission & Brand Philosophy Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-md mb-12 sm:mb-16 overflow-hidden">
          <div className="absolute top-0 end-0 w-80 h-80 bg-indigo-100/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <Badge variant="cyan" dot size="sm" className="mb-3">
              {t.about.missionTitle}
            </Badge>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-950 mb-4 leading-snug">
              {t.about.missionDesc}
            </h3>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {t.brand.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100">
            {t.about.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-black font-mono text-indigo-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-800 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-950 mb-2">
              {t.about.valuesTitle}
            </h3>
            <p className="text-sm text-slate-700 font-medium">
              {language === 'ar'
                ? 'معايير ثابتة نوظفها في كل سطر برمجي نكتبه وفي كل نظام نبنيه.'
                : 'Core pillars we apply to every line of code we craft and system we build.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 w-fit mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                  {renderValueIcon(idx)}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-2.5 group-hover:text-indigo-700 transition-colors">
                  {val.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Standards */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                {language === 'ar' ? 'التزامنا بالجودة والاحترافية' : 'Our Quality & Engineering Standards'}
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed mb-6 font-medium">
                {language === 'ar'
                  ? 'نؤمن أن البرمجيات الممتازة لا تنتهي عند كتابة الكود، بل في بناء منتج مستقر وسهل الصيانة يحقق أهداف أعمالك بثقة وأمان.'
                  : 'We believe exceptional software extends beyond shipping features—it is about creating resilient, maintainable digital assets that drive business success safely.'}
              </p>

              <div className="space-y-3">
                {[
                  language === 'ar' ? 'معمارية معيارية قابلة للترقية وإضافة المزايا' : 'Modular architecture ready for seamless scaling',
                  language === 'ar' ? 'فصل تام بين طبقات العرض وقواعد البيانات' : 'Strict separation of concerns across presentation and data tiers',
                  language === 'ar' ? 'توثيق شامل لتسهيل إدارة الفريق لكود المشروع' : 'Comprehensive codebase documentation for smooth team handover',
                  language === 'ar' ? 'اختبارات صارمة لسلامة النماذج والواجهات' : 'Rigorous test suites for model integrity and UI stability',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div dir="ltr" className="p-6 rounded-2xl bg-[#0b101d] border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed shadow-lg">
              <div className="text-slate-500 mb-2">// deviq.manifest.json</div>
              <pre className="text-cyan-300 overflow-x-auto text-left">
{`{
  "brand": "DevIQ",
  "vision": "High-Impact Software & AI",
  "bilingualSupport": "RTL & LTR Native",
  "codeStandards": "Strict TypeScript & Clean Architecture",
  "securityAudit": "Enabled",
  "performance": "Sub-second Target"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <CtaBanner />
      </div>
    </div>
  );
};
