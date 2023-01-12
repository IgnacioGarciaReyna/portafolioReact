import React from "react";
import { Link } from "react-scroll";

const Jobs = () => {
  return (
    <section
      id="jobs"
      className="main-section main-section-jobs shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>Trabajo</h2>
            <p>En este momento soy QA Analyst en MRM</p>
          </div>
          <div className="section-text">
            <p>
              Desde junio de 2022 trabajo como QA testeando componentes de un
              CMS de Adobe. Trabajamos con un sistema de tickets de Jira. Además
              de estar aprendiendo mucho, estoy cursando inglés que es brindado
              por la empresa.
            </p>
          </div>
          <div className="section-text">
            <p>
              MRM es una empresa de marketing digital que trabaja con clientes
              como Chevrolet, Coca Cola, Mastercard, Loreal, entre otros. Tiene
              un muy buen ambiente laboral, todos dentro de MRM son muy
              accesibles y buena onda.
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
        to="technologies"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next"
      ></Link>
    </section>
  );
};

export default Jobs;
