import React from 'react';
import { MessageSquare, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { InquiryForm } from '../components/contact/InquiryForm';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CONFIG } from '../config/contact';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Inquiry Form Column: 7 cols */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>

          {/* Direct Channels & Contact Info Column: 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#fdfcf9] border border-amber-950/10 shadow-md">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                {t.contact.directChannelsTitle}
              </h3>
              <p className="text-xs text-slate-800 mb-6 leading-relaxed font-medium">
                {t.contact.directChannelsSubtitle}
              </p>

              <div className="space-y-4">
                {/* WhatsApp Channel */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group shadow-2xs"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 group-hover:scale-105 transition-transform shadow-2xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-700 font-semibold">
                      {language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Direct'}
                    </div>
                    <div className="text-sm font-bold text-slate-950 font-mono mt-0.5">
                      {CONTACT_CONFIG.whatsappDisplay[language]}
                    </div>
                  </div>
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${CONTACT_CONFIG.contactEmail}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-teal-500 hover:bg-teal-50/40 transition-all group shadow-2xs"
                >
                  <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 group-hover:scale-105 transition-transform shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-700 font-semibold">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Official Email'}
                    </div>
                    <div className="text-sm font-bold text-slate-950 font-mono mt-0.5">
                      {CONTACT_CONFIG.contactEmail}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/70 border border-slate-200">
                  <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-700 font-semibold">
                      {language === 'ar' ? 'نطاق العمل' : 'Service Reach'}
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      {CONTACT_CONFIG.location[language]}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Guarantee Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50/90 via-[#fbf9f4] to-amber-50/70 border border-teal-200/80 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 text-teal-950 font-bold">
                <Clock className="w-4 h-4 text-teal-800" />
                <span className="text-xs uppercase tracking-wider font-mono">
                  {t.contact.responseBadge}
                </span>
              </div>

              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {language === 'ar'
                  ? 'يقوم فريق DevIQ بمراجعة كل طلب بدقة هندسية وتقديم تقدير تقني أولي ومقترحات الحلول خلال ساعات العمل.'
                  : 'The DevIQ engineering team reviews every request with technical rigor, delivering initial scoping and architecture advice promptly.'}
              </p>

              <div className="mt-4 pt-4 border-t border-teal-200/60 flex items-center gap-2 text-xs text-slate-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{language === 'ar' ? 'حماية تامة لسرية الأفكار والبيانات' : 'Non-Disclosure & Data Confidentiality'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
