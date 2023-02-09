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
              I started studying
              <span className="green-span"> programming</span> because I've
              always had a knack for technology.
              <br />
              From my first university subject, through Front End courses and
              then working on my own projects, programming has always been a lot
              of
              <span className="green-span"> fun</span> for me.
            </p>
          </div>
          <div className="section-text">
            <p>
              *A curious thing:{" "}
              <span className="aboutme-curiosity">
                Before being a programmer, I was studying to be a Music
                Producer.
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
