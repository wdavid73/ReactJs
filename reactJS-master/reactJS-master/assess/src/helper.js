const obtenerDiferenciaAnio = (year) => {
    return new Date().getFullYear() - year
}

const calcularMarca = (modelo) => {
    let incremento;

    switch (modelo) {
        case 'americano':
            incremento = 1.15
            break;
        case 'europeo':
            incremento = 1.30
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default:
            break;
    }
    return incremento
}

const obtenerPlan = (plan) => {
    return (plan === 'basico') 
        ? 1.20
        : 1.50
}

const primeraMayuscula = (str) => {
    return str.charAt(0).toUpperCase() + str.splice(1)
}

export {obtenerDiferenciaAnio, calcularMarca, obtenerPlan, primeraMayuscula}
