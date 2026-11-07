import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from '../portfolio/ProjectCard';
import { ProjectDetailModal } from '../portfolio/ProjectDetailModal';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';
import type { Project, ProjectCategory } from '../../types';

export const FeaturedProjects: React.FC = () => {
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

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.portfolio.sectionBadge}
          title={t.portfolio.sectionTitle}
          subtitle={t.portfolio.sectionSubtitle}
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100/80 border border-slate-200/80 shadow-xs backdrop-blur-md flex-wrap justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.key
                    ? 'bg-slate-900 text-white shadow-xs'
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
    </section>
  );
};
