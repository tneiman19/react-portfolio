import React from "react";
import projectsData from "../assets/projects.json"; // Import the project data from JSON
import "../styles/Projects.css"; // Import a separate CSS file for custom styles

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project) => (
        <div className="project-card" key={project.id}>
          <h1 className="project-name">{project.name} <span>
            
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fa fa-github github-icon"></i> {/* GitHub Icon */}
          </a>
            </span></h1>
          <br/>
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
