let precio = parseFloat(prompt("Ingrese el precio del electrodoméstico por favor"));
let meses = parseInt(prompt("Ingrese el plazo en meses para pagarlo a crédito por favor"));

let tasa = 0.05;
let tasaIncremento =(tasa * meses);
let precioFinal = precio + (precio * tasaIncremento);
let cuotaMensual = precioFinal / meses;

alert(`El precio final del electrodoméstico es ${precioFinal}
El valor de las cuotas mensuales es ${cuotaMensual}`);