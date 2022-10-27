import React from "react";

const Home = () => {
  return (
    <div class="container">
      <div class="content">
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
        <span class="image">
          <img src="../assets/img/profile-picture.jpg" alt="" />
        </span>
      </div>
      <a href="#" class="goto-next"></a>
    </div>
  );
};

export default Home;
