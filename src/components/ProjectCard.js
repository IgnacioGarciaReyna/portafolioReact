import React from "react";

const projectImages = require.context("../assets/img/", true)

const ProjectCard = ({ project }) => {
  return (
    <div className="card-container">
      <img src={projectImages(project.img)} alt={project.title} className="card-image"/>
      <p className="project-title">{project.title}</p>
      <p className="project-technology">{project.technology}</p>
      <p className="project-description">{project.description}</p>
      <div className="card-buttons">
        <a
          href={project.url}
          target="_blank"
          className="transparent-button white-button"
        >
          Sitio
        </a>
        <a
          href={project.repository}
          target="_blank"
          className="transparent-button white-button"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
