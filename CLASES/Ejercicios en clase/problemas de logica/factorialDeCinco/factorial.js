function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

let numero = parseInt(prompt("Ingrese un número para calcular su factorial"));
let factorial = calcularFactorial(numero);

alert(`El factorial de ${numero} es ${factorial}`);