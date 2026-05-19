import { z } from "zod";
import { isFrontend } from "@/lib/utils";

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  shortDescription: z.string(),
  tags: z.array(z.string()),
  link: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio",
    shortDescription: "Modern portfolio built with React 19 and Tailwind 4.",
    tags: ["Frontend", "Next.js", "TailwindCSS", "shadcn/ui"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 2,
    title: "Self-Hosted Infrastructure",
    shortDescription:
      "Built a secure Unraid server with Cloudflare Tunnels and Zero Trust.",
    tags: ["Sanity Test", "DevOps", "Unraid", "Cloudflare"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 3,
    title: "Certificate Generator",
    shortDescription:
      "Built a certificate generator using React and Flask with role-based access control.",
    tags: ["Full-Stack", "React", "Flask", "PostgreSQL", "Strapi"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 4,
    title: "Enterprise Analytics & Storage Portal",
    shortDescription:
      "Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom chatbot interface, leveraging Google Drive API integrations.",
    tags: ["Frontend", "Sveltekit", "TailwindCSS", "Svelte Flowbite"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
];