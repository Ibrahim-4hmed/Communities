import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import PathwayCard from "../components/PathwayCard";
import Navbar from "../components/Navbar";
import { pathways } from "../data/pathways";
import { IoSparklesOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { FaHandHoldingHeart } from "react-icons/fa";
import { allArticles,categoryBadgeColors } from "../data/articles";
// import { FiArrowLeft } from "react-icons/fi";
// import { Badge } from "../components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* image background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="خلفية تقنية"
            className="h-full w-full object-cover opacity-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/90" />
        </div>
        {/* Texts */}
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
          <div className="mx-auto max-w-2xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2 text-sm text-primary-foreground backdrop-blur-sm">
              <IoSparklesOutline className="h-4 w-4" />
              <span>دليلك لبداية مسيرتك التقنية</span>
            </div>

            <h1 className="mb-5 font-heading text-4xl font-extrabold leading-tight text-primary-foreground">
              مرحبا بك في مجتمع البرمجة لطلاب جامعة السودان الجدد! <br />
              <span className="bg-gradient-to-l from-sky to-calm-blue-light bg-clip-text">
                رحلتك البرمجية تبدأ من هنا
              </span>
            </h1>

            <p className="mx-auto max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              اختر المسار التقني الذي يناسبك وابدأ رحلة التعلّم مع مجتمع من الطلاب المتحمسين. نحن هنا لنرشدك خطوة بخطوة.
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 60Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            اختر مسارك التقني
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            أربعة مسارات مختلفة، كل مسار يفتح لك أبواب فرص جديدة
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {pathways.map((pathway, i) => (
            <PathwayCard key={pathway.id} pathway={pathway} index={i} />
          ))}
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <LuBookOpen className="h-4 w-4" />
              <span>مقالات مختارة</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              أشهر المقالات في مجال البرمجة
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              مقالات مختارة بعناية لمساعدتك في بداية رحلتك البرمجية
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.filter(a => !a.pathwayId).slice(0, 6).map((article, i) => {
              const badgeColor = categoryBadgeColors[article.category] || "bg-muted text-muted-foreground";
              const gradient = article.categoryColor || "from-primary to-accent";
              return (
                <Link
                  key={article.id}
                  to={`/articles?id=${article.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`h-1.5 bg-gradient-to-l ${gradient}`} />
                  <div className="p-6">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeColor} mb-3`}>
                      {article.category}
                    </span>
                    <h3 className="mb-2 font-heading text-lg font-bold text-foreground leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {article.summary}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>اقرأ المزيد</span>
                      <GoArrowLeft className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-border bg-card py-10 text-center">
        <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
          صُمم بـ<span className={`text-red-500`}><FaHandHoldingHeart /></span> لطلاب الجامعة الجدد
        </p>
      </footer>
    </div>
  );
};

export default Index;
