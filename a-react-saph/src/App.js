import React, { Component } from "react";
import "./App.css";
//componentes
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "./Helper";

export default class App extends Component {

  state = {
    datosAuto: {},
    resultado: ""
  };

  cotizarSeguro = (datos) => {
    //destructuring para los datos
    const { marca, year, plan } = datos

    //base del seguro 
    let resultado = 2000

    //obtener diferencia por año
    const diferenciaYear = obtenerDiferenciaAnio(year);

    //restar 3% por cada año que pasa
    resultado -= ((diferenciaYear * 3) * resultado) / 100

    //aumentar precio segun la marca
    resultado = calcularMarca(marca) * resultado

    //incrementar valor segun el plan 
    let incrementoPlan = obtenerPlan(plan)

    resultado *= incrementoPlan

    resultado = parseFloat(resultado).toFixed(2)

    const datosAuto = {
      marca: marca,
      year: year,
      plan: plan
    }

    this.setState({
      datosAuto: datosAuto,
      resultado: resultado,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="contener-formulario">

          <Formulario
            cotizarSeguro {...this.cotizarSeguro}
          />

          <Resumen
            datosAuto={this.state.datosAuto}
          />

        </div>
      </div>
    );
  }
}
