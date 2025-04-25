function cantidadDeVocales (cadena){
    const vocales= `aeiouAEIOU`;

    let contador = 0;

    for(let i = 0; i < cadena.length; i++){
        if (vocales.indexOf(cadena[i]) !== -1)
            contador++;
    }
    return contador;
}

let resultado = cantidadDeVocales("cantidad");
console.log(resultado);
