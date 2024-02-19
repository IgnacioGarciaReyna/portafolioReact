import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";
const translations = {
  es: {
    home: {
      hello: "Hola!",
      myName: "Me llamo",
      imA: "y soy ",
      frontEndDev: "Desarrollador Front End",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      resume: "Currículum",
      technologies: "Tecnologías",
      contact: "Contacto",
      translate: "English",
    },
    about: {
      title: "Sobre mí:",
      firstSection: [
        "Comencé a estudiar ",
        "programación ",
        "porque me gusta resolver problemas y siempre tuve facilidad para la tecnología.",
        "Ya sea en la universidad, en cursos o en mis propios proyectos, programar siempre me resultó muy ",
        "divertido",
        ".",
      ],
      secondSection: [
        "Cada vez que tengo un rato libre trato de jugar al ",
        "fútbol ",
        "con mis amigos, aunque también me gusta tocar la ",
        "guitarra ",
        "y mirar ",
        "cine",
        "Una de mis salidas preferidas es salir a tomar un ",
        "café ",
        "de especialidad con un buen pedazo de torta.",
      ],
      curiosity: {
        curiousThing: "*Una curiosidad: ",
        text: "Antes de ser programador, estudiaba para ser Productor Musical.",
      },
    },
    projects: {
      title: "Proyectos",
      gitHub: "Mi GitHub",
    },
    projectCardButtons: {
      deploy: "Página",
      repo: "Repositorio",
      deployedSoon: "En breve",
    },
    projectsData: [
      {
        id: "0",
        title: "Armate los Teams",
        img: "./armatelosteams-home2.png",
        description:
          "Aplicación para armar equipos de futbol en base a la habilidad de cada jugador.",
        technology: "React | TypeScript | Material UI",
        url: "https://armate-los-teams.netlify.app/",
        repository: "https://github.com/IgnacioGarciaReyna/panyqueso",
      },
      {
        id: "1",
        title: "Cinema Paradiso Trailers",
        img: "./movies-home.png",
        description:
          "Aplicación que muestra trailers e información de peliculas y series.",
        technology: "React | Axios | Hooks",
        url: "",
        repository: "https://github.com/IgnacioGarciaReyna/peliculasReact.git",
      },
      {
        id: "2",
        title: "PokeApi",
        img: "./pokeapi-home.png",
        description:
          "Aplicación que muestra los distintos pokemones y sus habilidades.",
        technology: "Angular | Axios | RXJS",
        url: "https://ignaciogarciareyna.github.io/PokedexAngular/",
        repository: "https://github.com/IgnacioGarciaReyna/PokedexAngular",
      },
      {
        id: "3",
        title: "Portafolio",
        img: "./portafolio-home.png",
        description:
          "Página personal creada para guardar y mostrar mis proyectos.",
        technology: "React | Hooks | Context",
        url: "https://github.com/IgnacioGarciaReyna",
        repository: "https://github.com/IgnacioGarciaReyna/portafolioReact",
      },
    ],
    resume: {
      title: "Curriculum Vitae",
      downloadResume: "Descargar CV",
      education: {
        title: "Educación",
        items: [
          {
            id: "1",
            title: "Licenciatura en Informática",
            subtitle: "Universidad Nacional de Quilmes",
            duration: "2019 - Actualidad",
            lines: [
              "Estructuras de Datos",
              "Programación Orientada a Objetos",
              "Principios SOLID",
              "Patrones de Diseño",
              "Diagramas de Clases con UML",
              "Tests de Unidad y Tests Doubles",
            ],
            reference: {
              text: "Ver programa",
              link: "http://www.unq.edu.ar/carreras/58-licenciatura-en-inform%C3%A1tica.php#d",
            },
          },
          {
            id: "2",
            title: "React | La guía completa",
            subtitle: "Udemy",
            duration: "2022",
            lines: ["React: Hooks, Context, Redux y MERN"],
            reference: {
              text: "Ver Curso",
              link: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
            },
          },
          {
            id: "3",
            title: "English in Company | Intermediate Level",
            subtitle: "Lingua Universi",
            duration: "2022 - Actualidad",
            lines: [],
            reference: {
              text: "Ver Lingua Universi",
              link: "https://www.linguauniversi.com/english",
            },
          },
          {
            id: "4",
            title: "Desarrollador Profesional Scrum Certificado v2020",
            subtitle: "Certiprof ",
            duration: "2021",
            lines: [],
            reference: {},
          },
          {
            id: "5",
            title: "Curso de Telecomunicaciones y Redes | Reparador de PC",
            subtitle: "Universidad Nacional de Lanús",
            duration: "2019",
            lines: [],
            reference: {},
          },
        ],
      },
      experience: {
        title: "Experiencia",
        items: [
          {
            id: "20",
            title: "QA Analyst",
            subtitle: "MRM",
            duration: "2022 - Actualidad",
            lines: [
              "Creación de páginas web en Adobe AEM para testeo de componentes.",
              "Manejo de tickets en Jira y creación de Bug Tickets y Test Cases en Zephir.",
              "Uso diario del inglés para comunicación con los equipos de USA y Filipinas.",
            ],
            reference: {
              text: "Ver MRM",
              link: "https://www.mrm.com/en/",
            },
          },
          {
            id: "21",
            title: "Desarrollo Web con Angular",
            subtitle: "Softtek - Codellege | Programa UP",
            duration: "2021",
            lines: [
              "RXJS, Observables, HttpClient, Directivas y Routing.",
              "JavaScript: consumo de APIs, Eventos, Callbacks y Promesas.",
              "HTML y CSS: Booststrap, Angular Material y Bulma. Flexbox y Grid.",
              "Inglés Conversacional",
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
        ],
      },
    },
    technologies: { title: "Tecnologías" },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Mail",
      message: "Mensaje",
      send: "Enviar",
    },
  },
  en: {
    home: {
      hello: "Hi!",
      myName: "My name is",
      imA: "and I'm a ",
      frontEndDev: "Front End Developer",
    },
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      resume: "Resume",
      technologies: "Technologies",
      contact: "Contact me",
      translate: "Español",
    },
    about: {
      title: "About me:",
      firstSection: [
        "I started studying ",
        "programming ",
        "because I enjoy solving problems and have always had a knack for technology.",
        "Whether at university, in courses or in my own projects, programming has always been a lot of ",
        "fun ",
        "for me.",
      ],

      //Whenever I have free time, I try to play soccer with my friends, although I also like to play the guitar and watch movies.
      secondSection: [
        "Whenever I have free time, I try to play ",
        "football ",
        "with my friends, although I also like to play ",
        "guitar ",
        "and watch ",
        "movies",
        "One of my favorite things to do is to go out for a long black ",
        "coffee ",
        "with a big piece of cake.",
      ],
      curiosity: {
        curiousThing: "*A funny thing: ",
        text: "Before I became a programmer, I wanted to be a music producer.",
      },
    },
    projects: {
      title: "Projects",
      gitHub: "My GitHub",
    },
    projectCardButtons: {
      deploy: "Deploy",
      repo: "Repository",
      deployedSoon: "Soon",
    },
    projectsData: [
      {
        id: "0",
        title: "Build the Teams",
        img: "./armatelosteams-home2.png",
        description:
          "App to build football teams based on the skills of each player.",
        technology: "React | TypeScript | Material UI",
        url: "https://armate-los-teams.netlify.app/",
        repository: "https://github.com/IgnacioGarciaReyna/panyqueso",
      },
      {
        id: "1",
        title: "Cinema Paradiso Trailers",
        img: "./movies-home.png",
        description:
          "Application that shows trailers and data from different movies and tv shows.",
        technology: "React | Axios | Hooks",
        url: "https://cinemaparadiso-trailers.netlify.app/",
        repository: "https://github.com/IgnacioGarciaReyna/peliculasReact.git",
      },
      {
        id: "2",
        title: "PokeApi",
        img: "./pokeapi-home.png",
        description:
          "Application that shows the different pokemons and their abilities.",
        technology: "Angular | Axios | RXJS",
        url: "https://ignaciogarciareyna.github.io/PokedexAngular/",
        repository: "https://github.com/IgnacioGarciaReyna/PokedexAngular",
      },
      {
        id: "3",
        title: "Portfolio",
        img: "./portafolio-home.png",
        description: "Personal page created to save and show my projects.",
        technology: "React | Hooks | Context",
        url: "https://github.com/IgnacioGarciaReyna",
        repository: "https://github.com/IgnacioGarciaReyna/portafolioReact",
      },
    ],
    resume: {
      title: "Resume",
      downloadResume: "Download Resume",
      education: {
        title: "Education",
        items: [
          {
            id: "1",
            title: "Computer Science Bachelor",
            subtitle: "Universidad Nacional de Quilmes",
            duration: "2019 - To date",
            lines: [
              "Data Structures",
              "Object Oriented Programming",
              "SOLID Principles",
              "Design Patterns",
              "UML Class Diagrams",
              "Unit Tests and Double Tests",
            ],
            reference: {
              text: "Read more",
              link: "http://www.unq.edu.ar/carreras/58-licenciatura-en-inform%C3%A1tica.php#d",
            },
          },
          {
            id: "2",
            title: "React | The Complete Guide",
            subtitle: "Udemy",
            duration: "2022",
            lines: ["React: Hooks, Context, Redux and MERN"],
            reference: {
              text: "Read more",
              link: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
            },
          },
          {
            id: "3",
            title: "English in Company | Intermediate Level",
            subtitle: "Lingua Universi",
            duration: "2022 - To date",
            lines: [],
            reference: {
              text: "Read more",
              link: "https://www.linguauniversi.com/english",
            },
          },
          {
            id: "4",
            title: "Scrum Developer Professional Certificate v2020",
            subtitle: "Certiprof ",
            duration: "2021",
            lines: [],
            reference: {},
          },
          {
            id: "5",
            title: "Telecommunications, Networks and Computer Repair",
            subtitle: "Universidad Nacional de Lanús",
            duration: "2019",
            lines: [],
            reference: {},
          },
        ],
      },
      experience: {
        title: "Experience",
        items: [
          {
            id: "20",
            title: "QA Analyst",
            subtitle: "MRM",
            duration: "2022 - To date",
            lines: [
              "Creation of web pages in Adobe AEM for web component testing.",
              "Ticket handling in Jira and creation of bug tickets and test cases in Zephir",
              "Daily use of English to communicate with US and Philippine teams",
            ],
            reference: {
              text: "Read more",
              link: "https://www.mrm.com/en/",
            },
          },
          {
            id: "21",
            title: "Web Development with Angular",
            subtitle: "Softtek - Codellege | UP Program",
            duration: "2021",
            lines: [
              "RXJS, Observables, HttpClient, Directives and Routing.",
              "JavaScript: APIs, Events, Callbacks and Promises.",
              "HTML and CSS: Booststrap, Angular Material and Bulma. Flexbox and Grid.",
              "Conversational English.",
            ],
            reference: {
              text: "Read more",
              link: "https://codellege.com/",
            },
          },
          {
            id: "22",
            title: "Computer Repair",
            subtitle: "Freelance",
            duration: "2018 - 2022",
            lines: [
              "Remote support for technical inquiries.",
              "Advice on assembly and purchase of equipment",
              "Software and Operating System installation.",
            ],
            reference: {},
          },
        ],
      },
    },
    technologies: { title: "Technologies" },
    contact: {
      title: "Contact me",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
