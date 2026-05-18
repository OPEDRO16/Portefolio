import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye } from "lucide-react";

export const Route = createFileRoute("/projects/BlackJach")({
  head: () => ({
    meta: [
      { title: "Blackjack 25 — Pedro Marques" },
      { name: "description", content: "A modified card game exploring game logic and event handling via vanilla JavaScript." },
      { property: "og:title", content: "Blackjack 25 — Pedro Marques" },
      { property: "og:description", content: "A modified card game exploring game logic and event handling via vanilla JavaScript." },
    ],
  }),
  component: BlackjackPage,
});

function BlackjackPage() {
  return (
    <PageShell showBack backTo="/projects/java">
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Project
            </p>
            <h1 className="display text-5xl md:text-6xl">Blackjack 25</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              A modified version of the classic Blackjack card game developed as part of the Multimedia Authoring course. Instead of reaching 21 points, players aim for 25, providing an interesting twist while maintaining core gameplay mechanics. Built with vanilla JavaScript, this project emphasizes robust game logic over visual design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">JavaScript</span>
              <span className="chip">Game Development</span>
              <span className="chip">DOM Manipulation</span>
              <span className="chip">Object-Oriented Programming</span>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
            <ul className="space-y-2 text-foreground">
              <li>Pedro Marques</li>
              <li>Gianni Floriddia</li>
            </ul>
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
          The Blackjack project was developed as part of the Multimedia Authoring course curriculum. It features a modified version of the classic card game, where players aim to reach 25 points instead of the traditional 21. This adaptation provided an interesting twist while maintaining the core gameplay mechanics. As our first substantial JavaScript project, the primary focus was on implementing robust game logic rather than elaborate visual design.
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
            <p className="text-foreground font-semibold">Architecture & Focus</p>
            <p className="mt-2 leading-relaxed">
              Built with vanilla JavaScript, the project prioritizes robust game logic over visual embellishment. The implementation emphasizes object-oriented design principles, with well-structured classes for managing cards and player states. Event handling drives user interactions, while comprehensive state management tracks game progression, player decisions, and scoring mechanics.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <section className="surface-card p-6 md:p-10 flex flex-col h-full">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Layers className="h-3.5 w-3.5" /> Key Technical Aspects
              </h2>
            </div>
          </div>
          <div className="grid gap-4 flex-1">
            {[
              "Object-oriented programming principles for card and player management",
              "Event handling for user interactions and game flow control",
              "State management for tracking game progress and player scores",
              "DOM manipulation for dynamic content updates and visual feedback",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="surface-card p-6 md:p-10 flex flex-col h-full">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Eye className="h-3.5 w-3.5" /> Game Interface
              </h2>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-6 text-center text-muted-foreground">
              <img src="/Images/BlackJack.webp" alt="Blackjack 25 Game Interface" className="mb-4 h-auto w-4/5 rounded-2xl" />
              <p className="text-xs">Blackjack 25 Game Interface</p>
            </div>
          </div>
        </section>
      </div>

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
            "JavaScript object creation and manipulation for game entities",
            "DOM manipulation for dynamic content updates",
            "Conditional logic implementation for game rules",
            "Debugging techniques and problem-solving strategies",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
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
