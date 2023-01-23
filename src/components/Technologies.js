import React from "react";
import angularIcon from "../assets/img/angular-icon.png";
import typescriptIcon from "../assets/img/ts-icon.png";
import javascriptIcon from "../assets/img/js-icon.png";
import bootstrapIcon from "../assets/img/bootstrap-icon.png";
import reactIcon from "../assets/img/react-cuadrado.png";
import gitIcon from "../assets/img/Git-Icon-1788C.png";
import cssIcon from "../assets/img/css-circ-icon.png";
import htmlIcon from "../assets/img/html-circ-icon.png";
import { Link } from "react-scroll";

const Technologies = () => {
  return (
    <section id="technologies" className="shadow-section">
      <div className="container-technologies">
        <header className="">
          <h2>Tecnologías</h2>
          {/* <p>Something</p> */}
          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-technologies">
          <div className="row">
            <section className="technology">
              <img className="icon" alt="React" src={reactIcon} />
              <h3>React</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="Angular" src={angularIcon} />
              <h3>Angular</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="TypeScript" src={typescriptIcon} />
              <h3>TypeScript</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="JavaScript" src={javascriptIcon} />
              <h3>JavaScript</h3>
            </section>
          </div>

          <div className="row">
            <section className="technology">
              <img className="icon" alt="GIT" src={gitIcon} />
              <h3>GIT</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="Bootstrap" src={bootstrapIcon} />
              <h3>Bootstrap</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="CSS" src={cssIcon} />
              <h3>CSS</h3>
            </section>
            <section className="technology">
              <img className="icon" alt="HTML" src={htmlIcon} />
              <h3>HTML</h3>
            </section>
          </div>
        </div>
        {/* <footer className="">
          <a href="#" className="transparent-button white-button">
            Something
          </a>
        </footer> */}
      </div>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next"
      ></Link>
    </section>
  );
};

export default Technologies;
