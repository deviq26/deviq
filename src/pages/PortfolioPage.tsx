import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { ProjectDetailModal } from '../components/portfolio/ProjectDetailModal';
import { CtaBanner } from '../components/home/CtaBanner';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import type { Project, ProjectCategory } from '../types';

export const PortfolioPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t.portfolio.filterAll },
    { key: 'web', label: t.portfolio.filterWeb },
    { key: 'mobile', label: t.portfolio.filterMobile },
    { key: 'desktop', label: t.portfolio.filterDesktop },
    { key: 'ai', label: t.portfolio.filterAi },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.portfolio.sectionBadge}
          title={t.portfolio.sectionTitle}
          subtitle={t.portfolio.sectionSubtitle}
        />

        {/* Transparent Demo Project Notice banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 shadow-xs flex items-start gap-3 text-xs text-indigo-950">
          <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">{t.portfolio.demoNotice}</p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/80 shadow-xs backdrop-blur-md flex-wrap justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.key
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>

      <div className="mt-14 sm:mt-20">
        <CtaBanner />
      </div>
    </div>
  );
};
