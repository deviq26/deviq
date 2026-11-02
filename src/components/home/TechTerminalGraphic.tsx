import React, { useState } from 'react';
import { Terminal, Cpu, Layers, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TechTerminalGraphic: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'ai' | 'fullstack' | 'architecture'>('ai');

  const snippets = {
    ai: `// DevIQ AI Solution Pipeline
import { RAGPipeline, NeuralAgent } from '@deviq/ai';

export const createSmartEngine = async (docs: KnowledgeBase) => {
  const agent = new NeuralAgent({
    model: 'gpt-enterprise-rag',
    bilingual: { arabic: true, english: true },
    strictCitation: true,
  });

  await agent.indexDocuments(docs, {
    chunkSize: 512,
    embedding: 'text-embedding-3-small',
  });

  return agent.streamResponse({
    task: 'document_intelligence',
    latencyTarget: '< 25ms'
  });
};`,
    fullstack: `// DevIQ Cross-Platform & Web Core
import { AppPlatform, ModernAPI } from '@deviq/core';

export const launchProduct = async () => {
  const stack = await AppPlatform.initialize({
    web: { framework: 'Next.js 15', ssr: true },
    mobile: { engine: 'Flutter 3.x', offlineFirst: true },
    desktop: { target: ['Windows', 'Linux'] },
    security: { encryption: 'AES-256-GCM' }
  });

  return stack.deployZeroDowntime();
};`,
    architecture: `// DevIQ Scalable System Architecture
interface SystemSpecs {
  uptimeGuarantee: "99.98%";
  database: "PostgreSQL + VectorStore";
  architecture: "Clean Microservices / Modular";
  apiStandards: ["REST", "WebSocket", "GraphQL"];
}

export const DevIQStandard: SystemSpecs = {
  uptimeGuarantee: "99.98%",
  database: "PostgreSQL + VectorStore",
  architecture: "Clean Microservices / Modular",
  apiStandards: ["REST", "WebSocket", "GraphQL"]
};`,
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Background glow effects */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400/30 via-blue-400/25 to-purple-400/30 rounded-2xl blur-xl opacity-75 animate-pulse-glow" />

      {/* Main Terminal Window */}
      <div dir="ltr" className="relative rounded-2xl bg-[#0d1322] border border-slate-700/80 shadow-2xl shadow-blue-900/15 overflow-hidden font-mono text-xs text-left">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-xs" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-xs" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-xs" />
            <span className="ms-2 text-[11px] text-slate-400 font-sans font-medium flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>DevIQ Workspace — SolutionEngine.ts</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ready</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-slate-800 bg-[#070b14] px-2 pt-1.5 overflow-x-auto text-[11px] font-sans">
          <button
            type="button"
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-[#0d1322] text-cyan-300 border-slate-700/80 border-b-transparent font-medium'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Solution</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('fullstack')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
              activeTab === 'fullstack'
                ? 'bg-[#0d1322] text-blue-300 border-slate-700/80 border-b-transparent font-medium'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Full-Stack & Mobile</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-[#0d1322] text-purple-300 border-slate-700/80 border-b-transparent font-medium'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Architecture</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div dir="ltr" className="p-4 sm:p-5 text-slate-200 overflow-x-auto leading-relaxed max-h-72 font-mono text-left">
          <pre className="text-[11px] sm:text-xs">
            <code>
              {snippets[activeTab].split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pe-4 text-slate-500 select-none text-[10px]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="table-cell">
                    {line.includes('//') ? (
                      <span className="text-slate-400 italic">{line}</span>
                    ) : line.includes('import') || line.includes('export') || line.includes('const') || line.includes('async') || line.includes('return') ? (
                      <span className="text-purple-400 font-semibold">{line}</span>
                    ) : line.includes('model:') || line.includes('web:') || line.includes('mobile:') ? (
                      <span className="text-cyan-300 font-semibold">{line}</span>
                    ) : line.includes('"') || line.includes("'") ? (
                      <span className="text-emerald-300">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Terminal Status Footer */}
        <div className="px-4 py-2 bg-[#080d1a] border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-sans">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>TypeScript 5.x</span>
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block">UTF-8</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="text-cyan-400 font-mono">Bilingual Engine</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle2 className="w-3 h-3" />
            <span>Clean Architecture</span>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top Right / Start (Adapted for Light Theme) */}
      <div className="absolute -top-4 -end-3 sm:-end-5 bg-white/95 border border-slate-200/90 rounded-xl p-2.5 shadow-lg shadow-slate-200/60 backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-float">
        <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left font-sans">
          <p className="text-[10px] text-slate-500 font-medium leading-none">
            {language === 'ar' ? 'معايير هندسية' : 'Engineering Standard'}
          </p>
          <p className="text-xs font-bold text-slate-900 leading-tight mt-0.5">
            Production Ready
          </p>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left / End (Adapted for Light Theme) */}
      <div className="absolute -bottom-4 -start-3 sm:-start-5 bg-white/95 border border-slate-200/90 rounded-xl p-2.5 shadow-lg shadow-slate-200/60 backdrop-blur-md hidden sm:flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200">
          <Cpu className="w-4 h-4" />
        </div>
        <div className="text-left font-sans">
          <p className="text-[10px] text-slate-500 font-medium leading-none">
            {language === 'ar' ? 'معالجة ذكية' : 'AI Latency'}
          </p>
          <p className="text-xs font-bold text-cyan-700 leading-tight mt-0.5">
            18ms • RAG Active
          </p>
        </div>
      </div>
    </div>
  );
};
