import { PROJECTS } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      {PROJECTS.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
          <p>{project.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
