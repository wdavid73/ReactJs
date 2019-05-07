import React, { Component } from 'react';
import {Navbar , Nav , Form , Button} from 'react-bootstrap'
import logo from '../resources/logo-react.png'

export default class BarraNavegacion extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#"><img src={logo} alt="logo" style={{ width: '50px' }} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}