import React, { Component } from "react";
import Card from "react-bootstrap/Card";

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
        <Card className="mt-5 mr-5" bg="dark" text="white" border="primary">
          <Card.Header>Informacion</Card.Header>
          <Card.Body>
            <Card.Title>
              {primerNombre} {primerApellido}
            </Card.Title>
            <Card.Subtitle className="mb-3">{email}</Card.Subtitle>
            <Card.Text>{ciudad}</Card.Text>
            <Card.Text>{celular}</Card.Text>
            <Card.Text>{telefono}</Card.Text>
            <Card.Text>{genero}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarInformacion()}</React.Fragment>;
  }
}
