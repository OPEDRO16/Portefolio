import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye } from "lucide-react";

export const Route = createFileRoute("/projects/RoPaSc")({
  head: () => ({
    meta: [
      { title: "Rock Paper Scissors — Pedro Marques" },
      { name: "description", content: "A computational simulation exploring complex systems and emergent behaviors via Java and Processing." },
      { property: "og:title", content: "Rock Paper Scissors — Pedro Marques" },
      { property: "og:description", content: "A computational simulation exploring complex systems and emergent behaviors via Java and Processing." },
    ],
  }),
  component: RoPaScPage,
});

function RoPaScPage() {
  return (
    <PageShell showBack backTo="/projects/java">
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Project
            </p>
            <h1 className="display text-5xl md:text-6xl">Rock Paper Scissors</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              A computational simulation leveraging the classic Rock-Paper-Scissors mechanics to explore complex system modeling. Programmed in Java with Processing, this project illustrates how fundamental, simple rules can trigger fascinating, emergent behaviors within a spatial grid.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Java</span>
              <span className="chip">Processing</span>
              <span className="chip">Complex Systems</span>
              <span className="chip">Simulation</span>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
            <ul className="space-y-2 text-foreground">
              <li>Pedro Marques</li>
              <li>Gianni Floriddia</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-border bg-background/50 p-4">
              <p className="mono uppercase tracking-[0.25em] text-[11px] mb-3">NEW</p>
              <a
                href="/Downloads/rock-paper-scissors.jar"
                className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                Get demo here: RockPaperScissor.jar
              </a>
              <p className="mt-2 text-[11px] text-muted-foreground">(JDK 18+ required)</p>
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
          By using a universally understood game as its foundation, this simulation acts as a sandbox for complex systems theory. It translates abstract mathematical and biological concepts into a visual, interactive medium, highlighting how natural systems can be modeled computationally.
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
            <p className="text-foreground font-semibold">Overview</p>
            <p className="mt-2 leading-relaxed">
              Built from the ground up using Java and the Processing library, this software was crafted as the capstone project for the "Modelling and Simulation of Natural Systems" academic course.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Key Concepts Explored
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Cellular Automata: Utilizing grid-centric algorithms to govern how individual agents move, interact, and evolve.",
            "Procedural Terrain: Applying majority-rule logic to organically generate and shift environmental landscapes.",
            "Ecological Dynamics: Observing unexpected, emergent behavioral patterns as different agent populations compete for dominance.",
            "Digital Biomimicry: Translating the core principles of real-world natural ecosystems into a structured software architecture.",
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
              <Eye className="h-3.5 w-3.5" /> Game Appearance
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img src="/Images/RPS.webp" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Simulation Interface Snapshot</p>
            </div>
          </div>
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
            "Grasping the fundamentals of complex systems and successfully encoding them into functional software.",
            "Writing optimized and performant algorithms tailored for simulating biological and environmental behaviors.",
            "Transforming abstract mathematical equations into tangible, visually engaging interactive environments.",
            "Bridging the gap between pure academic theory and hands-on software engineering problem-solving.",
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
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/files/relatorioMSSN.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Report (pdf)
          </a>
          <a
            href="https://github.com/OPEDRO16/MSSN/tree/main/PRJ_%2051945_51959"
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