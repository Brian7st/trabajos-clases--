
let cantidad = parseFloat(prompt("Ingrese la cantidad"));

let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular "));

let resultado = (cantidad * porcentaje) / 100;

alert(`El ${porcentaje}% de ${cantidad} es ${resultado}`);