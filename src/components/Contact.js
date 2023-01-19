import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const enviarMail = (e) => {
    e.preventDefault();
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
        <div className="">
          <form className="contact-form">
            <input type="text" />
            <input type="email" />
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
        <footer className="">
          <a href="#" className="transparent-button white-button">
            Something
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
