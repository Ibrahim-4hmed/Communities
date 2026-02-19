import { LuPuzzle } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";

export interface Resource {
  title: string;
  url: string;
  type: "youtube" | "website" | "course";
}

export interface RoadmapSection {
  title: string;
  steps: string[];
}

export interface PathwayData {
  id: string;
  title: string;
  description: string;
  icon: typeof FaShieldAlt;
  color: string;
  roadmap: {
    title: string;
    sections: RoadmapSection[];
  };
  whatsappLink: string;
  resources: Resource[];
}
export const pathways: PathwayData[] = [
  {
    id: "cybersecurity",
    title: "الأمن السيبراني",
    description: "تعلّم كيف تحمي الأنظمة والشبكات من الهجمات الإلكترونية وكن خط الدفاع الأول في العالم الرقمي.",
    icon: FaShieldAlt,
    color: "from-blue-600 to-blue-800",
    roadmap: {
      title: "خارطة طريق الأمن السيبراني",
      sections: [
        {
          title: "الأساسيات المشتركة (دفاعي وهجومي)",
          steps: [
            "تعلّم أساسيات الشبكات وبروتوكولات الإنترنت (TCP/IP, DNS, HTTP)",
            "فهم أنظمة التشغيل Linux و Windows من الداخل",
            "دراسة مبادئ أمن المعلومات (CIA Triad)",
            "تعلّم أساسيات البرمجة بلغة Python أو Bash",
            "فهم أنواع الثغرات الشائعة (OWASP Top 10)",
          ],
        },
        {
          title: "الأمن الهجومي (Offensive Security)",
          steps: [
            "التدرب على أدوات الاختراق الأخلاقي مثل Kali Linux و Burp Suite",
            "تعلّم اختبار الاختراق (Penetration Testing) للشبكات والتطبيقات",
            "المشاركة في مسابقات CTF لتطوير مهاراتك العملية",
            "الحصول على شهادات مثل CEH أو OSCP",
            "دراسة الهندسة العكسية وتحليل البرمجيات الخبيثة",
          ],
        },
        {
          title: "الأمن الدفاعي (Defensive Security)",
          steps: [
            "تعلّم إدارة الجدران النارية وأنظمة كشف التسلل (IDS/IPS)",
            "فهم مراقبة الشبكات وتحليل السجلات (SIEM)",
            "دراسة الاستجابة للحوادث الأمنية (Incident Response)",
            "الحصول على شهادات مثل CompTIA Security+ أو CySA+",
            "تعلّم تقييم المخاطر وإدارة الامتثال",
          ],
        },
      ],
    },
    whatsappLink: "#",
    resources: [
      { title: "NetworkChuck - شبكات وأمن سيبراني", url: "https://youtube.com/@NetworkChuck", type: "youtube" },
      { title: "John Hammond - CTF و اختراق أخلاقي", url: "https://youtube.com/@_JohnHammond", type: "youtube" },
      { title: "TryHackMe - تعلم تفاعلي", url: "https://tryhackme.com", type: "website" },
      { title: "HackTheBox - تحديات عملية", url: "https://hackthebox.com", type: "website" },
      { title: "CyberTalents - منصة عربية", url: "https://cybertalents.com", type: "website" },
    ],
  },
  {
    id: "web-development",
    title: "تطوير الويب",
    description: "ابنِ مواقع وتطبيقات ويب احترافية وتعلّم التقنيات الأكثر طلباً في سوق العمل.",
    icon: FaCode,
    color: "from-cyan-500 to-blue-600",
    roadmap: {
      title: "خارطة طريق تطوير الويب",
      sections: [
        {
          title: "المهارات المشتركة (Frontend & Backend)",
          steps: [
            "تعلّم أساسيات HTML و CSS وبناء صفحات ويب بسيطة",
            "إتقان JavaScript وفهم البرمجة التفاعلية",
            "فهم Git و GitHub للتحكم بالإصدارات",
            "تعلّم أساسيات HTTP و REST APIs",
          ],
        },
        {
          title: "تطوير الواجهة الأمامية (Frontend)",
          steps: [
            "تعلّم إطار عمل حديث مثل React أو Vue.js",
            "إتقان CSS المتقدم و Tailwind CSS",
            "فهم إدارة الحالة (State Management)",
            "تعلّم TypeScript لكتابة كود أكثر أماناً",
          ],
        },
        {
          title: "تطوير الواجهة الخلفية (Backend)",
          steps: [
            "تعلّم Node.js و Express أو Python و Django",
            "إتقان قواعد البيانات SQL و NoSQL",
            "فهم المصادقة والتفويض (Authentication & Authorization)",
            "بناء مشاريع حقيقية ونشرها على الإنترنت",
          ],
        },
      ],
    },
    whatsappLink: "#",
    resources: [
      { title: "Traversy Media - دورات ويب شاملة", url: "https://youtube.com/@TraversyMedia", type: "youtube" },
      { title: "Fireship - شروحات سريعة ومركزة", url: "https://youtube.com/@Fireship", type: "youtube" },
      { title: "Elzero Web School - تعلم بالعربي", url: "https://youtube.com/@ElzeroWebSchool", type: "youtube" },
      { title: "freeCodeCamp - منهج مجاني متكامل", url: "https://freecodecamp.org", type: "website" },
      { title: "The Odin Project - مسار تعلم عملي", url: "https://theodinproject.com", type: "website" },
      { title: "MDN Web Docs - المرجع الرسمي", url: "https://developer.mozilla.org/ar/", type: "website" },
    ],
  },
  {
    id: "problem-solving",
    title: "حل المشكلات",
    description: "طوّر تفكيرك المنطقي وقدرتك على حل المسائل البرمجية المعقدة والتأهل للمسابقات.",
    icon: LuPuzzle,
    color: "from-indigo-500 to-purple-600",
    roadmap: {
      title: "خارطة طريق حل المشكلات",
      sections: [
        {
          title: "الأساسيات",
          steps: [
            "تعلّم لغة برمجة قوية مثل C++ أو Python",
            "فهم التعقيد الزمني والمكاني (Big O Notation)",
            "فهم هياكل البيانات الأساسية (Arrays, Linked Lists, Stacks, Queues)",
          ],
        },
        {
          title: "المستوى المتوسط والمتقدم",
          steps: [
            "دراسة هياكل البيانات المتقدمة (Trees, Graphs, Heaps)",
            "دراسة الخوارزميات الأساسية (Sorting, Searching, Recursion)",
            "التدرب على منصات مثل Codeforces و LeetCode",
            "تعلّم البرمجة الديناميكية و Graph Theory",
            "المشاركة في مسابقات ICPC والمسابقات البرمجية",
          ],
        },
      ],
    },
    whatsappLink: "#",
    resources: [
      { title: "Errichto - خوارزميات متقدمة", url: "https://youtube.com/@Errichto", type: "youtube" },
      { title: "Abdul Bari - شرح خوارزميات", url: "https://youtube.com/@abdul_bari", type: "youtube" },
      { title: "Codeforces - مسابقات أسبوعية", url: "https://codeforces.com", type: "website" },
      { title: "LeetCode - تحضير للمقابلات", url: "https://leetcode.com", type: "website" },
      { title: "CP-Algorithms - مرجع شامل", url: "https://cp-algorithms.com", type: "website" },
    ],
  },
  {
    id: "artificial-intelligence",
    title: "الذكاء الاصطناعي",
    description: "اكتشف عالم الذكاء الاصطناعي وتعلم الآلة وكن جزءاً من ثورة التقنية القادمة.",
    icon: LuBrain,
    color: "from-teal-500 to-emerald-600",
    roadmap: {
      title: "خارطة طريق الذكاء الاصطناعي",
      sections: [
        {
          title: "الأساسيات المشتركة",
          steps: [
            "إتقان Python ومكتباتها العلمية (NumPy, Pandas, Matplotlib)",
            "تعلّم أساسيات الرياضيات: الجبر الخطي والإحصاء والاحتمالات",
            "فهم مفاهيم تحليل البيانات والتصور البياني",
            "تعلّم أساسيات قواعد البيانات و SQL",
          ],
        },
        {
          title: "تعلم الآلة (Machine Learning)",
          steps: [
            "فهم أنواع التعلم: الموجّه وغير الموجّه والمعزز",
            "التدرب على مكتبات مثل Scikit-learn و XGBoost",
            "تعلّم هندسة الميزات (Feature Engineering) وتقييم النماذج",
            "بناء مشاريع تنبؤية باستخدام بيانات حقيقية",
          ],
        },
        {
          title: "التعلم العميق (Deep Learning)",
          steps: [
            "دراسة الشبكات العصبية الأساسية (ANN, CNN, RNN)",
            "التدرب على TensorFlow و PyTorch",
            "التخصص في معالجة اللغات الطبيعية (NLP) أو الرؤية الحاسوبية (CV)",
            "تعلّم نماذج المحولات (Transformers) و LLMs",
            "بناء مشاريع عملية ونشرها (MLOps)",
          ],
        },
      ],
    },
    whatsappLink: "#",
    resources: [
      { title: "3Blue1Brown - شرح الشبكات العصبية", url: "https://youtube.com/@3blue1brown", type: "youtube" },
      { title: "Sentdex - مشاريع بايثون و AI", url: "https://youtube.com/@sentdex", type: "youtube" },
      { title: "Kaggle - مسابقات وبيانات", url: "https://kaggle.com", type: "website" },
      { title: "Fast.ai - دورات مجانية عملية", url: "https://fast.ai", type: "website" },
      { title: "Coursera - تخصص Andrew Ng", url: "https://coursera.org/specializations/machine-learning-introduction", type: "course" },
    ],
  },
];
