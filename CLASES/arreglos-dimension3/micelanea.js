// ejercicios de arreglos Miscelanea de arrays

/*let arreglo = [200, -100, 45, 78, 32]

console.log(arreglo[2] , arreglo[4]);

let f = ["ab", "cd", "ef", "gh"]

console.log(f[1],f[3]);

let aux = [10, true, "k200", 20.7]

aux.forEach( i =>{
        console.log(i);  
    })*/

/*k = [17, 4, 64, 79, 109, 112]
 k.forEach( i =>{
    if(i % 2 !== 0) {
        console.log(i);
    }
})*/

/*let h = [true, true, false,true, false]

h[2]= true;
h[3]=false;
console.log(h)*/

/*let w = ["wc", "jp", "zx", "qr"]
w[1]= true;
w[3]=30;
console.log(w);*/

// funcion para recorrer arreglos de una sola dimension 

/*function imprimirArreglos(arreglo){
    for(let fila = 0 ; fila < arreglo.length; fila ++){
            console.log(arreglo[fila])
        
    }
}

let arreglo1 = [2, 5, 7, 9]

let resultado = imprimirArreglos(arreglo1)*/


//funcion para recorrer un arreglo tridimencional 

/*function arreglotridimencional(arreglo){
    arreglo.forEach(i => {
        i.forEach(j => {
            j.forEach(k => {
                if( !isNaN(k) && typeof k == "number") {
                    console.log(k);
                    
                }
                return "no se incuentra  en el arreglo"
            })
        })
    })
}


let areglo1=[ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000,"@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
arreglotridimencional( areglo1)*/

// contador de elementos

/*function NElementos(arreglo){
    return arreglo.length;
}

let w = ["wc", "jp", "zx", "qr"]
console.log(NElementos(w))*/

// uso de el indexOf() incluida una funcion 

/*function encontrarIndice ( arreglo,indice,){
    let pocision = arreglo.indexOf(indice)
    return pocision;
}

let arreglo1 = [30, 44, 54, 89, 100]
let resultado = encontrarIndice(arreglo1,89)
console.log(resultado);*/

// cantidad de elementos de un arreglo con una funcion y un ciclo

/*function NumElementos (areglo){
    let cantidad = areglo.length;
    return cantidad;
}

let a = [1,2,3,4,5,6,7,8,9,10];
let b = [];
let c = ["a", true, -1]; 
let d = [2, 4, 5, 7, 1, 34, 89, 0];

let resultado = NumElementos(a);
let resultado1 = NumElementos(b);
let resultado2 = NumElementos(c);
let resultado3 = NumElementos(d);

console.log(`los arreglo tienen estos elementos a :${resultado} b:${resultado1} c:${resultado2} d:${resultado3}`)*/

// uso de push() para añadir elementos o contar la cantidad de elementos

/*arreglo = [1,2,3,4,5,6,7,8,9,10]
arreglo.push(345,true);
console.log(arreglo);
arreglo.push("ADSO",455,78,false)
console.log(arreglo);
arreglo.push("ABcd",true,21)
console.log(arreglo);
*/


// eliminar elementos de un arreglo con splice()

/*let areglo = [1, 2, false];
areglo.splice(1,1)
console.log(areglo);

let areglo1 = [99, false, 17, 45, 7, "abc", 78]
areglo1.splice(6,1)
console.log(areglo1)

let arreglo2 = [-1, -55, -89- 30, 1000]
arreglo2.splice(1,1)
console.log(arreglo2)

let arreglo3 = ["zxc", 767, 1298, true, false, [3], 1]
arreglo3.splice(1,4)
console.log(arreglo3);

let arreglo4 = [34, ["q"], 67, 1, 99, 1/2]
arreglo4.splice(3,1)
console.log(arreglo4);*/


//copias dependientes 

/*let a = [2, 6, 9, 0, 5];
let copiaDeA = a;
a[4]= 50;
console.log(a);
console.log(copiaDeA);*/

// 6. Dado el siguiente arreglo ["x", "y", "z", 0, 1, 2, 3] use ciclo for (con .length) para recorrer el arreglo 

/*let arreglo = ["x", "y", "z", 0, 1, 2, 3]
for(let i = 0 ; i < arreglo.length ; i ++){
    console.log(arreglo[i]);
}; */

//7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1

/*let arreglo = [1, 17, 8, 9, 3] 
for( let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i] + 1);
}*/

//8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos)

/*function longitudArreglo (arreglo){
    let cantidad = arreglo.length;
    return cantidad;
}

let arreglo = [1, 17, 8, 9, 3]
let resultado = longitudArreglo(arreglo)
console.log(resultado)*/

//9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema



/*function alfabeto (letra){
    let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
for( let i = 0; i < arreglo.length ; i++){
    if ( arreglo[i] == letra){
        console.log(`la letra ${letra} si se encuentra en el arreglo`)
        return;
        }
    }
        
 console.log(`la letra ${letra} no esta en el arreglo`);
}

let resultado = alfabeto("z")*/


/*Dado el arreglo [3, 50, 70, 600, 40]:
1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
son pares*/


/*let arreglo = [3, 50, 70, 600, 40]
arreglo.forEach(i => {
    console.log(i);  
})

arreglo.forEach( k => {
    console.log(k * 3);
})


let j = 0;

while (j < arreglo.length) {
    console.log(arreglo[j]);
    j++;  
}

for( let i = 0; i < arreglo.length; i++){
    if(arreglo[i] %2 == 0){
        console.log(arreglo[i])
    }
} 
*/

// Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo

/*
let nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana"]
let bandera = false

for(let i = 0; i < nombres.length; i++){
    if(nombres[i] == "Pedro"){
        bandera = true;
    break;
    }
}

if(bandera){
    console.log("juan ha sido encontrado");
    
}else{
    console.log("el nombre no ha sido encontrado");
    
}
*/

//6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria en el arreglo) para mostrar cuántas veces aparece el nombre Maria
/*
let nombre =  ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"]
let contador = 0;

for(let i = 0; i < nombre.length; i++){
    if(nombre[i] == "Maria"){
        contador++;
    }
}

console.log(`el nombre Maria aparece ${contador} veces`);
*/

//7. Dado el arreglo [15, 7, 9, 12, 1] usar ciclo forEach y una variable contadora para mostrar la suma de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora
/*
let arreglo = [15, 7, 9, 12, 1];
let contador = 0;

arreglo.forEach( i => {
    contador += i
})
console.log(contador);
*/

//8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver cómo se implementa la variable contadora

/*let cuadrados = [-2, 8, 99, 1, 7];
let contador = 0;
cuadrados.forEach( i => {
    contador += (i **2)
})

console.log(contador);
*/

//Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo. Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa la variable contadora.
/*
let arreglo = [true, true, false, true, false, false];
let contadora = 0;
let i = 0;
while( i < arreglo.length){
    if(arreglo[i] == false){
        contadora++;
    }
    i++
}
console.log(contadora);
*/

//10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la palabra adso.