"use client";
import {useEffect, useState} from "react";

import {AnimatePresence, motion} from "framer-motion";
import {Menu, Terminal, X} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

import {cn} from "@/lib/utils";
import Link from "next/link";
import {portfolioData} from "@/app/data/portfolio";
import {GithubIcon} from "../icons/Social";

const navLinks = [
  {label: "Work", href: "/projects"},
  {label: "Blog", href: "/blog"},
  {label: "Contact", href: "/contact"},
];

const sectionLinks = [
  {label: "About", href: "/#about"},
  {label: "Projects", href: "/#projects"},
  {label: "Skills", href: "/#skills"},
  {label: "Experience", href: "/#experience"},
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{y: -80, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass border-b border-border/60 shadow-[0_8px_32px_oklch(0_0_0/0.2)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors duration-200">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground">
                {portfolioData.personal.name.split(" ")[0]}
                <span className="text-primary">.</span>
                <span className="text-muted-foreground font-normal">dev</span>
              </span>
              {portfolioData.personal.openToWork && (
                <Badge
                  variant="outline"
                  className="hidden sm:flex text-[10px] h-5 border-primary/30 text-primary bg-primary/5 font-medium"
                >
                  Open to work
                </Badge>
              )}
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-accent/50"
                >
                  {link.label}
                </a>
              ))}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-sm transition-colors duration-200 rounded-md hover:bg-accent/50",
                    location.pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* <ModeToggle /> */}
              <Button
                size="sm"
                variant="ghost"
                className="hidden md:flex gap-1.5 text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-xs">GitHub</span>
                </a>
              </Button>
              <Button
                size="sm"
                className="hidden md:flex glow-primary-sm"
                asChild
              >
                <a href={`mailto:${portfolioData.personal.email}`}>Hire Me</a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.2}}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-border/60 md:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {[...sectionLinks, ...navLinks].map((link) => {
                const isExternal = link.href.startsWith("http");
                const Tag = isExternal ? "a" : Link;
                const props = isExternal
                  ? {href: link.href, target: "_blank" as const}
                  : {to: link.href};
                return (
                  <Tag
                    key={link.href}
                    {...(props as any)}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Tag>
                );
              })}
              <div className="pt-2 border-t border-border/50 flex items-center gap-2">
                <Button size="sm" className="flex-1" asChild>
                  <a href={`mailto:${portfolioData.personal.email}`}>Hire Me</a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
