import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faqData';

export const FaqPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIds, setOpenIds] = useState<string[]>(['workflow-timeline', 'pricing-estimation']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.faq.badge}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#fdfcf9] border border-amber-950/10 overflow-hidden transition-all duration-200 hover:border-amber-950/20 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-amber-50/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                    {item.question[language]}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-amber-50/70 text-slate-700 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-800 bg-teal-50' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-800 leading-relaxed border-t border-slate-200/60 bg-[#f9f7f2]/80 font-medium">
                    <p>{item.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#faf8f4] via-white to-teal-50/40 border border-teal-200/70 text-center flex flex-col items-center shadow-sm">
          <div className="p-3 rounded-2xl bg-teal-50 text-teal-800 mb-3 border border-teal-200 shadow-2xs">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2">
            {t.faq.stillHaveQuestions}
          </h3>

          <p className="text-xs sm:text-sm text-slate-800 max-w-md mb-6 font-medium">
            {language === 'ar'
              ? 'فريقنا مستعد دائماً للإجابة على جميع استفساراتكم التقنية والتنظيمية.'
              : 'Our engineering team is always available to clarify any technical or operational questions.'}
          </p>

          <Button
            to="/contact"
            size="md"
            variant="primary"
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            {t.faq.contactUsButton}
          </Button>
        </div>
      </div>
    </div>
  );
};
