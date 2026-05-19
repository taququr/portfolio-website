import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 font-(family-name:--font-geist-sans)">
      {/* HERO SECTION */}
      <header className="pt-20 pb-12 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight duration-500">
          Taqie Fadlillah
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A frontend developer passionate about building responsive and
          performance-optimized web applications.
        </p>
      </header>

      {/* PROJECTS GRID */}
      <h3 className="text-2xl font-bold mb-4">Work & Projects</h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <Card
            key={project.id}
            className="md:col-span-1 col-span-2 hover:shadow-lg transition-all duration-500"
          >
            <CardHeader>
              <div className="flex flex-wrap gap-2 pb-2">
                {project.tags.map((tag, index) => (
                  <div
                    key={tag + index}
                    className="border border-sky-400 dark:border-sky-600 px-2 py-1 rounded-md text-xs font-mono text-sky-400 dark:text-sky-600 uppercase tracking-widest"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <CardTitle className="text-primary duration-200">
                {project.title}
              </CardTitle>
              <CardDescription>{project.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                className="p-0 text-sky-400 dark:text-sky-600"
              >
                <Link href={`/projects/${project.id}`}>Learn more →</Link>
              </Button>
            </CardContent>
          </Card>
        )).slice(0, 4)}
        <Card className="col-span-2 hover:shadow-lg transition-all duration-500">
          <CardHeader>
            <CardTitle className="text-primary duration-200">
              More Projects
            </CardTitle>
            <CardDescription>Check out my other projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="link"
              className="p-0 text-sky-400 dark:text-sky-600"
            >
              <Link href="/projects">View all projects →</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
