import React, { Component } from 'react'

/*
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
*/

import { Form, Button, Col, Row } from 'react-bootstrap'

export default class Inputs extends Component {
    render() {
        return (
            <div className="inputs-form">
                <div className="input-text">
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Row>
                                <Col sm="4">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Insert a Name" id="name" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Row>
                                <Col sm="4">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Insert a Last a Name" id="lasName" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextNickname">
                            <Col sm="4">
                                <Form.Label column sm="1">NickName</Form.Label>
                                <Form.Control plainttext readOnly defaultValue="guicho73" />
                            </Col>
                        </Form.Group>

                        {['checkbox', 'radio'].map(type => (
                            <div key={type} className="mb-3">
                                <Form.Check type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} isValid />
                                    <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                                </Form.Check>
                            </div>
                        ))}
                        <div className="mb-4">

                            <Form.Check label="Opcion 1 sin map" type={"checkbox"} id="checkbox1" />
                            <Form.Check label="Opcion 1.2 sin map" type={"radio"} id="radio1" />

                        </div>


                        <div>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                        </div>
                        <Button variant="primary" type="submit" className="mt-5">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}