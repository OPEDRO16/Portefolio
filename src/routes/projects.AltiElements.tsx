import { createFileRoute } from '@tanstack/react-router'
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, ShieldCheck, Network } from "lucide-react";

export const Route = createFileRoute('/projects/AltiElements')({
  head: () => ({
    meta: [
      { title: 'AltiElements — Pedro Marques' },
      { name: 'description', content: 'A 2D mobile game project developed in Unity.' },
      { property: 'og:title', content: 'AltiElements — Pedro Marques' },
      { property: 'og:description', content: 'A 2D mobile game project developed in Unity.' },
    ],
  }),
  component: AltiElements,
})

function AltiElements() {
  return (
    <PageShell showBack backTo="/projects/java">      
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Project
            </p>
            <h1 className="display text-5xl md:text-6xl">AltiElements</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              A 2D mobile game project developed in Unity.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
                Developed as the final project for Game Design course, AltiElements served as a practical application of the full game development lifecycle. The objective was not just to build a game, but to document and execute the entire process from the initial spark of an idea to a validated prototype.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Unity</span>
              <span className="chip">C#</span>
              <span className="chip">Game Development</span>
            </div>
          </div>

          <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
            <ul className="space-y-2 text-foreground">
              <li>Pedro Marques</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-border bg-background/50 p-4">
              <p className="mono uppercase tracking-[0.25em] text-[11px] mb-3">Download</p>
              <a
                href="https://github.com/OPEDRO16/AltiElementsAPK"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-foreground underline underline-offset-4 hover:text-foreground/80"
              >
                Get APK here: AltiElements.apk
              </a>
            </div>
          </div>
        </div>
        <div className="aspect-video w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          <img src="/Images/AltiElementsLogo.webp" alt="AltiElements Logo" className="w-full h-auto mb-4" />
          <p className="text-xs">Game Logo</p>
        </div>
      </section>

      {/* 2. Context Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Concept
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
            The game was created first on paper, where I brainstormed and iterated on the core mechanics, gameplay, and overall design. This phase was crucial for refining the concept and ensuring that the game would be engaging and fun to play.
        </p>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Characters design
          </h2>
        </div>
        <div className="w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          <img loading="lazy" decoding="async" src="/Images/AltiElementsCharacters.webp" alt="Characters" className="w-full rounded-2xl h-auto mb-4" />
          <p className="text-xs">Characters</p>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Game
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
            There is the game already in a playable state, some menus and a few levels were implemented. Some animations were made by me for the characters, but most of the assets were taken from the Unity Asset Store to speed up development and focus on the game design and mechanics.
        </p>
      </section>
      

      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Network className="h-3.5 w-3.5" /> AltiElements
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          The animations for the characteres were created by me 
          hand draw using a wacom tablet. This process was made for all
          the six characters including some special animations for their powers.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4">
            <img
              loading="lazy"
              decoding="async"
              src="/Images/AltiElementsSheet.webp"
              alt="Gameplay Image"
              className="mb-3 h-auto w-full rounded-2xl object-cover"
            />
            <p className="text-center text-xs text-muted-foreground">
              Character sheet
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4">
            <img
              loading="lazy"
              decoding="async"
              src="/Images/Animacao.gif"
              alt="Character Animation GIF"
              className="mb-3 h-full w-full flex-1 rounded-2xl object-cover translate-x-1"
            />
            <p className="text-center text-xs text-muted-foreground">
              Character animations
            </p>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Layers className="h-3.5 w-3.5" /> Some Screens
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Main Menu
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                The Main Menu features a clean and intuitive design,
                The signs have diferent objectives, one starts the game,
                another one shows the instructions and other show the settings.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/AltiElementsHome.webp"
                alt="Main Menu Image"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Main Menu
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="order-2 flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:order-1 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/AltiElementsLevels.webp"
                alt="Confusion matrix of the quantized ridge regression approach"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Levels Screen
              </p>
            </div>

            <div className="order-1 flex-1 lg:order-2">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Levels
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                The levels screen allows player to select the level he wants to play,
                on the first playthrough only the first level is unlocked, but as the player progress through the game more levels are unlocked and become available to play.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Level two
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                There is an exaple of an in-game level, in this level,
                the wind character needs to blow the boxes upwards in order to let the other character open his door by pressing the button.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/AltiElementsLevel.webp"
                alt="Level two gameplay Image"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Level two gameplay
              </p>
            </div>
          </div>
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
            href="/files/ConceptDocument.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Concept Document (pdf)
          </a>
          <a
            href="/files/GameDesignDocument.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Game Design Document (pdf)
          </a>
          <a
            href="/files/UsabilityReport.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Usability Report (pdf)
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
  )
}