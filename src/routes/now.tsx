import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { ArrowUpRight, Calendar, FileText, Hammer, Play, Download } from "lucide-react";

export const Route = createFileRoute("/now")({
  head: () => ({
    meta: [
      { title: "Now — Your Name" },
      { name: "description", content: "What I'm currently building, reading and listening to." },
      { property: "og:title", content: "Now — Your Name" },
      { property: "og:description", content: "What I'm currently building, reading and listening to." },
    ],
  }),
  component: NowPage,
});

function NowPage() {
  return (
    <PageShell showBack backTo="/">
      {/* Header */}
      <section className="surface-card p-6 md:p-10">
        <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
          <Calendar className="h-3 w-3" />
          {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
        <h1 className="display text-5xl md:text-7xl">/ Last Project</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
          This is my final project for my degree at ISEL.
        </p>
      </section>

      {/* Current project — Building */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Hammer className="h-3.5 w-3.5" /> Building
          </h2>
          <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">In progress</span>
        </div>
        <h3 className="display text-3xl md:text-5xl mb-4">A.S.T.R.A </h3>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          A.S.T.R.A is an 3D local co-op game made in Unity.
          The game is focused on providing people with vision and hearing impairments a gaming experience as well as giving people without impairments a way to experience it from their perspective.
        </p>

        {/* Media gallery — placeholders, swap for real images/videos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground mono text-[11px] uppercase tracking-[0.25em]">
            <img src="/Images/Astra1.webp" alt="Screenshot 01" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-video bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground mono text-[11px] uppercase tracking-[0.25em]">
            <img src="/Images/Astra2.webp" alt="Screenshot 02" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Video placeholder — replace src with your real video URL */}
        <div className="mt-4">
          <div className="aspect-video bg-foreground border border-foreground flex items-center justify-center text-background mono text-[11px] uppercase tracking-[0.25em]">
            <video controls className="w-full aspect-video bg-foreground" poster="/now/poster.jpg">
            <source src="/Images/Astra3.mp4" type="video/mp4" />
          </video>
          </div>
        </div>

        {/* Media gallery — placeholders, swap for real images/videos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-video bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground mono text-[11px] uppercase tracking-[0.25em]">
            <video controls className="w-full h-full object-cover">
              <source src="/Images/Astra4.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="aspect-video bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground mono text-[11px] uppercase tracking-[0.25em]">
            <img src="/Images/Astra5.webp" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Download className="h-3.5 w-3.5" /> Resources
          </h2>
          <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            A.S.T.R.A
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="https://drive.google.com/drive/folders/1fDWMSMA1nfo1ixwYXy_73Cyw0AF5MDQQ?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-foreground/5 p-5 transition hover:bg-foreground hover:text-background"
          >
            <Download className="h-5 w-5 mb-8 transition-transform group-hover:-translate-y-1" />
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              Windows build
            </p>
            <p className="mt-2 flex items-center justify-between font-medium">
              Download project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/19TJXGDMnrpdsXKLAFE-XYt105jb8eEG8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-foreground/5 p-5 transition hover:bg-foreground hover:text-background"
          >
            <Play className="h-5 w-5 mb-8 transition-transform group-hover:translate-x-1" />
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              Video demonstration
            </p>
            <p className="mt-2 flex items-center justify-between font-medium">
              Watch demo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </p>
          </a>
          <a
            href="/files/Projeto1.pdf"
            target="_blank"
            rel="noreferrer"
            className="group border border-border bg-foreground/5 p-5 transition hover:bg-foreground hover:text-background"
          >
            <FileText className="h-5 w-5 mb-8 transition-transform group-hover:-translate-y-1" />
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
              Project report
            </p>
            <p className="mt-2 flex items-center justify-between font-medium">
              Open PDF <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </p>
          </a>
        </div>
      </section>

    </PageShell>
  );
}
