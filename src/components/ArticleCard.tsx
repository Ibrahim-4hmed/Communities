import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import type { Article } from "../data/articles";


interface ArticleCardProps {
  badgeColor: string ;
  gradient: string;
  i: number;
  article: Article;
}

const ArticleCard = ({badgeColor,gradient,i,article} : ArticleCardProps) =>  {
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
  )
}

export default ArticleCard