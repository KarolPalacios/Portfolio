import React from "react";
import icon from "../assets/icon2.png";
import cv from "../assets/cv/KarolPalaciosCV.pdf";

const Home = () => {
  return (
    <div id="inicio" className="home">
      <div className="home-presentation">
        <h2>Hola, soy</h2>
        <h1>Karol Palacios</h1>
        <h2 className="principal-color">Front-End Developer</h2>
      <a href={cv} download="KarolPalaciosCV">
        <button className="home-btn">Download CV</button>
      </a>
      </div>
      <div className="icon-container">
      <img src={icon} alt="icon" className="home-icon" />
      </div>
    </div>
  );
};

export default Home;
