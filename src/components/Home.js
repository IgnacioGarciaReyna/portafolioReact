import React from "react";
import { Link } from "react-scroll";
import porfilePicture from "../assets/img/profile-picture.jpg";
import University from "./University";

const Home = () => {
  return (
    <div id="home" className="container background-container">
      <div className="content">
        <header>
          <h2>Hola, soy Nacho</h2>
          <p>
            Soy desarrollador Front End.
            <br />
            Me gusta el cine,
            <br />
            me la paso jugando al futbol,
            <br />
            y en mis ratos libres toco la guitarra.
          </p>
        </header>
        <span className="profile-image">
          <img src={porfilePicture} alt="" />
        </span>
      </div>
      <Link to="university" spy={true} smooth={true} offset={0} duration={500} className="goto-next"></Link>
    </div>
  );
};

export default Home;
