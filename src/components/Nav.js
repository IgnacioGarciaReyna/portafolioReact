import React, { useRef } from "react";
import { Link } from "react-scroll";
import resumeURL from "../assets/Currículum Vitae - Ignacio Garcia Reyna.pdf";

const Navigation = () => {

  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle("show")
  };

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
        <ul className="nav-items-container" ref={navRef}>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-item"
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
              className="nav-item"
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
              className="nav-item"
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
              className="nav-item"
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
              className="nav-item"
            >
              Tecnologias
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="nav-item"
            >
              Contacto
            </Link>
          </li>
        </ul>
        <span className="nav-button-menu" onClick={showNavMenu}>
          {" "}
          <i></i>{" "}
        </span>
        <ul>
          <li className="li-resume-button">
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
