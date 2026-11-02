import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  {
    id: 'workflow-timeline',
    category: 'process',
    question: {
      ar: 'كيف تبدأ عملية تطوير المشروع وما هي المدة المتوقعة؟',
      en: 'How does the project development process start and what is the typical timeline?',
    },
    answer: {
      ar: 'تبدأ العملية بجلسة استماع تفصيلية لمناقشة المتطلبات، نطاق العمل والجمهور المستهدف. بعد ذلك نقوم بإعداد خطة زمنية ومواصفات واضحة للمشروع. تختلف المدة حسب حجم وتعقيد المشروع؛ فالمواقع التعريفية تستغرق عادة من أسبوع إلى أسبوعين، بينما تتطلب المنصات والتطبيقات المعقدة من 4 إلى 8 أسابيع تقريباً مع تحديثات مستمرة في كل مرحلة.',
      en: 'The engagement initiates with a discovery consultation to evaluate scope, audience, and functional requirements. We then draft a roadmap with explicit milestones. Timelines vary by complexity: custom landing websites typically take 1–2 weeks, whereas full-scale platforms and mobile applications range between 4–8 weeks with continuous milestone previews.',
    },
  },
  {
    id: 'pricing-estimation',
    category: 'pricing',
    question: {
      ar: 'كيف يتم تسعير المشاريع البرمجية وحلول الذكاء الاصطناعي؟',
      en: 'How are software and AI projects priced?',
    },
    answer: {
      ar: 'نعتمد تسعيراً شفافاً ومبنياً بدقة على حجم المتطلبات الفعلية، عدد الشاشات، درجة تعقيد قواعد البيانات ونماذج الذكاء الاصطناعي المطلوبة. لا توجد تكاليف خفية، حيث يتم الاتفاق على نطاق العمل والميزانية المحددة خطياً قبل البدء بالبرمجة.',
      en: 'Pricing is transparent and calculated directly from the technical specifications, screen counts, database architecture, and required AI integrations. We provide an itemized proposal with clear deliverables and fixed stages before writing a single line of code.',
    },
  },
  {
    id: 'ip-ownership',
    category: 'general',
    question: {
      ar: 'هل أمتلك الشفرة المصدرية (Source Code) وحقوق الملكية الفكرية بالكامل؟',
      en: 'Do I fully own the source code and intellectual property rights?',
    },
    answer: {
      ar: 'نعم، بكل تأكيد. عند اكتمال المشروع وتسليم كافة المراحل، تنتقل إليك ملكية الكود المصدري وجميع الأصول الرقمية والتصاميم الخاصة بمشروعك بنسبة 100% دون أي شروط احتكارية.',
      en: 'Yes, 100%. Upon completion and project sign-off, full intellectual property rights, repository codebases, and design assets are handed over directly to you without restrictive vendor lock-ins.',
    },
  },
  {
    id: 'post-launch-support',
    category: 'process',
    question: {
      ar: 'ما نوع الدعم الفني والصيانة المتوفر بعد تسليم المشروع؟',
      en: 'What post-launch technical support and maintenance is provided?',
    },
    answer: {
      ar: 'نوفر فترة ضمان ومساندة فنية مجانية بعد الإطلاق لمعالجة أي ملاحظات أو أخطاء برمجية طارئة. كما نوفر باقات دعم فني وتطوير مستمر حسب الاتفاق لضمان استقرار الخوادم وتحديث النظام بانتظام.',
      en: 'We include a post-deployment warranty period to address edge cases and ensure operational stability. We also offer ongoing maintenance agreements for server management, feature upgrades, and library updates.',
    },
  },
  {
    id: 'ai-integration-safety',
    category: 'technical',
    question: {
      ar: 'هل بيانات شركتي آمنة عند دمج نماذج الذكاء الاصطناعي؟',
      en: 'Is our company data secure when integrating AI models?',
    },
    answer: {
      ar: 'نعم، نطبق أعلى معايير الخصوصية والأمان. نستخدم واجهات API للمؤسسات التي تضمن عدم تدريب النماذج العامة على بياناتك الخاصة، كما نقوم بتشفير قواعد بيانات المتجهات ومفاتيح الوصول لحماية أسرار عملك.',
      en: 'Security is paramount. We connect through enterprise-tier APIs where client data is strictly excluded from public model training, and we implement client-side encryption and secure API key vaults.',
    },
  },
  {
    id: 'multilingual-rtl',
    category: 'technical',
    question: {
      ar: 'هل تدعمون بناء أنظمة ثنائية اللغة تدعم العربية والإنجليزية (RTL / LTR)؟',
      en: 'Do you support bilingual systems with full Arabic RTL and English LTR layouts?',
    },
    answer: {
      ar: 'بالتأكيد. الاهتمام باللغة العربية ودعم الاتجاه من اليمين لليسار (RTL) مع التبديل السلس للغة الإنجليزية (LTR) هو أحد نقاط قوتنا الأساسية، مع ضمان خطوط عربية حديثة وتناسق كامل في التخطيط على كافة الشاشات.',
      en: 'Absolutely. First-class Arabic typography and complete bidirectional support (RTL and LTR) is one of our flagship strengths, ensuring responsive mirroring, crisp font rendering, and seamless locale switching.',
    },
  },
];
