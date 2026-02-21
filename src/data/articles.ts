export interface Article {
  id: string;
  title: string;
  summary: string;
  url: string;
  category: string;
  categoryColor: string;
  pathwayId?: string;
}

const categoryColors: Record<string, string> = {
  "عام": "from-blue-500 to-blue-700",
  "مهارات": "from-purple-500 to-purple-700",
  "لغات البرمجة": "from-orange-500 to-orange-700",
  "مشاريع": "from-emerald-500 to-emerald-700",
  "وظائف": "from-rose-500 to-rose-700",
  "مصادر": "from-cyan-500 to-cyan-700",
  "الأمن السيبراني": "from-blue-600 to-blue-800",
  "تطوير الويب": "from-cyan-500 to-blue-600",
  "حل المشكلات": "from-indigo-500 to-purple-600",
  "الذكاء الاصطناعي": "from-teal-500 to-emerald-600",
};

const categoryBadgeColors: Record<string, string> = {
  "عام": "bg-blue-100 text-blue-800",
  "مهارات": "bg-purple-100 text-purple-800",
  "لغات البرمجة": "bg-orange-100 text-orange-800",
  "مشاريع": "bg-emerald-100 text-emerald-800",
  "وظائف": "bg-rose-100 text-rose-800",
  "مصادر": "bg-cyan-100 text-cyan-800",
  "الأمن السيبراني": "bg-blue-100 text-blue-800",
  "تطوير الويب": "bg-cyan-100 text-cyan-800",
  "حل المشكلات": "bg-indigo-100 text-indigo-800",
  "الذكاء الاصطناعي": "bg-teal-100 text-teal-800",
};

export { categoryColors, categoryBadgeColors };

export const allArticles: Article[] = [
  {
    id: "start-programming",
    title: "كيف تبدأ رحلتك في البرمجة من الصفر",
    summary: "دليل شامل للمبتدئين يشرح الخطوات الأولى لدخول عالم البرمجة واختيار اللغة المناسبة.",
    category: "عام",
    categoryColor: categoryColors["عام"],
    url: ""
  },
  {
    id: "programmer-skills",
    title: "أهم 10 مهارات يحتاجها كل مبرمج",
    summary: "تعرّف على المهارات التقنية والشخصية التي تميز المبرمج الناجح في سوق العمل.",
    category: "مهارات",
    categoryColor: categoryColors["مهارات"],
    url: ""
  },
  {
    id: "programming-languages-comparison",
    title: "الفرق بين لغات البرمجة: أيها تختار؟",
    summary: "مقارنة بين أشهر لغات البرمجة مع نصائح لاختيار اللغة المناسبة لأهدافك.",
    category: "لغات البرمجة",
    categoryColor: categoryColors["لغات البرمجة"],
    url: ""
  },
  {
    id: "first-project",
    title: "بناء مشروعك الأول: من الفكرة إلى التنفيذ",
    summary: "خطوات عملية لتحويل فكرتك البرمجية إلى مشروع حقيقي يمكنك عرضه.",
    category: "مشاريع",
    categoryColor: categoryColors["مشاريع"],
    url: ""
  },
  {
    id: "tech-interviews",
    title: "كيف تستعد لمقابلات العمل التقنية",
    summary: "نصائح واستراتيجيات فعالة للتحضير لمقابلات شركات التقنية الكبرى.",
    category: "وظائف",
    categoryColor: categoryColors["وظائف"],
    url: ""
  },
  {
    id: "free-arabic-resources",
    title: "مصادر تعلم البرمجة المجانية بالعربي",
    summary: "قائمة محدثة بأفضل المنصات والقنوات العربية لتعلم البرمجة مجاناً.",
    category: "مصادر",
    categoryColor: categoryColors["مصادر"],
    url: ""
  },
  {
    id: "what-is-cybersecurity",
    title: "ما هو الأمن السيبراني؟",
    summary: "مقدمة شاملة عن مفهوم الأمن السيبراني وأهميته في عصرنا الرقمي.",
    category: "الأمن السيبراني",
    categoryColor: categoryColors["الأمن السيبراني"],
    pathwayId: "cybersecurity",
    url: ""
  },
  {
    id: "cyber-attacks-types",
    title: "أنواع الهجمات الإلكترونية",
    summary: "تعرّف على أشهر أنواع الهجمات مثل التصيد الاحتيالي وهجمات الفدية وكيفية الحماية منها.",
    category: "الأمن السيبراني",
    categoryColor: categoryColors["الأمن السيبراني"],
    pathwayId: "cybersecurity",
    url: ""
  },
  {
    id: "cybersecurity-future",
    title: "مستقبل الأمن السيبراني",
    summary: "نظرة على سوق العمل والفرص الوظيفية المتاحة في مجال الأمن السيبراني.",
    category: "الأمن السيبراني",
    categoryColor: categoryColors["الأمن السيبراني"],
    pathwayId: "cybersecurity",
    url: ""
  },
  {
    id: "web-dev-beginners-guide",
    title: "دليل المبتدئين في تطوير الويب",
    summary: "كل ما تحتاج معرفته للبدء في رحلة تطوير الويب من الصفر حتى الاحتراف.",
    category: "تطوير الويب",
    categoryColor: categoryColors["تطوير الويب"],
    pathwayId: "web-development",
    url: ""
  },
  {
    id: "frontend-vs-backend",
    title: "الفرق بين Frontend و Backend",
    summary: "فهم الفرق بين تطوير الواجهات الأمامية والخلفية ومتى تختار كل منهما.",
    category: "تطوير الويب",
    categoryColor: categoryColors["تطوير الويب"],
    pathwayId: "web-development",
    url: ""
  },
  {
    id: "arabic-web-resources",
    title: "أفضل المصادر لتعلم البرمجة بالعربي",
    summary: "قائمة بأفضل المنصات والقنوات العربية لتعلم تطوير الويب مجاناً.",
    category: "تطوير الويب",
    categoryColor: categoryColors["تطوير الويب"],
    pathwayId: "web-development",
    url: ""
  },
  {
    id: "why-problem-solving",
    title: "لماذا حل المشكلات مهم للمبرمج؟",
    summary: "كيف يساعدك التفكير الخوارزمي في حياتك المهنية وفي اجتياز مقابلات العمل.",
    category: "حل المشكلات",
    categoryColor: categoryColors["حل المشكلات"],
    pathwayId: "problem-solving",
    url: ""
  },
  {
    id: "best-practice-platforms",
    title: "أفضل منصات التدريب البرمجي",
    summary: "مقارنة بين أشهر المنصات مثل LeetCode و Codeforces و HackerRank.",
    category: "حل المشكلات",
    categoryColor: categoryColors["حل المشكلات"],
    pathwayId: "problem-solving",
    url: ""
  },
  {
    id: "programming-competitions",
    title: "كيف تستعد لمسابقات البرمجة",
    summary: "نصائح عملية وخطة تدريب للاستعداد للمسابقات البرمجية الجامعية.",
    category: "حل المشكلات",
    categoryColor: categoryColors["حل المشكلات"],
    pathwayId: "problem-solving",
    url: ""
  },
  {
    id: "intro-to-ai",
    title: "مقدمة في الذكاء الاصطناعي",
    summary: "ما هو الذكاء الاصطناعي وما الفرق بينه وبين تعلم الآلة والتعلم العميق؟",
    category: "الذكاء الاصطناعي",
    categoryColor: categoryColors["الذكاء الاصطناعي"],
    pathwayId: "artificial-intelligence",
    url: ""
  },
  {
    id: "ai-applications",
    title: "تطبيقات الذكاء الاصطناعي في حياتنا",
    summary: "أمثلة واقعية على كيفية استخدام الذكاء الاصطناعي في مختلف المجالات.",
    category: "الذكاء الاصطناعي",
    categoryColor: categoryColors["الذكاء الاصطناعي"],
    pathwayId: "artificial-intelligence",
    url: ""
  },
  {
    id: "start-ai-journey",
    title: "كيف تبدأ رحلتك في AI",
    summary: "خطة عملية ومصادر مجانية للبدء في تعلم الذكاء الاصطناعي من الصفر.",
    category: "الذكاء الاصطناعي",
    categoryColor: categoryColors["الذكاء الاصطناعي"],
    pathwayId: "artificial-intelligence",
    url: ""
  }
];