function formulaGeneral () {
let a = parseFloat(prompt("ingrese el valor de a"));
let b = parseFloat(prompt("ingrese el valor de b"));
let c = parseFloat(prompt("ingrese el valor de c"));

let discriminante = b*b-4*a*c;

if (discriminante >=0) {
    let x1 = (-b + Math.sqrt(discriminante)/2*a);
    let x2 = (-b - Math.sqrt(discriminante)/2*a);
    alert (`la solucion de x1 = ${x1} y la solucion de x2 = ${x2}`)
} else {
    alert ("la ecuacion no tiene solucion en numeros reales ")
}
                            
}

formulaGeneral()