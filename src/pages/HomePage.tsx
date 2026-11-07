import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { ProjectScopePlanner } from '../components/home/ProjectScopePlanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { WorkflowSteps } from '../components/home/WorkflowSteps';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <ProjectScopePlanner />
      <WorkflowSteps />
      <FeaturedProjects />
      <CtaBanner />
    </div>
  );
};
