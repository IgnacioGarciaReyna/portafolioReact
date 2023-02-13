import React, { useContext } from "react";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

AOS.init();

const Projects = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="projects" className="shadow-section">
      <div className="container-projects">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={texts.projects.title}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <h2 className="container-title">{texts.projects.title}</h2>
            </CSSTransition>
          </SwitchTransition>
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
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={texts.projects.gitHub}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <span>{texts.projects.gitHub}</span>
            </CSSTransition>
          </SwitchTransition>
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
