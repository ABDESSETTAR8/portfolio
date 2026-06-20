export type Locale = "en" | "fr" | "ar";

export const locales: Locale[] = ["en", "fr", "ar"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const dictionaries = {
  en: {
    nav: {
      credentials: "Credentials",
      projects: "Projects",
      library: "Project Library",
      about: "About",
      contact: "Contact",
    },
    hero: {
      name: "Rached Mohammed Abdessettar",
      title: "AI Engineer & CEO",
      subtitle:
        "Master's in AI & Databases · Software & SaaS Developer · Building intelligent systems that scale.",
      bookCall: "Reserve a Video Chat",
      whatsapp: "Chat on WhatsApp",
    },
    credentials: {
      heading: "Academic Dossier",
      subheading: "Education & Credentials",
      items: [
        {
          year: "2020 — 2023",
          title: "License (Bachelor's Degree)",
          institution: "Amar Telidji University, Laghouat",
          description:
            "Foundational degree in Computer Science, building strong fundamentals in algorithms, data structures, and software engineering.",
        },
        {
          year: "2023 — 2024",
          title: "Master's in AI & Databases — Year 1",
          institution: "University of Aflou",
          description:
            "First year of graduate studies focused on artificial intelligence, machine learning theory, and advanced database systems.",
        },
        {
          year: "2024 — Present",
          title: "Master's in AI & Databases — Year 2",
          institution: "University of Oran",
          description:
            "Continuing graduate research in applied AI, big data architectures, and intelligent information systems.",
        },
      ],
    },
    projects: {
      featuredHeading: "Featured Projects",
      featuredSubheading: "The Showcase",
      libraryHeading: "Project Library",
      librarySubheading: "The Archive",
      filterAll: "All",
      categories: {
        "AI/ML": "AI / ML",
        Simulation: "Simulation",
        "Full-Stack": "Full-Stack Apps",
      },
      viewProject: "View Project",
    },
    bio: {
      heading: "Founder's Bio",
      subheading: "From Research to Reality",
      paragraphs: [
        "My journey began with a deep curiosity for how intelligent systems learn, reason, and make decisions — a curiosity that led me to pursue a License in Computer Science at Amar Telidji University, followed by a Master's in Artificial Intelligence & Databases spanning the University of Aflou and the University of Oran.",
        "But academic rigor alone doesn't ship products. As CEO, I translate research-grade thinking into operational software: SaaS platforms, simulations, and AI-driven tools that solve real business problems for real clients.",
        "I bridge the gap between the lab and the market — combining a scientist's precision with a founder's drive to deliver measurable results.",
      ],
    },
    footer: {
      tagline: "AI Engineer · Software & SaaS Developer · CEO",
      rights: "All rights reserved.",
      getInTouch: "Get in Touch",
    },
  },
  fr: {
    nav: {
      credentials: "Diplômes",
      projects: "Projets",
      library: "Bibliothèque de Projets",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      name: "Rached Mohammed Abdessettar",
      title: "Ingénieur IA & CEO",
      subtitle:
        "Master en IA & Bases de Données · Développeur Logiciel & SaaS · Conception de systèmes intelligents évolutifs.",
      bookCall: "Réserver un Appel Vidéo",
      whatsapp: "Discuter sur WhatsApp",
    },
    credentials: {
      heading: "Dossier Académique",
      subheading: "Formation & Diplômes",
      items: [
        {
          year: "2020 — 2023",
          title: "Licence",
          institution: "Université Amar Telidji, Laghouat",
          description:
            "Licence en informatique, avec des bases solides en algorithmique, structures de données et génie logiciel.",
        },
        {
          year: "2023 — 2024",
          title: "Master en IA & Bases de Données — Année 1",
          institution: "Université d'Aflou",
          description:
            "Première année de master axée sur l'intelligence artificielle, la théorie de l'apprentissage automatique et les bases de données avancées.",
        },
        {
          year: "2024 — Présent",
          title: "Master en IA & Bases de Données — Année 2",
          institution: "Université d'Oran",
          description:
            "Poursuite des recherches en IA appliquée, architectures big data et systèmes d'information intelligents.",
        },
      ],
    },
    projects: {
      featuredHeading: "Projets Phares",
      featuredSubheading: "La Vitrine",
      libraryHeading: "Bibliothèque de Projets",
      librarySubheading: "Les Archives",
      filterAll: "Tous",
      categories: {
        "AI/ML": "IA / ML",
        Simulation: "Simulation",
        "Full-Stack": "Applications Full-Stack",
      },
      viewProject: "Voir le Projet",
    },
    bio: {
      heading: "Biographie du Fondateur",
      subheading: "De la Recherche à la Réalité",
      paragraphs: [
        "Mon parcours a commencé par une profonde curiosité pour la façon dont les systèmes intelligents apprennent, raisonnent et prennent des décisions — une curiosité qui m'a conduit à une Licence en Informatique à l'Université Amar Telidji, puis à un Master en Intelligence Artificielle & Bases de Données entre l'Université d'Aflou et l'Université d'Oran.",
        "Mais la rigueur académique seule ne suffit pas à livrer des produits. En tant que CEO, je transforme une réflexion de niveau recherche en logiciels opérationnels : plateformes SaaS, simulations et outils pilotés par l'IA qui résolvent de vrais problèmes pour de vrais clients.",
        "Je fais le lien entre le laboratoire et le marché — en combinant la précision d'un scientifique avec la détermination d'un fondateur pour obtenir des résultats mesurables.",
      ],
    },
    footer: {
      tagline: "Ingénieur IA · Développeur Logiciel & SaaS · CEO",
      rights: "Tous droits réservés.",
      getInTouch: "Me Contacter",
    },
  },
  ar: {
    nav: {
      credentials: "المؤهلات",
      projects: "المشاريع",
      library: "أرشيف المشاريع",
      about: "نبذة عني",
      contact: "تواصل",
    },
    hero: {
      name: "راشد محمد عبد الستار",
      title: "مهندس ذكاء اصطناعي ورئيس تنفيذي",
      subtitle:
        "ماجستير في الذكاء الاصطناعي وقواعد البيانات · مطور برمجيات وحلول SaaS · أبني أنظمة ذكية قابلة للتوسع.",
      bookCall: "احجز مكالمة فيديو",
      whatsapp: "تواصل عبر واتساب",
    },
    credentials: {
      heading: "السجل الأكاديمي",
      subheading: "التعليم والمؤهلات",
      items: [
        {
          year: "2020 — 2023",
          title: "ليسانس (شهادة جامعية)",
          institution: "جامعة عمار ثليجي، الأغواط",
          description:
            "شهادة ليسانس في الإعلام الآلي، أسست قاعدة متينة في الخوارزميات وهياكل البيانات وهندسة البرمجيات.",
        },
        {
          year: "2023 — 2024",
          title: "ماجستير في الذكاء الاصطناعي وقواعد البيانات — السنة الأولى",
          institution: "جامعة أفلو",
          description:
            "السنة الأولى من الدراسات العليا، مع التركيز على الذكاء الاصطناعي ونظرية التعلم الآلي وأنظمة قواعد البيانات المتقدمة.",
        },
        {
          year: "2024 — حتى الآن",
          title: "ماجستير في الذكاء الاصطناعي وقواعد البيانات — السنة الثانية",
          institution: "جامعة وهران",
          description:
            "مواصلة البحث في الذكاء الاصطناعي التطبيقي، وهياكل البيانات الضخمة، وأنظمة المعلومات الذكية.",
        },
      ],
    },
    projects: {
      featuredHeading: "أبرز المشاريع",
      featuredSubheading: "الواجهة",
      libraryHeading: "أرشيف المشاريع",
      librarySubheading: "الأرشيف",
      filterAll: "الكل",
      categories: {
        "AI/ML": "ذكاء اصطناعي / تعلم آلي",
        Simulation: "محاكاة",
        "Full-Stack": "تطبيقات متكاملة",
      },
      viewProject: "عرض المشروع",
    },
    bio: {
      heading: "نبذة عن المؤسس",
      subheading: "من البحث إلى الواقع",
      paragraphs: [
        "بدأت رحلتي بفضول عميق حول كيفية تعلم الأنظمة الذكية واستدلالها واتخاذها للقرارات — وهو الفضول الذي قادني للحصول على ليسانس في الإعلام الآلي من جامعة عمار ثليجي، ثم ماجستير في الذكاء الاصطناعي وقواعد البيانات بين جامعة أفلو وجامعة وهران.",
        "لكن الدقة الأكاديمية وحدها لا تكفي لإطلاق المنتجات. بصفتي رئيسًا تنفيذيًا، أحوّل التفكير العلمي إلى برمجيات تشغيلية: منصات SaaS، ومحاكاة، وأدوات مدعومة بالذكاء الاصطناعي تحل مشاكل حقيقية لعملاء حقيقيين.",
        "أنا أربط بين المختبر والسوق — أجمع بين دقة الباحث وطموح المؤسس لتحقيق نتائج ملموسة.",
      ],
    },
    footer: {
      tagline: "مهندس ذكاء اصطناعي · مطور برمجيات وSaaS · رئيس تنفيذي",
      rights: "جميع الحقوق محفوظة.",
      getInTouch: "تواصل معي",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)["en"];
