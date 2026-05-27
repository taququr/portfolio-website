import { z } from "zod";
import { isFrontend } from "@/lib/utils";

export const BlogBlockSchema = z.object({
  id: z.number(),
  type: z.enum(["text-only", "full-width-media", "split-right", "split-left"]),
  text: z.string().optional(),
  heading: z.string().optional(),
  imageUrl: z.string().optional(),
  imageAlt: z.string().optional(),
});

export type BlogBlock = z.infer<typeof BlogBlockSchema>;

export const ProjectMetricsSchema = z.object({
  role: z.string().optional(),
  environment: z.string().optional(),
  status: z.enum(["On-going", "Completed", "Maintenance"]).optional(),
  repoUrl: z.url().optional(), // .url() validates the structure is a real path link
  liveUrl: z.url().optional(),
});

export type ProjectMetrics = z.infer<typeof ProjectMetricsSchema>;

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  heroImage: z.string(),
  dateCreated: z.string(),
  dateUpdated: z.string(),
  tags: z.array(z.string()),
  shortDescription: z.string(),
  metrics: ProjectMetricsSchema,
  blogNarrative: z.array(BlogBlockSchema),
  link: z.url().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    title: "Next.js Portfolio",
    shortDescription: "Modern portfolio built with React 19 and Tailwind 4.",
    tags: ["Frontend", "Next.js", "TailwindCSS", "shadcn/ui"],
    link: isFrontend ? "http://localhost:3000/projects" : "https://taququr.com/projects",
    dateCreated: "2025-10-14",
    dateUpdated: "2025-10-14",
    heroImage: "/projects/portfolio-bg.webp",
    metrics: {
      status: "On-going",
      environment: "Production",
      role: "Full-Stack Developer",
      repoUrl: "https://github.com/taququr/portfolio-website",
      liveUrl: "https://taququr.com",
    },
    blogNarrative: [
      {
        id: 1,
        type: "text-only",
        heading: "Project Overview",
        text: "This portfolio website showcases my full-stack development skills using Next.js 15, React 19, and Tailwind CSS 4. The design emphasizes clean aesthetics, smooth animations, and responsive layouts across all devices.",
      },
      {
        id: 2,
        type: "full-width-media",
        heading: "Project Overview",
        text: "This portfolio website showcases my full-stack development skills using Next.js 15, React 19, and Tailwind CSS 4. The design emphasizes clean aesthetics, smooth animations, and responsive layouts across all devices.",
        imageUrl: "/projects/portfolio-1.webp",
        imageAlt: "Next.js Portfolio Screenshot 1 A",
      },
      {
        id: 3,
        type: "split-right",
        heading: "Project Overview",
        text: "This portfolio website showcases my full-stack development skills using Next.js 15, React 19, and Tailwind CSS 4. The design emphasizes clean aesthetics, smooth animations, and responsive layouts across all devices.",
        imageUrl: "/projects/portfolio-1.webp",
        imageAlt: "Next.js Portfolio Screenshot 1 B",
      },
      {
        id: 4,
        type: "split-left",
        heading: "Project Overview",
        text: "This portfolio website showcases my full-stack development skills using Next.js 15, React 19, and Tailwind CSS 4. The design emphasizes clean aesthetics, smooth animations, and responsive layouts across all devices.",
        imageUrl: "/projects/portfolio-1.webp",
        imageAlt: "Next.js Portfolio Screenshot 1 C",
      },
    ],
  },
  {
    id: "2",
    title: "Self-Hosted Infrastructure",
    shortDescription: "Built a secure Unraid server with Cloudflare Tunnels and Zero Trust.",
    tags: ["Sanity Test", "DevOps", "Unraid", "Cloudflare"],
    link: isFrontend ? "http://localhost:3000/projects" : "https://taququr.com/projects",
    dateCreated: "2025-10-14",
    dateUpdated: "2025-10-14",
    heroImage: "/projects/unraid-bg.webp",
    metrics: {
      status: "Maintenance",
      environment: "Production",
      role: "DevOps Engineer",
    },
    blogNarrative: [
      {
        id: 1,
        type: "text-only",
        heading: "Project Overview",
        text: "This self-hosted infrastructure project demonstrates my expertise in building and maintaining a secure, scalable home lab environment. The setup includes an Unraid server running Docker containers for various services, with Cloudflare Tunnels providing secure remote access through Zero Trust principles.",
      },
    ],
  },
  {
    id: "3",
    title: "Certificate Generator",
    shortDescription: "Built a certificate generator using React and Flask with role-based access control.",
    tags: ["Full-Stack", "React", "Flask", "PostgreSQL", "Strapi"],
    link: isFrontend ? "http://localhost:3000/projects" : "https://taququr.com/projects",
    dateCreated: "2025-10-14",
    dateUpdated: "2025-10-14",
    heroImage: "/projects/certificate-generator-bg.webp",
    metrics: {
      status: "Completed",
      environment: "Archived",
      role: "Full-Stack Developer",
    },
    blogNarrative: [
      {
        id: 1,
        type: "text-only",
        heading: "Project Overview",
        text: "This certificate generator project demonstrates my full-stack development skills using React for the frontend and Flask for the backend. The application features role-based access control, allowing different user types (admin, teacher, student) to interact with the system according to their permissions.",
      },
    ],
  },
  {
    id: "4",
    title: "Enterprise Analytics & Storage Portal",
    shortDescription:
      "Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom chatbot interface, leveraging Google Drive API integrations.",
    tags: ["Frontend", "Sveltekit", "TailwindCSS", "Svelte Flowbite"],
    link: isFrontend ? "http://localhost:3000/projects" : "https://taququr.com/projects",
    dateCreated: "2025-10-14",
    dateUpdated: "2025-10-14",
    heroImage: "/projects/hexa-ai-bg.webp",
    metrics: {
      status: "Completed",
      environment: "Production",
      role: "Frontend Developer",
    },
    blogNarrative: [
      {
        id: 1,
        type: "text-only",
        heading: "Project Overview",
        text: "This enterprise analytics and storage portal demonstrates my expertise in building complex, feature-rich web applications. The platform combines advanced analytics capabilities with cloud file management, featuring an integrated custom chatbot interface powered by Google Drive API integrations.",
      },
    ],
  },
];
