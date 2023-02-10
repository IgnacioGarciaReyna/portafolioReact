import React, { useContext, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineTranslation } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";

AOS.init();

const Navigation = () => {
  const [languageValue, setLanguageValue] = useState("es");
  const { texts, handleLanguage } = useContext(LanguageContext);
  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle("show");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("show");
  };

  const toggleLanguage = (e) => {
    handleLanguage(e);
    if (e.target.value === "es") {
      setLanguageValue("en");
    } else {
      setLanguageValue("es");
    }
  };
  return (
    <div className="container-navigation">
      <nav id="nav" data-aos="fade-down" data-aos-duration="2000">
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
              {texts.nav.home}
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
              {texts.nav.about}
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
              {texts.nav.projects}
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
              {texts.nav.resume}
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
              {texts.nav.technologies}
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
              {texts.nav.contact}
            </Link>
          </li>
          <li>
            <AiOutlineTranslation></AiOutlineTranslation>
            <button onClick={toggleLanguage} value={languageValue}>
              {texts.nav.translate}
            </button>
          </li>
          <FaTimes className="nav-close-menu" onClick={showNavMenu} />
        </ul>
        <FaBars className="nav-button-menu" onClick={showNavMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
