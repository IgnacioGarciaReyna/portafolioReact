import React, { useContext } from "react";
import ResumeItem from "./ResumeItem";
import StudiesIcon from "../assets/img/resume-icon1.png";
import JobsIcon from "../assets/img/resume-icon2.png";
import { Link } from "react-scroll";
import resumeURL from "../assets/Resume - Ignacio Garcia Reyna.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import LanguageContext from "../context/LanguageContext";

AOS.init();

const downloadResume = () => {
  const downloadInstance = document.createElement("a");
  downloadInstance.href = resumeURL;
  downloadInstance.target = "_blank";
  downloadInstance.download = "Resume - Ignacio Garcia Reyna";
  document.getElementById("container")?.appendChild(downloadInstance);
  downloadInstance.click();
  document.getElementById("container")?.removeChild(downloadInstance);
};

const Resume = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section id="resume" className="shadow-section">
      <div className="container-technologies">
        <header className="" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="container-title">{texts.resume.title}</h2>
          <div className="separator-line green-separator"></div>
        </header>
        <div className="grid-resume">
          <div className="column">
            <div
              className="resume-title-container"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="resume-title resume-icon"
                src={JobsIcon}
                alt="Studies"
              />
              <h3 className="resume-title">
                <span className="green-span">
                  {texts.resume.education.title}
                </span>
              </h3>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              {texts.resume.education.items.map((degree) => (
                <ResumeItem item={degree} key={degree.id} />
              ))}
            </div>
          </div>
          <div className="column">
            <div
              className="resume-title-container"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="resume-title resume-icon"
                src={StudiesIcon}
                alt="Jobs"
              />
              <h3 className="resume-title">
                <span className="green-span">
                  {texts.resume.experience.title}
                </span>
              </h3>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              {texts.resume.experience.items.map((experience) => (
                <ResumeItem item={experience} key={experience.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <a
            className="transparent-button white-button"
            onClick={downloadResume}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            {texts.resume.downloadResume}
          </a>
        </div>

        <div className="goto-next-container">
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="goto-next"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default Resume;
