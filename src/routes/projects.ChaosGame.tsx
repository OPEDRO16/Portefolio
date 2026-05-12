import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/projects/ChaosGame")({
  head: () => ({
    meta: [
      { title: "Chaos Game and Fractal Systems — Pedro Marques" },
      { name: "description", content: "Academic project in Java/Processing on visual generation of fractals and iterative systems." },
      { property: "og:title", content: "Chaos Game and Fractal Systems — Pedro Marques" },
      { property: "og:description", content: "Academic project in Java/Processing on visual generation of fractals and iterative systems." },
    ],
  }),
  component: ChaosGamePage,
});

function ChaosGamePage() {
  return (
    <PageShell showBack backTo="/projects/java">
      {/* 1. Hero section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Group Academic Project
            </p>
            <h1 className="display text-5xl md:text-6xl">Chaos Game and Fractal Systems</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Academic project in Java/Processing on visual generation of fractals and iterative systems.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              This project was developed in an academic context to explore concepts of iteration, chaos, and fractal geometry through visual applications. On this page, I highlight exclusively the components where I had the most technical involvement: the Chaos Game and the visualization of Julia and Mandelbrot sets.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Java</span>
              <span className="chip">Processing</span>
              <span className="chip">Chaos Game</span>
              <span className="chip">Julia</span>
              <span className="chip">Mandelbrot</span>
            </div>
          </div>

          <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
            <ul className="space-y-2 text-foreground">
              <li>Gianni Fiordida</li>
              <li>Pedro Marques</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-border bg-background/50 p-4">
              <p className="mono uppercase tracking-[0.25em] text-[11px] mb-3">NEW</p>
              <a
                href="/Downloads/chaos-game.jar"
                className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                Get Chaos Game here: ChaosGame.jar
              </a>
            </div>
          </div>
        </div>
        <div className="aspect-video w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          <img src="/Images/MainChaos.png" alt="Main Chaos Game Image" className="w-full h-auto mb-4" />
          <p className="text-xs">Restricted Chaos Star</p>
        </div>
      </section>

      {/* 2. Context Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Context
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          This was a group academic project in the field of fractals and computational visualization. On this page, I present only the components where I had the main technical responsibility, focused on the exploration of the Chaos Game and the visual generation of fractals in the complex plane.
        </p>
      </section>

      {/* 4. Main Section "B — Chaos Game" */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" /> B — Chaos Game
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
          In section B, We explored the Chaos Game through various visual applications developed in Processing. The goal was to understand how simple rules and iterative processes can generate complex geometric patterns and emergent fractal structures.
        </p>

        <div className="space-y-12">
          {/* 4.1 Simple Chaos Game */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Simple Chaos Game</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The first version follows the classic logic of the Chaos Game, starting from a fixed set of vertices and a random initial point. In each iteration, the point moves towards one of the vertices according to a defined rule, leaving a trail on the screen and gradually revealing the resulting visual structure.
              </p>
            </div>
            <div className="w-full lg:w-[40%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <img src="/Images/ChaosSimple.png" alt="Simple Chaos Game" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Simple Chaos Game</p>
            </div>
          </div>

          {/* 4.2 Interactive Version */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[40%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <img src="/Images/InteractiveChaos.png" alt="Interactive Chaos Game" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Interactive Chaos Game</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Interactive Version</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                An interactive version was also developed where the user can manually define the vertices with the mouse. This approach allows experimenting with different geometric configurations and immediately observing how small changes in the initial conditions influence the generated pattern.
              </p>
            </div>
          </div>

          {/* 4.3 Variants with Restricted Rules */}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Variants with Restricted Rules</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Beyond the base version, I explored variants with additional rules for choosing vertices, altering the system's evolution and producing distinct patterns. These restrictions gave rise to visual compositions with more specific shapes, such as flake and Vicsek structures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
                <img src="/Images/FlakeChaos.png" alt="Flake Structure" className="w-full rounded-2xl h-auto mb-4" />
                <p className="text-xs">Flake Structure</p>
              </div>
              <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
                <img src="/Images/VicsekChaos.png" alt="Vicsek Structure" className="w-full rounded-2xl h-auto mb-4" />
                <p className="text-xs">Vicsek Structure</p>
              </div>
            </div>
          </div>

          {/* 4.4 Technical Challenges */}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Technical Challenges</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Translating simple mathematical rules into consistent visual behavior",
                "Structuring the code to support different variants of the algorithm",
                "Managing user interaction in the interactive version",
                "Controlling vertex selection with restricted rules",
                "Adjusting the balance between rule simplicity and visual complexity of the result",
              ].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 4.5 Learnings */}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Learnings</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              This part of the project helped me consolidate concepts of iteration, controlled randomness, and the emergence of complex patterns. It also reinforced my experience in graphics programming, visual experimentation, and interactive application development.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Main Section "D — Julia and Mandelbrot Sets" */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Eye className="h-3.5 w-3.5" /> D — Julia and Mandelbrot Sets
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
          In section D, We worked on the generation and visualization of fractals in the complex plane, focusing on the Julia and Mandelbrot sets. This component required applying iterative algorithms to each pixel of the image and mapping between screen coordinates and mathematical coordinates.
        </p>

        <div className="space-y-12">

          {/* 5.2 Visual Rendering */}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Visual Rendering</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              The final image is constructed based on the number of iterations required for each point to diverge. This value is used to assign color to pixels, allowing the highlighting of details, complex boundaries, and transition zones characteristic of these fractals.
            </p>
            <div className="w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <img src="/Images/Julia.jpg" alt="Results" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Results</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Technical Challenges</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Transforming an abstract mathematical model into a clear visual representation",
                "Handling the computational cost of per-pixel rendering",
                "Choosing appropriate scales and viewing intervals",
                "Defining an informative and readable color palette",
                "Preserving visual detail in the most complex areas of the fractal",
              ].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Learnings</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              This section allowed me to deepen the relationship between mathematics, algorithms, and computational visualization. It was especially useful for understanding how simple iterative processes can originate extremely complex structures when observed graphically.
            </p>
          </div>
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
