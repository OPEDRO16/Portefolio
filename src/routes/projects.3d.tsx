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
          title: "Project_Dragon",
          description: "3D game prototype developed in Unity Engine as the final project for the Animation in Virtual Environments course",
          link: "/projects/Project_Dragon",
          tags: ["Unity", "C#"],
        },
        {
          title: "AltiElements",
          description: "A 2D mobile game project developed in Unity.",
          link: "/projects/AltiElements",
          tags: ["Unity", "C#"],
        },
        {
          title: "A.S.T.R.A",
          description: "A 3D local co-op game focused on providing people whit vision and hearing impairments a gaming experience.",
          link: "/now",
          tags: ["Unity", "C#"],
        }
      ]}
    />
  ),
});