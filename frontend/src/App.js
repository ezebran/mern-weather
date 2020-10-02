import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import './icons/style.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import City from './components/Home/City';
import PanelCrud from './components/PanelCrud';

function App() {
  return (
    <Router>
      <Navigation />

        <Route path="/" exact component={Home} />
        <Route path="/ciudad/:id" component={City} />
        <Route path="/panel" component={PanelCrud} />

    </Router>
  );
}

export default App;
