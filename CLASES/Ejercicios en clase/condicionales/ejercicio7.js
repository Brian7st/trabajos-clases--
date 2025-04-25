/* Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case. */

let numero = parseInt(prompt("ingrese un numero entre 1 y 15"));

if (numero == 1 || numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13){
    alert(`el numero ${numero} es primo`);
}else{
    alert(`el numero ${numero} no es primo`);
}


switch(true){
    case numero == 1 || numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13:
        alert(`el numero ${numero} es primo`);
        break;
    default:
        alert(`el numero ${numero} no es primo`);
        break;
}