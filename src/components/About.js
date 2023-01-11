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
            <h2>Hola, soy Nacho!</h2>
            <p>Acerca de mi:</p>
          </div>
          <div className="section-text">
            <p>
              En junio de 2019, luego de haber hecho un curso de Reparación de
              PC y otro de Redes y Telecomunicaciones, decidí comenzar a
              estudiar programación.
            </p>
          </div>
          <div className="section-text">
            <p>
            En 2021 Realicé el Programa Up de Codellege by Softtek. En este
              curso no solo aprendí desarrollo web con Angular, también tuve
              clases de Inglés gramatical y conversacional y me certifiqué como Scrum
              Developer.
                <br/>
              En 2022 realicé un curso de React de Udemy dictado por Juan Pablo
              de la Torre Valdez. Donde aprendí el uso de hooks y realicé mas de
              10 proyectos. El haber aprendido Angular primero hizo que todo
              fuera mas facil.
                <br/>
              Desde junio de 2022 trabajo como QA testeando componentes de un
              CMS de Adobe. Trabajamos con un sistema de tickets de Jira. Además
              de estar aprendiendo mucho, estoy cursando Inglés in Company con Lingua University.
            </p>
          </div>
          <div>
            <a href="#" className="trasparent-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Link
        to="programming"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next"
      ></Link>
    </section>
  );
};

export default About;