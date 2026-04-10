"use client";
import {motion} from "framer-motion";
import {ArrowRight, ChevronDown, Sparkles} from "lucide-react";
import {useEffect, useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

import {portfolioData} from "@/app/data/portfolio";
import Link from "next/link";
import {GithubIcon} from "../icons/Social";

const typingPhrases = [
  "real-time applications.",
  "distributed systems.",
  "high-concurrency APIs.",
  "scalable platforms.",
];

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((i) => i + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((i) => i - 1);
      }, 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="gradient-text-cyan">
      {displayed}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.12, delayChildren: 0.1},
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 24},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: "easeOut" as const},
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-radial pointer-events-none" />
      <div className="absolute inset-0 section-grid-bg pointer-events-none opacity-50" />

      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.76 0.18 195 / 0.06), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.18 235 / 0.05), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-3 py-1.5 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
            >
              <Sparkles className="w-3 h-3" />
              Available for new opportunities
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-4"
          >
            {portfolioData.personal.tagline}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 h-[1.4em] flex items-center justify-center"
          >
            <span className="text-muted-foreground font-medium text-2xl sm:text-3xl lg:text-4xl">
              Built for&nbsp;
            </span>
            <TypingEffect />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {portfolioData.personal.subtagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 glow-primary-sm text-base font-semibold px-8"
              asChild
            >
              <Link className="" href="/#projects">
                View Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 glass border-border/60 text-base font-medium px-8"
              asChild
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              {value: "100K+", label: "Concurrent Users"},
              {value: "2.4M", label: "Daily Active Users"},
              {value: "99.99%", label: "Uptime SLA"},
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="/#about"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.5, duration: 0.6}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-primary transition-colors" />
      </motion.a>
    </section>
  );
}
