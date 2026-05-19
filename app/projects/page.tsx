import { projects } from "@/lib/projects";

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.tag.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
