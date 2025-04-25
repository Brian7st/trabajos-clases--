let altura = parseFloat(prompt("ingrese la altura de su rectangulo"));
let base = parseFloat(prompt("ingrese la base de su rectangulo"));

function calculadoraArea (base,altura) {
    let area = base * altura
    return area
};

let resultado = calculadoraArea(altura,base)

alert(`el area de su rectangulo es de ${resultado}`)