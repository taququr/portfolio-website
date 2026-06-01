"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

import type { Project } from "@/sanity.types";

import { formatDate } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
        <h1 className="text-5xl font-mono tracking-tight font-bold">Projects & Works</h1>
        <p className="text-muted-foreground text-sm font-mono max-w-xl">
          Index of documented works, interesting projects, and systemic sanity tests.
        </p>
        <div className="pt-2 w-full">
          <Input
            type="search"
            placeholder="Filter by system parameter, engine, or tag... (e.g., Tailwind, DevOps)"
            className="font-mono text-sm max-w-xl border-muted-foreground/30 focus-visible:ring-1 mx-auto"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

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
                    className="group block relative w-full overflow-hidden border border-muted-foreground/10 hover:border-foreground/30 transition-colors duration-300 rounded-lg bg-card"
                  >
                    <div className="flex flex-col min-h-60 md:h-52 relative w-full">
                      <div
                        className={`w-full md:w-[65%] p-3 md:p-5 flex flex-col justify-between z-20 relative h-full min-h-60 md:h-full
                          ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
                      >
                        <div
                          className={`space-y-2 bg-background/20 md:bg-transparent p-2 md:p-0 rounded-2xl flex flex-col ${
                            isEven ? "md:text-left md:items-start" : "md:text-right md:items-end"
                          }`}
                        >
                          <span className="text-xs font-mono dark:text-muted-foreground tracking-wider">
                            {formatDate(project._createdAt)}
                          </span>
                          <h2 className="text-lg font-mono font-bold group-hover:text-primary">{project.title}</h2>
                          <p className="text-xs font-mono dark:text-muted-foreground leading-relaxed line-clamp-2">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div
                          className={`flex flex-wrap gap-1.5 py-2 md:pb-0 px-2 md:px-0 ${
                            isEven ? "md:justify-start" : "md:justify-end"
                          }`}
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
                        </div>
                      </div>

                      <div className="absolute inset-0 w-full h-full z-10 select-none pointer-events-none">
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

                        {/* MASKING LAYER */}
                        <div
                          className="hidden md:block absolute inset-0 w-full h-full"
                          style={{
                            background: isEven
                              ? `linear-gradient(to right, 
                                  var(--card) 0%, 
                                  var(--card) 55%, 
                                  color-mix(in oklch, var(--card) 85%, transparent) 70%,
                                  color-mix(in oklch, var(--card) 30%, transparent) 88%,
                                  color-mix(in oklch, var(--card) 0%, transparent) 100%)`
                              : `linear-gradient(to left, 
                                  var(--card) 0%, 
                                  var(--card) 55%, 
                                  color-mix(in oklch, var(--card) 85%, transparent) 70%,
                                  color-mix(in oklch, var(--card) 30%, transparent) 88%,
                                  color-mix(in oklch, var(--card) 0%, transparent) 100%)`,
                          }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent opacity-95 md:hidden" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 border border-dashed border-muted-foreground/20 rounded-lg font-mono text-sm text-muted-foreground"
            >
              No active project logs matching parameters found.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
