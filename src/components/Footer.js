import React from "react";
import linkedinIcon from "../assets/img/linkedin-icon-white.png";
import githubIcon from "../assets/img/github-icon-white.png";
import hackerRank from "../assets/img/fake-hackerrank.png";
import mailIcon from "../assets/img/mail-icon.png";

const Footer = () => {
  return (
    <footer id="footer">
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
          <a target="_blank" href="https://www.hackerrank.com/ignaciogarciare1">
            <img src={hackerRank} className="social-icon" />
          </a>
        </li>
        <li className="social-link">
          <a href="mailto:ignaciogarciareyna@live.com">
            <img src={mailIcon} className="social-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
