import React, { useContext, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineTranslation } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

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
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.home}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <li>
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.about}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <li>
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.projects}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <li>
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.resume}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <li>
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.technologies}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <li>
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.nav.contact}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
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
              </CSSTransition>
            </SwitchTransition>
          </li>
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={texts.nav.translate}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <li className="nav-item li-translate">
                <button
                  className="translate-button"
                  onClick={toggleLanguage}
                  value={languageValue}
                >
                  {texts.nav.translate}
                  <AiOutlineTranslation className="icon-translate"></AiOutlineTranslation>
                </button>
              </li>
            </CSSTransition>
          </SwitchTransition>
          <FaTimes className="nav-close-menu" onClick={showNavMenu} />
        </ul>
        <FaBars className="nav-button-menu" onClick={showNavMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
