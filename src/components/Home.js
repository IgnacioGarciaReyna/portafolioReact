import React from "react";
import { Link } from "react-scroll";
import porfilePicture from "../assets/img/profile-picture.jpg";
import University from "./University";

const Home = () => {
  return (
    <div id="home" className="container background-container">
      <div className="content">
        <header>
          <p>
            <b>Hola!</b> <br /> Mi nombre es
          </p>
          <h2>Ignacio Garcia Reyna</h2>
          <p>
            y soy <b>Desarrollador Front End</b>.
            {/* <br />
           
            Me gusta el cine,
            <br />
            me la paso jugando al futbol,
            <br />
            y en mis ratos libres toco la guitarra. */}
          </p>
        </header>
        <span className="profile-image floating-img">
          <img src={porfilePicture} alt="" />
        </span>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="goto-next"
      ></Link>
    </div>
  );
};

export default Home;
