import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/portfolio/CategoryPage";

export const Route = createFileRoute("/projects/java")({
  head: () => ({
    meta: [
      { title: "Java Projects — Your Name" },
      { name: "description", content: "Java projects: backends, algorithms, OOP." },
      { property: "og:title", content: "Java Projects — Your Name" },
      { property: "og:description", content: "Java projects: backends, algorithms, OOP." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Java"
      subtitle="Object-oriented work, backend services and academic projects built with the Java."
      projects={[
        {
          title: "Rock Paper Scissors Simulation",
          description: "The Rock Paper Scissors simulation project demonstrates the application of complex systems modeling in a familiar game environment.",
          link: "/projects/RoPaSc",
          tags: ["Java", "Processing"],
        },
        {
          title: "Chaos Game and Julia and Mandelbrot Sets",
          description: "Project academic in Java/Processing about the Chaos Game and the generation of Julia and Mandelbrot sets.",
          link: "/projects/ChaosGame",
          tags: ["Java", "Processing"],
        },
        {
          title: "Gobang / Five in a Row",
          description: "A game in Java with a client-server architecture, user authentication, real-time communication via sockets, and player data persistence in XML.",
          link: "/projects/IECD",
          tags: ["Java", "XML", "JSP"],
        },
        {
          title: "Vetcare",
          description: "A veterinary management system for clinics made with MySQL, Java JSP/Servlet and Apache Tomcat.",
          link: "/projects/VetCare",
          tags: ["Java", "MySQL", "JSP", "Apache Tomcat"],
        }
      ]}
    />
  ),
});