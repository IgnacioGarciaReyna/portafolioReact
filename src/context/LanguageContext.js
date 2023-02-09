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
    },
    about: {
      title: "Sobre mí:",
      firstSection: [
        "Además de programando, paso mi tiempo libre mirando ",
        "cine ",
        "y tocando la ",
        "guitarra",
        "Disfruto mucho salir a tomar un ",
        "cafe ",
        "de especialidad con una buena porción de torta.",
        "También, me gusta el ",
        "futbol",
        " y trato de jugar todos los partidos por semana que puedo.",
      ],
      secondSection: [
        "Empecé a estudiar ",
        "programación ",
        "porque siempre tuve facilidad con la tecnología.",
        "Desde mi primer materia en la Universidad, pasando por los cursos de Front End y luego trabajando en mi propios proyectos, programar siempre me resultó muy ",
        "divertido",
        ".",
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
    projectCard: { deploy: "Página", repo: "Repositorio" },
    resume: {
      title: "Curriculum Vitae",
      downloadResume: "Descargar CV",
      education: "Educación",
      experience: "Experiencia",
    },
    technologies: { title: "Tecnologías" },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Email",
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
    },
    about: {
      title: "About me:",
      firstSection: [
        "Besides programming, I like to hang out watching ",
        "movies ",
        "and playing ",
        "guitar",
        "I really enjoy going out for a specialty ",
        "coffee ",
        "with a big piece of cake.",
        "Also, I love ",
        "football",
        ", so I try to play as many games a week as I can.",
      ],
      secondSection: [
        "I started studying ",
        "programming ",
        "because I've always had a knack for technology.",
        "From my first university subject, through Front End courses and then working on my own projects, programming has always been a lot of ",
        "fun ",
        "for me.",
      ],
      curiosity: {
        curiousThing: "*A curious thing: ",
        text: "Before being a programmer, I was studying to be a Music Producer.",
      },
    },
    projects: {
      title: "Projects",
      gitHub: "My GitHub",
    },
    projectCard: { deploy: "Deploy", repo: "Repository" },
    resume: {
      title: "Resume",
      downloadResume: "Download Resume",
      education: "Education",
      experience: "Experience",
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
