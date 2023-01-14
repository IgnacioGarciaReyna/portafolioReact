import React from "react";

const Contact = () => {
  return (
    <section id="contacto" className="shadow-section">
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