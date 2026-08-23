import { Link, useLocation } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const topics = [
  { label: "DSA", to: "/topics/dsa" },
  { label: "C", to: "/topics/c" },
  { label: "C++", to: "/topics/cpp" },
  { label: "Python", to: "/topics/python" },
  { label: "Java", to: "/topics/java" },
  { label: "HTML", to: "/topics/html" },
  { label: "JavaScript", to: "/topics/javascript" },
  { label: "CSS", to: "/topics/css" },
  { label: "SQL", to: "/topics/sql" },
  {label : "React.js", to: "/topics/reactjs" },
  {label : "Node.js", to: "/topics/nodejs" },
  {label : "MongoDB", to: "/topics/mongodb" },
  { label : "Express.js", to: "/topics/expressjs" },
  { label : "TypeScript", to: "/topics/typescript" },
  {label : "Git", to: "/topics/git" },
  {label : "PHP", to: "/topics/php" },
 {label : "Pandas", to: "/topics/pandas" },
 {label : "NumPy", to: "/topics/numpy" },
 {label : "Seaborn", to: "/topics/seaborn" },
 {label : "Scikit-learn", to: "/topics/scikitlearn" },
 {label : "Django", to: "/topics/django" },
 {label : "Linux", to: "/topics/linux" },
 {label : "Flask", to: "/topics/flask" },
 
  
];

const TopicsBar = () => {
  const location = useLocation();

  return (
    <div className="sticky top-16 z-40 border-b bg-secondary/80 backdrop-blur-md">
      <div className="container">
        <ScrollArea className="w-full">
          <div className="flex items-center gap-1 py-2">
            {topics.map((t) => {
              const active = location.pathname === t.to;
              return (
                <Link
                  key={t.to}
                  to={t.to}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default TopicsBar;
