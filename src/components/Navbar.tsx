import { Link } from "react-router-dom";
import { LuGraduationCap } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-32 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-hero rounded-lg p-2">
            <LuGraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            مسارك التقني
          </span>
        </Link>

        <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-xl font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          الرئيسية
        </Link>

        <Link
            to="/articles"
            className="text-xl font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            المقالات
          </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
