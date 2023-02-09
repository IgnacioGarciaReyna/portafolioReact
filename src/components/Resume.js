import React, { useContext } from "react";
import ResumeItem from "./ResumeItem";
import StudiesIcon from "../assets/img/resume-icon1.png";
import JobsIcon from "../assets/img/resume-icon2.png";
import { Link } from "react-scroll";
import resumeURL from "../assets/Resume - Ignacio Garcia Reyna.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";

AOS.init();

const degrees = [
  {
    id: "1",
    title: {
      en: "Computer Science Bachelor",
      es: "Licenciatura en Informática",
    },
    subtitle: "Universidad Nacional de Quilmes",
    duration: {
      en: "2019 - To date",
      es: "2019 - Actualidad",
    },
    lines: {
      en: [],
      es: [],
    },
    reference: {},
  },
  {
    id: "2",
    title: {
      en: "React | The Complete Guide",
      es: "React | La guía completa: Hooks, Context, Redux y MERN",
    },
    subtitle: "Udemy",
    duration: {
      en: "2022",
      es: "2022",
    },
    lines: {
      en: [],
      es: [],
    },
    reference: {
      text: {
        en: "Read more",
        es: "Ver Curso",
      },
      link: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
    },
  },
  {
    id: "3",
    title: {
      en: "English in Company | Intermediate Level",
      es: "English in Company | Intermediate Level",
    },
    subtitle: "Lingua Universi",
    duration: {
      en: "2022",
      es: "2022",
    },
    lines: {
      en: [],
      es: [],
    },
    reference: {
      text: {
        en: "Read more",
        es: "Ver Lingua Universi",
      },
      link: "https://www.linguauniversi.com/english",
    },
  },
  {
    id: "4",
    title: {
      en: "Scrum Developer Professional Certificate v2020",
      es: "Scrum Developer Professional Certificate v2020",
    },
    subtitle: "Certiprof ",
    duration: {
      en: "2021",
      es: "2021",
    },
    lines: {
      en: [],
      es: [],
    },
    reference: {},
  },
  {
    id: "5",
    title: {
      en: "Telecommunications, Networks and Computer Repair",
      es: "Curso de Telecomunicaciones y Redes | Reparador de PC",
    },
    subtitle: "Universidad Nacional de Lanús",
    duration: {
      en: "2019",
      es: "2019",
    },
    lines: {
      en: [],
      es: [],
    },
    reference: {},
  },
];

const experiences = [
  {
    id: "20",
    title: {
      en: "QA Analyst",
      es: "QA Analyst",
    },
    subtitle: "MRM",
    duration: {
      en: "2022 - To date",
      es: "2022 - Actualidad",
    },
    lines: {
      en: [
        "Building pages in Adobe AEM for manual testing of components in a testenvironment.",
        "Creating Bug Tickets and Test Cases in Zephir.",
        "Managing tickets on Jira.",
        "Teamwork with MRM Manila (Philippines).",
      ],
      es: [
        "Creación de páginas en Adobe AEM para testeo manual de componentes en ambiente de pruebas.",
        "Creación de Bug Tickets y Test Cases en Zephir.",
        "Manejo de tickets en Jira.",
        "Trabajo en conjunto con el equipo de MRM Manila (Filipinas).",
      ],
    },
    reference: {
      text: {
        en: "Read more",
        es: "Ver MRM",
      },
      link: "https://www.mrm.com/en/",
    },
  },
  {
    id: "21",
    title: {
      en: "Web Desing and Development | Gramatical English",
      es: "Diseño y Desarrollo Web | Inglés Gramatical",
    },
    subtitle: "Codellege by Softtek - Programa UP",
    duration: {
      en: "2021",
      es: "2021",
    },
    lines: {
      en: [
        "Angular: RXJS, Observables, HttpClient, Directives, Routing and JSONs.",
        "JavaScript: Functions, Objects, APIs, Events, Callbacks and Promises.",
        "CSS: Flexbox, Grid. Booststrap, Angular Material and Bulma.",
      ],
      es: [
        "Angular: RXJS, Observables, HttpClient, Directivas, Routing, JSONs.",
        "JavaScript: Funciones, Objetos, APIs, Eventos, Callbacks y Promesas.",
        "CSS: Flexbox, Grid. Booststrap, Angular Material y Bulma.",
      ],
    },
    reference: {
      text: {
        en: "Read more",
        es: "Ver Codellege",
      },
      link: "https://codellege.com/",
    },
  },
  {
    id: "22",
    title: {
      en: "Computer Repair",
      es: "Reparador de PC",
    },
    subtitle: "Freelance",
    duration: {
      en: "2019 - 2022",
      es: "2019 - 2022",
    },
    lines: {
      en: [
        "Remote support for technical inquiries.",
        "Advice on assembly and purchase of equipment",
        "Software and Operating System installation.",
      ],
      es: [
        "Soporte remoto para consultas técnicas.",
        "Asesoramiento de armado y compra de equipos.",
        "Instalación de SO y software.",
      ],
    },
    reference: {},
  },
];

const downloadResume = () => {
  const downloadInstance = document.createElement("a");
  downloadInstance.href = resumeURL;
  downloadInstance.target = "_blank";
  downloadInstance.download = "Resume - Ignacio Garcia Reyna";
  document.getElementById("container")?.appendChild(downloadInstance);
  downloadInstance.click();
  document.getElementById("container")?.removeChild(downloadInstance);
};

const Resume = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="resume" className="shadow-section">
      <div className="container-technologies">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container-title">{texts.resume.title}</h2>
          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-resume">
          <div className="column">
            <div
              className="resume-title-container"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="resume-title resume-icon"
                src={JobsIcon}
                alt="Studies"
              />
              <h3 className="resume-title">
                <span className="green-span">{texts.resume.education}</span>
              </h3>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              {degrees.map((degree) => (
                <ResumeItem item={degree} key={degree.id} />
              ))}
            </div>
          </div>
          <div className="column">
            <div
              className="resume-title-container"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="resume-title resume-icon"
                src={StudiesIcon}
                alt="Jobs"
              />
              <h3 className="resume-title">
                <span className="green-span">{texts.resume.experience}</span>
              </h3>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              {experiences.map((experience) => (
                <ResumeItem item={experience} key={experience.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <a
            className="transparent-button white-button"
            onClick={downloadResume}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {texts.resume.downloadResume}
          </a>
        </div>

        <div className="goto-next-container">
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="goto-next"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
