import React, { useContext, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LanguageContext from "../context/LanguageContext";

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
  const { texts } = useContext(LanguageContext);
  const [loadSpinner, setLoadSpinner] = useState(false);

  const enviarMail = (e) => {
    e.preventDefault();
    setLoadSpinner(true);
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
        e.target.reset();
        setLoadSpinner(false);
        toast.success("Message sent successfully!", {
          className: "toast",
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <section id="contact" className="shadow-section">
      <div className="container-technologies">
        <header data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container-title">{texts.contact.title}</h2>
          <div className="separator-line"></div>
        </header>
        <div className="form-container">
          {loadSpinner ? (
            <div className="contact-spinner-container">
              <FadeLoader
                color="#4bffa5"
                loading={loadSpinner}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : null}
          <form
            className="contact-form"
            onSubmit={enviarMail}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <input
              type="text"
              className="input-form"
              id="name"
              name="name"
              placeholder={texts.contact.name}
              required
            />
            <input
              type="email"
              className="input-form"
              id="email"
              name="email"
              placeholder={texts.contact.email}
              required
            />
            <textarea
              type="text"
              className="contact-textarea"
              id="message"
              name="message"
              placeholder={texts.contact.message}
              required
              cols="10"
              rows="3"
            ></textarea>
            <button
              id="submit-contact-button"
              type="submit"
              className="unstyle"
            >
              {texts.contact.send}
            </button>
          </form>
        </div>
        <ul
          className="container-icons"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
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
