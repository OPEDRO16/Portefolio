import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/portfolio/CategoryPage";

export const Route = createFileRoute("/projects/3d")({
  head: () => ({
    meta: [
      { title: "3D & Game-Dev — Your Name" },
      { name: "description", content: "3D modelling and game development projects." },
      { property: "og:title", content: "3D & Game-Dev — Your Name" },
      { property: "og:description", content: "3D modelling and game development projects." },
    ],
  }),
  component: () => (
    <CategoryPage
      title="3D / Game-Dev"
      subtitle="Interactive experiences, prototypes and 3D scenes built with Unity and Blender."
      projects={[
        {
          title: "Mini Game",
          description: "A small Unity prototype exploring a mechanic or concept.",
          tags: ["Unity", "C#"],
        },
        {
          title: "3D Scene",
          description: "A Blender scene or asset — replace with your real renders.",
          tags: ["Blender", "Modelling"],
        },
      ]}
    />
  ),
});