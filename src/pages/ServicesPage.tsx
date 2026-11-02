import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionHeader } from '../components/common/SectionHeader';
import { ServiceDetailCard } from '../components/services/ServiceDetailCard';
import { CtaBanner } from '../components/home/CtaBanner';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';

export const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.services.sectionBadge}
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
        />

        <div className="flex flex-col gap-10 sm:gap-14">
          {servicesData.map((service, index) => (
            <ServiceDetailCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <div className="mt-12 sm:mt-16">
        <CtaBanner />
      </div>
    </div>
  );
};
