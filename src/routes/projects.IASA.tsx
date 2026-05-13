import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Sparkles, ArrowRight, BookOpen, Cpu, Layers, Eye, Activity, Hammer, CheckCircle2, Github, LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/projects/IASA")({
  head: () => ({
    meta: [
      { title: "AI Agents Development — Pedro Marques" },
      { name: "description", content: "Projeto académico em Python e Java sobre agentes inteligentes, arquiteturas de controlo e tomada de decisão em ambientes simulados." },
      { property: "og:title", content: "AI Agents Development — Pedro Marques" },
      { property: "og:description", content: "Projeto académico em Python e Java sobre agentes inteligentes, arquiteturas de controlo e tomada de decisão em ambientes simulados." },
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
              <Sparkles className="h-3 w-3" /> Projeto Académico
            </p>
            <h1 className="display text-5xl md:text-6xl">AI Agents Development</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Projeto académico sobre agentes inteligentes em Python e ambientes de simulação em Java.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              Este projeto explorou a implementação de agentes inteligentes com diferentes arquiteturas de controlo, desde abordagens reativas até modelos deliberativos e híbridos. O objetivo foi estudar como um agente percebe o ambiente, decide ações e adapta o seu comportamento em contextos simulados com obstáculos, exploração, recolha de objetivos e tomada de decisão baseada em modelos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">Python</span>
              <span className="chip">Java</span>
              <span className="chip">AI Agents</span>
              <span className="chip">Controlo Reativo</span>
              <span className="chip">Controlo Deliberativo</span>
              <span className="chip">PDM</span>
            </div>
          </div>

          <div className="w-full lg:w-[28%] rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Detalhes do Projeto</p>
            <ul className="space-y-3 text-foreground">
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Tipo</span>
                <span>Projeto académico</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Área</span>
                <span>Inteligência Artificial</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-muted-foreground text-[11px] uppercase tracking-wider">Foco</span>
                <span>Procura, Simulação e Processos de Decisão</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="aspect-video w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          {/* [PLACEHOLDER IMAGEM HERO] */}
          <p className="text-xs mono uppercase tracking-widest">[PLACEHOLDER IMAGEM HERO]</p>
        </div>
      </section>

      {/* 2. Contexto e 3. Visão Geral */}
      <section className="surface-card p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> Contexto
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Este projeto foi desenvolvido no âmbito da inteligência artificial aplicada a agentes autónomos. O foco esteve na construção de diferentes arquiteturas de agente e na comparação entre estratégias de controlo baseadas em reação imediata, planeamento deliberativo e modelos híbridos com maior capacidade de decisão.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                <Eye className="h-3.5 w-3.5" /> Visão Geral
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A estrutura do projeto combina um módulo principal em Python para implementação dos agentes e da sua lógica de controlo, com uma componente em Java dedicada ao ambiente de jogo e à simulação. Esta separação permitiu experimentar diferentes mecanismos de perceção, decisão e ação, observando como o comportamento do agente varia consoante a arquitetura utilizada.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Arquiteturas de agente */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" /> Arquiteturas de Agente
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* 4.1 Agente reativo */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Agente reativo</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                A abordagem reativa privilegia respostas rápidas e locais aos estímulos do ambiente. Neste modelo, o comportamento do agente é organizado em reações como aproximação a alvos, evitação de obstáculos, exploração e recolha, permitindo uma atuação direta e imediata com base na perceção do momento.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              {/* [PLACEHOLDER IMAGEM AGENTE REATIVO] */}
              <p className="text-xs mono uppercase tracking-widest">[PLACEHOLDER IMAGEM AGENTE REATIVO]</p>
            </div>
          </div>

          {/* 4.2 Agente deliberativo */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 order-2 lg:order-1">
              {/* [PLACEHOLDER IMAGEM AGENTE DELIBERATIVO] */}
              <p className="text-xs mono uppercase tracking-widest">[PLACEHOLDER IMAGEM AGENTE DELIBERATIVO]</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Agente deliberativo</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                A arquitetura deliberativa introduz uma camada de representação interna do ambiente e mecanismos de decisão mais estruturados. Em vez de responder apenas ao estímulo imediato, o agente utiliza um modelo do mundo, estados internos e operadores de ação para planear ou selecionar comportamentos de forma mais informada.
              </p>
            </div>
          </div>

          {/* 4.3 Agente deliberativo com PDM */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Agente deliberativo com PDM</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                A versão deliberativa com PDM acrescenta uma dimensão de decisão mais sofisticada, baseada em avaliação de estados e ações possíveis. Esta abordagem aproxima o projeto de problemas clássicos de planeamento e decisão em ambientes incertos, tornando o comportamento do agente mais estratégico.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 aspect-[4/3] rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              {/* [PLACEHOLDER IMAGEM AGENTE PDM] */}
              <p className="text-xs mono uppercase tracking-widest">[PLACEHOLDER IMAGEM AGENTE PDM]</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comportamentos Implementados */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Activity className="h-3.5 w-3.5" /> Comportamentos Implementados
            </h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Aproximação a objetivos",
            "Evitação de obstáculos",
            "Exploração do ambiente",
            "Exploração com memória",
            "Recolha de elementos",
            "Representação do estado",
            "Modelo do mundo",
            "Operador de movimento"
          ].map((item, idx) => (
            <div key={idx} className="rounded-3xl border border-border bg-foreground/5 p-5 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Ambiente e Simulação */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Ambiente e Simulação
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
          Para testar os agentes, o projeto inclui uma componente de jogo/simulação em Java com classes dedicadas ao ambiente, perceção, ações, comandos, personagens e controlo. Esta infraestrutura serviu de base para observar o agente em funcionamento e analisar como diferentes arquiteturas se comportam perante o mesmo contexto.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium text-foreground mb-3">Ambiente</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O ambiente fornece os estímulos, eventos e restrições que condicionam o comportamento do agente, funcionando como cenário de teste para as diferentes abordagens de controlo.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium text-foreground mb-3">Personagem e Interação</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A personagem e os mecanismos de controlo permitem materializar as decisões do agente no mundo simulado, ligando perceção, decisão e ação de forma observável.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-lg font-medium text-foreground mb-3">Máquina de Estados</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A presença de uma máquina de estados reforça a organização do comportamento e ajuda a estruturar transições entre modos de atuação diferentes dentro da simulação.
            </p>
          </div>
        </div>

        <div className="aspect-video w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          {/* [PLACEHOLDER IMAGEM AMBIENTE] */}
          <p className="text-xs mono uppercase tracking-widest">[PLACEHOLDER IMAGEM AMBIENTE]</p>
        </div>
      </section>

      {/* 12. Navegação Final */}
      <section className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex gap-4">
          {/* Link para repositório (opcional) */}
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
            Ver Repositório
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
