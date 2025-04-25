let numero = parseInt(prompt("ingrese un numero"));

/*if (numero % 2 == 0){
    alert(`el numero ${numero} es par`);
}else{
    alert(`el numero ${numero}es impar`);
}*/

switch (true) {
    case numero % 2 == 0:
        alert(`el numero ${numero} es par`);
        break;
    default:
        alert(`el numero ${numero}es impar`);
        break;
}