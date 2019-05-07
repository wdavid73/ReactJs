import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

class Alertas extends Component {
    state = { show: true };
    mostartInfo = () => {
        const handleHide = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });
        const { primerNombre, primerApellido, email, ciudad, celular, telefono, genero } = this.props.informacion
        if (!primerNombre || !primerApellido || !email || !ciudad || !celular || !telefono || !genero) {
            return null
        }
        return (
            <div className="alertas">
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading> {primerNombre} {primerApellido}</Alert.Heading>
                    <p>{email} , {celular} ,{telefono} , {ciudad} ,{genero}  </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={handleHide} variant="outline-Success">
                            Cerrar Alerta
                    </Button>
                    </div>
                </Alert>
                {!this.state.show && <Button onClick={handleShow}>Mostrar Alerta</Button>}
            </div>
        )
    }
    render() {
        return (
            <React.Fragment>
                {this.mostartInfo()}
            </React.Fragment>
        )
    }
}

export default Alertas