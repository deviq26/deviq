import React from 'react';
import { Target, Palette, GitBranch, ShieldCheck, Clock, LifeBuoy } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const renderIcon = (index: number) => {
    switch (index % 6) {
      case 0:
        return <Target className="w-5 h-5 text-teal-700" />;
      case 1:
        return <Palette className="w-5 h-5 text-blue-700" />;
      case 2:
        return <GitBranch className="w-5 h-5 text-indigo-700" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-purple-700" />;
      case 4:
        return <Clock className="w-5 h-5 text-pink-700" />;
      case 5:
      default:
        return <LifeBuoy className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 relative z-10 bg-[#f1efe9]/70 border-y border-[#e5e2da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.whyUs.sectionBadge}
          title={t.whyUs.sectionTitle}
          subtitle={t.whyUs.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.points.map((point, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e5e3dc] hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-200 group shadow-2xs"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform shadow-2xs">
                  {renderIcon(index)}
                </div>
                <h3 className="text-base font-black text-slate-950 group-hover:text-teal-800 transition-colors">
                  {point.title}
                </h3>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
