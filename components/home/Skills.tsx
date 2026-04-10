import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import {Badge} from "@/components/ui/badge";
import {portfolioData} from "@/data/portfolio";
import {cn} from "@/lib/utils";

type Category =
  | "all"
  | "frontend"
  | "backend"
  | "databases"
  | "devops"
  | "tools";

const categoryLabels: Record<Category, string> = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  devops: "DevOps",
  tools: "Tools",
};

const categoryColors: Record<string, string> = {
  frontend:
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/25 hover:border-cyan-500/50",
  backend:
    "bg-blue-500/10 text-blue-400 border-blue-500/25 hover:border-blue-500/50",
  databases:
    "bg-violet-500/10 text-violet-400 border-violet-500/25 hover:border-violet-500/50",
  devops:
    "bg-amber-500/10 text-amber-400 border-amber-500/25 hover:border-amber-500/50",
  tools:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/25 hover:border-emerald-500/50",
};

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = Object.keys(portfolioData.skills) as Array<
    keyof typeof portfolioData.skills
  >;

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, oklch(0.7 0.18 235 / 0.04), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
          >
            Tech Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            The tools I use to build production-grade systems every day.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["all", ...categories] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary/15 text-primary border-primary/40"
                  : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border",
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {categories.map((cat, catIndex) => {
            if (activeCategory !== "all" && activeCategory !== cat) return null;
            return (
              <motion.div
                key={cat}
                initial={{opacity: 0, y: 24}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.5, delay: catIndex * 0.08}}
                className={cn(
                  "rounded-2xl border border-border/50 bg-card p-5 hover:border-primary/20 transition-colors duration-300",
                  activeCategory === "all"
                    ? ""
                    : "md:col-span-2 lg:col-span-5 lg:grid lg:grid-cols-5",
                )}
              >
                <div
                  className={cn(
                    "mb-4",
                    activeCategory !== "all" && "lg:col-span-1",
                  )}
                >
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-0.5">
                    {categoryLabels[cat as Category]}
                  </h3>
                  <div
                    className={cn("w-6 h-0.5 rounded-full", {
                      "bg-cyan-400": cat === "frontend",
                      "bg-blue-400": cat === "backend",
                      "bg-violet-400": cat === "databases",
                      "bg-amber-400": cat === "devops",
                      "bg-emerald-400": cat === "tools",
                    })}
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-wrap gap-1.5",
                    activeCategory !== "all" && "lg:col-span-4",
                  )}
                >
                  {portfolioData.skills[cat].map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{opacity: 0, scale: 0.85}}
                      animate={inView ? {opacity: 1, scale: 1} : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.08 + i * 0.03,
                      }}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default",
                        categoryColors[cat] ||
                          "bg-secondary text-secondary-foreground border-border/50",
                      )}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
