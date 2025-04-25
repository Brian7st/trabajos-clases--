function promedioDeDiezNumeros (){
    let suma = 0;
    for (let i = 1; i <= 10; i++){
        let numero = parseInt(prompt("Ingrese un número"));
        suma += numero;
    }
    return suma / 10;
}

let promedio = promedioDeDiezNumeros();
alert(`El promedio de los 10 números ingresados es: ${promedio}`);