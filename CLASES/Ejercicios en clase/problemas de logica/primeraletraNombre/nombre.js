function primeraLetra (nombre){
    if (nombre && nombre.length > 0) {
       return nombre.charAt(0);
    }else {
        return "texto vacio"
        
    }
}

console.log(primeraLetra("brian"));



