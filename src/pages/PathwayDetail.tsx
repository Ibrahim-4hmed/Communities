import { useParams, Link } from "react-router-dom";
import { pathways } from "../data/pathways";
import Navbar from "../components/Navbar";
import { GoArrowRight } from "react-icons/go";
import { LuBookOpen } from "react-icons/lu";
import { FaHandHoldingHeart, FaRegMap } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
// import { LuChevronDown } from "react-icons/lu";


const PathwayDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pathway = pathways.find((p) => p.id === id);

  if (!pathway) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-2xl font-bold text-foreground">المسار غير موجود</h1>
          <Link to="/" className="text-primary hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const Icon = pathway.icon;

  const resourceIcon = (type: string) => {
    switch (type) {
      case "youtube": return <FiYoutube className="h-4 w-4 text-red-500" />;
      case "course": return <LuGraduationCap className="h-4 w-4 text-primary" />;
      default: return <GoGlobe className="h-4 w-4 text-accent" />;
    }
  };

  const resourceLabel = (type: string) => {
    switch (type) {
      case "youtube": return "يوتيوب";
      case "course": return "دورة";
      default: return "موقع";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${pathway.color} pt-8 pb-20`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)" }} />
        </div>

        <div className="relative container mx-auto px-4 md:px-32">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <GoArrowRight className="h-4 w-4" />
            <span>العودة لجميع المسارات</span>
          </Link>

          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-primary-foreground/15 p-5 backdrop-blur-sm">
              <Icon className="h-12 w-12 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
                {pathway.title}
              </h1>
              <p className="mt-2 max-w-lg text-lg text-primary-foreground/80">
                {pathway.description}
              </p>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L1440 50L1440 25C1440 25 1200 0 720 0C240 0 0 25 0 25L0 50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-14 space-y-16">
        {/* Roadmap */}
        <section className="animate-fade-up">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <FaRegMap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground ">
              {pathway.roadmap.title}
            </h2>
          </div>

          <div className="space-y-8">
            {pathway.roadmap.sections.map((section, si) => (
              <div key={si}>
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                  <span className="inline-flex h-8 w-8 items-center justify-center border border-primary/20 rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                    {si + 1}
                  </span>
                  {section.title}
                </h3>
                <div className="mr-4 space-y-3 border-r-2 border-primary/20 pr-6">
                  {section.steps.map((step, i) => (
                    <div
                      key={i}
                      className="group relative flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-card"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1} - 
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles - Accordion */}
        <section className="animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <LuBookOpen className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              مقالات تعريفية
            </h2>
          </div>

          <section className="space-y-3">
            {pathway.articles.map((article, i) => (
              <div
                key={i}
                // value={`article-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm transition-all data-[state=open]:shadow-card data-[state=open]:border-primary/30"
              >
                <div className="font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                  {article.title}
                </div>
                <div className="text-sm leading-relaxed text-muted-foreground pb-5">
                  {article.summary}
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* WhatsApp CTA */}
        <section className="animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="overflow-hidden rounded-2xl gradient-hero p-10 text-center shadow-lg relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
            <div className="relative">
              <LuMessageCircle className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
              <h3 className="mb-3 font-heading text-2xl font-bold text-primary-foreground">
                انضم لمجتمع {pathway.title}
              </h3>
              <p className="mb-6 text-primary-foreground/80">
                تواصل مع زملائك وتبادل الخبرات والمصادر في قروب الواتساب
              </p>
              <a
                href={pathway.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-bold text-primary shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span>انضم لقروب الواتساب</span>
                <LuExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="animate-fade-up" style={{ animationDelay: "600ms" }}>
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <GoGlobe className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              أشهر المصادر والقنوات
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {pathway.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-card hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  {resourceIcon(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {resource.title}
                  </p>
                  <div className="mt-1 text-[10px]">
                    {resourceLabel(resource.type)}
                  </div>
                </div>
                <LuExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10 text-center">
        <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
          صُمم بـ<span><FaHandHoldingHeart /></span> لطلاب الجامعة الجدد
        </p>
      </footer>
    </div>
  );
};

export default PathwayDetail;
