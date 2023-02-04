import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="main-section main-section-about shadow-section"
    >
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>
              Hi, I'm <span className="green-span">Nacho</span> !
            </h2>
            <p>About me:</p>
          </div>
          <div className="section-text">
            <p>
              Besides programming, I like to hang out watching
              <span className="green-span"> movies</span> and playing
              <span className="green-span"> guitar</span>. Also, I like to play
              as many
              <span className="green-span"> football</span> games per week as I
              can.
            </p>
          </div>
          <div className="section-text">
            <p>
              I started studying
              <span className="green-span"> programming</span> because I've
              always had a knack for technology. From my first university
              course, through Front End courses and then working on my own
              projects, programming has always been a lot of
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

          {/* <div>
            <a href="#" className="transparent-button white-button">
              Learn More
            </a>
          </div> */}
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
        ></Link>
      </div>
    </section>
  );
};

export default About;
