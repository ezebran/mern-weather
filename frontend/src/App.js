import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import './icons/style.css';

import Navigation from './components/Navigation';
import Cities from './components/Cities';
import City from './components/Cities/City';
import PanelCrud from './components/PanelCrud';

function App() {
  return (
    <Router>
      <Navigation />

        <Route path="/" exact component={Cities} />
        <Route path="/ciudad/:id" component={City} />
        <Route path="/panel" component={PanelCrud} />

    </Router>
  );
}

export default App;
