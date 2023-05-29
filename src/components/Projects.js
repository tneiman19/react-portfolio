import React from "react";
import projectsData from "../assets/projects.json"; // Import the project data from JSON
import "../styles/Projects.css"; // Import a separate CSS file for custom styles

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <div className="project-card" key={project.id}>
          <h1 className="project-name">{project.name}</h1>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          </a>
          <p className="project-title">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
