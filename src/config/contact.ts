/**
 * DevIQ Contact & Brand Configuration
 * 
 * IMPORTANT: Configure your actual WhatsApp number, contact email, 
 * and social channels below before deploying to production.
 */

export interface ContactConfig {
  brandName: string;
  taglineAr: string;
  taglineEn: string;
  // Format with country code without + or spaces for WhatsApp API (e.g., '966500000000')
  whatsappNumber: string;
  whatsappDisplay: {
    ar: string;
    en: string;
  };
  contactEmail: string;
  responseExpectationHours: number;
  location: {
    ar: string;
    en: string;
  };
  socialLinks: {
    github?: string;
    linkedin?: string;
    x?: string;
    telegram?: string;
  };
}

export const CONTACT_CONFIG: ContactConfig = {
  brandName: 'DevIQ',
  taglineAr: 'ابنِ. برمج. ابتكر.',
  taglineEn: 'Build. Code. Innovate.',
  
  // Set your actual WhatsApp number here (configured as configurable placeholder)
  // Example: '966500000000' or '971500000000'
  whatsappNumber: '201000000000', 
  whatsappDisplay: {
    ar: '+20 100 000 0000 (تواصل تجريبي)',
    en: '+20 100 000 0000 (Demo Inquiry)',
  },

  // Set your official business contact email here
  contactEmail: 'contact@deviq.dev',

  responseExpectationHours: 24,

  location: {
    ar: 'الشرق الأوسط والعالم العربي (خدمات عن بُعد)',
    en: 'Middle East & Global (Remote Services)',
  },

  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    x: 'https://x.com',
    telegram: 'https://t.me',
  },
};
