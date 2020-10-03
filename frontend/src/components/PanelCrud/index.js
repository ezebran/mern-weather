import React from 'react';
import './styles.scss';

function PanelCrud() {
  return (
    <section className="panel">
      <h1>Panel de administración de ciudades</h1>
      <p>Crea, ve, edita o elimina ciudades y sus climas, las mismas se veran reflejadas automaticamente.</p>

      <div className="cities-list-panel">
          <a href="#" className="new-city">
            <span className="icon-add_location_alt"></span>
            <h2 className="add-city">Nueva ciudad</h2>
          </a>



          <ul className="cities-actions">

            <ul className="row-list">
              <li className="act-city-name">Cordoba</li>
              <ul className="actions">
                <li><a href="#" className="edit"><span className="icon-document-edit"></span>Editar</a></li>
                <li><a href="#" className="delete"><span className="icon-delete"></span>Eliminar</a></li>  
              </ul>
            </ul>

            <ul className="row-list">
              <li className="act-city-name">Sgo del estero</li>
              <ul className="actions">
                <li><a href="#" className="edit"><span className="icon-document-edit"></span>Editar</a></li>
                <li><a href="#" className="delete"><span className="icon-delete"></span>Eliminar</a></li>  
              </ul>
            </ul>

            <ul className="row-list">
              <li className="act-city-name">Termas</li>
              <ul className="actions">
                <li><a href="#" className="edit"><span className="icon-document-edit"></span>Editar</a></li>
                <li><a href="#" className="delete"><span className="icon-delete"></span>Eliminar</a></li>  
              </ul>
            </ul>

            <ul className="row-list">
              <li className="act-city-name">Tucuman</li>
              <ul className="actions">
                <li><a href="#" className="edit"><span className="icon-document-edit"></span>Editar</a></li>
                <li><a href="#" className="delete"><span className="icon-delete"></span>Eliminar</a></li>  
              </ul>
            </ul>

          </ul>
      </div>
    </section>
  );
}

export default PanelCrud;
