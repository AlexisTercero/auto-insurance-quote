//calcula diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}
//calcula el total apagar segun marca
export function calculaMarca(marca) {
  let incremento;

  switch (marca) {
    case 'european':
      incremento = 1.3;
      break;
    case 'american':
      incremento = 1.15;
      break;
    case 'asian':
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}
//calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === 'básico' ? 1.2 : 1.5;
}
// Transforma primer letra de un string a mayuscula
export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
