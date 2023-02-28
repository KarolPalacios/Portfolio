import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="nav-brand">Karol</h3>

      <input type="checkbox" id="btn-menu" />
      <label htmlFor="btn-menu">
        <i className="fa-solid fa-bars"></i>
      </label>

      <ul className="navbar-menu">
        <li className="nav-item">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="#sobre">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a href="#habilidades">Habilidades</a>
        </li>
        <li className="nav-item">
          <a href="#portafolio">Portafolio</a>
        </li>
        <li className="nav-item">
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
