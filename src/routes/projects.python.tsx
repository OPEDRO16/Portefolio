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
          title: "Data Notebook",
          description: "A Jupyter notebook exploring a dataset, with charts and conclusions.",
          tags: ["Python", "Jupyter", "pandas"],
        },
        {
          title: "Automation Script",
          description: "A small utility that automates a repetitive task. Replace with your real work.",
          tags: ["Python", "CLI"],
        },
      ]}
    />
  ),
});