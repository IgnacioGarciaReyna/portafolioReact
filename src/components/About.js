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
              Ademas de estudiar Licenciatura en Informática y Desarrollo Front
              End, me gusta pasar mi tiempo libre mirando cine y tocando la
              guitarra. Ah! También me gusta el futbol, juego todos los partidos
              a la semana que puedo. Mi infusión preferida es el café, mi
              director de cine preferido es David Lynch y mi jugador de futbol
              que mas me gusta es Leandro Paredes.
            </p>
          </div>
          <div className="section-text">
            <p>
              Antes de empezar con Programación, estudiaba Audiovisión porque quería ser productor musical.
              Después de cursar varias materias, me dí cuenta que no quería vivir de eso, así que me incliné por seguir
              en otra area que me gustaba: Informática.
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

export default About;
