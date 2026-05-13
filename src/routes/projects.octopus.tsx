import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, Palette, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects/octopus")({
  head: () => ({
    meta: [
      { title: "Octoplus — Your Name" },
      { name: "description", content: "Octopus brand project: comprehensive branding, marketing campaign and visual identity development." },
      { property: "og:title", content: "Octoplus — Your Name" },
      { property: "og:description", content: "Octoplus brand project: comprehensive branding, marketing campaign and visual identity development." },
    ],
  }),
  component: OctoplusPage,
});

function OctoplusPage() {
  return (
    <PageShell showBack backTo="/projects/design">
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Project
            </p>
            <h1 className="display text-5xl md:text-7xl">Octoplus</h1>
            <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
              This was a project for my visual design class where I had to create a brand based on an animal. <br />
              I chose yellow ringed octopus because of its unique characteristics.
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-4 rounded-3xl border border-border bg-foreground/5 p-4 text-sm text-muted-foreground">
            <span className="mono uppercase tracking-[0.25em]">Status</span>
            <span className="text-foreground">Completed</span>
            <span className="mono uppercase tracking-[0.25em]">Area</span>
            <span className="text-foreground">Design & Branding</span>
            <span className="mono uppercase tracking-[0.25em]">Tools</span>
            <span className="text-foreground">Illustrator, Krita</span>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Main Logotype & Symbol Variations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/NormalOctoplus.svg" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Main Logotype</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/BlackOctoplus.svg" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Monochromatic variation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Mockups & Applications
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4 items-start">
          <div className="grid grid-cols-1 gap-4">
            <div className="aspect-[5/4] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-3">
              <div>
                <img loading="lazy" decoding="async" src="/Images/Bag.webp" alt="Bag" className="w-full h-auto mb-4" />
                <p className="text-xs">Bag</p>
              </div>
            </div>
            <div className="aspect-[5/4] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-3">
              <div>
                <img loading="lazy" decoding="async" src="/Images/Sweat.webp" alt="SweatShirt" className="w-full h-auto mb-4" />
                <p className="text-xs">SweatShirt</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-3">
            <div className="flex flex-col items-center justify-center w-full">
              <img loading="lazy" decoding="async" src="/Images/wall.webp" alt="Wall Plate" className="w-full h-auto mb-4" />
              <p className="text-xs">Wall Plate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <ArrowRight className="h-3.5 w-3.5" /> Instagram Carousel Post
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/carrosel1.webp" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Carousel 1</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/carrosel2.webp" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Carousel 2</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div>
              <img loading="lazy" decoding="async" src="/Images/carrosel3.webp" alt="Main Logotype & Symbol" className="w-full h-auto mb-4" />
              <p className="text-xs">Carousel 3</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
        <section className="md:col-span-3 surface-card p-6 md:p-10 flex flex-col gap-6">
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <ArrowRight className="h-3.5 w-3.5" /> Outdoor
              </h2>
            </div>
            <div className="rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
              <div className="w-full">
                <img loading="lazy" decoding="async" src="/Images/Outdoor.webp" alt="Outdoor" className="w-full h-auto mb-4" />
                <p className="text-xs">Outdoor</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-background/50 p-5 text-sm text-muted-foreground">
            <p className="mono text-[11px] uppercase tracking-[0.25em] mb-3">+ INFO</p>
            <p className="leading-relaxed mb-4">
              For more information about the project you can access the following files:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href="/files/Projeto1.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-foreground/5 px-4 py-3 text-sm transition hover:bg-foreground/10"
              >
                Project Part1 (PDF)
              </a>
              <a
                href="/files/Projeto2DV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-foreground/5 px-4 py-3 text-sm transition hover:bg-foreground/10"
              >
                Project Part2 (PDF)
              </a>
              <a
                href="/files/GraficStandarts.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-border bg-foreground/5 px-4 py-3 text-sm transition hover:bg-foreground/10"
              >
                Graphic Standards (PDF)
              </a>
            </div>
          </div>
        </section>

        <section className="md:col-span-2 surface-card p-6 md:p-10 flex flex-col">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <ArrowRight className="h-3.5 w-3.5" /> Mupi
            </h2>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 flex items-center justify-center text-muted-foreground text-center p-4">
            <div className="w-full">
              <img loading="lazy" decoding="async" src="/Images/Mupi.webp" alt="Mupi" className="w-full h-auto mb-4" />
              <p className="text-xs">Mupi</p>
            </div>
          </div>
        </section>
      </div>

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
