import React, { useState } from 'react';
import { 
  Calculator, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Smartphone, 
  Laptop,
  ArrowRight
} from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_CONFIG } from '../../config/contact';

export const ProjectScopePlanner: React.FC = () => {
  const { language, isRtl } = useLanguage();

  const [selectedPlatform, setSelectedPlatform] = useState<'web' | 'mobile' | 'desktop' | 'ai'>('web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'admin-panel',
    'security'
  ]);
  const [timeline, setTimeline] = useState<'fast' | 'standard' | 'enterprise'>('standard');

  const platforms = [
    { id: 'web' as const, label: language === 'ar' ? 'منصة / موقع ويب' : 'Web & SaaS Platform', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile' as const, label: language === 'ar' ? 'تطبيق موبايل (iOS / Android)' : 'Mobile App (Flutter)', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'desktop' as const, label: language === 'ar' ? 'برنامج حاسوب مخصص' : 'Desktop Software', icon: <Laptop className="w-4 h-4" /> },
    { id: 'ai' as const, label: language === 'ar' ? 'حلول ونماذج ذكاء اصطناعي' : 'Enterprise AI & Copilot', icon: <Cpu className="w-4 h-4" /> },
  ];

  const features = [
    { id: 'admin-panel', label: language === 'ar' ? 'لوحة تحكم وإدارة بيانات (Admin)' : 'Admin Portal & Data Ops' },
    { id: 'payment', label: language === 'ar' ? 'بوابة دفع إلكتروني وفواتير' : 'Payment Gateway & Checkout' },
    { id: 'ai-integration', label: language === 'ar' ? 'دمج نماذج ذكاء اصطناعي وRAG' : 'LLM Orchestration & Embeddings' },
    { id: 'security', label: language === 'ar' ? 'أمان وتشفير متقدم (RBAC + 2FA)' : 'Advanced RBAC & Data Encryption' },
    { id: 'offline-sync', label: language === 'ar' ? 'مزامنة محلية دون اتصال (Offline)' : 'Offline-First DB Sync' },
    { id: 'multilingual', label: language === 'ar' ? 'دعم كامل للغتين (RTL / LTR)' : 'Full Bilingual (RTL & LTR)' },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const getEstimatedStack = () => {
    switch (selectedPlatform) {
      case 'web':
        return ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / Prisma'];
      case 'mobile':
        return ['Flutter', 'Dart', 'Firebase / Supabase', 'SQLite Local'];
      case 'desktop':
        return ['Electron / Tauri', 'TypeScript', 'Local Database', 'C++ / Rust Addons'];
      case 'ai':
        return ['Python / FastAPI', 'PyTorch / LangChain', 'Vector DB', 'OpenAI / Gemini SDK'];
    }
  };

  const getEstimatedDuration = () => {
    switch (timeline) {
      case 'fast':
        return language === 'ar' ? '2 - 3 أسابيع (مسار سريع)' : '2 - 3 Weeks (Fast-Track)';
      case 'standard':
        return language === 'ar' ? '4 - 6 أسابيع (مسار قياسي)' : '4 - 6 Weeks (Standard Sprint)';
      case 'enterprise':
        return language === 'ar' ? '8 - 12 أسبوعاً (أنظمة متكاملة)' : '8 - 12 Weeks (Enterprise Scale)';
    }
  };

  // Generate WhatsApp message with prefilled specifications
  const handleInquireViaWhatsApp = () => {
    const platformLabel = platforms.find(p => p.id === selectedPlatform)?.label || selectedPlatform;
    const featuresList = selectedFeatures
      .map(id => features.find(f => f.id === id)?.label)
      .filter(Boolean)
      .join(', ');
    const duration = getEstimatedDuration();

    const textAr = `مرحباً فريق DevIQ، أود الاستفسار عن تنفيذ مشروع بالمواصفات التالية:
• المنصة: ${platformLabel}
• المزايا المطلوبة: ${featuresList || 'مزايا أساسية'}
• الجدول الزمني المستهدف: ${duration}
أرجو تزويدي بالتقدير التقني ومقترح الحلول.`;

    const textEn = `Hello DevIQ team, I'd like an architectural quote for the following project:
• Platform: ${platformLabel}
• Modules: ${featuresList || 'Core MVP'}
• Timeline: ${duration}
Looking forward to your technical scoping.`;

    const message = language === 'ar' ? textAr : textEn;
    const phone = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 relative z-10 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3 shadow-2xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'حاسبة ومخطط نطاق المشروع' : 'Interactive Project Scope Planner'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-3">
            {language === 'ar' ? 'خطط متطلبات مشروعك بدقة هندسية' : 'Architect & Scope Your Project in Seconds'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {language === 'ar'
              ? 'حدد المنصة والمزايا المطلوبة، وسنجهز لك المواصفات التقنية المقترحة والجدول الزمني التقديري فوراً.'
              : 'Select your target platform and core modules to generate an architecture stack and sprint roadmap.'}
          </p>
        </div>

        {/* Planner Workspace Bento Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Choose Platform */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <label className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider block mb-3">
                {language === 'ar' ? '1. اختر نوع المنصة أو النظام' : '1. Select Platform & Target Environment'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {platforms.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPlatform(p.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      selectedPlatform === p.id
                        ? 'bg-indigo-50/80 border-indigo-500 text-indigo-950 shadow-2xs'
                        : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className={selectedPlatform === p.id ? 'text-indigo-600' : 'text-slate-500'}>
                      {p.icon}
                    </span>
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Key Modules & Features */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <label className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider block mb-3">
                {language === 'ar' ? '2. المزايا والقدرات المطلوبة' : '2. Key Functional Capabilities'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {features.map(f => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs font-medium text-start transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-slate-900 border-slate-900 text-white shadow-2xs font-bold'
                          : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isChecked ? 'text-emerald-400' : 'text-slate-400'}`} />
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Target Timeline */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <label className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider block mb-3">
                {language === 'ar' ? '3. الجدول الزمني المستهدف' : '3. Deployment Sprint Pace'}
              </label>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'fast' as const, label: language === 'ar' ? 'سريع (2-3 أسابيع)' : 'Fast (2-3 w)' },
                  { id: 'standard' as const, label: language === 'ar' ? 'قياسي (4-6 أسابيع)' : 'Standard (4-6 w)' },
                  { id: 'enterprise' as const, label: language === 'ar' ? 'مؤسسي (8-12 أسبوع)' : 'Enterprise (8-12 w)' },
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTimeline(item.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                      timeline === item.id
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-950 shadow-2xs'
                        : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Architecture Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 end-0 w-48 h-48 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    DevIQ Specification
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-mono font-bold">
                    Scoping Live
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-950 mb-1">
                  {platforms.find(p => p.id === selectedPlatform)?.label}
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  {selectedFeatures.length} {language === 'ar' ? 'مزايا معمارية محددة' : 'architectural modules selected'}
                </p>

                {/* Estimated Delivery Sprint */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">
                      {language === 'ar' ? 'الجدول الزمني التقديري' : 'Estimated Sprint'}
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-indigo-700">
                    {getEstimatedDuration()}
                  </span>
                </div>

                {/* Recommended Tech Stack */}
                <div className="mb-6">
                  <label className="text-[11px] font-bold font-mono text-slate-500 uppercase tracking-wider block mb-2 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    {language === 'ar' ? 'البنية التقنية المقترحة:' : 'Recommended Tech Stack:'}
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {getEstimatedStack().map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{language === 'ar' ? 'كود مصمم ومبرمج حسب الطلب 100%' : '100% Bespoke Code Architecture'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{language === 'ar' ? 'تسليم مرحلي مع اختبارات جودة شاملة' : 'Milestone-Based QA Testing Included'}</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="flex flex-col gap-2.5">
                  <Button
                    size="md"
                    variant="primary"
                    fullWidth
                    onClick={handleInquireViaWhatsApp}
                    leftIcon={<Send className="w-4 h-4" />}
                    rightIcon={<ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />}
                  >
                    {language === 'ar' ? 'طلب مناقشة هذا النطاق عبر واتساب' : 'Inquire This Scope via WhatsApp'}
                  </Button>

                  <Button
                    to="/contact"
                    size="sm"
                    variant="secondary"
                    fullWidth
                  >
                    {language === 'ar' ? 'تخصيص عبر نموذج التواصل الرسمي' : 'Refine via Contact Form'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
