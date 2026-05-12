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
          title: "Side Project",
          description: "Replace with a real project — a demo site, a SaaS prototype, an app.",
          tags: ["Next.js", "Tailwind"],
        },
      ]}
    />
  ),
});