import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, Activity, Hammer, CheckCircle2, Github, LayoutGrid, Image as ImageIcon, Code, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/projects/ImageProcessing")({
  head: () => ({
    meta: [
      { title: "Image Processing & Analysis — Pedro Marques" },
      { name: "description", content: "Academic project in Python about image analysis, compression, color spaces and quality assessment." },
      { property: "og:title", content: "Image Processing & Analysis — Pedro Marques" },
      { property: "og:description", content: "Academic project in Python about image analysis, compression, color spaces and quality assessment." },
    ],
  }),
  component: ImageProcessingPage,
});

function ImageProcessingPage() {
  return (
    <PageShell showBack backTo="/projects/python">
      {/* 1. Hero section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Academic Project
            </p>
            <h1 className="display text-5xl md:text-6xl">Image Processing & Analysis</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Academic project in Python focusing on multimedia processing and image analysis.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              This project explored various image processing and analysis techniques in Python, including image transformation and representation, compression, color space conversion, error control, and quality metrics evaluation. The goal was to apply fundamental multimedia processing concepts in practical and comparative experiments.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">Image Processing</span>
              <span className="chip">Compression</span>
              <span className="chip">Color Spaces</span>
              <span className="chip">Quality Metrics</span>
            </div>
          </div>

          <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project Details</p>
            <ul className="space-y-3 text-foreground">
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Type</span>
                <span>Academic Project</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Area</span>
                <span>Image Processing</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Focus</span>
                <span>Image analysis, compression, color spaces, error control, quality metrics</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full aspect-[21/9] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 overflow-hidden relative">
          <span className="italic text-sm">[Insert Image Processing Main Overview Image]</span>
          <p className="absolute bottom-4 right-6 text-[10px] uppercase tracking-widest bg-background/80 px-3 py-1 rounded-full backdrop-blur-sm">Project Overview</p>
        </div>
      </section>

      {/* 2. Context & 3. Overview */}
      <section className="surface-card p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> Context
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This project was developed in an academic context with the goal of exploring fundamental multimedia processing techniques through practical experiments in Python. The work focused on image representation, transformation, encoding, and evaluation, allowing the analysis of how different methods affect visual quality and information efficiency.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Eye className="h-3.5 w-3.5" /> Overview
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The project is presented as an applied study of image processing and analysis, articulating image operations with compression methods, color transformation, robustness mechanisms, and quantitative evaluation. The focus is on both the technical component and the ability to compare results and interpret the impact of each approach.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Project Components */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Project Components
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* 4.1 Image Analysis */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Image Analysis</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                A significant part of the work focused on observing and manipulating image properties, exploring ways to represent, transform, and analyze visual information in a computational context.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <span className="italic text-sm mb-4">[Insert Image Analysis Representation]</span>
              <p className="text-xs">Visual Representation</p>
            </div>
          </div>

          {/* 4.2 Compression */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 order-2 lg:order-1">
              <span className="italic text-sm mb-4">[Insert Compression Representation]</span>
              <p className="text-xs">Data Compression</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Compression</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The project included experiments related to image compression, analyzing the relationship between information reduction, storage efficiency, and the impact on the final visual quality.
              </p>
            </div>
          </div>

          {/* 4.3 Color Space Conversion */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Color Space Conversion</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Another important aspect was the conversion between different color spaces, allowing the study of how chromatic representation influences processing, visualization, and the efficiency of certain operations.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <span className="italic text-sm mb-4">[Insert Color Space Conversion Representation]</span>
              <p className="text-xs">Color Models</p>
            </div>
          </div>

          {/* 4.4 Error Control and Robustness */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 order-2 lg:order-1">
              <span className="italic text-sm mb-4">[Insert Error Control Representation]</span>
              <p className="text-xs">Robustness & Encoding</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Error Control and Robustness</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The work also addressed error control mechanisms and information reliability, exploring how encoding techniques can contribute to making the transmission or storage of visual data more robust.
              </p>
            </div>
          </div>

          {/* 4.5 Quality Evaluation */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Quality Evaluation</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The results were analyzed using quality metrics, allowing for the comparison of approaches and a more objective understanding of the visual and technical impact of the applied transformations.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <span className="italic text-sm mb-4">[Insert Quality Evaluation Representation]</span>
              <p className="text-xs">Metrics Assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Approach */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Activity className="h-3.5 w-3.5" /> Technical Approach
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          The project's approach combined practical implementation with comparative analysis. Instead of merely applying techniques directly, the work sought to observe the effects of each method on the image and interpret these effects based on quantitative and visual criteria.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Image processing in Python",
            "Comparative analysis of results",
            "Visual representation manipulation",
            "Information transformation and encoding",
            "Evaluation by quality metrics"
          ].map((item, idx) => (
            <div key={idx} className="rounded-3xl border border-border bg-foreground/5 p-5 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Learnings & 7. Tech */}
      <section className="surface-card p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> Learnings
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This project allowed for the consolidation of knowledge in digital image processing, color representation, compression, and quality evaluation. It also reinforced the understanding of the connection between algorithmic transformation, visual perception, and quantitative analysis of results.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Cpu className="h-3.5 w-3.5" /> Technologies & Skills
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "Image Processing", "Compression", 
                "Color Spaces", "Encoding", "Quality Evaluation", 
                "Comparative Analysis", "Computational Experimentation"
              ].map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. My Contribution */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Hammer className="h-3.5 w-3.5" /> My Contribution
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          On this page, the description of my contribution focuses on the components where I had the greatest technical involvement within the project. This section is structured so that I can easily replace the text with concrete contributions, such as implementing transformations, analyzing results, comparing metrics, image processing, or exploring specific techniques.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Code className="h-4 w-4" /> [PLACEHOLDER CONTRIBUTION 1]
            </h3>
            <p className="text-sm text-muted-foreground">Describe your specific implementation details or algorithm choices here.</p>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> [PLACEHOLDER CONTRIBUTION 2]
            </h3>
            <p className="text-sm text-muted-foreground">Detail the analysis of results, comparison of metrics or testing procedures.</p>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <ImageIcon className="h-4 w-4" /> [PLACEHOLDER CONTRIBUTION 3]
            </h3>
            <p className="text-sm text-muted-foreground">Explain any advanced image manipulation, color mapping or error control handling.</p>
          </div>
        </div>
      </section>

      {/* 9. Final Result / Gallery */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <LayoutGrid className="h-3.5 w-3.5" /> Result
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          This work demonstrated how different multimedia processing techniques can be applied, compared, and evaluated in a practical image analysis context. The page aims to convey a balanced combination of technical implementation, experimentation, and result interpretation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
            <span className="italic text-sm text-muted-foreground">[Insert Result 1 Image]</span>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
            <span className="italic text-sm text-muted-foreground">[Insert Result 2 Image]</span>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
            <span className="italic text-sm text-muted-foreground">[Insert Result 3 Image]</span>
          </div>
        </div>
      </section>

      {/* Final Navigation */}
      <section className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
            onClick={(e) => {
              e.preventDefault();
              window.open("#", "_blank"); // Add actual repository link here
            }}
          >
            <Github className="h-4 w-4" />
            View Repository
          </a>
        </div>
        
      <div className="flex flex-col items-center justify-center text-center">
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
      </div>
      </section>
    </PageShell>
  );
}
