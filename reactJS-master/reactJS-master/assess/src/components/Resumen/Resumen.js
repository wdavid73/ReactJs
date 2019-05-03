import React, {Component} from 'react';
import {primeraMayuscula} from '../../helper'


export default class Resumen extends Component {

    mostrarResumen = () => {
        const {marca, plan, year} = this.props.datosAuto
        if(!marca || !plan || !year){
            return null
        }
        return (
            <div className="resumen">
                <h2>Resumen de la cotización</h2>
                <p>Modelo: {marca}</p>
                <p>Año: {year}</p>
                <p>Plan: {plan}</p>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarResumen()}
            </React.Fragment>
        );
    }
}