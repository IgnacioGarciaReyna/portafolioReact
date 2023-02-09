import React, { useContext } from "react";
import { Link } from "react-scroll";
import porfilePicture from "../assets/img/profile-picture.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import LanguageContext from "../context/LanguageContext";

AOS.init();

const Home = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div id="home" className="container background-container">
      <div className="content" data-aos="zoom-out" data-aos-duration="2000">
        <div className="home-column home-column-text">
          <header>
            <p>
              <b>{texts.home.hello}</b> <br /> {texts.home.myName}
            </p>
            <h2 className="">
              <Typewriter
                className="typewriter"
                words={["Ignacio Garcia Reyna", "Nacho"]}
                loop={20}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </h2>
            <p>
              {texts.home.imA} &lt;<b>{texts.home.frontEndDev}</b>/&gt;.
            </p>
          </header>
        </div>
        <div className="home-column home-column-image">
          <span className="profile-image floating-img">
            <img src={porfilePicture} alt="" />
          </span>
        </div>
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
