import React from 'react'
import { Link } from 'react-scroll';

const University = () => {
    return (
        <section id="university" className="main-section main-section-university shadow-section">
  <div className="section-container">
    <div className="section-content">
      <div className="section-header">
        <h2>Estudio en la Universidad Nacional de Quilmes</h2>
        <p>Voy por el segundo año de la Licenciatura en Informática</p>
      </div>
      <div className="section-text">
        <p>
          En junio de 2019, luego de haber hecho un curso de Reparación de PC y
          otro de Redes y Telecomunicaciones, decidí comenzar mi carrera en
          tecnología. Siempre tuve facilidad con la tecnología así que decidí
          probar suerte. Cuando comencé las clases y cursé las primeras materias
          me dí cuenta de que había sido un decisión super acertada.
        </p>
      </div>
      <div className="section-text">
        <p>
          La Universidad Nacional de Quilmes, o UNQUI para los amigos, es
          hermosa y cumple con algo muy importante: tienen un buffet bien
          completo y unas medialunas riquisimas.
        </p>
      </div>
      <div>
        <a href="#" className="trasparent-button">Learn More</a>
      </div>
    </div>
  </div>
  <Link to="programming" spy={true} smooth={true} offset={0} duration={500} className="goto-next"></Link>
</section>
    );
}
 
export default University;