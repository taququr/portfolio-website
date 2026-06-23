"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

import type { Project } from "@/sanity.types";

import { track } from "@/lib/analytics";
import { formatDate } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase();

    const matchesTitle = project.title?.toLowerCase().includes(searchLower);
    const matchesDesc = project.shortDescription?.toLowerCase().includes(searchLower);
    const matchesTags = project.tags?.some((tag) => tag.toLowerCase().includes(searchLower));

    return matchesTitle || matchesDesc || matchesTags;
  });

  return (
    <div className="container mx-auto max-w-5xl py-10 px-4 space-y-4 md:space-y-10 font-sans">
      <header className="pt-20 flex flex-col items-center text-center gap-4">
        <Heading level="h1">Projects & Works</Heading>
        <Paragraph size="lg">Index of documented works, interesting projects, and systemic sanity tests.</Paragraph>
        <div className="pt-2 w-full">
          <Input
            type="search"
            placeholder="Filter by system parameter, engine, or tag... (e.g., Tailwind, DevOps)"
            className="font-mono text-sm max-w-2xl border-muted-foreground/30 focus-visible:ring-1 mx-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <section>
        <motion.div layout className="space-y-8 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project: Project, index: number) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 38,
                      opacity: { duration: 0.25 },
                    }}
                  >
                    <Link
                      href={`/projects/${project.slug?.current}`}
                      className="group block w-full"
                      onClick={() => track("Project Card Clicked", { title: project.title })}
                    >
                      <Card className="relative py-0 w-full min-h-60 md:h-52 justify-center">
                        <div className="flex flex-col min-h-60 md:h-52 relative w-full">
                          <div
                            className={`w-full md:w-[65%] py-4 flex flex-col justify-between bg-background/90 md:bg-transparent z-20 relative h-full min-h-60 md:h-full
                            ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
                          >
                            <CardHeader
                              className={`space-y-2 flex flex-col ${
                                isEven ? "md:text-left md:items-start" : "md:text-right md:items-end"
                              }`}
                            >
                              <Paragraph size="xs" font="mono" className="tracking-wider">
                                {formatDate(project._createdAt)}
                              </Paragraph>
                              <Paragraph
                                size="lg"
                                color="foreground"
                                weight="medium"
                                className="group-data-[size=sm]/card:text-sm"
                              >
                                {project.title}
                              </Paragraph>
                              <Paragraph size="sm">{project.shortDescription}</Paragraph>
                            </CardHeader>

                            <CardContent
                              className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-start" : "md:justify-end"}`}
                            >
                              {project.tags?.map((tag: string, tagIndex: number) => (
                                <Badge
                                  key={tag + tagIndex}
                                  variant="sky"
                                  className="font-mono text-xs uppercase rounded-sm tracking-wider"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </CardContent>
                          </div>

                          <div className="block absolute inset-0 w-full h-full z-10 select-none pointer-events-none">
                            <div
                              className={`absolute top-0 bottom-0 w-full md:w-[45%] h-full transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0
                              contrast-[1.1] brightness-[0.9] dark:brightness-[0.4] group-hover:brightness-[0.8] group-hover:contrast-100 ${
                                isEven ? "right-0" : "left-0"
                              }`}
                            >
                              {project.heroImage ? (
                                <Image
                                  src={urlFor(project.heroImage).url()}
                                  alt={project.title || "Project image " + index}
                                  fill
                                  className="object-cover object-center"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  priority={index < 2}
                                />
                              ) : (
                                <div className="w-full h-full bg-muted animate-pulse" />
                              )}
                            </div>

                            <div
                              className={`hidden md:block absolute inset-0 w-full h-full z-20 transition-colors duration-500 ${
                                isEven
                                  ? "bg-linear-to-r from-card via-card/90 via-50% to-transparent"
                                  : "bg-linear-to-l from-card via-card/90 via-50% to-transparent"
                              }`}
                            />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 border border-dashed border-muted-foreground/20 rounded-lg"
              >
                <Paragraph font="mono" size="sm" color="muted">
                  No active project logs matching parameters found.
                </Paragraph>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
