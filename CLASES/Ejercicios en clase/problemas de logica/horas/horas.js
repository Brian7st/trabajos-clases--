let horarioNormal = 8;
let bonificacion = 2000;
let horas= parseInt(prompt("ingrese las horas trabajadas"))

let calculo = ( horarioNormal - horas) * bonificacion
let valor = Math.abs(calculo)
if (horas <= horarioNormal){
    alert("no tienes bonificacion")
}else {
    alert(`tu bonificacion es de ${valor}`)
}