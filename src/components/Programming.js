import React from "react";
import { Link } from "react-scroll";

const Programming = () => {
  return (
    <section
      id="programming"
      className="main-section main-section-programming shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>Desarrollo Front End</h2>
            <p>Realicé un curso de React y otro de Angular</p>
          </div>
          <div className="section-text">
            <p>
              En 2022 realicé un curso de React de Udemy dictado por Juan Pablo
              de la Torre Valdez. Donde aprendí el uso de hooks, realicé mas de
              10 aplicaciones. El haber aprendido Angular primero hizo que todo
              fuera mas facil.
            </p>
          </div>
          <div className="section-text">
            <p>
              En 2021 Realicé el Programa Up de Codellege by Softtek. En este
              curso no solo aprendí desarrollo web con Angular, también tuve
              clases de Inglés gramatical y conversacional en las cuales tuve
              que realizar una presentación frente a mis compañeros, tuve un
              curso intensivo de Scrum gracias al que me certifiqué como Scrum
              Developer y además tuve sesiones semanales de Coaching.
            </p>
            {/* <p>
              Un extra fue que el curso es dictado desde México y que mis
              compañeros y profesores eran mexicanos, lo que hizo que las
              clases, las charlas y los intercambios de opiniones fueran mucho
              más interesantes para mi. Aprendí mucho con ellos y me dejaron con
              ganas de conocer México, lo cual estoy seguro que algún día voy a
              hacer.
            </p> */}
          </div>
          <div>
            <a href="#" className="trasparent-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Link
        to="jobs"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next"
      ></Link>
    </section>
  );
};

export default Programming;
