import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';
import dotenv from 'dotenv';

export default class Cities extends Component{

  state = {
    cities: []
  }

  async componentDidMount() {
    this.getCities();
  }

  getCities = async () => {
    const url = process.env.REACT_APP_URI ? process.env.REACT_APP_URI : 'http://localhost:4000';
    const res = await axios.get(`${url}/api/cities/`)
    this.setState({
      cities: res.data
    });
  }

  render(){
    return (
      <section className="cities">
        <h1>Clima en las ciudades</h1>
        <p>Seleciona una ciudad para ver como esta hoy su temperatura.</p>
  
        <div className="cities-list">
        {
            this.state.cities.map(city => (
              <Link to={"/city/" + city._id} className="city" key={city._id}>
                <span className="icon-map"></span>
              <h2 className="city-name">{city.nombre}</h2>
              </Link>
            ))
          }  
        </div>

      </section>
    );
  }
}

