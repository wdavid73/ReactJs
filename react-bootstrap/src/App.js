/*Author : Guicho73 */
import React, { Component } from 'react';
import './css/index.css';
//Components

import Form from './components/Form'
import Cards from './components/Card'
import Presentacion from './components/Present'
import NavBar from './components/Navbar'
import Alertas from './components/Alertas'

class App extends Component {
  state = {
    informacion: {}
  }

  resumen = (infom) => {
    const { primerNombre, primerApellido, email, ciudad, celular, telefono, genero } = infom

    const datosForm = {
      primerNombreF: primerNombre,
      primerApellidoF: primerApellido,
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

        <NavBar />

        <Presentacion />

        <Form resumen={this.resumen}
        />
        {/* 
        <Cards
          info={this.state.informacion}
        />
        */}
        <Alertas informacion={this.state.informacion} />


      </div>
    );
  }
}

export default App