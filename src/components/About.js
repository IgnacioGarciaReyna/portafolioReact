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
              Ademas de estudiar Licenciatura en Informática y Desarrollo Front
              End, me gusta pasar mi tiempo libre mirando cine y tocando la
              guitarra. También me gusta el futbol, juego todos los partidos a
              la semana que puedo.
            </p>
          </div>
          <div className="section-text">
            <p>
              En 2019 decidí comenzar a estudiar Licenciatura en Informática, en
              2021 cursé el Programa Up de Codellege by Softtek donde aprendí
              Angular, Inglés conversacional y me certifiqué como Scrum
              Developer. En 2022 realicé un curso de React de Udemy y desde
              junio trabajo como QA Analyst en MRM donde estuve cursando Inglés
              in Company con Lingua University.
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
