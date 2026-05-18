import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  Activity,
  CheckCircle2,
  Github,
  ScanSearch,
  Shapes,
  Boxes,
} from "lucide-react";

export const Route = createFileRoute("/projects/LegoRecognition")({
  head: () => ({
    meta: [
      { title: "Lego Brick Recognition with Computer Vision — Pedro Marques" },
      {
        name: "description",
        content:
          "Academic computer vision project for detecting, counting and classifying rectangular Lego bricks using Python, OpenCV and morphological processing.",
      },
      {
        property: "og:title",
        content: "Lego Brick Recognition with Computer Vision — Pedro Marques",
      },
      {
        property: "og:description",
        content:
          "Academic computer vision project for detecting, counting and classifying rectangular Lego bricks using Python, OpenCV and morphological processing.",
      },
    ],
  }),
  component: LegoRecognitionPage,
});

function LegoRecognitionPage() {
  return (
    <PageShell showBack backTo="/projects/python">
      {/* Hero */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Academic Project
            </p>

            <h1 className="display text-5xl md:text-6xl">
              Lego Brick Recognition with Computer Vision
            </h1>

            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Computer vision project focused on detecting, counting and
              classifying rectangular Lego bricks from images with a blue
              background.
            </p>

            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              This project explored a full image-processing pipeline using
              Python, OpenCV and Matplotlib. The solution combines background
              removal, binarization, morphological refinement, contour
              extraction and geometric analysis to classify Lego pieces such as
              2x2, 2x4, 2x6 and 2x8, while also identifying irregular or
              unclassified objects.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">OpenCV</span>
              <span className="chip">NumPy</span>
              <span className="chip">Matplotlib</span>
              <span className="chip">Computer Vision</span>
              <span className="chip">Segmentation</span>
              <span className="chip">Classification</span>
            </div>
          </div>

          <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">
              Project Details
            </p>
            <ul className="space-y-3 text-foreground">
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                  Type
                </span>
                <span>Academic Project</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                  Area
                </span>
                <span>Computer Vision</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
                  Developed By
                </span>
                <span>Pedro Marques & Gianni Floriddia</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5" /> Project Scope
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-4xl mb-8">
          The project was developed as a practical computer vision exercise
          centred on rectangular Lego piece recognition. It combines image
          preprocessing, segmentation, morphological correction and geometric
          classification into a reusable workflow.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Segmentation
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Background removal through thresholding and binary-mask creation
              based on the blue channel of the image.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Refinement
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Morphological closing and erosion were applied to fill holes and
              separate nearby pieces before contour extraction.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Classification
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contours were analysed using area, rectangular shape validation
              and aspect ratio to classify pieces into known Lego categories.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Layers className="h-3.5 w-3.5" /> Processing Pipeline
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Image Reading & Inspection
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The workflow starts by reading the image with OpenCV and
                converting it from BGR to RGB for visualisation. The team also
                analysed the colour histograms of the image channels to better
                understand the blue background and decide how to separate it
                from the Lego pieces.
              </p>
            </div>

            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/RGBhist.webp"
                alt="RGB histograms used to analyse the image channels before segmentation"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                RGB histogram analysis used to study the blue background
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-2 lg:order-1">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/BackgroundRemove.webp"
                alt="Binary mask after removing the blue background from the Lego image"
                className="w-4/5 rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Binary segmentation after removing the background
              </p>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Background Removal
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                After testing different ideas for identifying the background,
                the final approach used the blue channel directly and applied a
                threshold value chosen empirically. This produced a binary image
                where the background became white and the pieces could be
                isolated for later processing.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Morphological Refinement
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The binary mask was refined in two main stages. Closing was used
                to fill holes caused by piece relief, lighting and colour
                variations, while erosion was later applied to separate pieces
                that had become slightly connected after the closing step.
              </p>
            </div>

            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/Morphologic.webp"
                alt="Intermediate result after applying morphological closing and erosion"
                className="w-4/5 rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Morphological processing used to refine the binary mask
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-2 lg:order-1">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/Classificadas.webp"
                alt="Final detection result with contours and labels drawn on the original image"
                className="w-4/5 rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Final classification result with contours and labels
              </p>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Contours & Piece Recognition
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Once the mask was clean enough, the project extracted external
                contours and analysed each object through contour area,
                rectangularity and minimum-area bounding rectangles. This made
                it possible to estimate width, height and aspect ratio even for
                slightly rotated pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Shapes className="h-3.5 w-3.5" /> Classification Logic
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          The classification stage relied on a combination of geometric rules.
          Small noisy contours were ignored, only approximately rectangular
          shapes were considered for regular brick classes, and the final label
          was assigned through thresholds defined from area and aspect-ratio
          analysis.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "2x2 pieces identified through low area and near-square proportions",
            "2x4, 2x6 and 2x8 distinguished mainly by area and width-height ratio",
            "minAreaRect used instead of boundingRect for better rotation tolerance",
            "Non-rectangular or ambiguous objects labelled as irregular or not identified",
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-foreground/5 p-5 flex items-start gap-3"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex gap-4">
          <a
            href="https://github.com/OPEDRO16/PIV_TP1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
          >
            <Github className="h-4 w-4" />
            View Repository
          </a>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="group relative flex cursor-pointer flex-col items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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