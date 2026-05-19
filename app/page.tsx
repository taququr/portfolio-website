import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeToggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-8 font-(family-name:--font-geist-sans)">
      {/* HERO SECTION */}
      <header className="md:py-20 py-10 flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl font-bold tracking-tight duration-500">
          Taqie Fadlillah
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A frontend developer passionate about building responsive and
          performance-optimized web applications.
        </p>
        <div className="flex gap-4 mt-4">
          <Button className="duration-500">
            <Link
              href="/projects"
              className="text-primary-foreground duration-200"
            >
              View Projects
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="duration-500">
                Contact Me
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Feel free to reach out to me for any inquiries or
                  collaborations.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between space-x-2">
                  <span className="text-primary text-lg">Email</span>
                  <a
                    href="mailto:taququr.work@gmail.com"
                    className="text-primary"
                  >
                    taququr.work@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <span className="text-primary text-lg">Linkedin</span>
                  <a
                    href="https://www.linkedin.com/in/taqie-fadlillah/"
                    className="text-primary"
                  >
                    taqie-fadlillah
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <ModeToggle />
        </div>
      </header>

      {/* PROJECTS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects
          .map((project) => (
            <Card
              key={project.id}
              className="md:col-span-1 col-span-2 hover:shadow-lg transition-all duration-500"
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
                <CardTitle className="text-primary duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
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
          ))
          .slice(0, 4)}
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
              View all projects →
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
