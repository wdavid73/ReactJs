import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export default class Cards extends Component {
    render() {
        return (
            <div className="cards">
                <div>
                    <Card className="mt-5" bg="dark" text="white" border="primary">
                    <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Titulo de la Card</Card.Title>
                            <Card.Subtitle className="mb-3">Subtitulo de la Card</Card.Subtitle>
                            <Card.Text>
                                texto en la card adfubadifboafoadofjaojdfojadnf
                                adfnojknadpfnpadnfpnapkdfnpkandfpad
                                +fandkfn da fajdf nadf adf adfnad
                        </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        )
    }
}