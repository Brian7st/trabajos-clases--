/*
function edad (){
    let edad = parseFloat(prompt("ingrese su edad"));
    if(!isNaN(edad)){
        alert(`usted tiene ${edad}`)
    }else{
        alert("introduzca una edad valida")
    }
}

let resultado = edad();*/


/*function calculadoraNMayor(n1,n2) {
    if(n1 > n2){
        return console.log(`${n1} es mayor que ${n2}`);
    }else {
        return console.log(`${n2} es mayor que ${n1}`);
    }
    
}

let resultado = calculadoraNMayor(23,45)*/



/*let arreglo1 = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i< arreglo1.length; i++){
    console.log(arreglo1[i])
}

arreglo1.forEach(i => {
    console.log(i)
})*/


/*let arreglo = [[ [1,2,3], [4,5,6,7,8,9], [10] ]]

for( let i = 0 ; i < arreglo.length ; i++){
    for ( let j = 0 ; j < arreglo[i].length; j++){
        for ( let k = 0 ; k < arreglo[i][j].length; k++){
            console.log(arreglo[i][j][k])
        }
    }
}*/

/*5. Dado el siguiente diccionario:
let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};
Usando for in itere sobre las claves del objeto imprimiendo sus respectivos valores.
Cambie el valor de la clave peso por 77 usando forma 1 (arreglo.clave)
Cambie el valor de la clave edad por 21 usando forma 2 (diccionario[clave])
Elimine la clave apellidos

let persona = {edad: 20, peso: 75, nombres: "Pedro", apellidos: "Pérez Pérez"};

for(let clave in persona){
    console.log((`${clave}: ${persona[clave]}`));
}

persona.peso = 77;
persona["edad"]= 21;

delete persona.apellidos;

console.log(persona);
*/
/*6. Dado el siguiente arreglo [ “Colombia”, “es”, “un”, “país”, “extraordinario” ], imprima en consola el
mensaje “Colombia es un país extraordinario” usando el método join.*/
/*
let arreglo = [ "Colombia","es un país" ,"extraordinario"]

let array= arreglo.join(" ")

console.log(array);

*/

/*7. Dada la siguiente cadena “Programar es algo genial, todos deberían intentarlo, atrévete!” genere el
siguiente arreglo [“Programar es algo genial”, “todos deberían intentarlo”, “atrévete!”] usando el método
split.
*/ 
/*
let cadena = "Programar es algo genial, todos deberían intentarlo, atrévete!"

let array = cadena.split(", ")
console.log(array);
*/

/*8. Dado el siguiente arreglo [1, 2, 3, 4, 500, 420, -100] elimine el elemento de índice 4 usando splice,
elimine el último elemento usando pop, agregue el elemento 520 usando push. Finalmente, haga una
copia “independiente del arreglo” usando slice*/
/*
let arreglo = [1, 2, 3, 4, 500, 420, -100]
arreglo.splice(4,1)
arreglo.pop()
arreglo.push(520)
let copia = arreglo.slice();

console.log(arreglo);
console.log(copia);

*/

/*9. En una empresa se requiere un sistema de información que registre sus nuevos usuarios. Cada vez
que un usuario se registra debe introducir los siguientes datos: documento, nombres, apellidos, edad,
peso, estatura. Cree un sistema de información que reciba los datos de registro de cada cliente por
teclado, luego de realizado el registro el sistema debe mostrar al usuario el mensaje “Registro exitoso”. Si
el usuario desea consultar su registro debe poder hacerlo a través de su documento. Use funciones.*/
/*
let usuarios = [];
function registrarUsuario (documento,nombres,apellidos,edad,peso,estatura){
    let usuario = {
        documento: documento,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        peso: peso,
        estatura: estatura
    };
    usuarios.push(usuario);
    console.log("registro exitoso");
}

function consultarUsuario (documento){
    let usuario = usuarios.find( u => u.documento === documento)
    if(usuario){
        console.log(`Documento: ${usuario.documento}`);
        console.log(`Nombres: ${usuario.nombres}`);
        console.log(`Apellidos: ${usuario.apellidos}`);
        console.log(`Edad: ${usuario.edad}`);
        console.log(`Peso: ${usuario.peso}`);
        console.log(`Estatura: ${usuario.estatura}`);
    }else{
        console.log("usuario no encontrado");
        
    }

}   

registrarUsuario("12345678", "Juan", "Pérez", 30, 70, 1.75);
registrarUsuario("87654321", "Ana", "García", 25, 60, 1.65);

console.log(usuarios);


console.log(consultarUsuario("12345678"));
console.log(consultarUsuario("87654321"));
console.log(consultarUsuario("00000000"));
*/




