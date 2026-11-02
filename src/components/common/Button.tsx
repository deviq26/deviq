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
    sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5 font-bold',
    md: 'px-4 py-2.5 text-sm rounded-xl gap-2 font-bold',
    lg: 'px-6 py-3.5 text-base rounded-xl gap-2.5 font-black',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-teal-800 via-indigo-900 to-slate-950 text-white shadow-md shadow-slate-950/15 hover:shadow-lg hover:shadow-slate-950/25 hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-white hover:bg-[#faf9f6] text-slate-950 border border-[#d8d5cd] shadow-2xs hover:border-slate-400 active:scale-[0.98]',
    outline:
      'bg-white hover:bg-teal-50 text-teal-900 border border-teal-700 shadow-2xs active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-200/50 text-slate-900 hover:text-slate-950 border border-transparent',
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
