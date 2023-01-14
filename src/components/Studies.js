import React from "react";
import { Link } from "react-scroll";

const Studies = () => {
  return (
    <section
      id="studies"
      className="main-section main-section-studies shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>Programación</h2>
            <p>Cómo llegué al mundo de la programación?</p>
          </div>
          <div className="section-text">
            <p>
              En de 2019, luego de haber hecho un curso de Reparación de PC y
              otro de Redes y Telecomunicaciones, decidí comenzar a estudiar
              programación y me anoté en la Licenciatura en Informática.
            </p>
          </div>
          <div className="section-text">
            <p>
              En 2021 cursé el Programa Up de Codellege by Softtek. En este
              curso me enseñaron Angular, tuve clases de Inglés gramatical y
              conversacional y me certifiqué como Scrum Developer.
            </p>
          </div>
          <div className="section-text">
            <p>
              En 2022 realicé un curso de React de Udemy dictado por Juan Pablo
              de la Torre Valdez donde aprendí el uso de hooks y realicé mas de
              10 proyectos.
            </p>
          </div>
          <div className="section-text">
            <p>
              Desde junio de 2022 trabajo como QA en MRM. Testeo componentes de
              Quantum (un CMS de Adobe). Además de estar aprendiendo mucho,
              estoy cursando Inglés in Company con Lingua University.
            </p>
          </div>
          <div>
            <a href="#" className="transparent-button white-button">
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

export default Studies;
