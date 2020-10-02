import React, { Component } from 'react'
import './styles.scss';

function Cities() {
  return (
    <section className="cities">
      <h1>Clima en las ciudades</h1>
      <p>Seleciona una ciudad para ver como esta hoy su temperatura.</p>

      <div className="cities-list">

          <a href="#" className="city">
            <span className="icon-map"></span>
            <h2 className="city-name">Cordoba</h2>
          </a>

          <a href="#" className="city">
            <span className="icon-map"></span>
            <h2 className="city-name">Sgo del estero</h2>
          </a>

          <a href="#" className="city">
            <span className="icon-map"></span>
            <h2 className="city-name">Santa fe</h2>
          </a>

          <a href="#" className="city">
            <span className="icon-map"></span>
            <h2 className="city-name">Bs As</h2>
          </a>

      </div>
    </section>
  );
}

export default Cities;
