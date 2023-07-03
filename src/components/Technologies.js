import React, { useContext } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

AOS.init();

const technologiesImages = require.context("../assets/img/", true);

const technologies = [
  {
    id: "1",
    name: "React",
    src: "./react-cuadrado.png",
  },
  {
    id: "2",
    name: "Angular",
    src: "./angular-icon.png",
  },
  {
    id: "3",
    name: "TypeScript",
    src: "./ts-icon.png",
  },
  {
    id: "4",
    name: "JavaScript",
    src: "./js-icon.png",
  },
  {
    id: "9",
    name: "Java",
    src: "./java-icon.png",
  },
  {
    id: "41",
    name: "RXJS",
    src: "./rxjs-logo.png",
  },
  {
    id: "6",
    name: "Bootstrap",
    src: "./bootstrap-icon.png",
  },
  {
    id: "5",
    name: "Git",
    src: "./Git-Icon-1788C.png",
  },
  {
    id: "7",
    name: "CSS",
    src: "./css-circ-icon.png",
  },
  {
    id: "8",
    name: "HTML",
    src: "./html-circ-icon.png",
  },
];

const Technologies = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="technologies" className="shadow-section">
      <div className="container-technologies">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={texts.technologies.title}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <h2 className="container-title">{texts.technologies.title}</h2>
            </CSSTransition>
          </SwitchTransition>

          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-technologies">
          {technologies.map((technology) => (
            <section
              className="technology"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className="technology-icon"
                alt={technology.name}
                src={technologiesImages(technology.src)}
                key={technology.name}
              />
              <h3>{technology.name}</h3>
            </section>
          ))}
        </div>
        <div className="goto-next-container">
          <Link
            to="contact"
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

export default Technologies;
