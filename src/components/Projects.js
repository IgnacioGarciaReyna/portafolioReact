import React from "react";
import ProjectCard from "./ProjectCard";
import PokeApiImg from "../assets/img/pokeapi-home.png";

const projects = [
  {
    id: "1",
    title: "PokeApi",
    img: { PokeApiImg },
    description:
      "Aplicación que muestra los distintos pokemones y sus habilidades.",
    technology: "Angular",
    url: "https://ignaciogarciareyna.github.io/PokedexAngular/",
    repository: "https://github.com/IgnacioGarciaReyna/PokedexAngular",
  },
  {
    id: "2",
    title: "Portafolio",
    img: "src/assets/img/portafolio-home.png",
    description: "Página personal creada para la busqueda de trabajo.",
    technology: "React",
    url: "https://github.com/IgnacioGarciaReyna",
    repository: "https://github.com/IgnacioGarciaReyna/portafolioReact",
  },
  {
    id: "3",
    title: "Portafolio",
    img: "../assets/img/portafolio-home.png",
    description: "Página personal creada para la busqueda de trabajo.",
    technology: "React",
    url: "https://github.com/IgnacioGarciaReyna",
    repository: "https://github.com/IgnacioGarciaReyna/portafolioReact",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="shadow-section">
      <div className="container-projects">
        <header className="">
          <h2>Proyectos</h2>
          {/* <p>Something</p>  */}
          <div className="separator-line"></div>
        </header>
        <div className="">
          <div className="row">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
        <footer className="">
          <a href="#" className="transparent-button black-button">
            Something
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
