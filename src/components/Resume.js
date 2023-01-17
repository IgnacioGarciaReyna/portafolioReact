import React from "react";
import { Link } from "react-scroll";
import ResumeItem from "./ResumeItem";
import StudiesIcon from "../assets/img/resume-icon1.png";
import JobsIcon from "../assets/img/resume-icon2.png";

const degrees = [
  {
    id: "1",
    title: "Licenciatura en Informática",
    subtitle: "Universidad Nacional de Quilmes",
    duration: "2019 - Actualidad",
    text: "",
  },
  {
    id: "2",
    title: "Diseño y Desarrollo Web | Inglés Gramatical",
    subtitle: "Codellege by Softtek - Programa UP",
    duration: "2021",
    text: "Angular: RXJS, Observables, HttpClient, Directivas, Routing, JSONs. JavaScript: Funciones, Objetos, APIs, Eventos, Callbacks y Promesas. CSS: Flexbox, Grid. Booststrap, Angular Material y Bulma. ",
  },
  {
    id: "3",
    title: "React: La guía completa",
    subtitle: "Udemy",
    duration: "2022 - Sin concluir",
    text: "",
  },
  {
    id: "4",
    title: "Inglés in Company | Nivel Intermediate",
    subtitle: "Lingua Universi",
    duration: "2022",
    text: "",
  },
  {
    id: "5",
    title: "Scrum Developer Professional Certificate v2020",
    subtitle: "Certiprof ",
    duration: "2021",
    text: "",
  },
  {
    id: "6",
    title: "Curso de Telecomunicaciones y Redes | Reparador de PC",
    subtitle: "Universidad Nacional de Lanús",
    duration: "2019",
    text: "",
  },
];

const experiences = [
  {
    id: "20",
    title: "QA Analyst",
    subtitle: "MRM",
    duration: "2022 - Actualidad",
    text: "Creación de páginas en cmd de Adobe y testeo manual de componentes y páginas web. Trabajo en equipo multinacional/plurinacional (mitad del equipo en filipinas) en la cuenta de GMC/ Chevrolet organizado con el Sistema de tickets de Jira. Creación de Test Cases en Zephir y Bug tickets.",
  },
  {
    id: "21",
    title: "Reparador de PC",
    subtitle: "Freelance",
    duration: "2019 - 2022",
    text: "Soporte remoto para consultas técnicas. Asesoramiento de armado y compra de equipos. Instalación de SO y software.",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="shadow-section">
      <div className="container-technologies">
        <header className="">
          <h2>Resume</h2>
          {/* <p>Something</p> */}
          <div className="separator-line"></div>
        </header>
        <div className="grid-resume">
          <div className="column">
            <div>
              <img src={StudiesIcon} alt="Studies" />
              <h3>Educación</h3>
            </div>
            <div>
              {degrees.map((degree) => (
                <ResumeItem item={degree} key={degree.id} />
              ))}
            </div>
          </div>
          <div className="column">
            <div>
              <img src={JobsIcon} alt="Jobs" />
              <h3>Experiencia</h3>
            </div>
            <div>
              {experiences.map((experience) => (
                <ResumeItem item={experience} key={experience.id} />
              ))}
            </div>
          </div>
        </div>
        <footer className="">
          <a href="#" className="transparent-button white-button">
            Something
          </a>
        </footer>
      </div>
      
    </section>
  );
};

export default Resume;
