import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTopOnNavigate, FloatingScrollTopButton } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-900 relative selection:bg-indigo-500/20 selection:text-indigo-950 font-sans">
      {/* Precision Ambient Background Grid & Radial Cones */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Centered Sapphire / Violet Ambient Cone */}
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-100/40 via-indigo-100/25 to-transparent rounded-full blur-[110px] pointer-events-none" />

        {/* Floating Ambient Mesh Orb 1 */}
        <div className="absolute top-1/3 -start-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/35 via-blue-100/20 to-transparent rounded-full blur-[100px] animate-ambient-1 pointer-events-none" />

        {/* Floating Ambient Mesh Orb 2 */}
        <div className="absolute bottom-1/3 -end-32 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/30 via-indigo-100/20 to-transparent rounded-full blur-[100px] animate-ambient-2 pointer-events-none" />

        {/* Ultra-Fine Tech Dot Pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-40" />

        {/* Subtle Horizontal Tech Scanline */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
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
