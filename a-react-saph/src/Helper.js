const obtenerDiferenciaAnio = year => {
  return new Date().getFullYear() - year;
};

const calcularMarca = modelo => {
  let incremento;

  switch (modelo) {
    case "americano":
      incremento = 1.15;
      break;
    case "europe":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
};

const obtenerPlan = plan => {
  return plan === "basico" ? 1.2 : 1.5;
};

export { obtenerDiferenciaAnio, calcularMarca, obtenerPlan };
