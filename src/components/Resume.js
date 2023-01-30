import React from "react";
import ResumeItem from "./ResumeItem";
import StudiesIcon from "../assets/img/resume-icon1.png";
import JobsIcon from "../assets/img/resume-icon2.png";
import { Link } from "react-scroll";

const degrees = [
  {
    id: "1",
    title: "Licenciatura en Informática",
    subtitle: "Universidad Nacional de Quilmes",
    duration: "2019 - Actualidad",
    lines: [],
    reference: {},
  },
  {
    id: "2",
    title: "React | La guía completa: Hooks, Context, Redux y MERN",
    subtitle: "Udemy",
    duration: "2022",
    lines: [],
    reference: {
      text: "Ver Curso",
      link: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
    },
  },
  {
    id: "3",
    title: "English in Company | Intermediate Level",
    subtitle: "Lingua Universi",
    duration: "2022",
    lines: [],
    reference: {
      text: "Ver Lingua Universi",
      link: "https://www.linguauniversi.com/english",
    },
  },
  {
    id: "4",
    title: "Scrum Developer Professional Certificate v2020",
    subtitle: "Certiprof ",
    duration: "2021",
    lines: [],
    reference: {
    },
  },
  {
    id: "5",
    title: "Curso de Telecomunicaciones y Redes | Reparador de PC",
    subtitle: "Universidad Nacional de Lanús",
    duration: "2019",
    lines: [],
    reference: {},
  },
];

const experiences = [
  {
    id: "20",
    title: "QA Analyst",
    subtitle: "MRM",
    duration: "2022 - Actualidad",
    lines: [
      "Creación de páginas en Adobe AEM para testeo manual de componentes en ambiente de pruebas.",
      "Creación de Bug Tickets y Test Cases en Zephir.",
      "Manejo de tickets en Jira.",
      "Trabajo en conjunto con el equipo de MRM Manila (Filipinas).",
    ],
    reference: {
      text: "Ver MRM",
      link: "https://www.mrm.com/en/",
    },
  },
  {
    id: "21",
    title: "Diseño y Desarrollo Web | Inglés Gramatical",
    subtitle: "Codellege by Softtek - Programa UP",
    duration: "2021",
    lines: [
      "Angular: RXJS, Observables, HttpClient, Directivas, Routing, JSONs.",
      "JavaScript: Funciones, Objetos, APIs, Eventos, Callbacks y Promesas.",
      "CSS: Flexbox, Grid. Booststrap, Angular Material y Bulma.",
    ],
    reference: {
      text: "Ver Codellege",
      link: "https://codellege.com/",
    },
  },
  {
    id: "22",
    title: "Reparador de PC",
    subtitle: "Freelance",
    duration: "2019 - 2022",
    lines: [
      "Soporte remoto para consultas técnicas.",
      "Asesoramiento de armado y compra de equipos.",
      "Instalación de SO y software.",
    ],
    reference: {},
  },
];

const Resume = () => {
  return (
    <section id="resume" className="shadow-section">
      <div className="container-technologies">
        <header className="">
          <h2>Resume</h2>
          {/* <p>Something</p> */}
          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-resume">
          <div className="column">
            <div className="resume-title-container">
              <img
                className="resume-title resume-icon"
                src={StudiesIcon}
                alt="Studies"
              />
              <h3 className="resume-title">
                <span className="green-span">Educación</span>
              </h3>
            </div>
            <div>
              {degrees.map((degree) => (
                <ResumeItem item={degree} key={degree.id} />
              ))}
            </div>
          </div>
          <div className="column">
            <div className="resume-title-container">
              <img
                className="resume-title resume-icon"
                src={JobsIcon}
                alt="Jobs"
              />
              <h3 className="resume-title">
                <span className="green-span">Experiencia</span>
              </h3>
            </div>
            <div>
              {experiences.map((experience) => (
                <ResumeItem item={experience} key={experience.id} />
              ))}
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
      </div>
    </section>
  );
};

export default Resume;
