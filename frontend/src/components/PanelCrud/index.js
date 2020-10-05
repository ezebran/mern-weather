import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class PanelCrud extends Component{

  state = {
    cities: []
  }

  async componentDidMount() {
    this.getCities();
  }

  getCities = async () => {
    const res = await axios.get('http://localhost:4000/api/cities/')
    this.setState({
      cities: res.data
    });
  }

  deleteCity = async (cityId) => {
    await axios.delete('http://localhost:4000/api/cities/' + cityId);
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
                  <ul className="row-list">
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