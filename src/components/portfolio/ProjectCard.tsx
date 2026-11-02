import React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ProjectMockupGraphic } from './ProjectMockupGraphic';
import { Badge } from '../common/Badge';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t, language, isRtl } = useLanguage();

  return (
    <div
      onClick={() => onSelect(project)}
      className="group flex flex-col justify-between rounded-2xl bg-white border border-[#e5e3dc] hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 shadow-2xs cursor-pointer overflow-hidden"
    >
      <div>
        {/* Mockup visual */}
        <ProjectMockupGraphic project={project} />

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Category & Demo Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono text-teal-800 font-bold tracking-wider">
              {project.categoryLabel[language]}
            </span>
            <Badge variant="cyan" size="sm">
              {t.portfolio.demoLabel}
            </Badge>
          </div>

          {/* Project Title */}
          <h3 className="text-base sm:text-lg font-black text-slate-950 mb-2 group-hover:text-teal-800 transition-colors line-clamp-1">
            {project.title[language]}
          </h3>

          {/* Tagline / Summary */}
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed mb-4 line-clamp-2 font-normal">
            {project.description[language]}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f5f3ec] text-slate-900 border border-[#e2e0d8] font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Details Action */}
      <div className="px-5 sm:px-6 py-3.5 bg-[#faf9f6] border-t border-[#f0ede6] flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950">
        <span className="flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" />
          <span>{t.portfolio.viewProject}</span>
        </span>
        <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
      </div>
    </div>
  );
};
