let numero = parseInt(prompt("ingrese un numero"));

/*if(numero % 5 == 0){
    alert(`el numero ${numero} es multiplo de 5`)}
    else{
        alert(`el numero ${numero} no es multiplo de 5`);
    }*/


switch(true){
    case numero % 5 == 0:
        alert(`el numero ${numero} es multiplo de 5`);
        break;
    default:
        alert(`el numero ${numero} no es multiplo de 5`);
        break;
}