import { useState } from "react";
import Navbar from "../components/Navbar";
import { allArticles, categoryBadgeColors } from "../data/articles"; //categoryColors
import { LuBookOpen } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import ArticleCard from "../components/ArticleCard";


const categories = ["الكل", ...Array.from(new Set(allArticles.map((a) => a.category)))];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  
  
  const filteredArticles =
    activeCategory === "الكل"
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  // One Article Content
 
  // Articles listing page
  return (
    <div className="min-h-screen bg-background ">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground backdrop-blur-sm">
              <LuBookOpen className="h-4 w-4" />
              <span>مكتبة المقالات</span>
            </div>
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              جميع المقالات
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              اكتشف مقالات متنوعة في جميع المسارات التقنية لمساعدتك في رحلتك
            </p>
          </div>
        </div>
        
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 50L1440 50L1440 25C1440 25 1200 0 720 0C240 0 0 25 0 25L0 50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20 ">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, i) => {
            const badgeColor = categoryBadgeColors[article.category] || "bg-muted text-muted-foreground";
            const gradient = article.categoryColor || "from-primary to-accent";
            return (
              <ArticleCard key={article.id} badgeColor={badgeColor} gradient={gradient} i={i} article={article} />
            );
          })}
        </div>
      </section>

      <footer className="border-t border-border bg-card py-10 text-center">
        <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
          صُمم بـ<span className={`text-red-500`}><FaHandHoldingHeart /></span> لطلاب الجامعة الجدد
        </p>
      </footer>
    </div>
  );
};

export default Articles;
