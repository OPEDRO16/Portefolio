import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, Camera } from "lucide-react";

export const Route = createFileRoute("/projects/IECD")({
  head: () => ({
    meta: [
      { title: "IECD Multiplayer Gobang — Pedro Marques" },
      {
        name: "description",
        content: "IECD project: a distributed multiplayer Five-in-a-Row game built with Java, JSP and concurrent server architecture.",
      },
      { property: "og:title", content: "IECD Multiplayer Gobang — Pedro Marques" },
      {
        property: "og:description",
        content: "IECD project: a distributed multiplayer Five-in-a-Row game built with Java, JSP and concurrent server architecture.",
      },
    ],
  }),
  component: IECDPage,
});

function IECDPage() {
  return (
    <PageShell showBack backTo="/projects/java">
      <section className="surface-card p-6 md:p-10">
  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
    
    {/* Coluna Principal: flex-1 faz com que ocupe o máximo de espaço possível de forma fluida */}
    <div className="flex-1 max-w-3xl">
      <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
        <Sparkles className="h-3 w-3" /> Project
      </p>
      <h1 className="display text-5xl md:text-6xl">Multiplayer Gobang</h1>
      <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
        A distributed computing project that combines a Java-based console client with a JSP web front-end for a networked Five-in-a-Row game. The system preserves the same backend logic while adding a modern browser interface.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="chip">Java</span>
        <span className="chip">JSP</span>
        <span className="chip">TCP Sockets</span>
        <span className="chip">Concurrency</span>
        <span className="chip">Persistence</span>
      </div>
    </div>

    {/* Coluna Lateral: Adaptável, ocupando 28% do espaço em ecrãs grandes */}
    <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
      <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
      <ul className="space-y-2 text-foreground">
        <li>Gianni Fiordida</li>
        <li>Pedro Marques</li>
        <li>Rodrigo Neves</li>
      </ul>
      <div className="mt-6 rounded-3xl border border-border bg-background/50 p-4">
        <p className="mono uppercase tracking-[0.25em] text-[11px] mb-3">Focus</p>
        <p className="text-sm text-foreground">
          Distributed multiplayer gameplay, session management and dual console/web interfaces.
        </p>
      </div>
    </div>

  </div>
</section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Project Overview
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Developed for the Distributed Computing Infrastructures course, this project delivers a networked multiplayer Five-in-a-Row experience. The first phase established a Java console client-server system, while the second phase expanded the product with a JSP-based web interface.
        </p>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" /> Technical Implementation
            </h2>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="text-foreground font-semibold">Architecture</p>
            <p className="mt-2 leading-relaxed">
              The core is a concurrent Java TCP server handling authentication, player sessions, and game state for both console and web clients.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="text-foreground font-semibold">Persistence</p>
            <p className="mt-2 leading-relaxed">
              Player credentials, statistics and game data are stored in XML files, with passwords hashed using SHA-256 for added security.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Camera className="h-3.5 w-3.5" /> Some Screenshots
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/profileIECD.webp" alt="Profile Settings" className="w-full h-auto mb-4" />
              <p className="text-xs">Profile Settings</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/Login.webp" alt="Login" className="w-full h-auto mb-4" />
              <p className="text-xs">Login</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/ranking.webp" alt="Hall of Fame" className="w-full h-auto mb-4" />
              <p className="text-xs">Hall of Fame</p>
            </div>
          </div>
          <div className="md:col-span-3 rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div className="w-full md:w-4/5 lg:w-3/4 mx-auto">
              <img loading="lazy" decoding="async" src="/Images/5row.webp" alt="Game Interface" className="w-full h-auto mb-4" />
              <p className="text-xs">Game Interface</p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Core Components
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Concurrent TCP server for reliable multiplayer communication.",
            "Player and session management classes for login, profiles and game state.",
            "15x15 Five-in-a-Row game logic with client-side and server validation.",
            "XML-backed persistence for player profiles and ranked statistics.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Eye className="h-3.5 w-3.5" /> Web Expansion
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "JSP pages for login, game, settings and the Hall of Fame.",
            "HttpSession keeps the Jogador object active across browser requests.",
            "Ghost move preview with temporary lock prevents duplicate clicks.",
            "Profile customization and XML backup make the experience more complete.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Learning Outcomes
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Designing a modular distributed architecture with a shared backend and dual client interfaces.",
            "Managing concurrent connections, session synchronization and multiplayer state.",
            "Integrating stateful server logic with a stateless web front-end using sessions.",
            "Solving UX, security and persistence challenges in a real distributed application.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <ArrowRight className="h-3.5 w-3.5" /> Resources
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="/files/IECD_Relatrio1.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Report 1 (pdf)
          </a>
          <a
            href="/files/IECD_Relatrio2.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Report 2 (pdf)
          </a>
          <a
            href="https://github.com/OPEDRO16/Projeto_IECD"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      <section className="mt-16 mb-8 flex flex-col items-center justify-center text-center">
        <div 
          className="group relative flex cursor-pointer flex-col items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="absolute inset-0 rounded-full bg-foreground/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <button className="relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-md">
            <ArrowRight className="h-5 w-5 -rotate-90 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
          </button>
          <p className="mono mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            Back to top
          </p>
        </div>
      </section>
    </PageShell>
  );
}