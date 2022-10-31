import React from 'react'
import angularIcon from "../assets/img/angular-icon.png"
import typescriptIcon from "../assets/img/ts-icon.png"
import javascriptIcon from "../assets/img/js-icon(2).png"
import bootstrapIcon from "../assets/img/bootstrap-icon.png"
import cssIcon from "../assets/img/css-circ-icon.png"
import htmlIcon from "../assets/img/html-circ-icon.png"



const Technologies = () => {
    return (<section id="" className="shadow-section">
    <div className="container-technologies">
      <header className="">
        <h2>Technologies</h2>
        <p>Something</p>
        <div className="separator-line"></div>
      </header>
      <div className="grid-technologies">
        <div className="row">
          <section className="technology">
            <img className="icon" src={angularIcon} />
            <h3>Angular</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
          <section className="technology">
            <img className="icon" src={typescriptIcon} />
            <h3>TypeScript</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
          <section className="technology">
            <img className="icon" src={javascriptIcon} />
            <h3>JavaScript</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
          <section className="technology">
            <img className="icon" src={bootstrapIcon} />
            <h3>Bootstrap</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
          <section className="technology">
            <img className="icon" src={cssIcon} />
            <h3>CSS</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
          <section className="technology">
            <img className="icon" src={htmlIcon} />
            <h3>HTML</h3>
            <p>
              Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci
              porttitor.
            </p>
          </section>
        </div>
      </div>
      <footer className="">
        <a href="#" className="trasparent-button">Something</a>
      </footer>
    </div>
  </section>);
}
 
export default Technologies;