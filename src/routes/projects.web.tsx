import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/portfolio/CategoryPage";

export const Route = createFileRoute("/projects/web")({
  head: () => ({
    meta: [
      { title: "Web Projects — Your Name" },
      { name: "description", content: "Web projects with React, Next.js and TypeScript." },
      { property: "og:title", content: "Web Projects — Your Name" },
      { property: "og:description", content: "Web projects with React, Next.js and TypeScript." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Web"
      subtitle="Front-end and full-stack web work — modern stacks, clean interfaces."
      projects={[
        {
          title: "This Portfolio",
          description: "A minimal portfolio inspired by a friend's site, rebuilt with my own twist.",
          tags: ["React", "TypeScript", "TanStack"],
        },
        {
          title: "Gobang / Five in a Row",
          description: "A game in Java with a client-server architecture, user authentication, real-time communication via sockets, and player data persistence in XML.",
          link: "/projects/IECD",
          tags: ["Java", "XML", "JSP"],
        },
        {
          title: "imageSearch",
          description: "A veterinary management system for clinics made with MySQL, Java JSP/Servlet and Apache Tomcat.",
          link: "/projects/imageSearch",
          tags: ["Java", "MySQL", "JSP", "Apache Tomcat"],
        },
        {
          title: "Vetcare",
          description: "A veterinary management system for clinics made with MySQL, Java JSP/Servlet and Apache Tomcat.",
          link: "/projects/VetCare",
          tags: ["Java", "MySQL", "JSP", "Apache Tomcat"],
        },
        {
          title: "BlackJack 25",
          description: "A modified version of the classic Blackjack card game developed as part of a Multimedia Authoring course.",
          link: "/projects/BlackJach",
          tags: ["JavaScript"],
        }
      ]}
    />
  ),
});