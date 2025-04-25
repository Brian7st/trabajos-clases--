let mensaje = prompt("desea salirse del ciclo? si/no")
let contador = 0;
while (mensaje == "no"){
    mensaje = prompt("desea salirse del ciclo? si/no")
    contador++;
}

console.log(`el ciclo se repitio ${contador} veces`)