import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Cpu,
  Layers,
  Eye,
  Database,
  Code,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";

export const Route = createFileRoute("/projects/VetCare")({
  head: () => ({
    meta: [
      { title: "VetCare — Pedro Marques" },
      {
        name: "description",
        content:
          "Academic management system for veterinary clinics with MySQL, Java JSP/Servlet and Apache Tomcat.",
      },
      { property: "og:title", content: "VetCare — Pedro Marques" },
      {
        property: "og:description",
        content:
          "Academic management system for veterinary clinics with MySQL, Java JSP/Servlet and Apache Tomcat.",
      },
    ],
  }),
  component: VetCarePage,
});

function VetCarePage() {
  return (
    <PageShell showBack backTo="/projects/web">
      {/* 1. Hero section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10">
          <div className="max-w-3xl">
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="h-3 w-3" /> Group Academic Project
            </p>
            <h1 className="display text-5xl md:text-6xl">VetCare</h1>
            <p className="mt-5 text-xl font-medium text-foreground max-w-2xl leading-relaxed">
              Academic management system for veterinary clinics with MySQL, Java JSP/Servlet and
              Apache Tomcat.
            </p>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              VetCare is a management system developed in an academic context to support the
              operation of veterinary clinics through a relational database and a Java web
              application. The project integrates the management of animals, pet owners,
              veterinarians, schedules, clinical services, medical history, and operational reports
              into a single, structured solution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip">MySQL</span>
              <span className="chip">Java</span>
              <span className="chip">JSP/Servlet</span>
              <span className="chip">Tomcat</span>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground">
            <p className="mono uppercase tracking-[0.25em] text-xs mb-3">Project made by</p>
            <ul className="space-y-2 text-foreground">
              <li>Pedro Marques</li>
              <li>Pedro Grilo</li>
              <li>Gianni Fiordida</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Context Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Context
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          This project was developed with the goal of creating an integrated solution for veterinary
          clinic management, linking data modeling, relational persistence, and web development. The
          application was designed to centralize clinical information, organize day-to-day
          operations, and provide different interfaces and functionalities depending on the user
          type.
        </p>
      </section>

      {/* 3. System Overview Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5" /> System Overview
            </h2>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          The project structure combines a relational database with a Java web application,
          organized into layers of controllers, DAOs, models, and JSP pages. This organization
          allowed separating the business logic, data access, and interface, making the system more
          modular, reusable, and adapted to different usage flows.
        </p>
      </section>

      {/* 4. Architecture and Organization Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Layers className="h-3.5 w-3.5" /> Architecture and Organization
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-10">
          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
              <Code className="h-4 w-4" /> Controllers
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The controller layer handles the main functional flows of the application, including
              authentication, management of animals, pet owners, veterinarians, schedules, services,
              medical history, and reports.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
              <Database className="h-4 w-4" /> DAO and Persistence
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The DAO layer centralizes access to the database and isolates the persistence logic,
              facilitating communication between the application and the underlying relational
              model.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4" /> Domain Models
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The system defines specific entities of the veterinary domain, such as animals,
              services, schedules, users, pet owners, veterinarians, and medical history, allowing
              the information to be structured clearly and consistently.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-foreground/5 p-6">
            <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
              <Eye className="h-4 w-4" /> Web Interface
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The interface was built with JSP pages tailored to different user profiles, including
              dashboards and specific flows for administration, clients, reception, and
              veterinarians.
            </p>
          </div>
        </div>

        <div className="aspect-video w-full rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4">
          <img src="/Images/modelo-ea.webp" alt="EA Model" className="w-full rounded-2xl h-auto mb-4" />
          <p className="text-xs">EA Model</p>
        </div>
      </section>

      {/* 5. Key Features Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Key Features
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Authentication and user management",
            "Animal management and their details",
            "Pet owner and veterinarian management",
            "Creation and management of schedules",
            "Scheduling, cancellation, and rescheduling of services",
            "Registration and consultation of medical history",
            "Animals' family tree",
            "Search and autocomplete",
            "Import and export of medical history",
            "Dashboards by user type",
            "Operational and analytical reports",
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border bg-foreground/5 p-5 text-sm text-muted-foreground flex items-start gap-3"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Flows Section */}
      <section className="surface-card p-6 md:p-10">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="mono text-xs uppercase tracking-[0.3em] flex items-center gap-2">
              <Eye className="h-3.5 w-3.5" /> Featured Flows
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {/* 6.1 Clinical Management */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">Clinical Management</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The application allows organizing essential clinical context information, including
                animals, pet owners, veterinarians, and schedules, ensuring a structured view of the
                data and relationships between entities.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 aspect-[4/3] lg:aspect-auto min-h-[250px]">
              <img src="/Images/dashRecep.webp" alt="Recepcionist Dashboard" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Recepcionist Dashboard</p>
            </div>
          </div>

          {/* 6.2 Service Scheduling */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 aspect-[4/3] lg:aspect-auto min-h-[250px] order-2 lg:order-1">
              <img src="/Images/historico.webp" alt="Scheduling" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Scheduling</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Service Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                One of the central components of the system is the scheduling of services, including
                creation, cancellation, rejection, rescheduling, and availability control. This part
                of the project reflects well the articulation between business rules, service
                states, and database persistence.
              </p>
            </div>
          </div>

          {/* 6.3 Medical History and Follow-up */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Medical History and Follow-up
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                The system supports history consultation and visualization of clinical information
                associated with animals, allowing the tracking of the animal's journey and accessing
                relevant data for future decisions.
              </p>
            </div>
            <div className="w-full lg:w-[45%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 aspect-[4/3] lg:aspect-auto min-h-[250px]">
              <img src="/Images/Excesso.webp" alt="Overweight Animals" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Overweight Animals</p>
            </div>
          </div>

          {/* 6.4 Genealogy and Reports */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="w-full lg:w-[45%] shrink-0 rounded-3xl border border-border bg-foreground/5 flex flex-col items-center justify-center text-muted-foreground text-center p-4 aspect-[4/3] lg:aspect-auto min-h-[250px] order-2 lg:order-1">
              <img src="/Images/arvore.webp" alt="Genealogy" className="w-full rounded-2xl h-auto mb-4" />
              <p className="text-xs">Genealogy Tree</p>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-xl font-medium text-foreground mb-4">Genealogy and Reports</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                In addition to day-to-day operations, the project includes more specific features
                such as a family tree, history export/import, and management support reports,
                extending the system beyond basic CRUD operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Navigation */}
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
    </PageShell>
  );
}
