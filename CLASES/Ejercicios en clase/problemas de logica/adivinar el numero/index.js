function generarNumeroAleatorio (){
 return Math.floor(Math.random()* 100 )+ 1;
}
let numeroAleatorio = generarNumeroAleatorio();
let adivinarNumero;

while (true) {
let adivinarNumero = parseInt(prompt("adivina el numero"));
    if(isNaN(adivinarNumero)){
        alert("ingrese un valor valido")
    continue;
   };
    if (numeroAleatorio === adivinarNumero) {
        alert("felicidades has encontrado el numero");
        break;
    }
    
if (numeroAleatorio > adivinarNumero){
        alert("el numero es mayor");
}else {
   alert("el numero es mayor");
}
};

