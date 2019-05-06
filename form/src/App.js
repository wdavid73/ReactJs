/*Author : Guicho73 */
import React, { Component } from 'react';
import './css/index.css';
//Components

import Form from './components/Form'
import Cards from './components/Card';

class App extends Component {
  state = {
    informacion: {}
  }

  resumen = (info) => {
    const { primerNombre, segundoNombre, email, ciudad, celular, telefono, genero } = info

    const datosForm = {
      primerNombreF: primerNombre,
      segundoNombreF: segundoNombre,
      emailF: email,
      ciudadF: ciudad,
      celularF: celular,
      telefonoF: telefono,
      generoF: genero
    }

    this.setState({
      informacion: datosForm
    })
  }
  render() {
    return (
      <div className="App">


        <Form resumen={this.resumen}
        />




        <Cards
          info={this.state.informacion}
        />

      </div>
    );
  }
}

export default App