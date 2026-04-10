"use client";
import {portfolioData} from "@/app/data/portfolio";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {motion, useInView} from "framer-motion";
import {ArrowRight, Code as Code2, Layers, Zap} from "lucide-react";
import {useRef} from "react";

const highlights = [
  {
    icon: Code2,
    title: "Systems Thinking",
    description: "I design for scale from day one — not as an afterthought.",
  },
  {
    icon: Layers,
    title: "Full-Stack Depth",
    description:
      "From database schema to WebSocket protocol to pixel-perfect UI.",
  },
  {
    icon: Zap,
    title: "Velocity + Quality",
    description:
      "Ship fast without accumulating technical debt that slows you later.",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-100px"});

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{opacity: 0, x: -40}}
            animate={inView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94]}}
            className="space-y-6"
          >
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
              >
                About
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                I solve problems at scale,{" "}
                <span className="gradient-text">not just write code</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base">
              {portfolioData.personal.bio}
            </p>

            <p className="text-muted-foreground leading-relaxed text-base">
              {portfolioData.personal.story}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Open Source",
                "Distributed Systems",
                "Real-Time",
                "API Design",
                "Team Leadership",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button variant="outline" size="sm" className="gap-1.5" asChild>
                <a href="/#experience">
                  View Experience
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground"
                asChild
              >
                <a href={`mailto:${portfolioData.personal.email}`}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 40}}
            animate={inView ? {opacity: 1, x: 0} : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.15,
            }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 20}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.5, delay: 0.2 + i * 0.1}}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-200">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.5, delay: 0.5}}
              className="p-5 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-bold">
                    AC
                  </span>
                </div>
                <div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    "The best code is code that never has to be rewritten
                    because you thought about the problem correctly the first
                    time."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    — {portfolioData.personal.name}, 2024
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
