"use client";
import {portfolioData} from "@/app/data/portfolio";
import {Mail, Terminal, ArrowUpRight} from "lucide-react";
import {GithubIcon, LinkedinIcon, TwitterIcon} from "../icons/Social";
import Link from "next/link";
import {Separator} from "../ui/separator";

const footerLinks = {
  navigation: [
    {label: "Home", href: "/"},
    {label: "Projects", href: "/projects"},
    {label: "Blog", href: "/blog"},
    {label: "Contact", href: "/contact"},
  ],
  sections: [
    {label: "About", href: "/#about"},
    {label: "Skills", href: "/#skills"},
    {label: "Experience", href: "/#experience"},
    {label: "Products", href: "/#products"},
  ],
};

const socialLinks = [
  {label: "GitHub", href: portfolioData.personal.github, icon: GithubIcon},
  {label: "Twitter", href: portfolioData.personal.twitter, icon: TwitterIcon},
  {
    label: "LinkedIn",
    href: portfolioData.personal.linkedin,
    icon: LinkedinIcon,
  },
  {label: "Email", href: `mailto:${portfolioData.personal.email}`, icon: Mail},
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                {portfolioData.personal.name.split(" ")[0]}
                <span className="text-primary">.</span>
                <span className="text-muted-foreground font-normal">dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Building scalable web systems and real-time applications.
              Available for select consulting and full-time roles.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Sections</h4>
            <ul className="space-y-2">
              {footerLinks.sections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {portfolioData.personal.name}. Built with React,
            TypeScript & Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
