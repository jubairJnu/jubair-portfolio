import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowUpRight, Download, Package2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {portfolioData} from "@/data/portfolio";

export function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, oklch(0.76 0.18 195 / 0.04), transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
          >
            NPM Registry
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Published <span className="gradient-text">Packages</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base">
            Open-source tools built to solve real problems. Used by developers
            worldwide.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioData.products.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{opacity: 0, y: 30}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.76 0.18 195 / 0.05), transparent 70%)",
                }}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Package2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground font-mono">
                        {pkg.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        v{pkg.version}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="w-7 h-7 rounded-lg"
                      asChild
                    >
                      <a
                        href={pkg.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="NPM"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {pkg.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Download className="w-3.5 h-3.5 text-primary" />
                    <span className="font-medium text-foreground">
                      {pkg.weeklyDownloads}
                    </span>
                    <span>weekly downloads</span>
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
