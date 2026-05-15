import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/portfolio/CategoryPage";

export const Route = createFileRoute("/projects/python")({
  head: () => ({
    meta: [
      { title: "Python Projects — Your Name" },
      { name: "description", content: "Python projects: data, scripts and ML." },
      { property: "og:title", content: "Python Projects — Your Name" },
      { property: "og:description", content: "Python projects: data, scripts and ML." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Python"
      subtitle="Data exploration, automation scripts and small machine learning experiments."
      projects={[
        {
          title: "AI Agents Development",
          description: "Academic project in Python and Java about intelligent agents, control architectures and decision-making in simulated environments.",
          link: "/projects/IASA",
          tags: ["Python", "Java", "AI", "Agents"],
        },
        {
          title: "Image Processing & Analysis",
          description: "Academic project in Python about image analysis, compression, color spaces and quality assessment.",
          link: "/projects/ImageProcessing",
          tags: ["Python", "CLI"],
        },
      ]}
    />
  ),
});