import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';

export default class PanelEdit extends Component {

  state = {
    nombre: '',
    temperatura: '',
    maxima: '',
    minima: '',
    presion: '',
    humedad: ''
  }

  async componentDidMount() {
    this.getCity();
  }

  getCity = async () => {
    const res = await axios.get('http://localhost:4000/api/cities/' + this.props.match.params.id)
    this.setState({
      nombre: res.data.nombre,
      temperatura: res.data.temperatura,
      maxima: res.data.maxima,
      minima: res.data.minima,
      presion: res.data.presion,
      humedad: res.data.humedad
    });
    console.log(this.props.match.params.id)
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const updateCity = {
      nombre: this.state.nombre,
      temperatura: this.state.temperatura,
      maxima: this.state.maxima,
      minima: this.state.minima,
      presion: this.state.presion,
      humedad: this.state.humedad
    };
    axios.put('http://localhost:4000/api/cities/' + this.props.match.params.id, updateCity);
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
        <h1>Formulario para editar una ciudad/clima</h1>
        <p>Modifique los datos que crea necesarios de esta ciudad y su clima.</p>
  
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
}
