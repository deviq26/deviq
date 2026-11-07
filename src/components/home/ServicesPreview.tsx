import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Laptop, Cpu, ArrowUpRight, Check, Layers, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { servicesData } from '../../data/servicesData';

export const ServicesPreview: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const getColSpan = (id: string) => {
    switch (id) {
      case 'web-development':
        return 'lg:col-span-7';
      case 'artificial-intelligence':
        return 'lg:col-span-5';
      case 'mobile-applications':
        return 'lg:col-span-6';
      case 'desktop-software':
        return 'lg:col-span-6';
      default:
        return 'lg:col-span-6';
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-development':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'mobile-applications':
        return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case 'desktop-software':
        return <Laptop className="w-6 h-6 text-purple-600" />;
      case 'artificial-intelligence':
      default:
        return <Cpu className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.sectionBadge}
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
        />

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {servicesData.map((service, index) => {
            const colSpan = getColSpan(service.id);
            const isFeatured = service.id === 'web-development' || service.id === 'artificial-intelligence';

            return (
              <div
                key={service.id}
                className={`${colSpan} group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] hover:border-indigo-400/80 hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 overflow-hidden`}
              >
                {/* Background Subtle Gradient Glow */}
                <div className="absolute top-0 end-0 w-64 h-64 bg-gradient-to-bl from-slate-100/80 via-transparent to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10">
                  {/* Top Bar: Icon + Service Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs group-hover:scale-105 transition-transform">
                      {getIcon(service.id)}
                    </div>

                    <div className="flex items-center gap-2">
                      {isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold">
                          <Sparkles className="w-3 h-3 text-indigo-500" />
                          <span>Enterprise</span>
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-indigo-700 transition-colors">
                    {service.title[language]}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                    {service.shortDescription[language]}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-5 border-t border-slate-100">
                    {service.bulletPoints[language].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-6">
                    <span className="text-[11px] text-slate-400 font-mono me-1 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      Stack:
                    </span>
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-950 transition-colors group-hover:gap-2"
                  >
                    <span>{t.services.viewDetails}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-400">
                    SLA Guarantee
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
