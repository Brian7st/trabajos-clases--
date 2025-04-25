/*let arreglo1 = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]

for(let i = 0; i < arreglo1.length; i++){
    for(let j= 0; j < arreglo1[i].length; j++){
        console.log(arreglo1[i][j])
    }
}


arreglo1.forEach(i=>{i.forEach(j=>{console.log(j)})})*/


/*let arreglo2 = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000,"@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]

for(let i = 0 ; i<arreglo2.length;i++){
    for(let j = 0; j <arreglo2[i].length; j++){
        for(let k = 0 ; k < arreglo2[i][j].length; k++){
            console.log(arreglo2[i][j][k])
        }
    }
};


arreglo2.forEach(i =>{i.forEach(j => {j.forEach(k=>{console.log(k)})})})*/



/*let arreglo3 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]

for( i = 0 ; i < arreglo3.length; i++){
    for( j = 0 ; j < arreglo3[i].length; j++){
        if (arreglo3[i][j] ) {
            
        }
    }
}*/

/*let arreglo4 =[ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]

for(let i = 0; i< arreglo4.length; i++){
    for(let j = 0; j < arreglo4[i].length; j++){
            if(arreglo4[i][j] %2 == 0){
                console.log(arreglo4[i][j])
            }else{
                console.log(`el numero ${arreglo4[i][j]} no es un numero par`)
            }
        }     
    }

arreglo4.forEach(i => {
    i.forEach(j =>{
        if( j %2 == 0){
            console.log(j)
        }
    })
})*/

/*let arreglo5 = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
let acomuladora = 0;
for( let i = 0; i< arreglo5.length; i++ ){
    for( let j = 0; j< arreglo5[i].length; j++ ){
        acomuladora += arreglo5[i][j]
    }
    }
console.log(acomuladora);

let suma = 0 ;
arreglo5.forEach( filas =>{
    filas.forEach(Elemento =>{
    suma += Elemento
    }) 
})

console.log(suma)*/