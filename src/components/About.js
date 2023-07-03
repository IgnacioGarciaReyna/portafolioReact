import React, { useContext } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";

AOS.init();

const About = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="main-section main-section-about shadow-section"
    >
      <div
        className="section-container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div className="section-content">
          <div className="section-header">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.about.title}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <h2>{texts.about.title}</h2>
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="section-text">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.about.firstSection[0]}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <p>
                  {texts.about.firstSection[0]}
                  <span className="green-span">
                    {texts.about.firstSection[1]}
                  </span>
                  {texts.about.firstSection[2]}
                  <br />
                  {texts.about.firstSection[3]}
                  <span className="green-span">
                    {texts.about.firstSection[4]}
                  </span>
                  {texts.about.firstSection[5]}
                </p>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="section-text">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.about.secondSection[0]}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <p>
                  {texts.about.secondSection[0]}
                  <span className="green-span">
                    {texts.about.secondSection[1]}
                  </span>
                  {texts.about.secondSection[2]}
                  <span className="green-span">
                    {texts.about.secondSection[3]}
                  </span>
                  {texts.about.secondSection[4]}
                  <span className="green-span">
                    {texts.about.secondSection[5]}
                  </span>
                  .
                  <br />
                  {texts.about.secondSection[6]}
                  <span className="green-span">
                    {texts.about.secondSection[7]}
                  </span>
                  {texts.about.secondSection[8]}
                </p>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="section-text">
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={texts.about.curiosity.curiousThing}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <p>
                  {texts.about.curiosity.curiousThing}
                  <span className="aboutme-curiosity">
                    {texts.about.curiosity.text}
                  </span>
                </p>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
      <div className="goto-next-container">
        <Link
          to="projects"
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
    </section>
  );
};

export default About;
