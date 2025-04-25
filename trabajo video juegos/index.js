/* CREAR UN PROGRAMA PARA LA GESTION DE INVENTARIO DE STOCK DE VIDEOJUEGOS

EL SISTEMA DEBE TENER UNA CLASE INVENTARIO PARA GESTIONARLO
UNA CLASE ADMIN QUE USE LA CLASE INVENTARIO */
class VideoJuego{
    constructor(nombre,precio,categoria,version){
        if(!nombre){
            throw new Error(`nombre no puede estar vacio`)
        }
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.version = version;
    }
    informacion(){
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Categoria:${this.categoria}, version: ${this.version} `
    }
    actualizarDatos(nuevoNombre,nuevoPrecio,nuevaCategoria,nuevaVersion){
        if(nuevoNombre && nuevoNombre.length > 0 && typeof nuevoNombre === `string`){
            this.nombre = nuevoNombre;
        }
        if(nuevoPrecio && nuevoPrecio > 0 && typeof nuevoPrecio === `number`){
            this.precio = nuevoPrecio
        }
        if(nuevaCategoria && nuevaCategoria.length > 0 && typeof nuevaCategoria === `string`){
            this.categoria = nuevaCategoria;
        }
        if(nuevaVersion && nuevaVersion.length > 0 && typeof nuevaVersion === `string`){
            this.version = nuevaVersion;
        }
    }
}



class Inventario {
    #videoJuegos = [];

    mostrarInformacion(){
        if(this.#videoJuegos.length > 0){
            this.#videoJuegos.forEach((juego,indice)=>{
            console.log(`${indice + 1} ${juego.informacion()}`)
            })
        }else{
            console.log("El inventario esta vacio");
        }
    }

    ingresarVideoJuego(NuevoVideoJuego){
     let existe = this.#videoJuegos.some(juego => 
        juego.nombre.toLowerCase() === NuevoVideoJuego.nombre.toLowerCase() &&
        juego.precio === NuevoVideoJuego.precio &&
        juego.categoria.toLowerCase() === NuevoVideoJuego.categoria.toLowerCase()
     )
     if(existe){
        console.log(`El videojuego ya existe`);
        return;
     }

     this.#videoJuegos.push(NuevoVideoJuego);
     console.log(`El videojuego ha sido agregado con exito: ${NuevoVideoJuego.informacion()}`)

    }

    eliminarJuego(nombre){
        let indice= this.#videoJuegos.findIndex(i =>
            i.nombre.toLowerCase() === nombre.toLowerCase()
        )
        if(indice !== -1){
            this.#videoJuegos.splice(indice,1);
            console.log(`El video juego ${nombre} ha sido eliminado con exito `)
        }else{
            console.log(`El videojuego no existe`);
        }
    }
    buscarVideoJuego(juego){
        let buscar = juego.toLowerCase()
        let exite = this.#videoJuegos.filter(i =>
            i.nombre.toLowerCase().includes(buscar)||
            i.precio.toString().includes(buscar)||
            i.categoria.toLowerCase().includes(buscar)||
            i.version.toLowerCase().includes(buscar)
        )
        if(exite.length > 0){
            console.log(`Videojuego encontrado`);
            exite.forEach((i,indice)=>{
                console.log(`${indice + 1}. ${i.nombre}`);
            })
        }else{
            console.log(`No se encontro el juego`);
            
        }
    }

}


class Administrador{
    constructor(inventario){
        this.inventario = inventario;
    }
    actualizarJuego(videoJuego,nuevoNombre, nuevoPrecio, nuevaCategoria, nuevaVersion){
        if(videoJuego instanceof VideoJuego){
            videoJuego.actualizarDatos(nuevoNombre, nuevoPrecio, nuevaCategoria, nuevaVersion)
        }else{
            console.log(`no es posible agregar el juego`);
        }
    }
    ingresarJuego(juego){
        this.inventario.ingresarVideoJuego(juego)
    }
    eliminarJuego(juego){
        this.inventario.eliminarJuego(juego)
    }
    buscarJuego(juego){
        this.inventario.buscarVideoJuego(juego)
    }
    informacionJuego(){
       this.inventario.mostrarInformacion()
    }
}


const inventario = new Inventario();
const admin = new Administrador(inventario);

const juego1 = new VideoJuego("FIFA 24", 60, "Deportes", "1.0");
const juego2 = new VideoJuego("Zelda", 70, "Aventura", "2.3");

admin.ingresarJuego(juego1);
admin.ingresarJuego(juego2);

admin.informacionJuego(); 

admin.buscarJuego("zelda"); 

admin.actualizarJuego(juego2, "Zelda Breath", 75, "Aventura", "3.0"); // Actualiza

admin.actualizarJuego(juego1,"Mario",40,"Aventura","6.0")
admin.informacionJuego(); 
admin.eliminarJuego("mario")
admin.informacionJuego(); 