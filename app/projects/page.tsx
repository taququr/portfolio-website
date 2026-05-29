export const dynamic = "force-dynamic";

import { ProjectsList } from "@/components/projects/projects-list";
import { Project } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";

export default async function ProjectsPage() {
  const query = `*[_type == "project"] | order(dateUpdated desc) {
    id, 
    title, 
    shortDescription, 
    tags,
    heroImage,
    dateCreated,
    dateUpdated
  }`;

  const projects = await sanityFetch({
    query,
  });

  const initialProjects = projects.data as Project[];

  // 2. Hand the data off cleanly to the interactive client container wrapper
  return <ProjectsList initialProjects={initialProjects} />;
}
