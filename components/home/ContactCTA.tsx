"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Mail, ArrowRight, Sparkles} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {portfolioData} from "@/app/data/portfolio";
import {GithubIcon, LinkedinIcon, TwitterIcon} from "../icons/Social";

const socialLinks = [
  {label: "GitHub", href: portfolioData.personal.github, icon: GithubIcon},
  {label: "Twitter", href: portfolioData.personal.twitter, icon: TwitterIcon},
  {
    label: "LinkedIn",
    href: portfolioData.personal.linkedin,
    icon: LinkedinIcon,
  },
];

export function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.76 0.18 195 / 0.08), transparent)",
        }}
      />
      <div className="absolute inset-0 section-grid-bg pointer-events-none opacity-30" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 40}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.7, ease: "easeOut"}}
          className="relative rounded-3xl border border-border/50 bg-card overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 120%, oklch(0.76 0.18 195 / 0.08), transparent)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.76 0.18 195 / 0.4), transparent)",
            }}
          />

          <div className="relative z-10 space-y-6">
            <div className="flex justify-center">
              {portfolioData.personal.openToWork ? (
                <Badge
                  variant="outline"
                  className="flex items-center gap-2 px-3 py-1.5 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
                >
                  <Sparkles className="w-3 h-3" />
                  Open to new opportunities
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                </Badge>
              ) : (
                <Badge variant="outline" className="text-xs">
                  Currently engaged
                </Badge>
              )}
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Let's build something{" "}
                <span className="gradient-text">remarkable</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Have a complex problem that needs a scalable solution? I'm
                selective about what I take on — if it's worth building, let's
                talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 glow-primary-sm text-base font-semibold px-8"
                asChild
              >
                <a href={`mailto:${portfolioData.personal.email}`}>
                  <Mail className="w-4 h-4" />
                  Send me a message
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 glass border-border/60 text-base"
                asChild
              >
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex-1 h-px bg-border/50 max-w-16" />
              <span className="text-xs text-muted-foreground">
                or find me on
              </span>
              <div className="flex-1 h-px bg-border/50 max-w-16" />
            </div>

            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground border border-border/40 hover:border-border bg-card hover:bg-accent/50 transition-all duration-200"
                >
                  <social.icon className="w-3.5 h-3.5" />
                  {social.label}
                </a>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Typical response time:{" "}
              <span className="text-foreground font-medium">
                within 24 hours
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
