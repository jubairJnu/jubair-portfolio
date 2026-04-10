import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Link} from "react-router-dom";
import {ArrowRight, Clock, BookOpen} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {portfolioData} from "@/data/portfolio";

export function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  const posts = portfolioData.blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-primary/30 text-primary bg-primary/5 text-xs font-medium"
            >
              Writing
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground hidden sm:flex"
            asChild
          >
            <Link to="/blog">
              View all posts
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{opacity: 0, y: 24}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 hover:border-primary/25 transition-all duration-300 cursor-pointer"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.76 0.18 195 / 0.04), transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0.5 font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-sm font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground"
            asChild
          >
            <Link to="/blog">
              View all posts
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
