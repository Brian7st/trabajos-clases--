class Consola {
    #consolas = [];
    constructor(nombre,marca,año,generacion){
        if(!nombre?.trim() || !marca?.trim){
            throw new Error("los campos de nombre y marca no pueden estar vacios")
        }
        this.nombre = nombre;
        this.marca = marca;
        this.año = año;
        this.generacion = generacion;
    }
    informacion(){
        return `Nombre:${this.nombre ?? `Desconocido`}, Marca:${this.marca ?? `Desconocida`}, Año:${this.año ?? `N/A`},Generacion:${this.generacion ?? `N/A`}`
    }
    mostrarInformacion(){
        if(this.#consolas.length > 0){
            this.#consolas.forEach((consola,indice)=>{
                console.log(`${indice + 1}. ${consola.informacion()}`);
            })
        }else{
            console.log(`No hay consolas en el inventario`);
        }
    }

    agregarConsola(nuevaConsola){
    let existe = this.#consolas.some(consola =>
        consola.nombre.toLowerCase() === nuevaConsola.nombre.toLowerCase() &&
        consola.marca.toLowerCase() === nuevaConsola.marca.toLowerCase() &&
        consola.año === nuevaConsola.año &&
        consola.generacion.toLowerCase() === nuevaConsola.generacion.toLowerCase()
        
    )
    if(existe){
        console.log(`la consola ya existe`);
        return
    }
        this.#consolas.push(nuevaConsola)
        console.log(`se agrego la consola con exito`);
    }
    eliminarConsola(eliminar){
        let indice = this.#consolas.findIndex(consola =>
            consola.nombre.toLowerCase() === eliminar.nombre.toLowerCase() 
        )
        if(indice !== -1){
            this.#consolas.splice(indice,1)
            console.log(`se ha eliminado la consola ${eliminar}}`);
            
            }else{
                console.log(`no se encontro la consola`);
        }
    }
}

