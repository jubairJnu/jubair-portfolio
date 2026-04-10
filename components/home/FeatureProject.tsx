"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowUpRight, CircleCheck as CheckCircle2} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

import {cn} from "@/lib/utils";
import {portfolioData} from "@/app/data/portfolio";
import {GithubIcon} from "../icons/Social";

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/40",
  blue: "from-blue-500/10 to-violet-500/10 border-blue-500/20 hover:border-blue-500/40",
  green:
    "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40",
};

const dotMap: Record<string, string> = {
  cyan: "bg-cyan-400",
  blue: "bg-blue-400",
  green: "bg-emerald-400",
};

const tagMap: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
          >
            Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            Not just projects — systems built to solve real problems at real
            scale.
          </p>
        </div>

        <div ref={ref} className="space-y-6">
          {portfolioData.featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{opacity: 0, y: 40}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94] as [
                  number,
                  number,
                  number,
                  number,
                ],
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border bg-linear-to-br transition-all duration-300",
                colorMap[project.color] ?? colorMap.cyan,
              )}
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-6 sm:p-8 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full",
                            dotMap[project.color],
                          )}
                        />
                        <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
                          Case Study {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 rounded-lg"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-8 h-8 rounded-lg"
                        asChild
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live site"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "px-2 py-0.5 rounded-md text-xs font-medium border",
                          tagMap[project.color],
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 p-6 sm:p-8 space-y-5 border-t lg:border-t-0 lg:border-l border-border/30">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      The Problem
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      The Solution
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Impact
                    </h4>
                    <ul className="space-y-1.5">
                      {project.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2
                            className={cn(
                              "w-3.5 h-3.5 mt-0.5 shrink-0",
                              dotMap[project.color],
                            )}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
