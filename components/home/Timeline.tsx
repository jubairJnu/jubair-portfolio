import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {CircleCheck as CheckCircle2, MapPin} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {portfolioData} from "@/data/portfolio";

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
          >
            Career
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            6 years of shipping production systems, leading teams, and solving
            hard problems.
          </p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.76 0.18 195 / 0.5), oklch(0.76 0.18 195 / 0.1))",
            }}
          />

          <div className="space-y-8">
            {portfolioData.experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{opacity: 0, x: -24}}
                animate={inView ? {opacity: 1, x: 0} : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative pl-14 sm:pl-16"
              >
                <div className="absolute left-0 sm:left-2 top-5 w-8 h-8 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="group rounded-2xl border border-border/50 bg-card p-5 sm:p-6 hover:border-primary/25 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-tight">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-sm font-semibold text-primary">
                          {job.company}
                        </span>
                        <span className="text-muted-foreground text-xs">·</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Remote
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-border/60 text-muted-foreground w-fit shrink-0"
                    >
                      {job.period}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
