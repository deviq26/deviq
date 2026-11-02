import React from 'react';
import { Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProjectMockupGraphic } from './ProjectMockupGraphic';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { t, language, isRtl } = useLanguage();

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title[language]} maxWidth="2xl">
      <div className="flex flex-col gap-5">
        {/* Visual Mockup Banner */}
        <div className="rounded-xl overflow-hidden border border-slate-200">
          <ProjectMockupGraphic project={project} />
        </div>

        {/* Demo Disclaimer Alert */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">{t.portfolio.demoNotice}</p>
        </div>

        {/* Project Tagline and Category */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold text-slate-800">
            {project.tagline[language]}
          </span>
          <Badge variant="blue" size="md">
            {project.categoryLabel[language]}
          </Badge>
        </div>

        {/* Detailed Overview */}
        <div>
          <h4 className="text-xs font-bold text-slate-950 mb-2 uppercase tracking-wider font-mono">
            {t.portfolio.projectOverview}
          </h4>
          <p className="text-sm text-slate-800 leading-relaxed font-normal">
            {project.fullDescription[language]}
          </p>
        </div>

        {/* Technologies Stack Tags */}
        <div>
          <h4 className="text-xs font-bold text-slate-950 mb-2.5 uppercase tracking-wider font-mono">
            {t.portfolio.technologiesUsed}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="slate" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-xs font-bold text-slate-950 mb-2.5 uppercase tracking-wider font-mono">
            {t.portfolio.keyFeatures}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features[language].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/90 border border-slate-200 text-xs text-slate-800 font-medium"
              >
                <Check className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <Button
            to="/contact"
            size="md"
            variant="primary"
            onClick={onClose}
            rightIcon={<ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rotate-[-90deg]' : ''}`} />}
          >
            {t.portfolio.requestSimilar}
          </Button>

          <Button size="md" variant="ghost" onClick={onClose}>
            {t.portfolio.closeModal}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
