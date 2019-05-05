import React, { Component } from 'react';
import './css/index.css';
//Components
import Inputs from './components/Inputs'

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <div>
          <Inputs/>
        </div>
      </div>
    );
  }
}
