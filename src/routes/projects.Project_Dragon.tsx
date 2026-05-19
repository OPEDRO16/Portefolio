import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, ShieldCheck } from "lucide-react";

export const Route = createFileRoute('/projects/Project_Dragon')({
    head: () => ({
        meta: [
            { title: 'Project_Dragon — Pedro Marques' },
            { name: 'description', content: 'A 3D game prototype developed in Unity Engine as the final project for the Animation in Virtual Environments course.' },
            { property: 'og:title', content: 'Project_Dragon — Pedro Marques' },
            { property: 'og:description', content: 'A 3D game prototype developed in Unity Engine as the final project for the Animation in Virtual Environments course.' },
        ],
    }),
    component: ProjectDragon,
})

function ProjectDragon() {
  return (
    <PageShell showBack backTo="/projects/3d">
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Project
            </p>
            <h1 className="display text-5xl md:text-6xl">Project Dragon</h1>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
                Project Dragon is a 3D game prototype developed in Unity Engine as the final project for the Animation in Virtual Environments course. The game is a third-person experience where players control a dragon through a low poly environmente, trying to find their son while avoiding or atacking zombie NPC's that pursues and attacks the player.</p>
            <ul className="space-y-2 text-foreground"></ul>
                <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Unity</span>
              <span className="chip">Game Development</span>
              <span className="chip">Third Person</span>
              <span className="chip">NPC Artificial Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Dragons Home and Game Level
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/DragonHome.webp" alt="Dragons Home" className="w-full h-auto mb-4" />
              <p className="text-xs">Dragons Home</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/Zombie.webp" alt="Game Level" className="w-full h-auto mb-4" />
              <p className="text-xs">Game Level</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Features Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Key Features
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "3D Game Environment",
            "Third-Person Gameplay",
            "NPC Artificial Intelligence",
            "User Interface and Controls",
            "Lively Animations and Visuals",
            "Low Poly Art Style",
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground flex items-start gap-3"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{item}</span>
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
  )
}
