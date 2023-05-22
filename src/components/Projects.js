import React from "react";
import projectsData from "../assets/projects.json";


const Projects = () => {
  console.log(JSON.stringify(projectsData))
  return (
    <div>
      <h1>Projects Page</h1>
      <p>This is the projects page content.</p>

      {projectsData.map((project) => (
        <div key={project.id}>
          <p>{project.name}</p>
          <img src={project.image} alt={project.alt} />
          <br/>
          <p>{project.description}</p>
          <a target="blank" href={project.github}>View Project On GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

