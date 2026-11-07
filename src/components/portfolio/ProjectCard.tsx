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
      className="group flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-[0_20px_40px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 shadow-xs hover:-translate-y-1.5 cursor-pointer overflow-hidden"
    >
      <div>
        {/* Mockup visual */}
        <ProjectMockupGraphic project={project} />

        {/* Card Body */}
        <div className="p-6">
          {/* Category & Demo Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono text-indigo-600 font-bold tracking-wider">
              {project.categoryLabel[language]}
            </span>
            <Badge variant="cyan" size="sm">
              {t.portfolio.demoLabel}
            </Badge>
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-black text-slate-950 mb-2 group-hover:text-indigo-700 transition-colors line-clamp-1">
            {project.title[language]}
          </h3>

          {/* Tagline / Summary */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2 font-normal">
            {project.description[language]}
          </p>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Details Action */}
      <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700 group-hover:text-indigo-950 transition-colors">
        <span className="flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" />
          <span>{t.portfolio.viewProject}</span>
        </span>
        <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
      </div>
    </div>
  );
};
