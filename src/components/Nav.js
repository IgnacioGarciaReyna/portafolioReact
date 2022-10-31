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
        <ul>
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
              to="university"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Universidad
            </Link>
          </li>
          <li>
            <Link
              to="programming"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Programación
            </Link>
          </li>
          <li>
            <Link
              to="jobs"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="header-pag-item"
            >
              Trabajo
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
          <li>
            <Link
              to="footer"
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
