import React from 'react';
import { BarChart3, Smartphone, Laptop, Cpu, ShoppingBag, ScanLine, ExternalLink } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectMockupGraphicProps {
  project: Project;
  aspectRatio?: 'standard' | 'tall';
}

export const ProjectMockupGraphic: React.FC<ProjectMockupGraphicProps> = ({
  project,
}) => {
  const { mockupType } = project.imagePlaceholder;

  const renderIcon = () => {
    switch (project.imagePlaceholder.icon) {
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-cyan-600" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case 'Laptop':
        return <Laptop className="w-8 h-8 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-purple-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-blue-600" />;
      case 'ScanLine':
        return <ScanLine className="w-8 h-8 text-amber-600" />;
      default:
        return <Cpu className="w-8 h-8 text-cyan-600" />;
    }
  };

  return (
    <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-t-2xl overflow-hidden border-b border-slate-200 flex flex-col justify-between p-4 group-hover:bg-slate-50 transition-colors select-none">
      {/* Background soft mesh gradient */}
      <div
        className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-2xl opacity-30 pointer-events-none"
        style={{ backgroundColor: project.imagePlaceholder.primaryColor }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ backgroundColor: project.imagePlaceholder.accentColor }}
      />

      {/* Frame Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ms-2 text-[10px] font-mono text-slate-500">
            {mockupType === 'browser' && 'https://demo.deviq.dev/' + project.id}
            {mockupType === 'mobile' && 'DevIQ Mobile Runtime'}
            {mockupType === 'desktop' && 'DevIQ Desktop Client v1.0'}
            {mockupType === 'dashboard' && 'app.deviq.dev/' + project.id}
          </span>
        </div>

        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-cyan-700 border border-slate-200 shadow-xs">
          DEMO
        </span>
      </div>

      {/* Center Simulated UI Elements */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-2">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 mb-2 group-hover:scale-105 transition-transform duration-300">
          {renderIcon()}
        </div>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-mono font-bold text-slate-700">
            {project.category.toUpperCase()} • STACK
          </span>
        </div>
      </div>

      {/* Bottom Mini Status Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-200/80">
        <span>{project.technologies.slice(0, 3).join(' • ')}</span>
        <span className="text-cyan-700 font-semibold flex items-center gap-1">
          <span>Explore</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </span>
      </div>
    </div>
  );
};
