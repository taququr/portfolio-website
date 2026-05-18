import { Button } from "@/components/ui/button/button";
import { ModeToggle } from "@/components/ui/button/themeToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description: "Modern portfolio built with React 19 and Tailwind 4.",
    tag: ["Frontend", "Next.js", "TailwindCSS", "shadcn/ui"],
  },
  {
    id: 2,
    title: "Self-Hosted Infrastructure",
    description:
      "Built a secure Unraid server with Cloudflare Tunnels and Zero Trust.",
    tag: ["DevOps", "Unraid", "Cloudflare"],
  },
  {
    id: 3,
    title: "Certificate Generator",
    description:
      "Built a certificate generator using React and Flask with role-based access control.",
    tag: ["Full-Stack", "React", "Flask", "PostgreSQL", "Strapi"],
  },
  {
    id: 4,
    title: "Enterprise Analytics & Storage Portal",
    description:
      "Developed a feature-rich analytics and cloud file-management dashboard with an integrated custom chatbot interface, leveraging Google Drive API integrations.",
    tag: ["Frontend", "Sveltekit", "TailwindCSS", "Svelte Flowbite"],
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 font-(family-name:--font-geist-sans)">
      {/* HERO SECTION */}
      <header className="py-20 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight duration-500">
          Taqie Fadlillah
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A frontend developer passionate about building responsive and
          performance-optimized web applications.
        </p>
        <div className="flex gap-4 mt-4">
          <Button
            variant="default"
            className="text-primary-foreground duration-150"
          >
            View Projects
          </Button>
          <Button variant="outline" className="duration-500">
            Contact Me
          </Button>
          <ModeToggle />
        </div>
      </header>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="hover:shadow-lg transition-all duration-500"
          >
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                {project.tag.map((tag, index) => (
                  <div
                    key={tag + index}
                    className="border border-sky-400 dark:border-sky-600 px-2 py-1 rounded-md text-xs font-mono text-sky-400 dark:text-sky-600 uppercase tracking-widest"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <CardTitle className="text-primary duration-250">
                {project.title}
              </CardTitle>
              <CardDescription className="duration-500">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                className="p-0 text-sky-400 dark:text-sky-600"
              >
                Learn more →
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
