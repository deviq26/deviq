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
    cyan: 'bg-sky-50/80 text-sky-900 border border-sky-200 shadow-2xs font-bold',
    blue: 'bg-indigo-50/80 text-indigo-900 border border-indigo-200 shadow-2xs font-bold',
    purple: 'bg-purple-50/80 text-purple-900 border border-purple-200 shadow-2xs font-bold',
    amber: 'bg-amber-50/80 text-amber-900 border border-amber-200 shadow-2xs font-bold',
    emerald: 'bg-emerald-50/80 text-emerald-900 border border-emerald-200 shadow-2xs font-bold',
    slate: 'bg-slate-100/90 text-slate-800 border border-slate-200 shadow-2xs font-semibold',
  };

  const dotColors = {
    cyan: 'bg-sky-500',
    blue: 'bg-indigo-500',
    purple: 'bg-purple-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    slate: 'bg-slate-600',
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
