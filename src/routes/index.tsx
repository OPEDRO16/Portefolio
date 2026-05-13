import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Sparkles, Hammer } from "lucide-react";
import { PageShell } from "@/components/portfolio/PageShell";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = [
  { label: "Java", to: "/projects/java" as const, blurb: "Backends, algorithms & OOP" },
  { label: "Python", to: "/projects/python" as const, blurb: "Data, scripts & ML" },
  { label: "Web", to: "/projects/web" as const, blurb: "React, Next & TypeScript" },
  { label: "3D / Game-Dev", to: "/projects/3d" as const, blurb: "Unity & Blender" },
  { label: "Design", to: "/projects/design" as const, blurb: "UI, branding & illustration" },
];

const skills: { name: string; slug?: string; customIcon?: React.ReactNode }[] = [
  { name: "Java", slug: "openjdk" },
  { name: "Python", slug: "python" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "MySQL", slug: "mysql" },
  { name: "Unity", slug: "unity" },
  { name: "Blender", slug: "blender" },
  { name: "Jupyter", slug: "jupyter" },
  { name: "Figma", slug: "figma" },
  { name: "Notion", slug: "notion" },
  { name: "IntelliJ IDEA", slug: "intellijidea" },
  { name: "WebStorm", slug: "webstorm" },
  { name: "VS Code", slug: "vscode" },
  { name: "Git", slug: "git" },
  { name: "Illustrator", slug: "illustrator" },
  { name: "Krita", slug: "krita" },
  { name: "Apache Tomcat", slug: "apachetomcat" },
  { name: "JSP", slug: "jsp" },
  { name: "Milanote", slug: "milanote" },
];

const nowItems = [
  { icon: Hammer, label: "Building", value: "a 2D game in Unity" },
];

function Index() {
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <PageShell>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Hero */}
        <div className="surface-card lg:col-span-2 p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="relative shrink-0">
            <div className="relative h-32 w-32 md:h-40 md:w-40 bg-foreground text-background flex items-center justify-center overflow-hidden">
              <span className="display text-6xl md:text-7xl">PM</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Hello, I'm
            </p>
            <h1 className="mt-3 display text-4xl md:text-6xl">
              Pedro Marques
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Currently studying Informatics and Multimedia Engineering at ISEL in Lisbon. {" "}
              When I'm not coding or studying, you can usually find me at the gym or playing some games.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip"><Sparkles className="h-3 w-3" /> Available for projects</span>
              <span className="chip"><MapPin className="h-3 w-3" /> Lisbon, PT</span>
            </div>
          </div>
        </div>

        {/* Portfolio nav */}
        <div className="surface-card p-6 md:p-8">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="mono text-xs uppercase tracking-[0.3em]">Projects</h2>
            <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {String(categories.length).padStart(2, "0")} sections
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            {categories.map((c, i) => (
              <li key={c.label}>
                <Link
                  to={c.to}
                  className="link-arrow w-full justify-between hover:bg-foreground hover:text-background hover:border-foreground"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-background/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-semibold">{c.label}</span>
                      <span className="text-xs text-muted-foreground/80">{c.blurb}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Now — what I'm up to */}
      <Link
        to="/now"
        className="surface-card group p-6 md:p-8 block transition-colors hover:bg-foreground hover:text-background hover:border-foreground"
      >
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            / Now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </h2>
          <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60">
            updated {new Date().toLocaleDateString("pt-PT", { month: "short", year: "numeric" })}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6">
          {nowItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 border-l border-foreground group-hover:border-background pl-4">
              <Icon className="h-4 w-4 mt-1 shrink-0" />
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60">{label}</p>
                <p className="text-sm md:text-base mt-1">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Skills marquee */}
      <section className="surface-card py-6 md:py-8">
        <div className="flex items-baseline justify-between mb-5 px-6 md:px-8">
          <h2 className="mono text-xs uppercase tracking-[0.3em]">Skills</h2>
          <span className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">tools & languages</span>
        </div>
        <div className="marquee">
          <div className="marquee__track items-center">
            {[...skills, ...skills].map((s, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 whitespace-nowrap"
                title={s.name}
              >
                {s.customIcon ? (
                  <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center text-foreground">
                    {s.customIcon}
                  </div>
                ) : s.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}/000000`}
                    alt={s.name}
                    width={40}
                    height={40}
                    className="h-8 w-8 md:h-10 md:w-10 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const t = e.currentTarget;
                      if (!t.dataset.localFallback) {
                        t.dataset.localFallback = "true";
                        t.src = `/Icons/${s.slug}.svg`;
                      } else {
                        t.style.display = "none";
                      }
                    }}
                  />
                ) : null}
                <span className="text-muted-foreground/50 text-2xl">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Web3Forms */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="surface-card lg:col-span-2 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">/ Contact</p>
            <p className="display mt-3 text-4xl md:text-6xl leading-[0.9]">
              Let's make<br />something.
            </p>
          </div>
          <p className="mt-6 mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact me!
          </p>
        </div>

        <div className="surface-card p-6 md:p-8">
          <form
            className="flex flex-col gap-3"
            onSubmit={async (e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const formData = new FormData(f);
              
              // ADICIONA A TUA CHAVE AQUI
              formData.append("access_key", "579b95c5-99c7-4c53-a8e5-edaf0559bd62");

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const result = await response.json();

                if (result.success) {
                  showNotification("Message sent successfully!", "success");
                  f.reset();
                } else {
                  showNotification("Error: " + result.message, "error");
                }
              } catch (error) {
                showNotification("Failed to send message. Please try again later.", "error");
              }
            }}
          >
            {/* Honeypot para evitar spam */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <label className="flex flex-col gap-1 text-xs">
              <span className="mono uppercase tracking-[0.2em] text-muted-foreground">Name *</span>
              <input required name="name" placeholder="Your name"
                className="border border-border bg-input/40 px-3 py-2 text-sm focus:outline-none focus:border-foreground focus:bg-card transition-colors" />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span className="mono uppercase tracking-[0.2em] text-muted-foreground">Email *</span>
              <input required type="email" name="email" placeholder="youremail@example.com"
                className="border border-border bg-input/40 px-3 py-2 text-sm focus:outline-none focus:border-foreground focus:bg-card transition-colors" />
            </label>
            <label className="flex flex-col gap-1 text-xs">
              <span className="mono uppercase tracking-[0.2em] text-muted-foreground">Message *</span>
              <textarea required name="message" rows={4} placeholder="Your message…"
                className="border border-border bg-input/40 px-3 py-2 text-sm focus:outline-none focus:border-foreground focus:bg-card transition-colors resize-none" />
            </label>
            <button type="submit"
              className="mt-2 group inline-flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2.5 mono text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-opacity">
              Send message
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </form>
        </div>
      </section>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 px-5 py-4 rounded-2xl shadow-xl z-50 mono text-xs uppercase tracking-widest text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </PageShell>
  );
}