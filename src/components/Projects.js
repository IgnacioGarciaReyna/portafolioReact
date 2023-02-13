import React, { useContext } from "react";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";

AOS.init();



const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="projects" className="shadow-section">
      <div className="container-projects">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container-title">{texts.projects.title}</h2>
          <div className="separator-line"></div>
        </header>
        <div className="projects-grid">
          {texts.projectsData.map((project) => (
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
          {texts.projects.gitHub}
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
