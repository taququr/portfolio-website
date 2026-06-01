export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";
import { notFound } from "next/navigation";

import type { Project } from "@/sanity.types";

import { allProjectsQuery } from "@/lib/queries";

import { ProjectsList } from "@/components/projects/projects-list";

export default async function ProjectsPage() {
  const response = await sanityFetch({
    query: allProjectsQuery,
  });

  const projects = response.data as Project[] | null;

  if (!projects) return notFound();

  return <ProjectsList projects={projects} />;
}
