import React, { Component } from 'react';
import './css/index.css';
//Components

import Form from './components/Form'
import Cards from './components/Card';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="contenedor-form">
          <Form />
        </div>
        
        {/*
        <div className="contenedor-cards">
          <Cards />
        </div>
        */}
      </div>
    );
  }
}
