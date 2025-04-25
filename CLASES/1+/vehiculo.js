/* class Vehiculo {
    constructor(marca, modelo, año) {
        if (!marca || !modelo) {
            throw new Error("Marca y modelo no pueden estar vacíos.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDescripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDescripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Puertas: ${this.numeroPuertas}`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año, tipoManillar) {
        super(marca, modelo, año);
        this.tipoManillar = tipoManillar;
    }

    obtenerDescripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Manillar: ${this.tipoManillar}`);
    }
}

class Concesionario {
    constructor() {
        this.inventario = [];
    }

    agregarVehiculo(vehiculo) {
        this.inventario.push(vehiculo);
        console.log("El vehículo ha sido agregado con éxito.");
    }

    listaDeVehiculos() {
        if (this.inventario.length === 0) {
            console.log("No hay vehículos en el concesionario.");
            return;
        }
        this.inventario.forEach((vehiculo, indice) => {
            console.log(`${indice + 1}. Marca: ${vehiculo.marca} - Modelo: ${vehiculo.modelo} - Año: ${vehiculo.año}`);
        });
    }

    buscarVehiculo(criterio) {
        let resultado = this.inventario.filter(
            vehiculo =>
                vehiculo.marca.toLowerCase().includes(criterio.toLowerCase()) ||
                vehiculo.modelo.toLowerCase().includes(criterio.toLowerCase())
        );

        if (resultado.length > 0) {
            console.log("Vehículos encontrados:");
            resultado.forEach((vehiculo, indice) => {
                console.log(`${indice + 1}. ${vehiculo.marca} - ${vehiculo.modelo} - Año: ${vehiculo.año}`);
            });
        } else {
            console.log("Vehículo no encontrado.");
        }
    }
} */

/* class Libro {
    constructor(titulo,autor,añoPublicacion){
        if( !titulo || !autor ){
            throw new Error("titulo y autor no pueden estar vacios");
        }
        this.titulo = titulo
        this.autor = autor
        this.añoPublicacion = añoPublicacion
    }
    descripcion(){
        console.log(`El libro: ${this.titulo}-- autor: ${this.autor}-- Año de publicacion: ${this.añoPublicacion}`);
    }
    
}

class Biblioteca {
    constructor(){
        this.libros = [];
    }
    agregarLibro(libro){
        this.libros.push(libro)


        
    }
    listaLibros(){
        if(this.libros.length === 0){
            console.log(`No hay libros`); 
        }
            this.libros.forEach((libro,indice) =>{
                console.log(`${indice + 1}. libro: ${libro.titulo}-- autor: ${libro.autor}-- año:${libro.añoPublicacion}`)
            })
        }

    buscarLibro(criterio){
        const resultado = this.libros.filter(libro =>
            libro.titulo.toLowerCase().includes(criterio.toLowerCase())||
            libro.autor.toLowerCase().includes(criterio.toLowerCase())
        )
        if(resultado.length > 0){
            resultado.forEach((libro,indice)=>{
                console.log(`${indice + 1}. libro: ${libro.titulo}-- autor: ${libro.autor}-- año:${libro.añoPublicacion}`)
            })
        }
    }
    eliminarlibro(titulo){
        const indice = this.libros.findIndex(libro => libro.titulo.toLowerCase() === titulo.toLowerCase())
        if(indice !== -1){
            this.libros.splice(indice,1)
            console.log(`se elimino el libro`);
            
        }else{
            console.log("no se encontro el libro a eliminar");
        }
    }
} */

/* class Estudiante{
    constructor(nombre,apellido,edad,curso){
        if( !nombre || !apellido){
            throw new Error(" nombre y apellido no pueden estar vacios")
        }
        if( edad < 5 || edad > 100){
            throw new Error("Edad debe estar entre 5 y 100 años")
        }
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
    obtenerDescripcion(){
        console.log(`nombre:${this.nombre} apellido:${this.apellido} edad:${this.edad} curso:${this.curso}`);
    }
}

class Escuela {
    constructor(){
        this.estudiantes=[];
    }

    agregarNuevoEstudiante(estudiante){
        const existe = this.estudiantes.some(i => i.nombre.toLowerCase() === estudiante.nombre.toLowerCase() && i.apellido.toLowerCase() === estudiante.apellido.toLowerCase())
            if(existe){
                console.log(`el estudiante ${estudiante.nombre} ${estudiante.apellido} ya existe`);
            return;
            }   
        this.estudiantes.push(estudiante);
        console.log(`el estudiante ${estudiante.nombre} ${estudiante.apellido} ha sido registrado` );
    }
    listaEstudiante(){
        if(this.estudiantes.length === 0){
            console.log("No hay estudiantes registrados");
            return;
        }
        this.estudiantes.forEach((estudiante,indice)=>{
            console.log(`${indice +1}. ${estudiante.nombre} ${estudiante.apellido}`);
        })
        
    }
    buscarEstudiante(criterio){
        const resultado = this.estudiantes.filter( E =>
            E.nombre.toLowerCase().includes(criterio.toLowerCase())||
            E.apellido.toLowerCase().includes(criterio.toLowerCase())||
            E.curso.toLowerCase().includes(criterio.toLowerCase())
        )
        if(resultado.length > 0){
            resultado.forEach((estudiante,indice)=>{
                console.log(`${indice + 1}. estudiante: ${estudiante.nombre} ${estudiante.apellido} curso: ${estudiante.curso}`)
            })
        }else{
            console.log("no se encontro el estudiante");
            
        }
    }
    eliminarEstudiante(nombre,apellido){
        const resultado= this.estudiantes.findIndex(u =>
            u.nombre.toLowerCase() === nombre.toLowerCase() &&
            u.apellido.toLowerCase() === apellido.toLowerCase()
        );
        if(resultado !== -1){
            this.estudiantes.splice(resultado,1)
            console.log("se elimino al estudiante");
        } else{
            console.log("el estudiante no se ha encontrado");
        } 
    }
} */

   /*  class Vehiculo {
        constructor(marca, modelo, año, capacidadCombustible, consumoPorKm) {
            if (!marca || !modelo) {
                throw new Error("Marca y modelo no pueden estar vacíos.");
            }
            if (año < 1990 || año > new Date().getFullYear()) {
                throw new Error("El año debe estar entre 1990 y el actual.");
            }
            if (capacidadCombustible <= 0) {
                throw new Error("La capacidad del tanque debe ser mayor a 0.");
            }
            if (consumoPorKm <= 0) {
                throw new Error("El consumo de combustible debe ser mayor a 0.");
            }
    
            this.marca = marca;
            this.modelo = modelo;
            this.año = año;
            this.capacidadCombustible = capacidadCombustible; // Litros
            this.consumoPorKm = consumoPorKm; // Litros por km
        }
    
     
        autonomia() {
            return this.capacidadCombustible / this.consumoPorKm; 
        }
    
        
        obtenerDescripcion() {
            return ` ${this.marca} ${this.modelo} (${this.año}) - Autonomía: ${this.autonomia().toFixed(2)} km`;
        }
    }
    
    class Flota {
        constructor() {
            this.vehiculos = [];
        }
    
       
        agregarVehiculo(vehiculo) {
            const existe = this.vehiculos.some(v =>
                v.marca.toLowerCase() === vehiculo.marca.toLowerCase() &&
                v.modelo.toLowerCase() === vehiculo.modelo.toLowerCase() &&
                v.año === vehiculo.año
            );
    
            if (existe) {
                console.log(`El vehículo ${vehiculo.marca} ${vehiculo.modelo} ya está registrado.`);
                return;
            }
    
            this.vehiculos.push(vehiculo);
            console.log(` Vehículo agregado: ${vehiculo.obtenerDescripcion()}`);
        }
    
        
        listarVehiculos() {
            if (this.vehiculos.length === 0) {
                console.log(" No hay vehículos registrados en la flota.");
                return;
            }
    
            console.log(" Flota de vehículos:");
            this.vehiculos.forEach((vehiculo, index) => {
                console.log(`${index + 1}. ${vehiculo.obtenerDescripcion()}`);
            });
        }
    

        buscarVehiculo(criterio) {
            const resultado = this.vehiculos.filter(vehiculo =>
                vehiculo.marca.toLowerCase().includes(criterio.toLowerCase()) ||
                vehiculo.modelo.toLowerCase().includes(criterio.toLowerCase())
            );
    
            if (resultado.length === 0) {
                console.log("🔍 No se encontraron vehículos con ese criterio.");
            } else {
                console.log("🔍 Vehículos encontrados:");
                resultado.forEach(v => console.log(v.obtenerDescripcion()));
            }
        }
    
        vehiculoMayorAutonomia() {
            if (this.vehiculos.length === 0) return null;
    
            return this.vehiculos.reduce((max, vehiculo) =>
                vehiculo.autonomia() > max.autonomia() ? vehiculo : max
            );
        }
    

        calcularConsumo(distancia) {
            console.log(` Consumo estimado para recorrer ${distancia} km:`);
    
            this.vehiculos.forEach(vehiculo => {
                const consumo = vehiculo.consumoPorKm * distancia;
                console.log(`${vehiculo.marca} ${vehiculo.modelo}: ${consumo.toFixed(2)} litros.`);
            });
        }
    }
    
  
    const flota = new Flota();
    
    const vehiculo1 = new Vehiculo("Toyota", "Hilux", 2021, 80, 0.12);
    const vehiculo2 = new Vehiculo("Ford", "Ranger", 2022, 85, 0.10);
    const vehiculo3 = new Vehiculo("Chevrolet", "Silverado", 2020, 100, 0.15);
    
    flota.agregarVehiculo(vehiculo1);
    flota.agregarVehiculo(vehiculo2);
    flota.agregarVehiculo(vehiculo3);
    flota.agregarVehiculo(vehiculo1); 
    
    flota.listarVehiculos();
    
    console.log(" Vehículo con mayor autonomía:");
    console.log(flota.vehiculoMayorAutonomia().obtenerDescripcion());
    
    flota.calcularConsumo(500);
    
    flota.buscarVehiculo("Toyota"); 
    flota.buscarVehiculo("Ranger"); 
    flota.buscarVehiculo("BMW");  */

class Avion{
    constructor(modelo,capacidadPasajeros,capacidadCombustible,consumoPorKm){
        this.modelo = modelo;
        this.capacidadCombustible = capacidadCombustible;
        this.capacidadPasajeros = capacidadPasajeros;
        this.consumoPorKm = consumoPorKm;
    }
    descripcion(){
        return console.log(`Avion:${this.modelo} capacidad: $`)
    }
    autonomia(){
        return this.capacidadCombustible * this.consumoPorKm;
    }

}