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
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 font-sans">
      {/* HERO SECTION */}
      <header className="pt-20 pb-12 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight">Taqie Fadlillah</h1>
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
            className="md:col-span-1 col-span-2 border border-muted-foreground/10 hover:border-foreground/30 duration-500"
          >
            <Link href={`/projects/${project.id}`}>
              <CardHeader>
                <div className="flex flex-wrap gap-2 pb-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={tag + index}
                      variant="sky"
                      className="font-mono text-xs uppercase rounded-sm tracking-wider"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-primary duration-75">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 text-sky-400 dark:text-sky-500"
                >
                  Learn more &rarr;
                </Button>
              </CardContent>
            </Link>
          </Card>
        )).slice(0, 4)}
        <Card className="col-span-2 border border-muted-foreground/10 hover:border-foreground/30 duration-500">
          <Link href="/projects">
            <CardHeader>
              <CardTitle className="text-primary duration-75">
                More Projects
              </CardTitle>
              <CardDescription>Check out my other projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="link"
                className="p-0 text-sky-400 dark:text-sky-500"
              >
                View all projects &rarr;
              </Button>
            </CardContent>
          </Link>
        </Card>
      </section>
    </div>
  );
}
