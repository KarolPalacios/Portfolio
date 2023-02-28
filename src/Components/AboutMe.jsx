import React from "react";
import icon2 from "../assets/icon1.png";

const AboutMe = () => {
  return (
    <div id="sobre" className="about">
      <h2>Sobre mi</h2>

      <div className="about-container">
        <div className="icon-container radius">
          <img src={icon2} alt="icon" className="about-icon" />
        </div>

        <div>
          <p className="about-description">
            Soy desarrolladora front-end, desarrollo aplicaciones y plataformas
            web. Constantemente mejoro mis habilidades creando proyectos y
            asumiendo retos que alimenten mi conocimiento. Soy una persona
            responsable, comprometida con mis deberes y con espíritu de
            liderazgo.
          </p>

          <a href="#contacto">
            <button className="about-btn">Contáctame</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
