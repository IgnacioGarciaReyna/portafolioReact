import React from "react";
import { Link } from "react-scroll";
import resumeURL from "../assets/Currículum Vitae - Ignacio Garcia Reyna.pdf";

const Navigation = () => {
  const downloadResume = () => {
    const downloadInstance = document.createElement("a");
    downloadInstance.href = resumeURL;
    downloadInstance.target = "_blank";
    downloadInstance.download = "Resume";
    document.getElementById("container")?.appendChild(downloadInstance);
    downloadInstance.click();
    document.getElementById("container")?.removeChild(downloadInstance);
  };

  return (
    <div className="container-navigation">
      <nav id="nav">
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="technologies"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Tecnologias
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Contacto
            </Link>
          </li>
          <li>
            <a
              id="button-resume"
              className="button primary"
              onClick={downloadResume}
            >
              Descargar Currículum
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
