import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowUpRight, Star} from "lucide-react";
import {GithubIcon} from "@/components/icons/social";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {portfolioData} from "@/data/portfolio";

export function OtherProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section className="py-16 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
            >
              Open Source
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Other <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground hidden sm:flex"
            asChild
          >
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              View All on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {portfolioData.otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{opacity: 0, y: 24}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94] as [
                  number,
                  number,
                  number,
                  number,
                ],
              }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 0% 0%, oklch(0.76 0.18 195 / 0.04), transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    {project.links.live && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-6 h-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-6 h-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" />
                    <span>{project.stars}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
