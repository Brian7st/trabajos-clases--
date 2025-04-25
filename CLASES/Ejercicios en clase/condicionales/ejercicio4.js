let angulo = parseInt(prompt("ingrese un angulo"));
let angulo2 = parseInt(prompt("ingrese otro angulo"));
let angulo3 = parseInt(prompt("ingrese otro angulo"));

/*if ( angulo + angulo2 + angulo3 == 180){
    alert("los angulos ingresados forman un triangulo");
}else{
    alert("los angulos ingresados no forman un triangulo");
}*/

switch (true){
    case angulo + angulo2 + angulo3 == 180:
        alert("los angulos ingresados forman un triangulo");
        break;
    default:
        alert("los angulos ingresados no forman un triangulo");
        break;
}