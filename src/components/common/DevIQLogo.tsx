import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface DevIQLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const DevIQLogo: React.FC<DevIQLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const { language } = useLanguage();

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const tagline = language === 'ar' ? 'ابنِ. برمج. ابتكر.' : 'Build. Code. Innovate.';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* DevIQ Stylized Logo Icon: Stylized < D > Monogram */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]"
        >
          <defs>
            <linearGradient id="logo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="logo-border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Background Squircle container */}
          <rect
            x="1"
            y="1"
            width="46"
            height="46"
            rx="12"
            fill="#0c1017"
            stroke="url(#logo-border-grad)"
            strokeWidth="1.5"
          />

          {/* Left code bracket < */}
          <path
            d="M14 18L9 24L14 30"
            stroke="#06b6d4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right code bracket > */}
          <path
            d="M34 18L39 24L34 30"
            stroke="#a855f7"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Stylized 'D' */}
          <path
            d="M18 15H24C28.4 15 31.5 18.6 31.5 23V25C31.5 29.4 28.4 33 24 33H18V15Z"
            fill="url(#logo-grad-primary)"
            fillOpacity="0.22"
            stroke="url(#logo-grad-primary)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Central intelligence node / spark */}
          <circle cx="23.5" cy="24" r="2.2" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-black tracking-tight text-slate-900 font-['Plus_Jakarta_Sans'] ${textSizes[size]}`}>
            Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">IQ</span>
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] text-slate-500 font-medium -mt-1 tracking-wider">
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
};
