import React from "react";
import { Link } from "react-scroll";

const University = () => {
  return (
    <section
      id="university"
      className="main-section main-section-university shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>Universidad Nacional de Quilmes</h2>
            <p>Estudio la Licenciatura en Informática</p>
          </div>
          <div className="section-text">
            <p>
              En junio de 2019, luego de haber hecho un curso de Reparación de
              PC y otro de Redes y Telecomunicaciones, decidí comenzar a
              estudiar programación. Siempre tuve facilidad con la tecnología
              así que decidí probar suerte. Cuando comencé las clases y cursé
              las primeras materias me dí cuenta de que programar era lo mío.
            </p>
          </div>
          <div className="section-text">
            <p>
              Al margen de la carrera, la UNQUI es una universidad hermosa. Si
              llegaste temprano a clase podes jugar al ping pong en el gimnasio
              o si tenes sueño podes ir a la biblioteca que tiene tremendos
              sillones. El cafe del buffet y el del centro de estudiantes no son
              los mejores, pero el hecho de estar en el patio con un cafe y una
              medialuna en la mano es la gloria.
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

export default University;
