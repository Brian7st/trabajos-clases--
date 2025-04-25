//1. Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y retorne su área.
/*function calculadoraArea(base,altura){
    let area = base * altura;
    return area;
}

let resultado =calculadoraArea(6,2);
console.log(resultado);
*/

//2 Escriba una función que reciba el lado de un cubo y retorne su volumen.
/*
function calculadoraVolumen (lado){
    let volumen = lado ** 3;
    return volumen;
}

let resultado = calculadoraVolumen(2);
console.log(resultado);
*/

//3 Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola Juan”, por ejemplo si el nombre pasado es Juan.
/*
function nombres (nombre){
return console.log(`Hola ${nombre} `)
}
let resultado = nombres("brian")
*/

//4. Escriba una función que muestre los números de 1 a n, teniendo n como parámetro
/*
function mostrarNumHastaN(n){
let i = 0;
    while( i <= n ){
        console.log(i);
        i++
    }
}

let resultado = mostrarNumHastaN(10)
*/

//5. Escriba una función que reciba un número n como parámetro y genere su factorial.
/*
function factorial (n){
if( n == 0 || n == 1){
    return 1;
}
  return n * factorial( n - 1);
}

let resultado = factorial(5)
console.log(resultado);
*/

//6. Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.
/*
function esVocal(letra){
    let vocales = "aeiouAEIOU";
    for( let i = 0; i < vocales.length; i++){
        if(vocales[i] === letra){
            return true;
        }
    }
    return false;
}

console.log(esVocal("a"));
*/
//7. Escriba una función la cual reciba como parámetro una cadena y genere como retorno la misma cadena pero con todos su contenido en mayúscula.
/*
function cadenaMayuscula (cadena){
    for( let i = 0 ; i < cadena.length; i++){
        let resultado = cadena.toUpperCase();
        return resultado;
    }
}

console.log(cadenaMayuscula("hola mundo"));
*/

//8. Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva la primera letra del nombre.
/*
function obtenerPrimeraLetra(nombre){
    let primeraLetra = nombre.charAt(0);
    return primeraLetra;
}
let resultado = obtenerPrimeraLetra("brian");
console.log(resultado);
*/

//9. Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad de vocales que contiene la cadena.
/*
function cantidadVOcales (cadena){
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for( let i = 0; i < cadena.length; i++){
            if(vocales.includes(cadena[i])){
                contador++;
            }
        }
        return contador;
    }
    

let resultado = cantidadVOcales("brian stiven");
console.log(resultado);
*/
//10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la misma cadena pero sin sus vocales.
/*
function quitarVocales(cadena){
    let vocales = "aeiouAEIOU";
    let resultado = "";
    for(let i = 0; i < cadena.length; i++){
        if(!vocales.includes(cadena[i])){
            resultado += cadena[i];
        }
    }
    return resultado;
}

let resultado = quitarVocales("brian"); 
console.log( resultado);
*/
//. Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.
/*
function numeroAleatorio(){
    return Math.floor(Math.random()*20)+1;
}
let resultado = numeroAleatorio();
console.log(resultado);
*/
//12. Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje informando si el estudiante aprobó o no la materia, para que la materia se de como aprobada el promedio del estudiante debe ser mayor o igual a 3,0.
/*
function promedioNotas(n1,n2,n3,n4,n5){
    let promedio = (n1+n2+n3+n4+n5)/5;
    if(promedio >= 3.0){
        return console.log("aprobado");
    }else{
        return console.log("reprobado");
    }
}
let resultado = promedioNotas(2.5,3.0,4.0,3.5,2.0);
console.log(resultado);
*/

//13. Escriba una función que reciba un número entero y dicha función pueda determinar si el número enviado es positivo o negativo.}
/*
function numeroPositivoNegativo(numero){
    if(numero >= 0){
        return console.log("el numero es positivo");
    }else{
        return console.log("el numero es negativo");
    }
}
*/
//14. Escriba una función la cual permita o no la entrada a un parque de atracciones, dicha función recibe la edad, estatura y permiso parental como parámetros. Para permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm, en caso de ser menor de edad debe contar con un permiso parental para que sea concedido el acceso
/*
function permisoParque (edad,estatura,permiso){
    if(edad >= 18 && estatura > 150){
        return console.log("tiene permitido entrar al parque");
    }else if(edad < 18 && estatura > 150 && permiso){
        return console.log("tiene permitido entrar al parque");
    }else{
        return console.log("no tiene permitido el paso");
    }
}
let resultado =permisoParque(20, 160, false); 
let resultado1 =permisoParque(16, 160, true);  
let resultado2 =permisoParque(16, 140, true);
console.log(resultado2);
*/
/*15. Escriba una función generarContraseña la cual reciba n como parámetro y esta cree una contraseña de caracteres aleatorios. (Los caracteres pueden ser números,letras o signos).
*/ 
/*
function generarContraseña(n){
    let caracteres = "1234567890!#$%&/()=?¡*¨[]_:;,.-{}+¿qwertyuiopasdfghjklñzxcvbnm"
    let contraseña = "";
    for( let i = 0; i < n ; i++){
        let valorRandom = Math.floor(Math.random()*caracteres.length);
        contraseña += caracteres.charAt(valorRandom) 
    }
    return contraseña;
}

let resultado = generarContraseña(9)*/

/*16. Escriba una función que se llame facturacion() La función tiene que recibir como
parámetro el monto de un producto , y el medio de pago : C (tarjeta de crédito), E
(efectivo) y D (tarjeta de débito). Si el monto del producto es menor a $200 no se
aplicará ningún descuento. Si el monto a pagar es entre $200 y $400 se aplicará un
descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y
10% con tarjeta de crédito. Para montos mayores a $400, el descuento es del 40%
sin importar el medio de pago La función deberá retornar el monto final a pagar.*/ 
/*
function facturacion (monto,medioDePago){
    if(monto >= 200 && monto <= 400)
    switch (medioDePago) {
        case "E":
            descuento = 0.30;
            break;
        case "D":
            descuento = 0.20;
            break;
        case "C":
            descuento = 0.10;
            break;
    }
    if (monto > 400){
        descuento = 0.40;
    }

    let montoFinal = monto - (monto * descuento);
    return montoFinal;

}

let resultado = facturacion(300,"C");
console.log(resultado);
*/

/*17. Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
La idea es que los números recibidos se puedan operar según la operación que
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).*/
/*
function calculadora (n1 , n2, operador){
    let operacion;
    switch(operador){
        case "+":
            operacion = n1 + n2;
        break;
        case "*":
            operacion = n1 * n2;
        break;
        case "/":
            operacion = n1 / n2;
        break;
        case "**":
            operacion = n1 ** n2;
        break;
        case "%":
            operacion = n1 % n2
        break;
        case "-":
            operacion = n1 - n2;
        break;
    }
    return operacion;
}
let resultado = calculadora(2,2,"**")
console.log(resultado);
*/

/*18. Escriba una función que tenga una cadena de ADN como parámetro y retorne un
string con el número de bases en ella, por ejemplo, si la cadena es “AACAGT”
entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1,
Cantidad de T: 1”
*/
/*
function cadenaADN (cadena){
    let acomulador= {
        A: 0,
        T: 0,
        G: 0,
        C: 0
    }

    for( let i = 0 ; i < cadena.length; i++){
        let base = cadena.charAt(i);
        if(acomulador.hasOwnProperty(base)){
            acomulador[base]++;
        }
    }
    return `Cantidad de A: ${acomulador.A}, Cantidad de C: ${acomulador.C}, Cantidad de G: ${acomulador.G}, Cantidad de T: ${acomulador.T}`;
}
let resultado = cadenaADN("AACAGT");
console.log(resultado);
*/

/*19. Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos
funciones:
● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit.
● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius
*/
/*
function celsiusToFahrenheit(celsius){
    let operacion = (celsius * 9 )/ 5 + 32
    return operacion;
}
let resultado1 = celsiusToFahrenheit(65)
console.log(resultado1);



function  fahrenheitToCelsius(fahrenheit){
    let operacion = (fahrenheit - 32) / 1.8;
    return operacion;
}

let resultado = fahrenheitToCelsius(67)
console.log(resultado);
*/

/*20. Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos
funciones:
● calcularArea(largo, ancho): calcula el área del rectángulo.
● calcularPerimetro(largo, ancho): calcula el perímetro.
*/
/*
function calcularArea(largo, ancho){
    return largo * ancho;
}
function calcularPerimetro(largo, ancho){
    return 2*(largo + ancho);
}

let resultado1 = calcularArea(8,8)
let resultado2 = calcularPerimetro(8,8)
console.log(`area : ${resultado1} y perimetro: ${resultado2}`);
*/

/*21. Escriba un programa que verifique si un número es primo utilizando dos funciones:
● esPrimo(numero): determina si un número es primo.
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la
función esPrimo.*/
/*
function esPrimo(n){
    if( n <= 1){
        return false;
    }
    for(let i = 2; i < n; i++){
        if( n % i === 0){
            return false;
        }
    }
    return true;
}

let numero = 7;
if (esPrimo(numero)){
    console.log(`${numero} es primo`);
}else {
    console.log(`${numero} no es primo`);

}
*/

/*22. Escriba un programa que calcule si un estudiante aprueba o reprueba con base en
tres notas. Usa tres funciones:
● calcularPromedio(notas): calcula el promedio de las tres notas.
● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6).
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.
*/
/*
function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("El estudiante aprobó");
    } else {
        console.log("El estudiante no pasó");
    }
}

let promedio = calcularPromedio(7, 8, 9);
let aprobado = esAprobado(promedio);
mostrarResultado(aprobado);
*/
/*23. Escriba un programa que genere una contraseña segura a partir de una palabra
base y una serie de reglas. Usa dos funciones:
● generarContraseña(palabraBase): genera una contraseña agregando números y
caracteres especiales.
● imprimirContraseña(contraseña): muestra la contraseña generada.*/
/*
function generarContraseña(palabraBase) {
    const caracteresEspeciales = "!#$%&/()=?¡*¨[]_:;,.-{}+¿";
    let contraseña = palabraBase;
    
    for (let i = 0; i < 5; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10); 
        contraseña += numeroAleatorio;
    }
    for (let i = 0; i < 3; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteresEspeciales.length);
        contraseña += caracteresEspeciales.charAt(indiceAleatorio);
    }
    return contraseña;
}

function imprimirContraseña(contraseña) {
    console.log(`La contraseña generada es: ${contraseña}`);
}

let palabraBase = "segura";
let contraseñaGenerada = generarContraseña(palabraBase);
imprimirContraseña(contraseñaGenerada);
*/