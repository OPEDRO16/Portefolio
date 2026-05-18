import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  CheckCircle2,
  Github,
  Cpu,
  Wrench,
  Brain,
  Database,
  Search,
  Image as ImageIcon,
} from "lucide-react";

export const Route = createFileRoute('/projects/imageSearch')({
  head: () => ({
    meta: [
      { title: "Image Search Engine — Pedro Marques" },
      {
        name: "description",
        content:
          "Browser-based visual feature image search engine, developed entirely with JavaScript.",
      },
      {
        property: "og:title",
        content: "Image Search Engine — Pedro Marques",
      },
      {
        property: "og:description",
        content:
          "Browser-based visual feature image search engine, developed entirely with JavaScript.",
      },
    ],
  }),
  component: ImageSearchPage,
});

function ImageSearchPage() {
  return (
    <PageShell showBack backTo="/projects/web">
      {/* Hero Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mono mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Group Academic Project
            </p>

            <h1 className="display text-5xl md:text-6xl">
              Image Search Engine
            </h1>

            <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-foreground">
              Browser-based visual feature image search engine, developed
              entirely with JavaScript.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Academic project exploring Content-Based Image Retrieval (CBIR)
              techniques. The application allows searching a database using a
              query image, utilizing visual descriptors like color, texture, and
              shape, calculated and compared in real-time within the browser.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">JavaScript</span>
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
            </div>
          </div>

          <div className="w-full rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground lg:w-[28%]">
            <p className="mono mb-3 text-xs uppercase tracking-[0.25em]">
              Project Details
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Type
                </span>
                <span>Academic Project</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Area
                </span>
                <span>Image Processing & CBIR</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Developed By
                </span>
                <span>Pedro Marques & Group</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-10 flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4">
          <img
            loading="lazy"
            decoding="async"
            src="/Images/ImageSearch.webp"
            alt="Image Search Engine main interface"
            className="mb-3 h-auto w-5/6 rounded-2xl"
            onError={(e) => {
              const t = e.currentTarget;
              if (!t.dataset.fallback) {
                t.dataset.fallback = "true";
                t.style.display = "none";
                t.nextElementSibling?.classList.remove("hidden");
              }
            }}
          />
          <div className="hidden flex-col items-center justify-center py-20 text-muted-foreground opacity-50">
            <ImageIcon className="mb-4 h-10 w-10" />
            <p className="mono text-xs uppercase tracking-widest">
              Hero Image Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <BookOpen className="h-3.5 w-3.5" /> Context
          </h2>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          This was an academic project in the field of image processing and
          retrieval. The goal was to build a functional Content-Based Image
          Retrieval (CBIR) engine entirely in the browser, without relying on
          servers or external APIs. The image database and all computations are
          handled locally using JavaScript.
        </p>
      </section>

      {/* Main Section: Visual Search Engine */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Layers className="h-3.5 w-3.5" /> Visual Search Engine
          </h2>
        </div>

        <p className="mb-8 max-w-4xl leading-relaxed text-muted-foreground">
          The application acts as a content-based image retrieval engine. The
          user provides a query image, and the system compares it against all
          images in the database, returning the results sorted by visual
          similarity.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {/* How it works */}
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              How it works
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              When the user uploads a query image, the application extracts
              its visual descriptors using the browser's Canvas API. These
              descriptors are then compared with the pre-calculated
              descriptors of each image in the database. The result is an
              ordered list of the most visually similar images.
            </p>
          </div>

          {/* Visual Descriptors */}
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Visual Descriptors
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The core of the system relies on visual descriptors—numerical
              representations of image features. We implemented descriptors
              based on color (color histograms), texture, and other
              pixel-by-pixel properties extracted via the Canvas API. These
              descriptors capture the "visual identity" of each image in a
              compact and comparable format.
            </p>
          </div>

          {/* Ranking and similarity system */}
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Ranking & Similarity
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For each search, the engine calculates the distance between the
              query image's descriptor and the descriptors of every image in
              the database. The images are sorted by similarity value, showing
              the closest matches first. This process occurs entirely in the
              browser, without any external server requests.
            </p>
          </div>
        </div>
      </section>

      {/* Local DB and Challenges */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Cpu className="h-3.5 w-3.5" /> Database & Challenges
          </h2>
        </div>

        <div className="mb-10 rounded-3xl border border-border bg-foreground/5 p-6">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-medium text-foreground">
            <Database className="h-4 w-4" /> Local JSON Database
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            The image database is managed in a JSON format, containing metadata
            and pre-calculated descriptors for each image. This approach allows
            the application to run completely autonomously and offline, with no
            backend required.
          </p>
        </div>
      </section>

      {/* Resources */}
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
            href="/files/relatorioIS.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            Report (pdf)
          </a>
          <a
            href="https://github.com/OPEDRO16/Image_Search"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground transition hover:bg-foreground/10"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="mt-16 mb-8 flex flex-col items-center justify-center text-center">
          <div
            className="group relative flex cursor-pointer flex-col items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
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
