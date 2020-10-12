import React, { Component } from 'react';
import axios from 'axios'
import './styles.scss';
import dotenv from 'dotenv';

export default class City extends Component{

  state = {
    city: {}
  }

  async componentDidMount() {
    this.getCity();
  }

  getCity = async () => {
    const url = process.env.REACT_APP_URI ? process.env.REACT_APP_URI : 'http://localhost:4000';
    const res = await axios.get(`${url}/api/cities/${this.props.location.pathname.slice(6)}`)
    this.setState({
      city: res.data
    });
  }

  render(){
    return (
      <section className={`city-view ${this.state.city.temperatura > 30 ? 'hot' : this.state.city.temperatura > 20 ? 'normal' : 'cold'}`}>
        <div className="clime-card">
          <h1>{this.state.city.temperatura}ºC</h1>
          <h2>{this.state.city.nombre}</h2>
  
          <ul className="w-dates">
            <li>
              <p>Maxima</p>
              <h3>{this.state.city.maxima}º</h3>
            </li>
            <li>
              <p>Minima</p>
              <h3>{this.state.city.minima}º</h3>
            </li>
            <li>
              <p>Presion</p>
              <h3>{this.state.city.presion} hPa</h3>
            </li>
            <li>
              <p>Humedad</p>
              <h3>{this.state.city.humedad}%</h3>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
