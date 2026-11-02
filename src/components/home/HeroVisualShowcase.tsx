import React, { useState } from 'react';
import { Bot, Terminal, Sparkles, MessageCircle } from 'lucide-react';
import { AnimatedDevFigure } from '../common/AnimatedDevFigure';
import { TechTerminalGraphic } from './TechTerminalGraphic';
import { useLanguage } from '../../context/LanguageContext';

export const HeroVisualShowcase: React.FC = () => {
  const { language } = useLanguage();
  const [activeView, setActiveView] = useState<'figure' | 'code'>('figure');

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto lg:max-w-none">
      {/* Top Selector Pill */}
      <div className="inline-flex p-1 rounded-2xl bg-white border border-[#e5e3dc] shadow-sm mb-4 z-20">
        <button
          type="button"
          onClick={() => setActiveView('figure')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeView === 'figure'
              ? 'bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Bot className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'المساعد الذكي (Mascot)' : 'AI Companion'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveView('code')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeView === 'code'
              ? 'bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 text-white shadow-xs'
              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'بيئة البرمجة (Workspace)' : 'Code Engine'}</span>
        </button>
      </div>

      {/* Main Visual Display */}
      <div className="w-full relative flex flex-col items-center">
        {activeView === 'figure' ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-300 w-full">
            {/* Friendly Mascot Speech Bubble */}
            <div className="relative mb-3 px-4 py-2.5 rounded-2xl bg-white border border-teal-200 shadow-md shadow-teal-900/5 text-xs font-bold text-slate-800 flex items-center gap-2 max-w-xs text-center animate-float">
              <MessageCircle className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'أهلاً بك في DevIQ! جاهزون لبناء فكرتك البرمجية.'
                  : "Welcome to DevIQ! Ready to engineer your idea."}
              </span>
            </div>

            {/* The Animated Vector Figure */}
            <AnimatedDevFigure size="md" />

            {/* Click to wave hint */}
            <p className="text-[11px] text-slate-600 font-medium mt-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{language === 'ar' ? 'انقر على الشخصية للتفاعل' : 'Click the mascot to interact'}</span>
            </p>
          </div>
        ) : (
          <div className="w-full animate-in fade-in zoom-in-95 duration-300">
            <TechTerminalGraphic />
          </div>
        )}
      </div>
    </div>
  );
};
