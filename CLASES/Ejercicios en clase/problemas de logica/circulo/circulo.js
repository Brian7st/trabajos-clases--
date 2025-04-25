let radio = parseFloat(prompt("ingrese el radio del circulo"));
const pi=Math.PI;
let area = pi * (radio**2)
let perimetro = 2 * pi * radio;
alert(`el area de su circulo es ${area} y su perimetro es de ${perimetro}`);