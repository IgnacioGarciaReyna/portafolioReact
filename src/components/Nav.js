import React, { useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


const Navigation = () => {
  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle("show");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("show");
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
              onClick={hideNavbar}
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
              onClick={hideNavbar}
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
              onClick={hideNavbar}
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
              onClick={hideNavbar}
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
              onClick={hideNavbar}
            >
              Technologies
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
              onClick={hideNavbar}
            >
              Contact me
            </Link>
          </li>
          <FaTimes className="nav-close-menu" onClick={showNavMenu} />
        </ul>
        <FaBars className="nav-button-menu" onClick={showNavMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
