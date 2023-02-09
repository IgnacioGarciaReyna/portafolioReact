import React from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
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
            <h2>About me:</h2>
          </div>
          <div className="section-text">
            <p>
              Besides programming, I like to hang out watching
              <span className="green-span"> movies</span> and playing
              <span className="green-span"> guitar</span>.
              <br />I really enjoy going out for a specialty
              <span className="green-span"> coffee</span> with a big piece of
              cake.
              <br />
              Also, I love<span className="green-span"> football</span>, so I
              try to play as many games a week as I can.
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
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        ></Link>
      </div>
    </section>
  );
};

export default About;
