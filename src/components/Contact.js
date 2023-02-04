import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const socialIconsImages = require.context("../assets/img/", true);

const socials = [
  {
    id: "1",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ignaciogarciareyna/",
    src: "./linkedin-icon-white.png",
  },
  {
    id: "2",
    name: "GitHub",
    href: "https://github.com/IgnacioGarciaReyna",
    src: "./github-icon-white.png",
  },
  {
    id: "3",
    name: "HackerRank",
    href: "https://www.hackerrank.com/ignaciogarciare1",
    src: "./fake-hackerrank.png",
  },
  {
    id: "4",
    name: "Email",
    href: "mailto:ignaciogarciareyna@live.com",
    src: "./mail-icon.png",
  },
];

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
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <h2>Contact me</h2>
          {/* <p>Something</p>  */}
          <div className="separator-line"></div>
        </header>
        <div className="form-container">
          <form
            className="contact-form"
            onSubmit={enviarMail}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {/* <p className="sendme-text">Escribime algo:</p> */}
            <input
              type="text"
              className="input-form"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="input-form"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              type="text"
              className="contact-textarea"
              id="message"
              name="message"
              placeholder="Message"
              required
              cols="10"
              rows="3"
            ></textarea>
            <button
              id="submit-contact-button"
              type="submit"
              className="unstyle"
            >
              Send
            </button>
          </form>
        </div>
        <ul
          className="container-icons"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {socials.map((social) => (
            <li className="social-link">
              <a target="_blank" href={social.href}>
                <img
                  src={socialIconsImages(social.src)}
                  alt={social.name}
                  className="social-icon"
                />
              </a>
              <p className="social-name">{social.name}</p>
            </li>
          ))}
        </ul>
        <div className="goto-next-container">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="goto-next back-to-home"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
