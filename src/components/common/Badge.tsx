import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'purple' | 'amber' | 'emerald' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 rounded-md gap-1 font-semibold',
    md: 'text-xs px-2.5 py-1 rounded-lg gap-1.5 font-bold',
  };

  const variantStyles = {
    cyan: 'bg-teal-50 text-teal-950 border border-teal-300/80 shadow-2xs',
    blue: 'bg-sky-50 text-sky-950 border border-sky-300/80 shadow-2xs',
    purple: 'bg-purple-50 text-purple-950 border border-purple-300/80 shadow-2xs',
    amber: 'bg-amber-50 text-amber-950 border border-amber-300/80 shadow-2xs',
    emerald: 'bg-emerald-50 text-emerald-950 border border-emerald-300/80 shadow-2xs',
    slate: 'bg-slate-100 text-slate-900 border border-slate-300 shadow-2xs',
  };

  const dotColors = {
    cyan: 'bg-teal-600',
    blue: 'bg-sky-600',
    purple: 'bg-purple-600',
    amber: 'bg-amber-600',
    emerald: 'bg-emerald-600',
    slate: 'bg-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center select-none font-mono ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
