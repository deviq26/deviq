import React from 'react';
import { Globe, Smartphone, Laptop, Cpu, CheckCircle2, UserCheck, Code2, ArrowUpRight, Workflow } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import type { ServiceItem } from '../../types';

interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service, index }) => {
  const { t, language, isRtl } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-8 h-8 text-teal-700" />,
    Smartphone: <Smartphone className="w-8 h-8 text-blue-700" />,
    Laptop: <Laptop className="w-8 h-8 text-indigo-700" />,
    Cpu: <Cpu className="w-8 h-8 text-purple-700" />,
  };

  return (
    <div
      id={service.id}
      className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#e5e3dc] shadow-xs hover:shadow-lg transition-all relative overflow-hidden scroll-mt-28"
    >
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e5e3dc]">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc] shadow-2xs">
            {iconMap[service.iconName]}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-teal-800">
                SERVICE 0{index + 1}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950">
              {service.title[language]}
            </h3>
          </div>
        </div>

        <Button
          to={`/contact?service=${service.id}`}
          size="md"
          variant="primary"
          rightIcon={<ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
        >
          {t.services.requestService}
        </Button>
      </div>

      {/* Full Description */}
      <div className="py-6">
        <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-4xl font-normal">
          {service.fullDescription[language]}
        </p>
      </div>

      {/* Grid: Suitable For & Key Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 pb-6">
        {/* Suitable For */}
        <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc]">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono mb-4 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-teal-700" />
            <span>{t.services.suitableForTitle}</span>
          </h4>
          <ul className="space-y-2.5">
            {service.suitableFor[language].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Available Features */}
        <div className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc]">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-700" />
            <span>{language === 'ar' ? 'المزايا والخصائص المتاحة:' : 'Available Capabilities:'}</span>
          </h4>
          <ul className="space-y-2.5">
            {service.bulletPoints[language].map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="py-4 border-t border-[#e5e3dc]">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono mb-3 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-purple-700" />
          <span>{t.services.technologiesTitle}</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <Badge key={tech} variant="slate" size="md">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Development Process Steps */}
      <div className="pt-6 border-t border-[#e5e3dc]">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono mb-4 flex items-center gap-2">
          <Workflow className="w-4 h-4 text-emerald-700" />
          <span>{t.services.processTitle}</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.processSteps[language].map((step, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#e5e3dc] shadow-2xs"
            >
              <div className="text-[11px] font-mono text-teal-800 font-black mb-1">
                STEP 0{idx + 1}
              </div>
              <div className="text-xs font-black text-slate-950 mb-1">{step.title}</div>
              <div className="text-[11px] text-slate-700 leading-relaxed font-medium">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
