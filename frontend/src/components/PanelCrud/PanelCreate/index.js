import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';
import dotenv from 'dotenv';

export default class PanelCreate extends Component{

  state = {
    nombre: '',
    temperatura: '',
    maxima: '',
    minima: '',
    presion: '',
    humedad: ''
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newCity = {
      nombre: this.state.nombre,
      temperatura: this.state.temperatura,
      maxima: this.state.maxima,
      minima: this.state.minima,
      presion: this.state.presion,
      humedad: this.state.humedad
    };
    const url = process.env.REACT_APP_URI ? process.env.REACT_APP_URI : 'http://localhost:4000';
    axios.post(`${url}/api/cities`, newCity);
    window.location.href = '/';

}
  
  onInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <section className="panel-create">
        <h1>Formulario de creacion de ciudad/clima</h1>
        <p>Ingrese los datos para cargar una nueva ciudad y su clima.</p>
  
        <form className="add-city-form" onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onInputChange} name="nombre" placeholder="Nombre de la ciudad.."></input>
            <input type="text" onChange={this.onInputChange} name="temperatura" placeholder="Temperatura.."></input>
            <input type="text" onChange={this.onInputChange} name="presion" placeholder="Presion.."></input>
            <input type="text" onChange={this.onInputChange} name="humedad" placeholder="Humedad.."></input>
            <input type="text" onChange={this.onInputChange} name="maxima" placeholder="Maxima.."></input>
            <input type="text" onChange={this.onInputChange} name="minima" placeholder="Minima.."></input>
            <button>Cargar</button>
        </form>
      </section>
    );
  }
};
