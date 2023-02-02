import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="main-section main-section-about shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>
              Hola, soy <span className="green-span">Nacho</span> !
            </h2>
            <p>Acerca de mi:</p>
          </div>
          <div className="section-text">
            <p>
              Ademas de programando, me gusta pasar mi tiempo libre mirando
              <span className="green-span"> cine</span> y tocando la
              <span className="green-span"> guitarra</span>. También me gusta
              jugar la mayor cantidad de partidos de
              <span className="green-span"> futbol</span> a la semana que puedo.
            </p>
          </div>
          <div className="section-text">
            <p>
              Comencé a estudiar
              <span className="green-span"> programación</span> porque siempre
              tuve facilidad con la tecnología. Desde la primer matería de
              facultad, pasando por los cursos de Front End y luego trabajando
              en los proyectos, programar siempre me resultó algo muy
              <span className="green-span"> divertido</span>.
            </p>
          </div>
          <div className="section-text">
            <p>
              *Curiosidad:{" "}
              <span className="aboutme-curiosity">
                Antes de ser programador estudiaba para ser Productor Musical.
              </span>
            </p>
          </div>

          {/* <div>
            <a href="#" className="transparent-button white-button">
              Learn More
            </a>
          </div> */}
        </div>
      </div>
      <div className="goto-next-container">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="goto-next"
        ></Link>
      </div>
    </section>
  );
};

export default About;
