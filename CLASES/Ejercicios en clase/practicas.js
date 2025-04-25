const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    genero: "Novela",
};

/*let claves = Object.keys(libro)
console.log(claves);*/


/* const estudiante = {
    nombre: "María",
    edad: 22,
    carrera: "Ingeniería",
    cursos: ["Matemáticas", "Programación", "Física"],
};

let clave = Object.keys(estudiante); */
/*if( "cursos" in estudiante){
    console.log(true);
}else{
    console.log(false);
    
} */

/* if(clave.includes("cursos")){
    console.log(true);
}else{
    console.log(false);
} */
/* let valores = Object.values(libro);
console.log(valores);

libro.forEach( i =>{
    console.log(i)
}) */

const estudiante = {
    nombre: "María",
    edad: 22,
    carrera: "Ingeniería",
    cursos: ["Matemáticas", "Programación", "Física"],
};

const valores = Object.values(estudiante); 

 let longitudTotal = 0;
valores.forEach(valor =>{
    if(typeof valor === "string"){
        longitudTotal += valor.length;
    }else if(Array.isArray(valor)){
        longitudTotal += valor.length
    }else if(typeof valor === "number"){
        longitudTotal += String(valor).length
    }


})

console.log("Longitud total de los valores:", longitudTotal); */


 /* let clave = Object.entries(libro)
console.log(libro);  */


let claves = Object.entries(estudiante)

claves.forEach(([clave , valor]) =>{
    if(Array.isArray(valor)){
        console.log([clave, valor]);
        
    }
}) 

/* let objCombinado = Object.assign({}, libro , estudiante)
console.log(objCombinado); */

/* const reducidoEstudiantes = {
    nombre: estudiante.nombre,
    carrera: estudiante.carrera
} */



/* const {nombre, carrera} = estudiante;
const reducidoEstudiantes = {nombre, carrera};
console.log(reducidoEstudiantes); */

const numeros = [10, 25, 5, 30, 15];
const palabras = ["manzana", "banana", "cereza", "dátil"];

/* numeros.push(20);
numeros.pop()
console.log(numeros);

palabras.push("frambuesa")
palabras.pop()
console.log(palabras); */

/* numeros.shift()
numeros.unshift(8) */


/* palabras.shift()
palabras.unshift("albaricoque")
console.log(palabras);
 */
/* let nuevo = numeros.slice(1,3)
numeros.splice(2,1)
console.log(nuevo);
console.log(numeros); */

/* let nuevopalabras = palabras.slice(0,3)
palabras.splice(1,0, "kiwi")
console.log(palabras);

console.log(nuevopalabras); */


/* numeros.forEach( i =>{
console.log(i * 2)
}) */

/* let longitud = palabras.map( i => i.length)
console.log(longitud); */

/* let suma = numeros.reduce( (acomulador, i) => acomulador + i , 0)
console.log(suma); */
/* let pares = numeros.filter( num => num %2 === 0)
console.log(pares);
console.log(numeros); */






