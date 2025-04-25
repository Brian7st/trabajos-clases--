let mensaje = "somos sena";
let contador = 0;

for (let i = 0; i< mensaje.length; i++) {
    if (mensaje[i] === "o") {
        contador++;   
    }
}

console.log(contador);
