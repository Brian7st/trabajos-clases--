function sinVocales (cadena){
    const vocales = "aeiouAEIOU";

    const vocalesencontradas= ([...cadena].filter(caracter => ! vocales.includes(caracter)));
    return vocalesencontradas;
};

let resultado = sinVocales("brian")
console.log(resultado);
