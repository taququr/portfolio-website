import { isFrontend } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description: "Modern portfolio built with React 19 and Tailwind 4.",
    tag: ["Frontend", "Next.js", "TailwindCSS", "shadcn/ui"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 2,
    title: "Self-Hosted Infrastructure",
    description:
      "Built a secure Unraid server with Cloudflare Tunnels and Zero Trust.",
    tag: ["Sanity Test", "DevOps", "Unraid", "Cloudflare"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 3,
    title: "Certificate Generator",
    description:
      "Built a certificate generator using React and Flask with role-based access control.",
    tag: ["Full-Stack", "React", "Flask", "PostgreSQL", "Strapi"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
  {
    id: 4,
    title: "Enterprise Analytics & Storage Portal",
    description:
      "Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom chatbot interface, leveraging Google Drive API integrations.",
    tag: ["Frontend", "Sveltekit", "TailwindCSS", "Svelte Flowbite"],
    link: isFrontend
      ? "http://localhost:3000/project"
      : "https://taqiefadlillah.com/project",
  },
];