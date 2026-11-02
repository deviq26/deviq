import React from 'react';
import { ShieldAlert, Server, ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { useLanguage } from '../context/LanguageContext';

export const AdminNoticePage: React.FC = () => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.adminNotice.badge}
          title={t.adminNotice.title}
          subtitle={t.adminNotice.statusDisabled}
        />

        {/* Security Alert Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/90 border border-amber-200/90 shadow-sm mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-100/90 text-amber-800 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-amber-950">
                  {language === 'ar' ? 'تنبيه أمان ومعايير هندسية' : 'Engineering & Security Advisory'}
                </h3>
                <Badge variant="amber" size="sm">
                  Security Guard
                </Badge>
              </div>

              <p className="text-sm text-amber-950 leading-relaxed font-medium">
                {t.adminNotice.securityExplanation}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Checklist Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#fdfcf9] border border-amber-950/10 shadow-sm">
          <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-teal-700" />
            <span>{t.adminNotice.howToEnableTitle}</span>
          </h4>

          <ul className="space-y-4">
            {t.adminNotice.steps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 font-semibold"
              >
                <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-900 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                  0{idx + 1}
                </div>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>

          {/* Code Specimen */}
          <div dir="ltr" className="mt-6 p-4 rounded-xl bg-[#090d16] border border-slate-800 font-mono text-xs text-slate-400 overflow-x-auto text-left shadow-md">
            <div className="text-slate-500 mb-1">// server.config.ts (Recommended Backend Architecture)</div>
            <pre className="text-cyan-300">
{`// Recommended stack for DevIQ production admin backend:
// - Runtime: Node.js 20+ / Python 3.12+ (FastAPI)
// - Authentication: OAuth 2.0 / Argon2 password hashing + JWT HttpOnly cookies
// - Storage: PostgreSQL with Prisma / SQLAlchemy ORM
// - Firewall: Helmet, Rate-Limit (100 req/15min), CORS restricted to https://deviq.dev`}
            </pre>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button
            to="/"
            size="md"
            variant="secondary"
            leftIcon={isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          >
            {t.adminNotice.backHome}
          </Button>
        </div>
      </div>
    </div>
  );
};
