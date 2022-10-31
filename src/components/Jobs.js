import React from "react";
import { Link } from "react-scroll";

const Jobs = () => {
  return (
    <section id="jobs" className="main-section main-section-jobs shadow-section">
      <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2>Trabajo como QA en MRM</h2>
            <p>Desde junio de 2022 trabajo en tecnología</p>
          </div>
          <div className="section-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="section-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div>
            <a href="#" className="trasparent-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Link to="technologies" spy={true} smooth={true} offset={0} duration={500} className="goto-next"></Link>
    </section>
  );
};

export default Jobs;
