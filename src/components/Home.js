import React from "react";
import { Link } from "react-scroll";
import porfilePicture from "../assets/img/profile-picture.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div id="home" className="container background-container">
      <div className="content" data-aos="zoom-out" data-aos-duration="2000">
        <header>
          <p>
            <b>Hi!</b> <br /> My name is
          </p>
          <h2 className="typewriter">Ignacio Garcia Reyna</h2>
          <p>
            and I'm a &lt;<b>Front End Developer</b>/&gt;.
          </p>
        </header>
        <span className="profile-image floating-img">
          <img src={porfilePicture} alt="" />
        </span>
      </div>
      <div className="goto-next-container">
        <Link
          to="about"
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
  );
};

export default Home;
