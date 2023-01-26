import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";

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

            <button id="submit-contact-button" type="submit" className="unstyle">
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
