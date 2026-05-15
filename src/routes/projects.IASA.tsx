import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, Activity, Hammer, CheckCircle2, Github, LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/projects/IASA")({
  head: () => ({
    meta: [
      { title: "AI Agents Development — Pedro Marques" },
      { name: "description", content: "Academic project in Python and Java about intelligent agents, control architectures and decision-making in simulated environments." },
      { property: "og:title", content: "AI Agents Development — Pedro Marques" },
      { property: "og:description", content: "Academic project in Python and Java about intelligent agents, control architectures and decision-making in simulated environments." },
    ],
  }),
  component: AIAgentsPage,
});

function AIAgentsPage() {
  return (
    <PageShell showBack backTo="/projects/python">
      {/* 1. Hero section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Academic Project
            </p>
            <h1 className="display text-5xl md:text-6xl">AI Agents Development</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Academic project on intelligent agents in Python and simulation environments in Java.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              This project explored the implementation of intelligent agents with different control architectures, from reactive approaches to deliberative and hybrid models. The goal was to study how an agent perceives the environment, decides actions, and adapts its behavior in simulated contexts with obstacles, exploration, goal collection, and model-based decision making.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">Java</span>
              <span className="chip">AI Agents</span>
              <span className="chip">Reactive Control</span>
              <span className="chip">Deliberative Control</span>
              <span className="chip">PDM</span>
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
                <span>Artificial Intelligence</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Focus</span>
                <span>Search, Simulation & Decision Processes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Context and 3. Overview */}
      <section className="surface-card p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> Context
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              This project was developed in the context of artificial intelligence applied to autonomous agents. The focus was on building different agent architectures and comparing control strategies based on immediate reaction, deliberative planning, and hybrid models with greater decision-making capacity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Eye className="h-3.5 w-3.5" /> Overview
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The project structure combines a main Python module for implementing the agents and their control logic, with a Java component dedicated to the game environment and simulation. This separation allowed experimenting with different mechanisms of perception, decision and action, observing how the agent's behavior varies depending on the architecture used.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Agent Architectures */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" /> Agent Architectures
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* 4.1 Reactive Agent */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Reactive Agent</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The reactive approach favors fast and local responses to environmental stimuli. In this model, the agent's behavior is organized into reactions such as approaching targets, obstacle avoidance, exploration, and collection, allowing direct and immediate action based on current perception.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <img loading="lazy" decoding="async" src="/Images/Reativo.webp" alt="Reactive Agent" className="w-2/3 h-auto mb-4" />
              <p className="text-xs">Reactive Agent</p>
            </div>
          </div>

          {/* 4.2 Deliberative Agent */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 order-2 lg:order-1">
              <img loading="lazy" decoding="async" src="/Images/Deliberativo.webp" alt="Deliberative Agent" className="w-full h-auto mb-4" />
              <p className="text-xs">Deliberative Agent</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Deliberative Agent</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The deliberative architecture introduces an internal representation layer of the environment and more structured decision mechanisms. Instead of responding only to immediate stimuli, the agent uses a world model, internal states, and action operators to plan or select behaviors in a more informed way.
              </p>
            </div>
          </div>

          {/* 4.3 Deliberative Agent with PDM */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Deliberative Agent with PDM</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The deliberative version with PDM adds a more sophisticated decision dimension, based on the evaluation of states and possible actions. This approach brings the project closer to classic planning and decision problems in uncertain environments, making the agent's behavior more strategic.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <img loading="lazy" decoding="async" src="/Images/DeliberativoPDM.webp" alt="Deliberative Agent with PDM" className="w-full h-auto mb-4" />
              <p className="text-xs">Deliberative Agent with PDM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Navigation */}
      <section className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex gap-4">
          {/* Link to repository */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/OPEDRO16/IASA", "_blank");
            }}
          >
            <Github className="h-4 w-4" />
            View Repository
          </a>
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
      </section>
    </PageShell>
  );
}
