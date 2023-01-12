import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-container">
      <p>{project.title}</p>
      <p>{project.technology}</p>
      <p>{project.description}</p>
      <img src={project.img} alt={project.title} />
      <div className="card-buttons">
        <a
          href={project.url}
          target="_blank"
          className="transparent-button black-button"
        >
          Sitio
        </a>
        <a
          href={project.repository}
          target="_blank"
          className="transparent-button black-button"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
