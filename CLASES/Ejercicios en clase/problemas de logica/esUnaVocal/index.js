
function esVocal() { 
let vocal = prompt("ingrese una letra").toLowerCase();
if ( vocal.length== 1 && /[a-z]/.test(vocal)) {
   return alert ("aeiou".includes(vocal) ? "es una vocal." : "es una consonante.");
}
}
let resultado = esVocal()