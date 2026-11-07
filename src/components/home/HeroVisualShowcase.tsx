import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap, 
  Database,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const HeroVisualShowcase: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'ai' | 'code' | 'telemetry'>('ai');
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const [isRunningInference, setIsRunningInference] = useState<boolean>(false);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const prompts = [
    {
      label: language === 'ar' ? 'روبوت دعم ذكي' : 'Support Copilot',
      prompt: language === 'ar' ? 'تحليل استفسار العميل وصياغة الرد الهندسي المناسب' : 'Analyze customer ticket and synthesize solution',
      output: language === 'ar' 
        ? 'تم تحديد نمط الاستفسار بدقة (99.4%). تم إنشاء مسار عمل آلي، وتحديث تذكرة الدعم، وإرسال الرد خلال 18ms.'
        : 'Intent resolved with 99.4% confidence. Pipeline triggered, ticket updated, response sent in 18ms.',
      tags: ['LLM Orchestration', 'RAG Engine', 'JSON Schema'],
      tokens: '182 t/s',
      latency: '18ms',
    },
    {
      label: language === 'ar' ? 'تحليل تنبؤي' : 'Predictive AI',
      prompt: language === 'ar' ? 'استخراج مؤشرات نمو المبيعات وتحليل سلوك العملاء' : 'Compute cohort retention and revenue projections',
      output: language === 'ar'
        ? 'تمت معالجة 45,000 سجل بيانات. التوقعات تشير لنمو بنسبة +28.4% مع انخفاض معدل التراجع بنسبة 14%.'
        : 'Processed 45,000 records. Projections indicate +28.4% MRR expansion with 14% lower churn.',
      tags: ['Time-Series', 'Vector DB', 'Auto-ML'],
      tokens: '210 t/s',
      latency: '24ms',
    },
    {
      label: language === 'ar' ? 'أتمتة العمليات' : 'Workflow Bot',
      prompt: language === 'ar' ? 'مزامنة فواتير العملاء مع قواعد البيانات وإرسال التنبيهات' : 'Sync Stripe invoices with multi-tenant database & Slack',
      output: language === 'ar'
        ? 'تمت المصادقة الأمنية. تم إيداع القيود المحاسبية وتنبيه فريق العمليات آلياً.'
        : 'Cryptographic handshake verified. Ledger entries persisted, Ops alerts dispatched.',
      tags: ['Event-Driven', 'Webhook Sync', 'Zero-Downtime'],
      tokens: '165 t/s',
      latency: '12ms',
    },
  ];

  const handleRunInference = (idx: number) => {
    setSelectedPrompt(idx);
    setIsRunningInference(true);
    setTimeout(() => {
      setIsRunningInference(false);
    }, 400);
  };

  const handleCopyCode = () => {
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl lg:max-w-none">
      {/* Container Frame */}
      <div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
        
        {/* Top Control Bar with Tabs */}
        <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between gap-2 flex-wrap">
          
          {/* Traffic lights & status */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-semibold hidden sm:inline-block border-s border-slate-200 ps-2.5">
              DevIQ.Studio v2.4
            </span>
          </div>

          {/* Tab Controls */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-200/60 border border-slate-200/60">
            <button
              type="button"
              onClick={() => setActiveTab('ai')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>{language === 'ar' ? 'استوديو الذكاء الاصطناعي' : 'AI Studio'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === 'ar' ? 'معمارية الكود' : 'Architecture'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('telemetry')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'ar' ? 'الأداء الحي' : 'Telemetry'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI STUDIO INTERACTIVE SHOWCASE */}
        {activeTab === 'ai' && (
          <div className="p-5 sm:p-6 flex flex-col gap-4 animate-in fade-in duration-200">
            {/* Scenarios Pills */}
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>{language === 'ar' ? 'نماذج الذكاء الاصطناعي الجاهزة للتكامل' : 'Production AI Pipelines'}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-mono text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Engine Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {prompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleRunInference(idx)}
                    className={`p-2 sm:p-2.5 rounded-xl text-start transition-all cursor-pointer border text-xs font-bold ${
                      selectedPrompt === idx
                        ? 'bg-indigo-50/80 border-indigo-400 text-indigo-950 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="truncate">{p.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt Execution Box */}
            <div className="rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800 text-[11px]">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>POST /api/v1/deviq/ai-orchestrator</span>
                </span>
                <span className="text-slate-400">{prompts[selectedPrompt].latency}</span>
              </div>

              <div className="text-slate-300 mb-3 text-xs leading-relaxed font-sans">
                <span className="text-indigo-400 font-mono font-bold">{'> '}</span>
                {prompts[selectedPrompt].prompt}
              </div>

              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-emerald-400 leading-relaxed font-sans text-xs">
                {isRunningInference ? (
                  <span className="flex items-center gap-2 text-slate-400">
                    <span className="inline-block w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                    <span>Streaming inference tokens...</span>
                  </span>
                ) : (
                  <span>{prompts[selectedPrompt].output}</span>
                )}
              </div>

              {/* Telemetry Footnote */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span>Tokens: <strong className="text-slate-200">{prompts[selectedPrompt].tokens}</strong></span>
                  <span>Safety: <strong className="text-emerald-400">Strict Enterprise</strong></span>
                </div>
                <div className="flex gap-1.5">
                  {prompts[selectedPrompt].tags.map((t, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 rounded-md bg-slate-800 text-indigo-300 text-[9px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Statement */}
            <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ar' ? 'دمج نماذج ذكاء اصطناعي مخصصة حسب بيانات شركتك' : 'Custom Fine-Tuning & RAG on Your Corporate Data'}</span>
              </span>
              <span className="font-mono text-indigo-600 text-[11px] font-bold">100% Private</span>
            </div>
          </div>
        )}

        {/* Tab 2: ARCHITECTURE & CODE IDE */}
        {activeTab === 'code' && (
          <div className="p-5 sm:p-6 animate-in fade-in duration-200">
            <div dir="ltr" className="rounded-xl bg-[#0b101d] text-slate-300 p-4 font-mono text-xs border border-slate-800 shadow-md">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">DevIQService.ts</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">TypeScript 5.8</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {hasCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{hasCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <pre className="overflow-x-auto text-[11px] leading-relaxed text-left text-slate-300">
{`import { createClient } from '@deviq/core';

export const appPipeline = createClient({
  environment: 'production',
  strictTypes: true,
  cacheStrategy: 'edge-subsecond',
  security: {
    rateLimit: '1000req/min',
    encryption: 'AES-256-GCM',
    auditLogs: true
  }
});

// High-Throughput Service Layer
export async function dispatchTask(payload: TaskPayload) {
  const verified = await appPipeline.verify(payload);
  return appPipeline.execute(verified);
}`}
              </pre>

              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Type-Check: 0 Errors
                </span>
                <span className="text-slate-400 font-mono">Build Time: 0.42s</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: LIVE TELEMETRY DASHBOARD */}
        {activeTab === 'telemetry' && (
          <div className="p-5 sm:p-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-bold mb-1">
                  {language === 'ar' ? 'جاهزية واستقرار الخوادم' : 'System Availability'}
                </div>
                <div className="text-2xl font-black font-mono text-emerald-600">
                  99.98%
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">High-Availability SLA</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-[11px] text-slate-500 font-bold mb-1">
                  {language === 'ar' ? 'متوسط سرعة الاستجابة' : 'Mean Edge Latency'}
                </div>
                <div className="text-2xl font-black font-mono text-indigo-600">
                  34ms
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Global Edge CDN</div>
              </div>
            </div>

            {/* Simulated Live Throughput Bar Graph */}
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
              <div className="flex items-center justify-between text-xs mb-3 font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-indigo-400" />
                  Live API Throughput
                </span>
                <span className="text-emerald-400 font-bold">2,480 req/sec</span>
              </div>

              <div className="flex items-end gap-1.5 h-16 pt-2">
                {[45, 60, 52, 78, 65, 88, 72, 95, 82, 90, 85, 96, 88, 92, 99].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-indigo-700 to-cyan-400 rounded-t-sm transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Verification Footer */}
        <div className="px-5 py-3 bg-slate-100/70 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-800">
              {language === 'ar' ? 'معايير هندسية متقدمة في كل خطوة' : 'Production-Ready Architecture'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-indigo-700 font-bold flex items-center gap-1">
            <span>DevIQ Certified</span>
            <ArrowRight className={`w-3 h-3 ${isRtl ? 'rotate-180' : ''}`} />
          </span>
        </div>

      </div>
    </div>
  );
};
