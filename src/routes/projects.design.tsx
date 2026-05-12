import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/portfolio/CategoryPage";

export const Route = createFileRoute("/projects/design")({
  head: () => ({
    meta: [
      { title: "Design — Your Name" },
      { name: "description", content: "UI, branding and illustration design work." },
      { property: "og:title", content: "Design — Your Name" },
      { property: "og:description", content: "UI, branding and illustration design work." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Design"
      subtitle="Visual identity, interface design and illustration projects made with Figma & Illustrator."
      projects={[
        {
          title: "Octoplus",
          description: "Creating a fictional brand based on an animal.",
          link: "/projects/octopus",
          tags: ["Illustrator","Krita"],
        },
      ]}
    />
  ),
});