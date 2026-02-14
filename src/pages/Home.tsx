import { Link } from "react-router-dom";
import { SITE } from "@/data/site";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { tilEntries } from "@/data/til";
import { Tag } from "@/components/Tag";
import { ArrowRight, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { format } from "date-fns";

export function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);
  const recentTILs = tilEntries.slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto px-6 animate-fade-in">
      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-nano-text">
            {SITE.name}
          </h1>
          <p className="text-nano-text-secondary leading-relaxed">
            {SITE.title}
          </p>
          <p className="text-nano-text-secondary leading-relaxed text-sm">
            {SITE.description}
          </p>
          <div className="flex items-center gap-1 text-xs text-nano-text-secondary">
            <MapPin className="w-3 h-3" />
            <span>{SITE.location}</span>
            <span className="mx-2">·</span>
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              {SITE.status}
            </span>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-nano-text-secondary hover:text-nano-text transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-nano-text-secondary hover:text-nano-text transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="text-nano-text-secondary hover:text-nano-text transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={`mailto:${SITE.email}`} className="text-nano-text-secondary hover:text-nano-text transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <hr className="border-nano-border" />

      {/* Recent Blog Posts */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-nano-text">Recent Posts</h2>
          <Link to="/blog" className="text-sm text-nano-accent hover:text-nano-accent-hover flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <article className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <time className="text-xs text-nano-text-secondary shrink-0 font-mono tabular-nums">
                  {format(new Date(post.date), "MMM dd, yyyy")}
                </time>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-nano-text group-hover:text-nano-accent transition-colors truncate">
                    {post.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-nano-border" />

      {/* Featured Projects */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-nano-text">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-nano-accent hover:text-nano-accent-hover flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block group"
            >
              <article>
                <h3 className="text-sm font-medium text-nano-text group-hover:text-nano-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-nano-text-secondary mt-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-nano-border" />

      {/* Recent TILs */}
      <section className="py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-nano-text">Today I Learned</h2>
          <Link to="/til" className="text-sm text-nano-accent hover:text-nano-accent-hover flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentTILs.map((til) => (
            <article key={til.id}>
              <div className="flex items-baseline gap-4">
                <time className="text-xs text-nano-text-secondary shrink-0 font-mono tabular-nums">
                  {format(new Date(til.date), "MMM dd")}
                </time>
                <div>
                  <h3 className="text-sm font-medium text-nano-text">
                    {til.title}
                  </h3>
                  <div className="flex gap-1.5 mt-1">
                    {til.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
