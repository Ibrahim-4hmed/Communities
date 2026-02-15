import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import type { PathwayData } from "../data/pathways";

interface PathwayCardProps {
  pathway: PathwayData;
  index: number;
}

const PathwayCard = ({ pathway, index }: PathwayCardProps) => {
  const Icon = pathway.icon;

  return (
    <Link
      to={`/pathway/${pathway.id}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1.5">
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-l ${pathway.color} opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />
        
        {/* <div className={`absolute inset-0 bg-gradient-to-br ${pathway.color} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.03]`} /> */}
        
        <div className={`mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${pathway.color} p-4 shadow-sm`}>
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>

        <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
          {pathway.title}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {pathway.description}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 group-hover:text-accent group-hover:gap-3">
          <span>استكشف المسار</span>
          <GoArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default PathwayCard;
