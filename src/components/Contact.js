import React from "react";
import emailjs from "emailjs-com";

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
      <div className="container-projects">
        <header className="">
          <h2>Contacto</h2>
          {/* <p>Something</p>  */}
          <div className="separator-line"></div>
        </header>
        <div className="form-container">
          <form className="contact-form" onSubmit={enviarMail}>
            <div className="">
              <input
                type="text"
                className="input-form"
                id="name"
                name="name"
                placeholder="Nombre"
              />
            </div>
            <div className="">
              <input
                type="text"
                className="input-form"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="">
              <textarea
                type="text"
                className="input-form"
                id="message"
                name="message"
                placeholder="Mensaje"
                cols="50"
                rows="8"
              ></textarea>
            </div>
            <button type="submit" className="transparent-button black-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
