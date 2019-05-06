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

  resumen = (infom) => {
    const { primerNombre, segundoNombre, email, ciudad, celular, telefono, genero } = infom

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
    console.log(this.state.informacion)
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