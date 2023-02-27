import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const projectImages = require.context("../assets/img/", true);

AOS.init();

const ProjectCard = ({ project }) => {
  const { texts } = useContext(LanguageContext);

  return (
    <div data-aos="fade-right" data-aos-duration="2000">
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={project.description}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <div className="card-container">
            <img
              src={projectImages(project.img)}
              alt={project.title}
              className="card-image"
            />
            <p className="project-title">{project.title}</p>
            <p className="project-technology">{project.technology}</p>
            <p className="project-description">{project.description}</p>
            <div className="card-buttons">
              {project.url !== "" ? (
                <a
                  href={project.url}
                  target="_blank"
                  className="transparent-button white-button"
                >
                  {texts.projectCardButtons.deploy}
                </a>
              ) : (
                <a
                  className="transparent-button gray-button"
                >
                  {texts.projectCardButtons.deployedSoon}
                </a>
              )}
              <a
                href={project.repository}
                target="_blank"
                className="transparent-button white-button"
              >
                {texts.projectCardButtons.repo}
              </a>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default ProjectCard;
