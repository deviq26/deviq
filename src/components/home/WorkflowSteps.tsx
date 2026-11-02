import React from 'react';
import { MessageSquare, LayoutTemplate, Code2, Rocket } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

export const WorkflowSteps: React.FC = () => {
  const { t } = useLanguage();

  const renderStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-teal-700" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-blue-700" />;
      case 2:
        return <Code2 className="w-5 h-5 text-indigo-700" />;
      case 3:
      default:
        return <Rocket className="w-5 h-5 text-purple-700" />;
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
              className="relative flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-[#e5e3dc] hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 transition-all duration-300 group shadow-2xs"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-teal-700 transition-colors">
                  {step.number}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                  {renderStepIcon(index)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-black text-slate-950 mb-2.5 group-hover:text-teal-800 transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
