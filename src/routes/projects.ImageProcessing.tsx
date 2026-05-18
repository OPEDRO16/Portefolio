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
  Shield,
} from "lucide-react";

export const Route = createFileRoute("/projects/ImageProcessing")({
  head: () => ({
    meta: [
      { title: "Image Processing & Analysis — Pedro Marques" },
      {
        name: "description",
        content:
          "Academic Python project exploring image analysis, compression, bit planes, dithering, binary representation and error control.",
      },
      {
        property: "og:title",
        content: "Image Processing & Analysis — Pedro Marques",
      },
      {
        property: "og:description",
        content:
          "Academic Python project exploring image analysis, compression, bit planes, dithering, binary representation and error control.",
      },
    ],
  }),
  component: ImageProcessingPage,
});

function ImageProcessingPage() {
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
              Image Processing & Analysis
            </h1>

            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Academic project in Python focused on practical experiments in
              image representation, compression, binary processing and error
              control.
            </p>

            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              This project explored key concepts in multimedia and information
              processing through a set of applied image-processing exercises.
              The work covered image properties, grayscale conversion,
              histograms, JPEG compression, SNR and PSNR evaluation, bit-plane
              analysis, Floyd–Steinberg dithering, binary representation and
              error-control experiments in noisy channels.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">NumPy</span>
              <span className="chip">OpenCV</span>
              <span className="chip">Matplotlib</span>
              <span className="chip">Image Processing</span>
              <span className="chip">Compression</span>
              <span className="chip">Error Control</span>
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
                <span>Image Processing & Analysis</span>
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
          The notebook explores several key concepts in multimedia and
          information processing. The work is structured around three main
          areas: image-processing fundamentals, image compression techniques,
          and error-control coding applied to visual data.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Fundamentals
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Understanding image properties with dtype and shape, grayscale
              conversion, histograms and bit-plane representation.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Compression
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              JPEG compression with different quality levels, compression rate
              comparison and binary image representation with dithering.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Error Control
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Binary image conversion, noisy-channel simulation, BER evaluation
              and repetition-based error correction for more reliable image
              transmission.
            </p>
          </div>
        </div>
      </section>

      {/* Main Experiments */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Layers className="h-3.5 w-3.5" /> Main Experiments
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Grayscale Conversion
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                One of the first transformations in the project was the
                conversion of the RGB image to grayscale. This created the basis
                for later histogram analysis, bit-plane decomposition and binary
                processing experiments.
              </p>
            </div>
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/LenaGray.webp"
                alt="Grayscale conversion used for histogram and bit-plane analysis"
                className="w-3/4 rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Grayscale conversion used for later analysis
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-2 lg:order-1">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/HistLena.webp"
                alt="Histogram of the grayscale image showing intensity distribution"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Histogram used to inspect grayscale intensity distribution
              </p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Histogram Analysis
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The grayscale image histogram was used to inspect the
                distribution of intensity values and count the effective gray
                levels present in the image. This gave a clearer understanding
                of tonal structure before moving to binary and compressed
                representations.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Bit-Plane Decomposition
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The project decomposed the grayscale image into eight bit
                planes, showing how visual information is distributed across
                bits. This makes it easy to observe which planes carry fine
                noise and which preserve the most relevant structure of the
                image.
              </p>
            </div>
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/BitPlanes.webp"
                alt="Bit-plane decomposition illustrating how image information is distributed across bits"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Eight bit planes extracted from the grayscale image
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-2 lg:order-1">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/DitherLena.webp"
                alt="Floyd–Steinberg dithering result for binary image representation"
                className="w-3/4 rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Floyd–Steinberg dithering for binary representation
              </p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Compression & Dithering
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Compression was explored through JPEG quality comparison,
                compression-rate measurement and quality assessment using SNR
                and PSNR. The notebook also implemented Floyd–Steinberg
                dithering to create a binary approximation of the image and
                evaluate how much visual structure can be preserved with only 1
                bit per pixel.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Generated Pattern
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Beyond processing existing images, the project also included
                synthetic image generation. A radial black-and-white pattern was
                created from angular sectors, showing how mathematical
                structure can be translated into an image matrix.
              </p>
            </div>
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/Pattern.webp"
                alt="Generated binary radial pattern created from angular sectors"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Radial binary pattern generated algorithmically
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-2 lg:order-1">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/DilbertGray.webp"
                alt="Control image used for binary conversion, histogram analysis and noisy channel experiments"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Control image used for binary conversion and error-control analysis
              </p>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Error Control Experiments
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The final part of the project focused on error control in binary
                image transmission. After analysing the control image and
                converting it into a binary representation, the work simulated
                noisy channels by randomly flipping bits with different
                probabilities and measured the resulting BER (Bit Error Rate).
                To improve robustness, repetition-based error-correction
                schemes were tested with multiple redundancy levels, showing
                that increasing the number of copies per bit significantly
                improves the recovered image quality.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-foreground/5 p-5">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Noisy Channel Simulation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The binary control image was transmitted through simulated
                    noisy channels with different bit-flip probabilities,
                    allowing the comparison between visual degradation and BER
                    growth.
                  </p>
                </div>

                <div className="rounded-3xl border border-border bg-foreground/5 p-5">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    Repetition Codes
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Repetition coding was used as a simple error-control
                    strategy. Different redundancy values were tested and
                    decoded by majority vote, showing that larger N values lead
                    to more reliable image recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Control Results */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Shield className="h-3.5 w-3.5" /> Error Control Results
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          The error-control section combined histogram-based binary conversion,
          noisy-channel simulation and simple coding strategies to study image
          transmission reliability. The experiments showed that BER increases
          with the probability of bit flipping, while repetition codes improve
          the quality of the recovered image as redundancy increases.
        </p>

        <div className="grid gap-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/Ruido1.webp"
                alt="Grid of binary control images degraded with different noisy channel probabilities"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Visual comparison of noisy-channel outputs for different bit-flip probabilities
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                BER Under Noise
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-5">
                A noisy binary channel was simulated by flipping image bits with
                predefined probabilities. The resulting BER values closely
                followed the probability of flipping, confirming the expected
                relationship between channel noise and transmission error.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-foreground/5 p-4">
                  <p className="text-sm text-foreground">
                    BER grows as the bit-flip probability increases.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-foreground/5 p-4">
                  <p className="text-sm text-foreground">
                    Visual degradation becomes increasingly visible at higher noise levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Repetition-Based Recovery
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mb-5">
                The project used repetition codes by duplicating each bit N
                times and decoding the received groups using majority vote.
                Testing several values of N showed that higher redundancy
                greatly improves the recovered image, with the strongest result
                in the notebook appearing for N = 61.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-foreground/5 p-4">
                  <p className="text-sm text-foreground">
                    Increasing redundancy improves robustness against noise.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-foreground/5 p-4">
                  <p className="text-sm text-foreground">
                    Majority-vote decoding restores much of the lost binary structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[44%] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center p-4 order-1 lg:order-2">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/Ruido.webp"
                alt="Comparison of decoded binary images using repetition codes with different redundancy values"
                className="w-full rounded-2xl h-auto mb-3"
              />
              <p className="text-xs text-center text-muted-foreground">
                Comparison of decoded images for different repetition-code sizes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
            <Activity className="h-3.5 w-3.5" /> Metrics & Analysis
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          The notebook did not rely only on visual inspection. Different
          transformations, compression choices and transmission scenarios were
          compared using quantitative indicators, helping relate perceptual
          quality to signal degradation, storage efficiency and channel noise.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Compression rate comparison between JPEG outputs",
            "Signal quality evaluation with SNR",
            "Peak quality evaluation with PSNR",
            "BER analysis for noisy binary transmission",
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
      <section className="mt-16 mb-8 flex flex-col items-center justify-center text-center">
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
      </section>
    </PageShell>
  );
}