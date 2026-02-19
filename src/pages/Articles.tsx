import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { allArticles, categoryBadgeColors } from "../data/articles"; //categoryColors
import { LuBookOpen } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { FiClock } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import ArticleCard from "../components/ArticleCard";


const categories = ["الكل", ...Array.from(new Set(allArticles.map((a) => a.category)))];

const Articles = () => {
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  const [activeCategory, setActiveCategory] = useState("الكل");
  
  const selectedArticle = articleId ? allArticles.find((a) => a.id === articleId) : null
  
  const filteredArticles =
    activeCategory === "الكل"
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  // One Article Content
  if (selectedArticle) {
    const gradientColor = selectedArticle.categoryColor || "from-primary to-accent";
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Article Header */}
        <section className={`relative overflow-hidden bg-gradient-to-br ${gradientColor} pt-8 pb-20`}>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              }}
            />
          </div>

          <div className="relative container mx-auto px-4 md:px-32">
            <Link
              to="/articles"
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
            >
              <GoArrowRight className="h-4 w-4" />
              <span>العودة للمقالات</span>
            </Link>

            <div className="max-w-2xl">
              <span
                className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold bg-primary-foreground/20 text-primary-foreground`}
              >
                {selectedArticle.category}
              </span>
              <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
                {selectedArticle.title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                {selectedArticle.summary}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1">
                  <FiClock className="h-4 w-4" />
                  <span>{Math.ceil(selectedArticle.content.length / 500)} دقائق قراءة</span>
                </span>
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

        {/* Article Content */}
        <article className="container mx-auto max-w-3xl px-4 py-14">
          <div className="prose-article">
            {selectedArticle.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) { // ## Means this is title
                return (
                  <h2
                    key={i}
                    className="mb-4 mt-10 font-heading text-2xl font-bold text-foreground first:mt-0"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) { // ## Means this is subtitle
                return (
                  <h3
                    key={i}
                    className="mb-3 mt-8 font-heading text-xl font-semibold text-foreground"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              // Handle lists
              if (paragraph.includes("\n- ")) {
                const lines = paragraph.split("\n");
                const title = lines[0].startsWith("- ") ? null : lines[0];
                const items = lines.filter((l) => l.startsWith("- "));
                return (
                  <div key={i} className="mb-4">
                    {title && (
                      <p className="mb-2 text-base leading-relaxed text-foreground">{title}</p>
                    )}
                    <ul className="space-y-2 pr-5">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-right-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                        >
                          {item.replace("- ", "").split("**").map((part, k) =>
                            k % 2 === 1 ? (
                              <strong key={k} className="font-semibold text-foreground">
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              // Handle numbered lists
              if (/^\d+\./.test(paragraph.trim())) {
                const items = paragraph.split("\n").filter((l) => l.trim());
                return (
                  <ol key={i} className="mb-4 space-y-2 pr-5 list-decimal list-inside">
                    {items.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                        {item.replace(/^\d+\.\s*/, "").split("**").map((part, k) =>
                          k % 2 === 1 ? (
                            <strong key={k} className="font-semibold text-foreground">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i} className="mb-4 text-base leading-relaxed text-muted-foreground">
                  {paragraph.split("**").map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </article>

         {/* Footer */}
              <footer className="border-t border-border bg-card py-10 text-center">
                <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
                  صُمم بـ<span className="text-red-500 "><FaHandHoldingHeart /></span> لطلاب الجامعة الجدد
                </p>
              </footer>
      </div>
    );
  }

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
