import React, { useContext } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";

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
            <h2>{texts.about.title}</h2>
          </div>
          <div className="section-text">
            <p>
              {texts.about.firstSection[0]}
              <span className="green-span">{texts.about.firstSection[1]}</span>
              {texts.about.firstSection[2]}
              <span className="green-span">{texts.about.firstSection[3]}</span>.
              <br />
              {texts.about.firstSection[4]}
              <span className="green-span">{texts.about.firstSection[5]}</span>
              {texts.about.firstSection[6]}
              <br />
              {texts.about.firstSection[7]}
              <span className="green-span">{texts.about.firstSection[8]}</span>
              {texts.about.firstSection[9]}
            </p>
          </div>
          <div className="section-text">
            <p>
              {texts.about.secondSection[0]}
              <span className="green-span">{texts.about.secondSection[1]}</span>
              {texts.about.secondSection[2]}
              <br />
              {texts.about.secondSection[3]}
              <span className="green-span">{texts.about.secondSection[4]}</span>
              {texts.about.secondSection[5]}
            </p>
          </div>
          <div className="section-text">
            <p>
              {texts.about.curiosity.curiousThing}
              <span className="aboutme-curiosity">
                {texts.about.curiosity.text}
              </span>
            </p>
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
