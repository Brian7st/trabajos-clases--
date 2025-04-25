let caraCubo = parseFloat(prompt("ingrese  la medida de una de las caras de su cubo"));

function calculadoraVolumen(caraCubo) {
    let volumen = Math.pow(caraCubo,3)
    return volumen
}

let resultado = calculadoraVolumen(caraCubo);
alert(`el volumen de su cubo es de ${resultado}`);
