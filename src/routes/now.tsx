import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Hammer, BookOpen, Headphones, Calendar } from "lucide-react";

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
        <h1 className="display text-5xl md:text-7xl">/ Now</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
          Currently focused on ending my degree working on my final project.
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
          Currently building the final project for my degree, A.S.T.R.A, an 3D local co-op game made in Unity.
          The game is focused on providing people whit vision and hearing impairments a gaming experience as well as giving people without impairments a way to experience it from their prespective.
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

    </PageShell>
  );
}
