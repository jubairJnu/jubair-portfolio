import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Users, Activity, Zap, Package, Shield, GitMerge} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {portfolioData} from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  Users,
  Activity,
  Zap,
  Package,
  Shield,
  GitMerge,
};

const cardSizes = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

const cardVariants = {
  hidden: {opacity: 0, y: 30, scale: 0.96},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.76 0.18 195 / 0.3), transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
          >
            By the numbers
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Real-world <span className="gradient-text">impact</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            Numbers that matter. Every metric represents a real system, real
            users, real results.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {portfolioData.metrics.map((metric, i) => {
            const Icon = iconMap[metric.icon] || Package;
            const isLarge = i === 0 || i === 5;
            return (
              <motion.div
                key={metric.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={[
                  "relative group overflow-hidden rounded-2xl border border-border/50 bg-card p-6",
                  "hover:border-primary/30 transition-all duration-300 cursor-default",
                  "bento-glow",
                  isLarge ? cardSizes[i] : "",
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, oklch(0.76 0.18 195 / 0.05), transparent 60%)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-200" />
                  </div>

                  <div
                    className={[
                      "font-extrabold tracking-tight gradient-text",
                      isLarge ? "text-5xl sm:text-6xl" : "text-4xl",
                    ].join(" ")}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">
                    {metric.label}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.76 0.18 195 / 0.4), transparent)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
