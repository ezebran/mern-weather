import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import './icons/style.css';

import Navigation from './components/Navigation';
import Cities from './components/Cities';
import City from './components/Cities/City';
import PanelCrud from './components/PanelCrud';
import PanelCreate from './components/PanelCrud/PanelCreate';
import PanelEdit from './components/PanelCrud/PanelEdit';

function App() {
  return (
    <Router>
      <Navigation />
        <Route path="/" exact component={Cities} />
        <Route path="/city/:id" component={City} />
        <Route path="/panel" exact component={PanelCrud} />
        <Route path="/panel/create" exact component={PanelCreate} />
        <Route path="/panel/edit/:id" exact component={PanelEdit} />
    </Router>
  );
}

export default App;
