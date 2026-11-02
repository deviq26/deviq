import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTopOnNavigate, FloatingScrollTopButton } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f6f2] text-slate-900 relative selection:bg-teal-500/20 selection:text-teal-950">
      {/* Soft Pastel Ambient Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Pastel Blob 1: Warm Peach / Honey */}
        <div className="absolute -top-24 -start-24 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-br from-amber-200/30 via-orange-100/25 to-rose-100/15 rounded-full blur-[90px] animate-blob-1" />

        {/* Soft Pastel Blob 2: Soft Lilac / Lavender */}
        <div className="absolute top-1/4 -end-32 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-bl from-purple-200/25 via-indigo-100/25 to-sky-100/20 rounded-full blur-[100px] animate-blob-2" />

        {/* Soft Pastel Blob 3: Soft Sage / Mint */}
        <div className="absolute bottom-1/4 start-1/4 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-gradient-to-tr from-teal-200/25 via-emerald-100/20 to-amber-100/15 rounded-full blur-[90px] animate-blob-3" />

        {/* Subtle Warm Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <ScrollToTopOnNavigate />
      <Navbar />

      <main className="flex-1 relative z-10 pt-20 sm:pt-24">
        <Outlet />
      </main>

      <Footer />
      <FloatingScrollTopButton />
    </div>
  );
};
