import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  CheckCircle2,
  Github,
  Brain,
  MessagesSquare,
  BarChart3,
  Network,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/projects/imdb")({
  head: () => ({
    meta: [
      { title: "IMDb Movie Reviews Sentiment Analysis — Pedro Marques" },
      {
        name: "description",
        content:
          "Academic NLP and machine learning project for multiclass prediction of IMDb review ratings using TF-IDF, logistic regression, ridge regression and clustering.",
      },
      {
        property: "og:title",
        content: "IMDb Movie Reviews Sentiment Analysis — Pedro Marques",
      },
      {
        property: "og:description",
        content:
          "Academic NLP and machine learning project for multiclass prediction of IMDb review ratings using TF-IDF, logistic regression, ridge regression and clustering.",
      },
    ],
  }),
  component: IMDbSentimentAnalysisPage,
});

function IMDbSentimentAnalysisPage() {
  return (
    <PageShell showBack backTo="/projects/python">
      {/* Hero */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="mono mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Academic Project
            </p>

            <h1 className="display text-5xl md:text-6xl">
              IMDb Movie Reviews Sentiment Analysis
            </h1>

            <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-foreground">
              NLP and machine learning project focused on predicting IMDb review
              ratings from raw text using multiclass classification,
              regression-based comparison and unsupervised clustering.
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Instead of reducing sentiment analysis to a simple positive versus
              negative task, this project tackled the harder problem of
              predicting specific review ratings on a discrete scale. The work
              combined text preprocessing, TF-IDF feature engineering, logistic
              regression, ridge regression and clustering methods to analyse
              both sentiment polarity and the semantic structure of movie
              reviews.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">scikit-learn</span>
              <span className="chip">NLP</span>
              <span className="chip">TF-IDF</span>
              <span className="chip">Logistic Regression</span>
              <span className="chip">Ridge Regression</span>
              <span className="chip">Clustering</span>
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
                <span>Machine Learning & NLP</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Developed By
                </span>
                <span>Pedro Marques, Pedro Grilo & Gianni Floriddia</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Goal
                </span>
                <span>
                  Predict discrete IMDb ratings and analyse review semantics
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <BookOpen className="h-3.5 w-3.5" /> Project Scope
          </h2>
        </div>

        <p className="mb-8 max-w-4xl leading-relaxed text-muted-foreground">
          The project explored how textual movie reviews can be converted into
          structured numerical representations and used to predict user ratings.
          It also compared different supervised strategies and used
          unsupervised learning to reveal hidden thematic groupings in the
          dataset.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Text Representation
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reviews were cleaned and transformed into TF-IDF vectors using a
              shared vocabulary with 15,000 features and unigram-bigram
              modelling.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Supervised Learning
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Multiclass logistic regression was compared against ridge
              regression with quantized outputs to evaluate which approach is
              better suited to discrete review ratings.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-3 text-lg font-medium text-foreground">
              Unsupervised Learning
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              MiniBatch K-Means and hierarchical clustering were used to
              discover latent themes and topical sub-groups in review language.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Layers className="h-3.5 w-3.5" /> Methodology
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Dataset Analysis
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                The project started by loading the full IMDb review dataset and
                analysing the distribution of discrete ratings. The class
                histogram showed that extreme classes such as 1 and 10 are much
                more frequent than intermediate ratings, which helps explain the
                later differences in model performance across classes.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/IMDbHist.webp"
                alt="Histogram showing the distribution of IMDb ratings in the dataset"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Rating distribution across the IMDb dataset
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="mb-4 text-xl font-medium text-foreground">
              Preprocessing & Feature Engineering
            </h3>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">
              Reviews were cleaned by removing formatting tags and special
              characters, then lowercased for consistency. A shared TF-IDF
              vocabulary with 15,000 features and <code>ngram_range=(1, 2)</code>{" "}
              was used for both classification and regression, ensuring a fair
              comparison while also capturing context-rich expressions such as
              “not good” and “must see”.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Multiclass Classification
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                The main supervised approach used multinomial logistic
                regression with class balancing and cross-validation. This model
                was designed to predict exact discrete ratings directly, rather
                than assuming a continuous sentiment scale, and achieved
                noticeably stronger results than the regression-based
                alternative.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/IMDbConfusionClassification.webp"
                alt="Confusion matrix of the logistic regression multiclass classifier"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Confusion matrix of the multiclass logistic classifier
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="order-2 flex w-full flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4 lg:order-1 lg:w-[44%]">
              <img
                loading="lazy"
                decoding="async"
                src="/Images/IMDbConfusionRegression.webp"
                alt="Confusion matrix of the quantized ridge regression approach"
                className="mb-3 h-auto w-5/6 rounded-2xl"
              />
              <p className="text-center text-xs text-muted-foreground">
                Quantized ridge regression compared against classification
              </p>
            </div>

            <div className="order-1 flex-1 lg:order-2">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                Regression Comparison
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                To compare paradigms, the project also trained a ridge regressor
                and quantized its continuous predictions to the valid rating
                set. This made it possible to compare regression and
                classification on the same discrete target space and showed that
                regression struggles when the labels are not naturally
                continuous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Scale className="h-3.5 w-3.5" /> Model Comparison
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          A direct comparison between the two supervised approaches showed that
          treating ratings as discrete categories produced better predictive
          performance than modelling them as continuous values and quantizing
          the output afterwards.
        </p>

        <div className="overflow-hidden rounded-3xl border border-border bg-foreground/5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-sm font-medium text-foreground">
                    Metric
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-foreground">
                    Classification
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-foreground">
                    Regression (Quantized)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    Accuracy
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">0.393520</td>
                  <td className="px-6 py-4 text-sm text-foreground">0.273120</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    F1-Macro
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">0.348969</td>
                  <td className="px-6 py-4 text-sm text-foreground">0.261067</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <BarChart3 className="h-3.5 w-3.5" /> Results & Insights
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          The core supervised result of the project was that multiclass
          classification clearly outperformed quantized regression for this
          problem. The results also revealed a strong polarity effect: extreme
          ratings are much easier to recognise than nuanced middle-range
          opinions.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Classification achieved about 39% test accuracy",
            "Quantized regression achieved about 27% test accuracy",
            "Class 1 and class 10 obtained the strongest F1-scores",
            "Intermediate ratings were more frequently confused with adjacent classes",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-3xl border border-border bg-foreground/5 p-5"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-foreground/5 p-6">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            Why classification worked better
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            The comparison showed that review ratings should be treated as
            categories rather than as points on a smooth linear scale. Because
            the dataset skips neutral ratings 5 and 6, there is a qualitative
            jump between negative ratings (1–4) and positive ratings (7–10),
            which makes regression less suitable and introduces avoidable errors
            during quantization.
          </p>
        </div>
      </section>

      {/* Clustering */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Network className="h-3.5 w-3.5" /> Clustering & Topic Discovery
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          Beyond prediction, the project also explored the internal semantic
          structure of the review corpus. MiniBatch K-Means and hierarchical
          clustering were used to investigate whether reviews naturally group by
          topic, sub-genre or shared language patterns.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4">
            <img
              loading="lazy"
              decoding="async"
              src="/Images/IMDbElbow.webp"
              alt="Elbow method plot used to investigate the number of clusters"
              className="mb-3 h-auto w-5/6 rounded-2xl"
            />
            <p className="text-center text-xs text-muted-foreground">
              Elbow method used to investigate a suitable value of k
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-foreground/5 p-4">
            <img
              loading="lazy"
              decoding="async"
              src="/Images/IMDbDendrogram.webp"
              alt="Hierarchical clustering dendrogram showing thematic group structure"
              className="mb-3 h-auto w-5/6 rounded-2xl"
            />
            <p className="text-center text-xs text-muted-foreground">
              Hierarchical clustering used to inspect semantic structure
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-foreground/5 p-5">
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Topic-Oriented Clusters
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The clusters revealed interpretable sub-groups such as TV series
              reviews and action or martial-arts-related reviews.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-5">
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Semantic Continuum
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The elbow curve suggested a gradual decrease in inertia, pointing
              to a semantic continuum rather than perfectly separated islands of
              reviews.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-5">
            <h3 className="mb-2 text-sm font-medium text-foreground">
              Complementary Analysis
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The dendrogram supported the K-Means findings by showing both
              early thematic splits and broader sentiment-oriented language
              groupings.
            </p>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="surface-card p-6 md:p-10">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="mono flex items-center gap-2 text-xs uppercase tracking-[0.3em]">
            <Brain className="h-3.5 w-3.5" /> Key Learnings
          </h2>
        </div>

        <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
          This project strengthened practical skills in NLP, text vectorisation
          and machine learning evaluation. It also reinforced an important
          modelling lesson: choosing the right learning formulation can be just
          as important as the model itself.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Represent raw text reviews with TF-IDF and bigrams",
            "Evaluate multiclass models with cross-validation, confusion matrices and F1-score",
            "Compare classification and regression under a shared feature space",
            "Use clustering to extract hidden semantic structure from text corpora",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-3xl border border-border bg-foreground/5 p-5"
            >
              <MessagesSquare className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="mb-8 mt-16 flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex gap-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
            onClick={(e) => {
              e.preventDefault();
              window.open("#", "_blank");
            }}
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
            <div className="absolute inset-0 rounded-full bg-foreground/5 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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