export const dynamic = "force-dynamic";

import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

import type { Project } from "@/sanity.types";

import { allProjectsQuery } from "@/lib/queries";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Paragraph } from "@/components/ui/typography";

export default async function Home() {
  const response = await sanityFetch({
    query: allProjectsQuery,
  });

  const projects = response.data as Project[] | null;

  if (!projects) return notFound();

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 space-y-4 md:space-y-10 font-sans">
      <header className="pt-20 pb-12 flex flex-col items-center text-center gap-4">
        <Heading level="h1">Taqie Fadlillah</Heading>
        <Heading level="h4" weight="semibold" className="text-muted-foreground">
          A frontend developer passionate about building responsive and performance-optimized web applications.
        </Heading>
      </header>

      {/* <h3 className="text-2xl font-bold mb-4">Work & Projects</h3> */}
      <Heading level="h3" weight="bold" className="mb-4">
        Work & Projects
      </Heading>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length > 0 ? (
          projects.slice(0, 4).map((project: any) => (
            <Card
              key={project._id}
              className="md:col-span-1 col-span-2 border border-muted-foreground/10 hover:border-foreground/30"
            >
              <Link href={`/projects/${project.slug?.current}`}>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 pb-2">
                    {project.tags.map((tag: string, index: number) => (
                      <Badge
                        key={tag + index}
                        variant="sky"
                        className="font-mono text-xs uppercase rounded-sm tracking-wider"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-sky-700 dark:text-sky-400">
                    Learn more &rarr;
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))
        ) : (
          <Paragraph>No projects found</Paragraph>
        )}
        <Card className="col-span-2 border border-muted-foreground/10 hover:border-foreground/30">
          <Link href="/projects">
            <CardHeader>
              <CardTitle>More Projects</CardTitle>
              <CardDescription>Check out my other projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 text-sky-700 dark:text-sky-400">
                View all projects &rarr;
              </Button>
            </CardContent>
          </Link>
        </Card>
      </section>
    </div>
  );
}
