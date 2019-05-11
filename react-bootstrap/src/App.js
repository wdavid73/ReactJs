/*Author : Guicho73 */
import React, { Component } from "react";
import "./css/index.css";
//Components

import Form from "./components/Form";
import Cards from "./components/Card";
import Presentacion from "./components/Present";
import NavBar from "./components/Navbar";
import Alertas from "./components/Alertas";

class App extends Component {
  state = {
    informacion: {}
  }

  resumen = (info) => {
    const { primerNombre, primerApellido, email, ciudad, celular, telefono, genero } = info

    const datosForm = {
      primerNombre: primerNombre,
      primerApellido: primerApellido,
      email: email,
      ciudad: ciudad,
      celular: celular,
      telefono: telefono,
      genero: genero
    }

    this.setState({
      informacion: datosForm
    })
  }
  render() {
    
    return (
      <div className="App">

        <NavBar />

        <Presentacion />

        <Form res={this.resumen}
        />
        
        <Cards
          info={this.state.informacion}
        />
        
        <Alertas informacion={this.state.informacion} />


      </div>
    );
  }
}

export default App;
