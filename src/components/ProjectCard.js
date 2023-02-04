import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projectImages = require.context("../assets/img/", true);

AOS.init();

const ProjectCard = ({ project }) => {
  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <div className="card-container">
        <img
          src={projectImages(project.img)}
          alt={project.title}
          className="card-image"
        />
        <p className="project-title">{project.title}</p>
        <p className="project-technology">{project.technology}</p>
        <p className="project-description">{project.description.en}</p>
        <div className="card-buttons">
          <a
            href={project.url}
            target="_blank"
            className="transparent-button white-button"
          >
            Deploy
          </a>
          <a
            href={project.repository}
            target="_blank"
            className="transparent-button white-button"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
