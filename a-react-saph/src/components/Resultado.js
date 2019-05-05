import React, { Component } from 'react';

export default class Resultado extends Component {
    render() {
        const resultado = this.props.resultado
        const msg = (!msg)
            ? 'Elija marca , año y plan'
            : 'El total es: $'
        return (
            <div className="gran-total">
                <h3>{msg}</h3>
                <span>{resultado}</span>
            </div>
        )
    }
}