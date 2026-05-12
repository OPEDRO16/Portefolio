import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { ArrowUpRight } from "lucide-react";

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}

export function CategoryPage({ title, subtitle, projects }: CategoryPageProps) {
  return (
    <PageShell showBack>
      <section className="surface-card p-6 md:p-10">
        <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
          Portfolio / {title}
        </p>
        <h1 className="display text-5xl md:text-7xl">{title}</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => {
          const Inner = (
            <article
              className="surface-card group p-6 transition-colors hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <div className="flex items-baseline justify-between gap-4">
              <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60">
                Work № {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:rotate-45 transition-transform" />
            </div>
              <h2 className="mt-3 display text-2xl md:text-3xl">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip text-xs group-hover:bg-background/10 group-hover:border-background/30 group-hover:text-background">{t}</span>
                ))}
              </div>
            </article>
          );

          return p.link ? (
            <Link key={i} to={p.link} className="group">
              {Inner}
            </Link>
          ) : (
            <div key={i}>{Inner}</div>
          );
        })}

        {projects.length === 0 && (
          <div className="surface-card p-10 text-center text-muted-foreground md:col-span-2">
            More projects coming soon.
          </div>
        )}
      </section>
    </PageShell>
  );
}