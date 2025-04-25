
let acumuladora = 0;
let contador = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese los números para sacar el promedio. Para terminar, introduzca 0"));
    if (numero !== 0) {
        acumuladora += numero;
        contador++;
    }
} while (numero !== 0);

if (contador > 0) {
    let promedio = acumuladora / contador;
    console.log(`El promedio de los números ingresados es: ${promedio}`);
} else {
    console.log("No se ingresaron números.");
}       