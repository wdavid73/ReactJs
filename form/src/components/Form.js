import React, { Component } from 'react'
import { Form, Button, Col } from 'react-bootstrap'

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.secondNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.cityRef = React.createRef();
        this.cellphoneRef = React.createRef();
        this.phoneRef = React.createRef();
        this.genderRef = React.createRef();
    }

    algo = (e) => {
        e.preventDeafult()

        const gender = this.genderRef.current.checked
            ? 'masculino'
            : 'femenino';

        const info = {
            primerNombre: this.firstNameRef.current.value,
            segundoNombre: this.secondNameRef.current.value,
            email: this.emailRef.current.value,
            ciudad: this.cityRef.current.value,
            celular: this.cellphoneRef.current.value,
            telefono: this.phoneRef.current.value,
            genero: gender
        }

        this.props.resumen(info)
    }
    render() {
        return (
            <div className="contenedor-formulario mt-4 ml-4">
                <Form onSubmit={this.algo}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>Primer Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su Primer Nombre" ref={this.firstNameRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSecondName">
                            <Form.Label>Segundo Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su Segundo Nombre" ref={this.secondNameRef} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su Email" ref={this.emailRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCiudad">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad Actual" ref={this.cityRef} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formCellphone">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese su Celular" ref={this.cellphoneRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="number" placeholder="Ingrese su Telefono" ref={this.phoneRef} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGenero">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control as="select" ref={this.genderRef}>
                                <option>Masculino</option>
                                <option>Femenino</option>
                            </Form.Control>
                        </Form.Group>


                    </Form.Row>
                    <Button type="submit" variant="info">Generar</Button>
                </Form>
            </div>
        )
    }
}