import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, Code2, Smartphone } from 'lucide-react';

interface AnimatedDevFigureProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedDevFigure: React.FC<AnimatedDevFigureProps> = ({
  className = '',
  size = 'md',
}) => {
  const { language } = useLanguage();
  const [isWaving, setIsWaving] = useState(false);

  const dimensions = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72 sm:w-80 sm:h-80',
    lg: 'w-96 h-96',
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none cursor-pointer group ${dimensions[size]} ${className}`}
      onClick={() => setIsWaving(!isWaving)}
      title={language === 'ar' ? 'مساعد DevIQ الرقمي — انقر للتفاعل!' : 'DevIQ Digital Companion — Click to interact!'}
    >
      {/* Soft Pastel Ambient Glow Rings behind the figure */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-teal-200/40 via-indigo-200/40 to-purple-200/40 blur-2xl animate-pulse-glow" />
      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-amber-100/30 via-sky-100/40 to-indigo-100/30 blur-xl" />

      {/* Floating Animated Badge 1: Code */}
      <div className="absolute -top-2 start-2 p-2 rounded-2xl bg-white/95 border border-amber-200 shadow-md shadow-amber-900/5 flex items-center gap-1.5 text-[11px] font-bold text-amber-900 animate-float">
        <Code2 className="w-4 h-4 text-amber-600" />
        <span>{language === 'ar' ? 'كود معياري' : 'Clean Code'}</span>
      </div>

      {/* Floating Animated Badge 2: AI Sparkle */}
      <div
        className="absolute top-1/3 -end-4 p-2 rounded-2xl bg-white/95 border border-purple-200 shadow-md shadow-purple-900/5 flex items-center gap-1.5 text-[11px] font-bold text-purple-900"
        style={{ animation: 'floatBlob2 10s ease-in-out infinite' }}
      >
        <Sparkles className="w-4 h-4 text-purple-600" />
        <span>{language === 'ar' ? 'ذكاء اصطناعي' : 'Smart AI'}</span>
      </div>

      {/* Floating Animated Badge 3: Mobile / Cross-Platform */}
      <div
        className="absolute -bottom-2 start-6 p-2 rounded-2xl bg-white/95 border border-teal-200 shadow-md shadow-teal-900/5 flex items-center gap-1.5 text-[11px] font-bold text-teal-900"
        style={{ animation: 'floatBlob3 8s ease-in-out infinite' }}
      >
        <Smartphone className="w-4 h-4 text-teal-600" />
        <span>{language === 'ar' ? 'تطبيقات سريعة' : 'Fast Apps'}</span>
      </div>

      {/* Main Vector Character (DevIQ Bot Mascot) */}
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
        style={{ animation: 'floatSlow 5s ease-in-out infinite' }}
      >
        <defs>
          <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="visor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="ear-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="screen-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Floating Shadow Base */}
        <ellipse cx="120" cy="222" rx="48" ry="8" fill="#94a3b8" fillOpacity="0.25">
          <animate
            attributeName="rx"
            values="48;40;48"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fillOpacity"
            values="0.25;0.15;0.25"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Robot Torso / Chassis */}
        <rect
          x="78"
          y="136"
          width="84"
          height="68"
          rx="28"
          fill="url(#body-grad)"
          stroke="#cbd5e1"
          strokeWidth="2.5"
          filter="url(#soft-shadow)"
        />

        {/* Torso Screen Display / DevIQ Logo Center */}
        <rect x="94" y="152" width="52" height="34" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <path d="M108 164L103 169L108 174" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M132 164L137 169L132 174" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M115 163H119C122 163 124 165 124 169C124 173 122 175 119 175H115V163Z" stroke="#38bdf8" strokeWidth="1.8" />

        {/* Left Floating Arm / Hand */}
        <g className="transition-transform duration-300">
          <rect
            x="48"
            y="144"
            width="22"
            height="44"
            rx="11"
            fill="url(#body-grad)"
            stroke="#cbd5e1"
            strokeWidth="2"
            transform="rotate(-15 48 144)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-15 48 144; -25 48 144; -15 48 144"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <circle cx="50" cy="184" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </g>

        {/* Right Floating Arm (Waving animation) */}
        <g>
          <rect
            x="170"
            y="144"
            width="22"
            height="44"
            rx="11"
            fill="url(#body-grad)"
            stroke="#cbd5e1"
            strokeWidth="2"
            transform="rotate(15 170 144)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="15 170 144; 35 170 144; 15 170 144"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <circle cx="190" cy="184" r="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </g>

        {/* Neck connector */}
        <rect x="108" y="126" width="24" height="14" rx="4" fill="#64748b" />

        {/* Head Unit */}
        <rect
          x="62"
          y="48"
          width="116"
          height="84"
          rx="32"
          fill="url(#body-grad)"
          stroke="#cbd5e1"
          strokeWidth="2.5"
          filter="url(#soft-shadow)"
        />

        {/* Cute Ear Antennas / Sonic Pods */}
        <rect x="48" y="70" width="16" height="38" rx="8" fill="url(#ear-grad)" stroke="#ffffff" strokeWidth="1.5" />
        <rect x="176" y="70" width="16" height="38" rx="8" fill="url(#ear-grad)" stroke="#ffffff" strokeWidth="1.5" />

        {/* Top Antenna / Signal Spark */}
        <line x1="120" y1="48" x2="120" y2="28" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="24" r="7" fill="#0d9488" stroke="#ffffff" strokeWidth="2">
          <animate
            attributeName="fill"
            values="#0d9488;#6366f1;#0d9488"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="120" cy="24" r="3" fill="#ffffff" />

        {/* Visor Display Screen */}
        <rect x="74" y="60" width="92" height="60" rx="20" fill="url(#visor-grad)" stroke="#334155" strokeWidth="2" />

        {/* Animated Cute Expressive Cyan Eyes */}
        <g>
          {/* Left Eye */}
          <ellipse cx="100" cy="88" rx="10" ry="14" fill="#38bdf8">
            <animate
              attributeName="ry"
              values="14;14;1;14;14"
              keyTimes="0;0.45;0.5;0.55;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
          <circle cx="97" cy="83" r="3.5" fill="#ffffff" />

          {/* Right Eye */}
          <ellipse cx="140" cy="88" rx="10" ry="14" fill="#38bdf8">
            <animate
              attributeName="ry"
              values="14;14;1;14;14"
              keyTimes="0;0.45;0.5;0.55;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
          <circle cx="137" cy="83" r="3.5" fill="#ffffff" />

          {/* Cute Smile / Digital expression */}
          <path
            d="M112 104C116 108 124 108 128 104"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* Cheek Blush (Soft Pink/Peach) */}
        <ellipse cx="88" cy="98" rx="6" ry="3.5" fill="#f43f5e" fillOpacity="0.45" />
        <ellipse cx="152" cy="98" rx="6" ry="3.5" fill="#f43f5e" fillOpacity="0.45" />
      </svg>
    </div>
  );
};
