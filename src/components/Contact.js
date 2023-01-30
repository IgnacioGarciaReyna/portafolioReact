import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import linkedinIcon from "../assets/img/linkedin-icon-white.png";
import githubIcon from "../assets/img/github-icon-white.png";
import hackerRank from "../assets/img/fake-hackerrank.png";
import mailIcon from "../assets/img/mail-icon.png";

const Contact = () => {
  const enviarMail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_6ym9gsa",
        "template_d0f19nu",
        e.target,
        "RuAWibwya93KcAZ0m"
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <section id="contact" className="shadow-section">
      <div className="container-technologies">
        <header className="">
          <h2>Contacto</h2>
          {/* <p>Something</p>  */}
          <div className="separator-line"></div>
        </header>
        <ul className="container-icons">
          <li className="social-link">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ignaciogarciareyna/"
            >
              <img src={linkedinIcon} className="social-icon" />
            </a>
          </li>
          <li className="social-link">
            <a target="_blank" href="https://github.com/IgnacioGarciaReyna">
              <img src={githubIcon} className="social-icon" />
            </a>
          </li>
          <li className="social-link">
            <a
              target="_blank"
              href="https://www.hackerrank.com/ignaciogarciare1"
            >
              <img src={hackerRank} className="social-icon" />
            </a>
          </li>
          <li className="social-link">
            <a href="mailto:ignaciogarciareyna@live.com">
              <img src={mailIcon} className="social-icon" />
            </a>
          </li>
        </ul>
        <div className="form-container">
          <form className="contact-form" onSubmit={enviarMail}>
            <input
              type="text"
              className="input-form"
              id="name"
              name="name"
              placeholder="Nombre"
            />

            <input
              type="text"
              className="input-form"
              id="email"
              name="email"
              placeholder="Email"
            />

            <textarea
              type="text"
              className="input-form"
              id="message"
              name="message"
              placeholder="Mensaje"
              cols="3"
              rows="8"
            ></textarea>

            <button
              id="submit-contact-button"
              type="submit"
              className="unstyle"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next back-to-home"
      ></Link>
    </section>
  );
};

export default Contact;
