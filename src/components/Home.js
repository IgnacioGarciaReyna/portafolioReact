import React from "react";
import porfilePicture from "../assets/img/profile-picture.jpg";

const Home = () => {
  return (
    <div className="container background-container">
      <div className="content">
        <header>
          <h2>Hola, soy Nacho</h2>
          <p>
            Soy desarrollador Front End.
            <br />
            Me gusta el cine y el cafe.
            <br />
            Toco la guitarra y juego al futbol.
          </p>
        </header>
        <span className="profile-image">
          <img src={porfilePicture} alt="" />
        </span>
      </div>
      <a href="#" className="goto-next"></a>
    </div>
  );
};

export default Home;
