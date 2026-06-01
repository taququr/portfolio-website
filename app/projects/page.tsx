export const dynamic = "force-dynamic";

import { sanityFetch } from "@/sanity/lib/live";

import type { Project } from "@/sanity.types";

import { ProjectsList } from "@/components/projects/projects-list";

export default async function ProjectsPage() {
  const query = `*[_type == "project"] | order(dateUpdated desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    shortDescription, 
    tags,
    heroImage
  }`;

  const projects = await sanityFetch({
    query,
  });

  const initialProjects = projects.data as Project[];

  // 2. Hand the data off cleanly to the interactive client container wrapper
  return <ProjectsList initialProjects={initialProjects} />;
}
