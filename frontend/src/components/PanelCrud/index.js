import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.scss';
import dotenv from 'dotenv';

export default class PanelCrud extends Component{

  state = {
    cities: []
  }

  async componentDidMount() {
    this.getCities();
  }

  getCities = async () => {
    const url = process.env.REACT_APP_URI ? process.env.REACT_APP_URI : 'http://localhost:4000';
    const res = await axios.get(`${url}/api/cities/`);
    this.setState({
      cities: res.data
    });
  }

  deleteCity = async (cityId) => {
    const url = process.env.REACT_APP_URI ? process.env.REACT_APP_URI : 'http://localhost:4000';
    await axios.delete(`${url}/api/cities/${cityId}`);

    this.setState({cities: this.state.cities.filter(function(city) { 
      return city._id !== cityId 
    })});
  }

  render(){
    return (
      <section className="panel">
        <h1>Panel de administración de ciudades</h1>
        <p>Crea, ve, edita o elimina ciudades y sus climas, las mismas se veran reflejadas automaticamente.</p>
  
        <div className="cities-list-panel">
  
            <Link to="/panel/create" className="new-city">
              <span className="icon-add_location_alt"></span>
              <h2 className="add-city">Nueva ciudad</h2>
            </Link>
  
  
            <ul className="cities-actions">
  
              {
                this.state.cities.map(city => (
                  <ul className="row-list" key={city._id}>
                    <li className="act-city-name">{city.nombre}</li>
                    <ul className="actions">
                      <li><Link to={"/panel/edit/" + city._id} className="edit"><span className="icon-document-edit"></span>Editar</Link></li>
                      <li><Link to="/panel" className="delete" onClick={() => this.deleteCity(city._id)}><span className="icon-delete"></span>Eliminar</Link></li>  
                    </ul>
                  </ul>
                ))
              }
  
            </ul>
        </div>
      </section>
    ); 
  }
}