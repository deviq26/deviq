import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pulseflow-analytics',
    title: {
      ar: 'منصة PulseFlow لتحليلات الأعمال',
      en: 'PulseFlow Business Analytics Platform',
    },
    tagline: {
      ar: 'منصة ويب تفاعلية لعرض مؤشرات الأداء الحية ولوحات التحكم المالية',
      en: 'Real-time interactive web platform for live KPI monitoring and financial dashboards',
    },
    description: {
      ar: 'نموذج توضيحي لمنصة سحابية متقدمة تتيح لرواد الأعمال مراقبة تدفقات المبيعات وسلوك العملاء في الوقت الفعلي.',
      en: 'Demonstration prototype of a cloud SaaS analytics platform offering live sales flow tracking and customer telemetry.',
    },
    fullDescription: {
      ar: 'تم تطوير PulseFlow كنموذج تطبيقي متقدم لمنصة تحليل بيانات سحابية. يشتمل النموذج على لوحة تحكم تفاعلية متعددة المقاييس، رسوم بيانية حركية، إمكانية فلترة التواريخ، وتصدير التقارير بصيغة PDF. يعتمد النظام على معمارية معيارية تضمن سرعة التحميل واستجابة فورية حتى مع البيانات الضخمة.',
      en: 'PulseFlow was architected as a demonstration benchmark for modern SaaS dashboard engineering. Features include multi-metric real-time graphs, custom date range filtering, dark-mode data visualizations, and client-side report exports. Optimized for lightning-fast loads.',
    },
    category: 'web',
    categoryLabel: {
      ar: 'مواقع الويب ومنصات SaaS',
      en: 'Web Platforms & SaaS',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    features: {
      ar: [
        'لوحة معلومات متجاوبة بالكامل لجميع أحجام الشاشات.',
        'رسوم بيانية تفاعلية مع إمكانية استعراض النقاط التفصيلية.',
        'دعم كامل للواجهتين العربية (RTL) والإنجليزية (LTR).',
        'نظام تصدير تقارير وتصفية متقدمة حسب الفئات.',
      ],
      en: [
        'Fully responsive interface across ultra-wide, laptops, and mobile.',
        'Interactive telemetry charts with tooltip inspectors.',
        'Full bilingual RTL / LTR layout architecture.',
        'Advanced category filtering and simulated report generation.',
      ],
    },
    demoType: 'prototype',
    imagePlaceholder: {
      primaryColor: '#0ea5e9',
      accentColor: '#3b82f6',
      icon: 'BarChart3',
      mockupType: 'dashboard',
    },
    demoUrl: '#demo',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'medsync-mobile',
    title: {
      ar: 'تطبيق MedSync لإدارة المواعيد الصحية',
      en: 'MedSync Health & Clinic Mobile App',
    },
    tagline: {
      ar: 'تطبيق موبايل متعدد المنصات لحجز المواعيد الطبية وتتبع الوصفات',
      en: 'Cross-platform mobile application for clinic bookings and prescription tracking',
    },
    description: {
      ar: 'نموذج تجريبي لتطبيق رعاية صحية مبني بإطار Flutter يوفر تجربة حجز سلسة وإشعارات تذكير وتوافق مع أنظمة دون اتصال.',
      en: 'Prototype clinic app built with Flutter offering seamless doctor appointments, automated medication reminders, and offline caching.',
    },
    fullDescription: {
      ar: 'تطبيق تجريبي يجسد معايير تطبيقات الهواتف الذكية في القطاع الطبي. يتميز بواجهات مستخدم فائقة البساطة تتيح للمرضى تصفح الأطباء حسب التخصص، حجز المواعيد، وتلقي إشعارات تفاعلية. يدعم التخزين المحلي بحيث يتمكن المريض من مراجعة مواعيده وتاريخه الصحي حتى في حال انقطاع الشبكة.',
      en: 'A showcase healthcare mobile prototype adhering to modern UX principles. It features doctor schedule lookups, interactive slot selection, medication reminders, and resilient local storage ensuring appointment access even during network dropouts.',
    },
    category: 'mobile',
    categoryLabel: {
      ar: 'تطبيقات الموبايل',
      en: 'Mobile Applications',
    },
    technologies: ['Flutter', 'Dart', 'SQLite', 'REST APIs', 'Figma'],
    features: {
      ar: [
        'تجربة مستخدم موحدة ومتطابقة على هواتف Android وiOS.',
        'نظام حجز مواعيد تفاعلي مع تقويم ذكي.',
        'حفظ البيانات محلياً للوصول السريع بدون إنترنت.',
        'واجهات مصممة خصيصاً لسهولة القراءة لكبار السن.',
      ],
      en: [
        'Unified fluid experience across both iOS and Android.',
        'Interactive appointment scheduling calendar.',
        'Local database sync for reliable offline access.',
        'High-contrast accessible typography designed for all age groups.',
      ],
    },
    demoType: 'prototype',
    imagePlaceholder: {
      primaryColor: '#10b981',
      accentColor: '#06b6d4',
      icon: 'Smartphone',
      mockupType: 'mobile',
    },
    demoUrl: '#demo',
    featured: true,
  },
  {
    id: 'apexpos-desktop',
    title: {
      ar: 'نظام ApexPOS لإدارة نقاط البيع والمستودعات',
      en: 'ApexPOS Desktop Retail & Inventory System',
    },
    tagline: {
      ar: 'برنامج حاسوب مكتبي متكامل لإدارة المخازن، الفواتير، ونقاط البيع السريعة',
      en: 'All-in-one desktop POS and inventory software designed for rapid offline retail operations',
    },
    description: {
      ar: 'برنامج حاسوب تجريبي عالي السرعة يعمل دون الحاجة لشبكة الإنترنت ويدعم قارئات الباركود والطابعات الحرارية.',
      en: 'High-velocity desktop POS prototype operating entirely offline with native support for barcode scanners and receipt printers.',
    },
    fullDescription: {
      ar: 'برنامج مكتبي مصمم للشركات والمتاجر التي تتطلب استقراراً مطلقاً وسرعة معالجة فورية للمبيعات دون التوقف عند انقطاع الإنترنت. يحتوي على قاعدة بيانات علائقية محلية مشفرة، شاشات إدخال باللمس ولوحة المفاتيح، نظام فواتير ضريبية، وتقارير يومية تلقائية.',
      en: 'Engineered for retail hubs requiring absolute operational uptime. Includes an embedded local encrypted relational database, keyboard shortcut speed workflows, barcode parsing, thermal receipt printing, and automated end-of-day sales reconciliations.',
    },
    category: 'desktop',
    categoryLabel: {
      ar: 'برامج الحاسوب',
      en: 'Desktop Software',
    },
    technologies: ['Electron / Tauri', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Node.js'],
    features: {
      ar: [
        'يعمل بكفاءة كاملة بنسبة 100% دون الحاجة إلى اتصال بالإنترنت.',
        'توافق كامل مع طابعات الفواتير وقارئات الباركود وأدراج النقد.',
        'نسخ احتياطي محلي تلقائي للبيانات بضغطة زر واحدة.',
        'دعم تعدد المستخدمين مع صلاحيات محددة للكاشير والمدير.',
      ],
      en: [
        'Runs 100% standalone with zero dependency on internet connectivity.',
        'Native drivers for thermal printers, barcode scanners, and cash drawers.',
        'Automated scheduled local database backup with one-click restore.',
        'Role-based security restricting cashier permissions from admin reports.',
      ],
    },
    demoType: 'prototype',
    imagePlaceholder: {
      primaryColor: '#8b5cf6',
      accentColor: '#6366f1',
      icon: 'Laptop',
      mockupType: 'desktop',
    },
    demoUrl: '#demo',
    featured: true,
  },
  {
    id: 'cortex-ai-assistant',
    title: {
      ar: 'مساعد Cortex الذكي لخدمة العملاء ومعالجة الوثائق',
      en: 'Cortex AI Enterprise Document & Customer Assistant',
    },
    tagline: {
      ar: 'حل ذكاء اصطناعي يعتمد على تقنية RAG لفهم وثائق الشركة والرد الفوري بدقة',
      en: 'Enterprise AI knowledge assistant using RAG to query company docs and deliver grounded answers',
    },
    description: {
      ar: 'نموذج تطبيقي لدمج الذكاء الاصطناعي يستخرج المعلومات من ملفات PDF ويجيب على أسئلة العملاء بدقة استناداً لمعرفة الشركة.',
      en: 'Production-ready AI integration demo indexing internal documentation and answering complex customer inquiries with zero hallucination.',
    },
    fullDescription: {
      ar: 'نموذج متطور يوضح كيفية توظيف نماذج اللغة الكبيرة (LLMs) في خدمة الأعمال الواقعية. يقرأ النظام ملفات سياسات الشركة والكتالوجات، ويقوم بفهرستها في قاعدة بيانات متجهات (Vector DB)، ثم يوفر واجهة محادثة ذكية باللغتين العربية والإنجليزية تجيب فورياً مع الاستشهاد برقم الصفحة والمصدر.',
      en: 'A demonstrative architecture of Retrieval-Augmented Generation (RAG) for corporate operations. Ingests corporate policies, technical sheets, and product catalogs into a vector database, enabling an intelligent bilingual chatbot that answers questions with citations.',
    },
    category: 'ai',
    categoryLabel: {
      ar: 'حلول الذكاء الاصطناعي',
      en: 'Artificial Intelligence',
    },
    technologies: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Vector DB', 'React'],
    features: {
      ar: [
        'استيعاب المستندات والملفات النصية والتعرف على المعاني العميقة.',
        'دعم كامل ومتقن لفهم اللغة العربية الفصحى واللهجات الشائعة.',
        'توفير مصادر ومراجع الإجابات لضمان دقة المعلومة والشفافية.',
        'واجهة إدارة لمراجعة سجل المحادثات وتحديث مستودع المعرفة.',
      ],
      en: [
        'Document ingestion pipeline parsing complex PDFs and markdown sheets.',
        'High-accuracy Arabic and English semantic retrieval understanding.',
        'Grounded response generation with transparent source citation links.',
        'Admin audit panel to inspect query logs and refresh embeddings.',
      ],
    },
    demoType: 'concept',
    imagePlaceholder: {
      primaryColor: '#ec4899',
      accentColor: '#8b5cf6',
      icon: 'Cpu',
      mockupType: 'browser',
    },
    demoUrl: '#demo',
    featured: true,
  },
  {
    id: 'novamarket-ecommerce',
    title: {
      ar: 'متجر NovaMarket الإلكتروني فائق السرعة',
      en: 'NovaMarket High-Velocity E-Commerce',
    },
    tagline: {
      ar: 'متجر إلكتروني حديث بتجربة تسوق سريعة وتصميم مخصص للشركات التجارية',
      en: 'Modern e-commerce platform featuring instantaneous cart actions and custom checkout flows',
    },
    description: {
      ar: 'نموذج لمتجر تجارة إلكترونية مبني وفق أحدث تقنيات الويب headless، محمول على واجهات سهلة وتجربة شراء سلسة.',
      en: 'Modern headless commerce demonstration store with instant search, variant selectors, and optimized mobile checkout.',
    },
    fullDescription: {
      ar: 'نموذج تطبيقي لمتجر رقمي يركز على تحقيق أعلى معدل تحويل للزوار (Conversion Rate). يتميز بسرعة تحميل فائقة، تصفح فوري للأصناف، سلة مشتريات منبثقة دون إعادة تحميل الصفحة، وبوابات دفع تجريبية متعددة.',
      en: 'Built to demonstrate high-conversion e-commerce architecture. Incorporates ultra-responsive product filters, instantaneous instant search, slide-over shopping bag, and modular multi-currency pricing.',
    },
    category: 'web',
    categoryLabel: {
      ar: 'مواقع الويب والتجارة الإلكترونية',
      en: 'Web & E-Commerce',
    },
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe Mock', 'TypeScript'],
    features: {
      ar: [
        'تصفح وسلة شراء فورية وسلسة تزيد من رغبة العميل بالشراء.',
        'محرك بحث داخلي سريع مع فلترة دقيقة حسب الأسعار والمواصفات.',
        'مهيأ بالكامل لمحركات البحث (SEO) وتسريع ظهور المنتجات في جوجل.',
        'تجربة تسوق ملائمة تماماً للهواتف الذكية.',
      ],
      en: [
        'Instantaneous cart interactions engineered to reduce bounce rates.',
        'Sub-millisecond client search and faceted filter controls.',
        'Strict schema.org SEO markup for rich product snippets.',
        'Mobile-first responsive design for high-traffic mobile shoppers.',
      ],
    },
    demoType: 'sample',
    imagePlaceholder: {
      primaryColor: '#3b82f6',
      accentColor: '#10b981',
      icon: 'ShoppingBag',
      mockupType: 'browser',
    },
    demoUrl: '#demo',
    featured: false,
  },
  {
    id: 'visionocr-scanner',
    title: {
      ar: 'أداة VisionOCR لاستخراج بيانات الفواتير آلياً',
      en: 'VisionOCR Automated Invoice Extraction Tool',
    },
    tagline: {
      ar: 'حل ذكي لمعالجة الصور والمستندات واستخراج الأرقام والجداول بدقة',
      en: 'Intelligent vision model extracting financial line-items from scanned receipts and PDFs',
    },
    description: {
      ar: 'نموذج معالجة صور ذكي يقرأ الفواتير الممسوحة ضوئياً ويحولها إلى سجلات رقمية جاهزة للأنظمة المحاسبية.',
      en: 'AI-assisted computer vision tool reading scanned invoices and converting unstructured data into validated accounting records.',
    },
    fullDescription: {
      ar: 'أداة متطورة تمثل حلول أتمتة الأعمال بالذكاء الاصطناعي. يقوم النظام باستلام صور الفواتير أو ملفات PDF، واستخراج اسم المورد، التاريخ، المبالغ، والبنود الضريبية بدقة متناهية، ثم تحويلها إلى ملفات JSON أو جداول Excel جاهزة للاستيراد في البرامج المحاسبية.',
      en: 'A practical enterprise automation tool streamlining bookkeeping. Ingests scanned image documents, extracts vendor metadata, date, total tax, and line items, exporting structured JSON or Excel tables compatible with ERPs.',
    },
    category: 'ai',
    categoryLabel: {
      ar: 'الذكاء الاصطناعي ومعالجة الصور',
      en: 'AI & Document Vision',
    },
    technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI', 'React', 'Docker'],
    features: {
      ar: [
        'استخراج ذكي للبيانات من الصور المائلة أو منخفضة الجودة.',
        'تنسيق تلقائي للبيانات إلى جداول Excel وملفات JSON.',
        'توفير ساعات العمل اليدوي في إدخال الفواتير اليومية.',
        'إمكانية الربط البرمجي السلس عبر REST API.',
      ],
      en: [
        'Resilient OCR extraction on skewed, low-light phone photos.',
        'Automatic structuring into standardized spreadsheet exports.',
        'Saves administrative teams hundreds of manual entry hours.',
        'Easy integration via secure microservice REST endpoints.',
      ],
    },
    demoType: 'concept',
    imagePlaceholder: {
      primaryColor: '#f59e0b',
      accentColor: '#ec4899',
      icon: 'ScanLine',
      mockupType: 'dashboard',
    },
    demoUrl: '#demo',
    featured: false,
  },
];
