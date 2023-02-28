import React from "react";
import rickymorty from "../assets/rickymorty.jpeg";
import pokedex from "../assets/pokedex.jpeg";
import weatherapp from "../assets/weatherapp.jpeg";

const Portfolio = () => {
  const rickYMorty = () =>
    (location.href = "https://celebrated-eclair-0cfaa8.netlify.app/");

  const pokeApi = () =>
    (location.href = "https://fluffy-malabi-531236.netlify.app/");

  const weatherApp = () =>
    (location.href = "https://dainty-arithmetic-a4c415.netlify.app/");
  return (
    <div id="portafolio" className="portfolio">
      <h2>Proyectos recientes</h2>
      <div className="portfolio-container">
        <div className="card">
          <h3>Rick & morty</h3>
          <div className="p-card">
            <div className="p-card-inner">
              <div className="p-card-front">
                <img src={rickymorty} alt="rick&morty" />
              </div>
              <div className="p-card-back">
                <p>Busca todos los mundos de Rick & Morty por su ID.</p>
              </div>
            </div>
          </div>
          <button onClick={rickYMorty}>Ver</button>
        </div>

        <div className="card">
          <h3>Pokedex</h3>
          <div className="p-card">
            <div className="p-card-inner">
              <div className="p-card-front">
                <img src={pokedex} alt="pokedex" />
              </div>
              <div className="p-card-back">
                <p>Consulta la información de tu pokemón favorito.</p>
              </div>
            </div>
          </div>
          <button onClick={pokeApi}>Ver</button>
        </div>

        <div className="card">
          <h3>Weather App</h3>
          <div className="p-card">
            <div className="p-card-inner">
              <div className="p-card-front">
                <img src={weatherapp} alt="weatherapp" />
              </div>
              <div className="p-card-back">
                <p>
                  Activa tu ubicación para sabr cómo está el clima en cualquier
                  lugar.
                </p>
              </div>
            </div>
          </div>
          <button onClick={weatherApp}>Ver</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
