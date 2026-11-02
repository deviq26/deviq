import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Laptop, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { servicesData } from '../../data/servicesData';

export const ServicesPreview: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-teal-700" />,
    Smartphone: <Smartphone className="w-6 h-6 text-blue-700" />,
    Laptop: <Laptop className="w-6 h-6 text-indigo-700" />,
    Cpu: <Cpu className="w-6 h-6 text-purple-700" />,
  };

  const gradientBorders: Record<string, string> = {
    'web-development': 'hover:border-teal-300 hover:shadow-teal-900/5',
    'mobile-applications': 'hover:border-blue-300 hover:shadow-blue-900/5',
    'desktop-software': 'hover:border-indigo-300 hover:shadow-indigo-900/5',
    'artificial-intelligence': 'hover:border-purple-300 hover:shadow-purple-900/5',
  };

  const iconBgMap: Record<string, string> = {
    'web-development': 'bg-teal-50 border-teal-200',
    'mobile-applications': 'bg-blue-50 border-blue-200',
    'desktop-software': 'bg-indigo-50 border-indigo-200',
    'artificial-intelligence': 'bg-purple-50 border-purple-200',
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.sectionBadge}
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/95 border border-[#e5e3dc] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl ${gradientBorders[service.id]}`}
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-3 rounded-xl border ${iconBgMap[service.id]} transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                  >
                    {iconMap[service.iconName]}
                  </div>

                  <span className="text-xs font-mono text-slate-500 group-hover:text-teal-700 font-bold transition-colors">
                    DevIQ.0{servicesData.indexOf(service) + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-black text-slate-950 mb-2 group-hover:text-teal-800 transition-colors">
                  {service.title[language]}
                </h3>

                {/* Short Description (Darkened) */}
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-5 font-normal">
                  {service.shortDescription[language]}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#f0ede6]">
                  {service.bulletPoints[language].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-900 font-medium">
                      <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Dedicated Page */}
              <div className="pt-4 border-t border-[#f0ede6]">
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors group-hover:gap-2"
                >
                  <span>{t.services.viewDetails}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
