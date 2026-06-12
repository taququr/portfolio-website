export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";

import type { Project } from "@/sanity.types";

import { formatDate, getImageDimensions } from "@/lib/utils";
import { singleProjectQuery } from "@/lib/queries";
import { getMetricTextColor } from "@/lib/text-color";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const query = `*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`;
  const projects = await client.fetch<{ slug: string }[]>(query);

  if (!projects) return [];

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const response = await sanityFetch({
    query: singleProjectQuery,
    params: { slug },
  });

  const project = response.data as Project | null;

  if (!project) notFound();

  return (
    <main className="font-mono text-foreground antialiased selection:bg-primary/20 transition-colors duration-75">
      <header className="w-full border-b border-muted-foreground/10 xl:h-[calc(100vh-4rem)] flex flex-col justify-between p-4 md:p-8 lg:p-12 mt-20 md:mt-4 gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-muted-foreground/5 pb-4">
          <Link
            href="/projects"
            className="hidden md:flex text-xs text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-colors tracking-wider uppercase items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">&larr;</span> RETURN TO
            PROJECT LIST
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 text-center text-[10px] text-muted-foreground tracking-widest uppercase">
            <span>PROJECT_ID: {project.slug?.current} </span>
            <span className="hidden md:block">//</span>
            <span>
              {project._updatedAt && project._createdAt
                ? new Date(project._updatedAt) > new Date(project._createdAt)
                  ? "DATE_UPDATED: " + formatDate(project._updatedAt)
                  : "DATE_CREATED: " + formatDate(project._createdAt)
                : project._createdAt
                  ? "DATE_CREATED: " + formatDate(project._createdAt)
                  : ""}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full max-w-7xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase leading-none wrap-break">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags?.map((tag: string) => (
                <Badge key={tag} variant="sky" className="font-mono text-xs uppercase rounded-sm tracking-wider">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full aspect-video rounded-lg overflow-hidden border border-muted-foreground/10 bg-muted/5 shadow-2xl shadow-black/40">
            {project.heroImage ? (
              <Image
                src={urlFor(project.heroImage).url()}
                alt={`${project.title} master environment execution`}
                fill
                priority
                className="object-cover object-center transition-all duration-500 ease-in-out filter grayscale hover:grayscale-0 contrast-[1.1] brightness-[0.9] dark:brightness-[0.4] hover:brightness-[0.8] hover:contrast-100"
                sizes="(max-width: 1024px) 100vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted/5">
                <span className="text-xs text-muted-foreground">No hero image available</span>
              </div>
            )}
          </div>
        </div>

        <div className="hidden xl:flex items-center justify-center text-[10px] text-muted-foreground tracking-widest uppercase animate-pulse">
          SCROLL DOWN FOR PROJECT DETAILS &darr;
        </div>
      </header>

      <section className="container max-w-7xl mx-auto p-4 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
        {/* NARRATIVE CORE CONTEXT RUNTIME ENGINE */}
        <div className="lg:col-span-8 space-y-16">
          {project.blogNarrative &&
            project.blogNarrative.map((block: any, idx: number) => {
              const renderParagraphs = (textString: string) => {
                if (!textString) return null;
                return textString.split(/\n\s*\n/).map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-xs text-muted-foreground leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ));
              };

              switch (block.type) {
                case "text-only":
                  return (
                    <div key={idx} className="space-y-4 max-w-3xl">
                      {block.heading && (
                        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground duration-75">
                          {block.heading}
                        </h2>
                      )}
                      {block.text && <div className="space-y-4">{renderParagraphs(block.text)}</div>}
                    </div>
                  );

                case "full-width":
                  return (
                    <div key={idx} className="space-y-4">
                      {block.heading && (
                        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground duration-75">
                          {block.heading}
                        </h2>
                      )}
                      {block.text && <div className="space-y-4 max-w-3xl mb-4">{renderParagraphs(block.text)}</div>}
                      {block.imageUrl && (
                        <Dialog>
                          <DialogTrigger className="relative block w-full aspect-4/3 md:aspect-video border border-muted-foreground/10 rounded-lg overflow-hidden bg-muted/5 cursor-pointer">
                            <Image
                              src={urlFor(block.imageUrl).url()}
                              alt={block.imageAlt || ""}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1920px) 100vw, 1920px"
                            />
                          </DialogTrigger>
                          <DialogContent className="min-w-1/2">
                            <DialogHeader className="hidden">
                              <DialogTitle>{block.imageAlt}</DialogTitle>
                              <DialogDescription>{block.imageAlt}</DialogDescription>
                            </DialogHeader>
                            {(() => {
                              const { width, height } = getImageDimensions(block.imageUrl);

                              return (
                                <div className="flex items-center justify-center max-h-[80vh] w-full overflow-hidden rounded-md">
                                  <Image
                                    src={urlFor(block.imageUrl).url()}
                                    alt={block.imageAlt || ""}
                                    width={width}
                                    height={height}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                  />
                                </div>
                              );
                            })()}
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  );

                case "split-right":
                case "split-left":
                  const isImgLeft = block.type === "split-left";
                  return (
                    <div key={idx} className="space-y-4">
                      {block.heading && (
                        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground duration-75">
                          {block.heading}
                        </h2>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div className={`space-y-3 ${isImgLeft ? "md:order-last" : ""}`}>
                          {block.text && renderParagraphs(block.text)}
                        </div>
                        {block.imageUrl && (
                          <Dialog>
                            <DialogTrigger className="relative w-full aspect-4/3 border border-muted-foreground/10 rounded-lg overflow-hidden bg-muted/5 cursor-pointer">
                              <Image
                                src={urlFor(block.imageUrl).url()}
                                alt={block.imageAlt || ""}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1920px) 100vw, 1920px"
                              />
                            </DialogTrigger>
                            <DialogContent className="min-w-1/2">
                              <DialogHeader className="hidden">
                                <DialogTitle>{block.imageAlt}</DialogTitle>
                                <DialogDescription>{block.imageAlt}</DialogDescription>
                              </DialogHeader>
                              {(() => {
                                const { width, height } = getImageDimensions(block.imageUrl);

                                return (
                                  <div className="flex items-center justify-center max-h-[80vh] w-full overflow-hidden rounded-md">
                                    <Image
                                      src={urlFor(block.imageUrl).url()}
                                      alt={block.imageAlt || ""}
                                      width={width}
                                      height={height}
                                      className="w-full h-auto max-h-[80vh] object-contain"
                                    />
                                  </div>
                                );
                              })()}
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })}
        </div>

        {/* PERSISTENT SYSTEM METRICS SIDEBAR LAYER */}
        <aside className="lg:col-span-4 lg:border-l border-muted-foreground/10 lg:pl-8 h-fit space-y-8 sticky top-8">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-muted-foreground/10 pb-2">
              DEPLOYMENT METRICS
            </h3>
            <div className="text-xs space-y-3 font-mono">
              <div className="flex justify-between">
                <span className="text-muted-foreground uppercase">STATUS:</span>{" "}
                <span className={`font-bold uppercase ${getMetricTextColor(project.metrics)}`}>
                  {project.metrics?.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground uppercase">ENVIRONMENT:</span>{" "}
                <span className="uppercase">{project.metrics?.environment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground uppercase">ROLE:</span>{" "}
                <span className="uppercase">{project.metrics?.role}</span>
              </div>
            </div>
          </div>

          {(project.metrics?.liveUrl || project.metrics?.repoUrl) && (
            <div className="space-y-2 pt-2">
              {project.metrics?.liveUrl && (
                <a
                  href={project.metrics.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs bg-foreground text-background font-bold uppercase py-2.5 rounded-md hover:bg-foreground/90 duration-500"
                >
                  OPEN LIVE SYSTEM
                </a>
              )}
              {project.metrics?.repoUrl && (
                <a
                  href={project.metrics.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs border border-muted-foreground/20 text-foreground uppercase py-2.5 rounded-md hover:bg-muted/30 duration-500"
                >
                  INSPECT SOURCE CODE
                </a>
              )}
            </div>
          )}
        </aside>
      </section>
    </main>
  );
}
