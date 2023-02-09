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
    // console.log(e.target.value);
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
