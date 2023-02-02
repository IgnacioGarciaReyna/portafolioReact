import React from "react";
import { Link } from "react-scroll";

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
    id: "5",
    name: "Git",
    src: "./Git-Icon-1788C.png",
  },
  {
    id: "6",
    name: "Bootstrap",
    src: "./bootstrap-icon.png",
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
  return (
    <section id="technologies" className="shadow-section">
      <div className="container-technologies">
        <header className="">
          <h2>Tecnologías</h2>
          {/* <p>Something</p> */}
          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-technologies">
          {technologies.map((technology) => (
            <section className="technology">
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
        {/* <footer className="">
          <a href="#" className="transparent-button white-button">
            Something
          </a>
        </footer> */}
        <div className="goto-next-container">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="goto-next"
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
