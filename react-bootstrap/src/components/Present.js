import React, { Component } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import logo from '../resources/logo-react.png'

class Presentacion extends Component {

    render() {
        return (
            <div className="presentacion">
                <Jumbotron>
                    <h1 >
                        {/*<span className="logo">
                            <img src={logo} alt="logo" style={{ width: '70px', margin: '0 auto' }} />
                        </span> */}
                        Probando React con Bootstrap
                        
                    </h1>

                    <p>He Realizado un Formulario , Unas Cards y Esta presentacion</p>
                    <p>
                        <Button variant="primary">Avanzar</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Presentacion