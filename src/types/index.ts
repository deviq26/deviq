export type Language = 'ar' | 'en';

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'desktop' | 'ai';

export interface Project {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  category: 'web' | 'mobile' | 'desktop' | 'ai';
  categoryLabel: {
    ar: string;
    en: string;
  };
  technologies: string[];
  features: {
    ar: string[];
    en: string[];
  };
  demoType: 'sample' | 'prototype' | 'concept';
  imagePlaceholder: {
    primaryColor: string;
    accentColor: string;
    icon: string;
    mockupType: 'browser' | 'mobile' | 'desktop' | 'dashboard';
  };
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    ar: string;
    en: string;
  };
  shortDescription: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  bulletPoints: {
    ar: string[];
    en: string[];
  };
  suitableFor: {
    ar: string[];
    en: string[];
  };
  technologies: string[];
  processSteps: {
    ar: { title: string; desc: string }[];
    en: { title: string; desc: string }[];
  };
  accentColor: string;
}

export interface FAQItem {
  id: string;
  question: {
    ar: string;
    en: string;
  };
  answer: {
    ar: string;
    en: string;
  };
  category?: 'general' | 'pricing' | 'process' | 'technical';
}

export type ProjectType = 'web' | 'mobile' | 'desktop' | 'ai' | 'other';
export type ContactMethod = 'whatsapp' | 'email' | 'phone';

export interface ProjectInquiryForm {
  name: string;
  email: string;
  phone: string;
  contactMethod: ContactMethod;
  projectType: ProjectType;
  budget: string;
  details: string;
}
