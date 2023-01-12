import React from "react";
import PokeApiImg from "../assets/img/pokeapi-home.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-container">
      <p>{project.title}</p>
      <p>{project.technology}</p>
      <p>{project.description}</p>
      <img src={project.img} alt={project.title} />
      <div className="card-buttons">
        <a href="#" className="trasparent-button">
          Sitio
        </a>
        <a href="#" className="trasparent-button">
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
