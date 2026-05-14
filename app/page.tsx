import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Self-Hosted Infrastructure",
    description:
      "Built a secure Unraid server with Cloudflare Tunnels and Zero Trust.",
    tag: "DevOps",
  },
  {
    id: 2,
    title: "Next.js Portfolio",
    description: "Modern portfolio built with React 19 and Tailwind 4.",
    tag: "Frontend",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 font-[family-name:var(--font-geist-sans)]">
      {/* HERO SECTION */}
      <header className="py-20 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight">Taqie Fadlillah</h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A frontend developer passionate about building responsive and
          performance-optimized web applications.
        </p>
        <div className="flex gap-4 mt-4">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </header>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-xs font-mono text-blue-500 mb-2 uppercase tracking-widest">
                {project.tag}
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 text-blue-600">
                Learn more →
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
