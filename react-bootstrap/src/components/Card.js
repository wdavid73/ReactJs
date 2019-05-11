import React, { Component } from "react";
import {Card} from "react-bootstrap";

import Perfil2 from '../resources/perfil2.jpg'


export default class Cards extends Component {
  
    mostrarInformacion = () => {
        
    const {
      primerNombre,
      primerApellido,
      email,
      ciudad,
      celular,
      telefono,
      genero
    } = this.props.info;

    if (
      !primerNombre ||
      !primerApellido ||
      !email ||
      !ciudad ||
      !celular ||
      !telefono ||
      !genero
    ) {
      return null;
    }

    return (
      <div className="card-resumen">
        <Card  className="mt-5 mr-5 mb-3 ml-3 col-3" bg="dark" text="white" border="primary">
          <Card.Header className="mt-2 mb-2 ml-2 mr-2">
          <h2>
          <span> 
            <img src={Perfil2} alt ="perfil1" style={{ width :'4rem' ,margin: '0 auto'}} className="mr-1 ml-1"/>
                {primerNombre} {primerApellido}
          </span>
          </h2> 
          </Card.Header>
          <Card.Body>
            <Card.Title>
            {email}
            </Card.Title>
            <Card.Text>Ciudad: {ciudad}</Card.Text>
            <Card.Text>Celular: {celular}</Card.Text>
            <Card.Text>Telefono: {telefono}</Card.Text>
            <Card.Text>Genero: {genero}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarInformacion()}</React.Fragment>;
  }
}
