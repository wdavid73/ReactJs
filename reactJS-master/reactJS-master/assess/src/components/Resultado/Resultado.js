import React,{Component} from 'react';

export default class Resultado extends Component {

    render() {
        const resultado = this.props.resultado
        const mensaje = (!resultado) 
                        ? 'Elija marca, año y plan'
                        : 'El total es: $'
        return (
            <div className="gran-total">
                <h3>{mensaje}</h3>
                <span>{resultado}</span>
            </div>
        );
    }
}