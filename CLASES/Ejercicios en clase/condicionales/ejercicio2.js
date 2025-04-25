/*let producto1 ="lentejas";
let producto2 = "crema";
let producto3 = "arroz";
let producto4 = "vino";

let opciones = prompt("ingrese el producto que desae comprar: lentejas,crema,arroz,vino");

if (opciones == producto1 || opciones == producto3){  alert("su producto no paga iva");
    
} else if (opciones == producto2 || opciones == producto4){
    alert("su producto si paga iva");
}*/

let producto = prompt("ingrese el producto que desae comprar: lentejas,crema,arroz,vino");

switch (producto) {
    case "lentejas":
        alert("su producto no paga iva");
        break;
    case"crema":
        alert("su producto si paga iva");
        break;
    case "arroz":
        alert("su producto no paga iva");
        break;
    case "vino":
        alert("su producto si paga iva");
        break;
}