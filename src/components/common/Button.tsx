import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...rest
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs rounded-xl gap-1.5 font-bold',
    md: 'px-4.5 py-2.5 text-sm rounded-xl gap-2 font-bold',
    lg: 'px-6 py-3.5 text-base rounded-2xl gap-2.5 font-extrabold',
  };

  const variantStyles = {
    primary:
      'bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 shadow-[0_2px_8px_rgba(15,23,42,0.12)] hover:shadow-[0_8px_20px_-4px_rgba(15,23,42,0.22)] active:scale-[0.98]',
    secondary:
      'bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 shadow-2xs hover:border-slate-300 active:scale-[0.98]',
    outline:
      'bg-white hover:bg-indigo-50/60 text-indigo-700 border border-indigo-200/90 shadow-2xs hover:border-indigo-400 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-transparent',
  };

  const baseStyles =
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...rest}>
      {content}
    </button>
  );
};
