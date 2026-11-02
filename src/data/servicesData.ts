import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    iconName: 'Globe',
    accentColor: 'from-cyan-500 to-blue-600',
    title: {
      ar: 'تطوير مواقع الويب',
      en: 'Web Development',
    },
    shortDescription: {
      ar: 'بناء منصات ومواقع ويب سريعة، متجاوبة ومصممة بأحدث تقنيات الويب العالمية لتلائم طموح علامتك التجارية.',
      en: 'Building ultra-fast, responsive web platforms and commercial websites engineered with modern web standards.',
    },
    fullDescription: {
      ar: 'نقدم خدمات تطوير ويب متكاملة تغطي كافة الاحتياجات؛ بدءاً من المواقع التعريفية للشركات، مروراً بالمتاجر الإلكترونية المتطورة، وحتى لوحات التحكم المعقدة والمنصات السحابية ذات الأداء العالي.',
      en: 'We deliver full-cycle web engineering covering company landing pages, high-converting e-commerce platforms, complex SaaS dashboards, and cloud-native web applications.',
    },
    bulletPoints: {
      ar: [
        'مواقع تعريفية وتجارية متقدمة تعكس هوية احترافية.',
        'متاجر إلكترونية سريعة مع تجربة شراء سلسة وآمنة.',
        'لوحات تحكم وأنظمة إدارة بيانات مخصصة وشاملة.',
        'واجهات حديثة وتفاعلية متجاوبة 100% مع الهواتف والحواسب.',
      ],
      en: [
        'Corporate and commercial websites with custom design.',
        'High-converting e-commerce stores with smooth checkout.',
        'Custom admin dashboards and enterprise data portals.',
        'Modern, interactive, fully responsive cross-device interfaces.',
      ],
    },
    suitableFor: {
      ar: [
        'الشركات والمؤسسات الراغبة في ترقية هويتها الرقمية.',
        'المتاجر وتجار التجزئة الراغبين في البيع عبر الإنترنت.',
        'المشاريع الناشئة التي تبني منصات SaaS سحابية.',
        'المؤسسات التي تحتاج لوحات تحكم داخلية لإدارة العمليات.',
      ],
      en: [
        'Enterprises modernizing their corporate digital footprint.',
        'Retailers and brands expanding into scalable e-commerce.',
        'Startups launching custom SaaS and web applications.',
        'Businesses needing internal dashboards to manage operations.',
      ],
    },
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'REST / GraphQL',
    ],
    processSteps: {
      ar: [
        { title: 'تحليل المتطلبات وهيكلة الصفحات', desc: 'تحديد خريطة الموقع والرحلة الرقمية للمستخدم.' },
        { title: 'تصميم الواجهات UI/UX', desc: 'تصميم شاشات تفاعلية تتوافق مع هوية العلامة التجارية.' },
        { title: 'التطوير البرمجي والربط', desc: 'كتابة كود الواجهة والربط مع الخوادم وقواعد البيانات.' },
        { title: 'اختبار الأداء والتوافق والإطلاق', desc: 'فحص سرعة التحميل وتهيئة محركات البحث والتسليم.' },
      ],
      en: [
        { title: 'Requirements & Architecture', desc: 'Defining sitemap and user conversion journeys.' },
        { title: 'UI/UX Interactive Prototyping', desc: 'Designing modern screens aligned with brand guidelines.' },
        { title: 'Frontend & Backend Engineering', desc: 'Developing clean code, API integration, and database setup.' },
        { title: 'Testing, SEO Audit & Launch', desc: 'Auditing page speed, SEO tags, responsiveness, and go-live.' },
      ],
    },
  },
  {
    id: 'mobile-applications',
    iconName: 'Smartphone',
    accentColor: 'from-blue-500 to-indigo-600',
    title: {
      ar: 'تطبيقات الموبايل',
      en: 'Mobile Applications',
    },
    shortDescription: {
      ar: 'تطوير تطبيقات هواتف ذكية لأنظمة iOS وAndroid تتميز بالسلاسة، سرعة الاستجابة، وتجربة المستخدم الاستثنائية.',
      en: 'Engineering native-grade mobile applications for iOS and Android with fluid navigation and intuitive user UX.',
    },
    fullDescription: {
      ar: 'نبني تطبيقات ذكية متعددة المنصات باستخدام أحدث أطر العمل مثل Flutter، تضمن تجربة موحدة ومتطابقة على هواتف آيفون وأندرويد بأعلى معايير الأداء والاعتمادية وإمكانية العمل دون اتصال بالإنترنت.',
      en: 'We craft cross-platform mobile apps using Flutter and modern mobile toolkits, delivering a consistent native feel on both iOS and Android, offline caching capabilities, and smooth device feature integration.',
    },
    bulletPoints: {
      ar: [
        'تطبيقات مخصصة لنظامي Android وiOS من كود واحد متين.',
        'تطبيقات Flutter متعددة المنصات سريعة واقتصادية في الصيانة.',
        'دعم العمل دون اتصال بالإنترنت (Offline-First) عند الحاجة.',
        'واجهات استخدام بديهية وعصرية مصممة لسهولة التفاعل.',
      ],
      en: [
        'Tailored applications for Android and iOS from a unified codebase.',
        'High-performance cross-platform Flutter applications.',
        'Offline-first architecture and local caching when required.',
        'Intuitive, accessible touch interfaces built for seamless engagement.',
      ],
    },
    suitableFor: {
      ar: [
        'الشركات الراغبة في توفير قناة وصول مباشرة لعملائها على هواتفهم.',
        'المشاريع التي تتطلب إشعارات فورية وخدمات تحديد المواقع.',
        'التطبيقات الخدمية، التوصيل، الحجوزات، والخدمات الميدانية.',
        'تطبيقات الأعمال الميدانية التي تحتاج العمل في ظروف ضعف الشبكة.',
      ],
      en: [
        'Businesses seeking direct, frequent customer engagement on phones.',
        'Platforms requiring push notifications and geolocation services.',
        'On-demand delivery, booking, and field service workflows.',
        'Field-agent apps needing reliable operation with intermittent network.',
      ],
    },
    technologies: [
      'Flutter',
      'Dart',
      'iOS & Android APIs',
      'SQLite / Hive',
      'Firebase / Supabase',
      'REST APIs',
    ],
    processSteps: {
      ar: [
        { title: 'رسم تجربة الموبايل ونماذج الشاشات', desc: 'تحديد مسارات المستخدم واللمس والتنقل بين الشاشات.' },
        { title: 'بناء واجهات التطبيق التفاعلية', desc: 'برمجة واجهات متجاوبة بدقة مع مختلف أحجام الشاشات.' },
        { title: 'ربط الواجهات بالخوادم والتخزين المحلي', desc: 'برمجة التخزين الداخلي واستدعاء الواجهات الخلفية بأمان.' },
        { title: 'الاختبار على أجهزة حقيقية والتهيئة للمتاجر', desc: 'فحص التوافق وتقديم إرشادات النشر على App Store وGoogle Play.' },
      ],
      en: [
        { title: 'Mobile Flow & Wireframing', desc: 'Defining gestures, navigation hierarchies, and edge states.' },
        { title: 'Interactive Interface Development', desc: 'Developing fluid screens tested across varying device ratios.' },
        { title: 'APIs & Local Offline Storage', desc: 'Implementing resilient API syncing and encrypted local state.' },
        { title: 'Real Device Testing & Store Prep', desc: 'Performance profiling and build preparation for Google Play and App Store.' },
      ],
    },
  },
  {
    id: 'desktop-software',
    iconName: 'Laptop',
    accentColor: 'from-indigo-500 to-purple-600',
    title: {
      ar: 'تطبيقات وبرامج الحاسوب',
      en: 'Desktop Applications & Software',
    },
    shortDescription: {
      ar: 'أنظمة وبرمجيات سطح مكتب قوية ومخصصة لإدارة العمليات المعقدة، قواعد البيانات المحلية والشبكات الداخلية.',
      en: 'Robust, custom desktop software engineered to manage mission-critical business processes, local databases, and internal LANs.',
    },
    fullDescription: {
      ar: 'نوفر حلول برمجية متكاملة لبيئات العمل المكتبية والصناعية والتجارية، متوافقة مع أنظمة Windows وLinux، تدعم الاتصال بالعتاد الخارجي مثل الطابعات وقارئات الباركود مع معالجة البيانات بسرعة فائقة محلياً.',
      en: 'We develop purpose-built desktop systems for offices, commercial retailers, and operational hubs. Compatible with Windows and Linux, supporting hardware peripherals like thermal printers and barcode scanners with ultra-fast local data processing.',
    },
    bulletPoints: {
      ar: [
        'برامج مخصصة لأنظمة Windows وLinux عند الحاجة.',
        'أنظمة إدارة مبيعات، مخازن، وفواتير مخصصة لاحتياجاتك.',
        'تطبيقات سطح مكتب سريعة لا تعتمد بالضرورة على اتصال الإنترنت.',
        'قواعد بيانات محلية موثوقة وأنظمة عمل داخلية متكاملة.',
      ],
      en: [
        'Custom software for Windows and Linux environments.',
        'Tailored ERP, inventory, invoicing, and POS management systems.',
        'Blazing-fast desktop apps capable of autonomous offline operation.',
        'Robust local SQL databases and internal network sync.',
      ],
    },
    suitableFor: {
      ar: [
        'الشركات والمستودعات التي تحتاج معالجة بيانات سريعة ومحلية.',
        'نقاط البيع والمتاجر التي تتطلب استمرار العمل حتى عند انقطاع الإنترنت.',
        'العيادات والمراكز التي تحتفظ بسجلات وبيانات حساسة داخل شبكة محلية.',
        'المصانع والمؤسسات التي تحتاج تكاملاً مع أجهزة وطابعات مخصصة.',
      ],
      en: [
        'Warehouses and supply chain firms needing fast offline data entry.',
        'Retail POS locations requiring zero downtime even if internet drops.',
        'Clinics and sensitive institutions keeping records on internal local servers.',
        'Industrial facilities integrating with custom serial ports, scales, or printers.',
      ],
    },
    technologies: [
      'Electron / Tauri',
      'C# / .NET',
      'Python',
      'SQLite / PostgreSQL',
      'Local Hardware APIs',
    ],
    processSteps: {
      ar: [
        { title: 'دراسة بيئة العمل والعتاد', desc: 'تحديد أنظمة التشغيل، الأجهزة الملحقة، وطبيعة الشبكة المحلية.' },
        { title: 'تصميم هيكل البيانات والواجهات', desc: 'بناء قواعد البيانات وتصميم واجهات إدخال واستعلام سريعة.' },
        { title: 'التطوير البرمجي ومعالجة الأخطاء', desc: 'برمجة الوظائف، والنسخ الاحتياطي، والتشفير المحلي.' },
        { title: 'التثبيت والتدريب والدعم', desc: 'إنشاء ملفات التثبيت السلسة وتوفير الدليل التشغيلي.' },
      ],
      en: [
        { title: 'Environment & Hardware Assessment', desc: 'Analyzing target OS, peripheral devices, and network constraints.' },
        { title: 'Database Schema & UX Design', desc: 'Engineering reliable relational tables and rapid data-entry screens.' },
        { title: 'Core Logic & Resilience Engineering', desc: 'Implementing crash-proof local state, backups, and security.' },
        { title: 'Packaging, Deployment & Handover', desc: 'Producing standalone installers and operational documentation.' },
      ],
    },
  },
  {
    id: 'artificial-intelligence',
    iconName: 'Cpu',
    accentColor: 'from-purple-500 to-pink-600',
    title: {
      ar: 'الذكاء الاصطناعي',
      en: 'Artificial Intelligence',
    },
    shortDescription: {
      ar: 'دمج حلول ونماذج الذكاء الاصطناعي في أنظمتك لأتمتة المهام الروتينية، معالجة البيانات، وتقديم روبوتات محادثة ذكية.',
      en: 'Integrating production-grade AI and ML models into your workflows to automate tasks, process data, and deploy conversational agents.',
    },
    fullDescription: {
      ar: 'نحوّل إمكانيات الذكاء الاصطناعي الحديثة إلى أدوات عملية ملموسة ترفع كفاءة أعمالك؛ من تدريب وبناء روبوتات المحادثة الذكية التي تفهم لغة عملائك، إلى أتمتة معالجة المستندات واستخراج البيانات والتحليلات التنبؤية.',
      en: 'We translate modern AI breakthroughs into tangible business advantage; from custom chatbots answering customer inquiries accurately to intelligent document OCR, content processing, and automated smart task workflows.',
    },
    bulletPoints: {
      ar: [
        'روبوتات محادثة ذكية مدربة على بيانات ونظام شركتك.',
        'معالجة وفهرسة المستندات، النصوص والصور تلقائياً.',
        'دمج نماذج الذكاء الاصطناعي الحديثة (LLMs) عبر واجهات API آمنة.',
        'أتمتة المهام اليومية والحلول الذكية لتوفير الوقت والتكلفة.',
      ],
      en: [
        'Intelligent conversational bots trained on your company knowledge base.',
        'Automated document extraction, OCR, and content classification.',
        'Secure enterprise integration with state-of-the-art LLMs via API.',
        'Smart task automation eliminating manual administrative overhead.',
      ],
    },
    suitableFor: {
      ar: [
        'الشركات الراغبة في أتمتة خدمة العملاء على مدار 24 ساعة.',
        'المؤسسات التي تتعامل مع كميات ضخمة من العقود والفواتير والمستندات.',
        'المنصات الرقمية التي ترغب في إضافة توصيات ذكية أو كتابة محتوى آلي.',
        'رواد الأعمال الباحثين عن حلول تقنية ذكية تمنحهم ميزة تنافسية.',
      ],
      en: [
        'Companies aiming to provide instant, 24/7 intelligent customer care.',
        'Organizations dealing with high volumes of contracts, receipts, and files.',
        'Digital platforms incorporating AI recommendations or search.',
        'Innovators looking to create differentiated AI-powered products.',
      ],
    },
    technologies: [
      'Python',
      'OpenAI / Anthropic APIs',
      'FastAPI',
      'LangChain / LlamaIndex',
      'Vector Databases (Chroma/Pinecone)',
      'Hugging Face',
    ],
    processSteps: {
      ar: [
        { title: 'تحديد المشكلة وحالة الاستخدام', desc: 'التأكد من جدوى الذكاء الاصطناعي وتحديد مصدر البيانات.' },
        { title: 'إعداد وهندسة البيانات والنماذج', desc: 'تنظيف البيانات، إنشاء قواعد المعرفة (RAG) وتجربة النماذج.' },
        { title: 'بناء واجهات الربط الآمنة', desc: 'تطوير واجهات خلفية سريعة مع معايير حماية الخصوصية.' },
        { title: 'التقييم وضبط الدقة والمراقبة', desc: 'قياس دقة الإجابات والاستجابة ومتابعة الأداء المستمر.' },
      ],
      en: [
        { title: 'Use-Case Scoping & Data Audit', desc: 'Verifying technical feasibility and defining proprietary data sources.' },
        { title: 'RAG Pipeline & Model Tuning', desc: 'Structuring knowledge embeddings and testing prompt pipelines.' },
        { title: 'Secure API Backend Construction', desc: 'Developing high-throughput microservices preserving user privacy.' },
        { title: 'Evaluation, Benchmarking & Deployment', desc: 'Monitoring hallucination guards, latency, and response quality.' },
      ],
    },
  },
];
