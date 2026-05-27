import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { getMetricTextColor } from "@/lib/text-color";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main className="min-h-screen font-mono text-foreground antialiased selection:bg-primary/20 transition-colors duration-75">
      <header className="w-full border-b border-muted-foreground/10 xl:h-[calc(100vh-4rem)] flex flex-col justify-between p-4 md:p-8 lg:p-12 mt-20 md:mt-4 gap-8">
        {/* TOP META SYSTEM ROW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-muted-foreground/5 pb-4">
          <Link
            href="/projects"
            className="hidden md:flex text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              &larr;
            </span>{" "}
            RETURN TO PROJECT LIST
          </Link>
          <div className="text-center text-[10px] text-muted-foreground tracking-widest uppercase">
            PROJECT_ID: {project.id} //{" "}
            {project.dateUpdated > project.dateCreated
              ? "DATE_UPDATED: " + project.dateUpdated
              : "DATE_CREATED: " + project.dateCreated}
          </div>
        </div>

        {/* MAIN SPLIT GRID HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full max-w-7xl mx-auto">
          {/* LEFT: Metadata Core Context */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase leading-none wrap-break">
              {project.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="sky"
                  className="font-mono text-xs uppercase rounded-sm tracking-wider"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* RIGHT: High-Impact Visual Screen Lock */}
          <div className="lg:col-span-7 relative w-full aspect-video rounded-lg overflow-hidden border border-muted-foreground/10 bg-muted/5 shadow-2xl shadow-black/40">
            <Image
              src={project.heroImage}
              alt={`${project.title} master environment execution`}
              fill
              priority
              className="object-cover object-center grayscale contrast-[1.05] brightness-[0.85] dark:brightness-[0.7]"
              sizes="(max-width: 1024px) 100vw, 750px"
            />
          </div>
        </div>

        <div className="hidden xl:flex items-center justify-center text-[10px] text-muted-foreground tracking-widest uppercase animate-pulse">
          SCROLL DOWN FOR PROJECT DETAILS &darr;
        </div>
      </header>

      <section className="container max-w-7xl mx-auto p-4 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
        {/* NARRATIVE CORE CONTEXT RUNTIME ENGINE */}
        <div className="lg:col-span-8 space-y-16">
          {project.blogNarrative.map((block, idx) => {
            switch (block.type) {
              // 1. Sleek Text Blocks (handles headings + raw analysis flawlessly)
              case "text-only":
                return (
                  <div key={idx} className="space-y-4 max-w-3xl">
                    {block.heading && (
                      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground duration-75">
                        {block.heading}
                      </h2>
                    )}
                    {block.text && (
                      <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                        {block.text}
                      </p>
                    )}
                  </div>
                );

              // 2. Wide Architecture Layout Panels
              case "full-width-media":
                return (
                  <div key={idx} className="space-y-4">
                    {block.heading && (
                      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground duration-75">
                        {block.heading}
                      </h2>
                    )}
                    {block.text && (
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mb-4">
                        {block.text}
                      </p>
                    )}
                    {block.imageUrl && (
                      <div className="relative w-full aspect-video border border-muted-foreground/10 rounded-lg overflow-hidden bg-muted/5">
                        <Image
                          src={block.imageUrl}
                          alt={block.imageAlt || ""}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 800px"
                        />
                      </div>
                    )}
                  </div>
                );

              // 3. Mixed Grid Configurations (gracefully defaults to stacked on mobile screens)
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
                      <div
                        className={`space-y-3 ${isImgLeft ? "md:order-last" : ""}`}
                      >
                        {block.text && (
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {block.text}
                          </p>
                        )}
                      </div>
                      {block.imageUrl && (
                        <div className="relative w-full aspect-4/3 border border-muted-foreground/10 rounded-lg overflow-hidden bg-muted/5">
                          <Image
                            src={block.imageUrl}
                            alt={block.imageAlt || ""}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
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
                <span
                  className={`font-bold uppercase ${getMetricTextColor(project.metrics)}`}
                >
                  {project.metrics.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground uppercase">
                  ENVIRONMENT:
                </span>{" "}
                <span className="uppercase">{project.metrics.environment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground uppercase">ROLE:</span>{" "}
                <span className="uppercase">{project.metrics.role}</span>
              </div>
            </div>
          </div>

          {(project.metrics.liveUrl || project.metrics.repoUrl) && (
            <div className="space-y-2 pt-2">
              {project.metrics.liveUrl && (
                <a
                  href={project.metrics.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs bg-foreground text-background font-bold uppercase py-2.5 rounded-md hover:bg-foreground/90 duration-500"
                >
                  OPEN LIVE SYSTEM
                </a>
              )}
              {project.metrics.repoUrl && (
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
