import React from 'react';
import { MessageSquare, LayoutTemplate, Code2, Rocket } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const WorkflowSteps: React.FC = () => {
  const { t, language } = useLanguage();

  const deliverables = [
    language === 'ar' ? 'وثيقة المتطلبات (SRS) والمخطط الزمني' : 'SRS Spec & Roadmap',
    language === 'ar' ? 'نماذج UI/UX التفاعلية ومعمارية النظام' : 'Interactive UI/UX & System Design',
    language === 'ar' ? 'كود إنتاجي نظيف مع اختبارات شاملة' : 'Production Code & Automated Tests',
    language === 'ar' ? 'نشر سحابي وتدريب ودعم فني مستمر' : 'Cloud Deployment & Ongoing SLA',
  ];

  const renderStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Code2 className="w-5 h-5 text-purple-600" />;
      case 3:
      default:
        return <Rocket className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.workflow.sectionBadge}
          title={t.workflow.sectionTitle}
          subtitle={t.workflow.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.workflow.steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08)] transition-all duration-300 group shadow-xs hover:-translate-y-1"
            >
              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-indigo-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform">
                    {renderStepIcon(index)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-950 mb-2.5 group-hover:text-indigo-700 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono">Output:</span>
                <span className="font-semibold text-slate-800 text-end">
                  {deliverables[index]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
