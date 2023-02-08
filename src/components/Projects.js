import React from "react";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const projects = [
  {
    id: "1",
    title: "PokeApi",
    img: "./pokeapi-home.png",
    description: {
      en: "Application that shows the different pokemons and their abilities.",
      es: "Aplicación que muestra los distintos pokemones y sus habilidades.",
    },
    technology: "Angular",
    url: "https://ignaciogarciareyna.github.io/PokedexAngular/",
    repository: "https://github.com/IgnacioGarciaReyna/PokedexAngular",
  },
  {
    id: "2",
    title: "Portafolio",
    img: "./portafolio-home.png",
    description: {
      en: "Personal page created for job search.",
      es: "Página personal creada para la busqueda de trabajo.",
    },
    technology: "React",
    url: "https://github.com/IgnacioGarciaReyna",
    repository: "https://github.com/IgnacioGarciaReyna/portafolioReact",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="shadow-section">
      <div className="container-projects">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container-title">Projects</h2>
          <div className="separator-line"></div>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <a
          target="_blank"
          href="https://github.com/IgnacioGarciaReyna"
          className="transparent-button white-button"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          My GitHub
        </a>
        <div className="goto-next-container">
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="goto-next"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
