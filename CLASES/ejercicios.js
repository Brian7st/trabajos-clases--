 class Persona{
    #nombre
    constructor(nombre){
        this.#nombre = nombre
    }
    caminar(){
        console.log(`${this.#nombre} está caminando`);
    }
}

class Empleado extends Persona{
    #salario
    constructor(nombre,salario){
        super(nombre)
        this.#salario = salario;
    }
    trabajar(){
        console.log(`${this.nombre} está trabajando`);  
    }
    getSalario(){
        return this.#salario
    }
    setSalario(nuevoSalario){
        if(nuevoSalario > 0 && typeof nuevoSalario === "number"){
            this.#salario = nuevoSalario;
        }else{
            console.log(`valor no valido`);
        }
     }  
    setEdad(edad){
        console.log(`${edad} años es la nueva edad de ${this.nombre}`)
    }    
    
} 

//clase cuetabancaria

/* class CuestaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    #actualizarSaldo(monto){
        if (monto >= 0) {
            console.log(`se actulizo el saldo ahora tienes ${this.#saldo}`);
            
        }else{
            console.log("valor no valido");  
        }
    }
    depositar(monto){
        const resultado = this.#saldo += monto
        this.#actualizarSaldo(resultado)
    }
    retirar(monto){
        if(monto <= this.#saldo){
            const resultado = this.#saldo -= monto
             this.#actualizarSaldo(resultado)
        }else{
            console.log(`saldo insuficiente`);
        }
    }
}

const mibanco = new CuestaBancaria(100);
mibanco.depositar(200)
mibanco.retirar(400) */

//clase vehiculo

/* class Vehiculo {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false
    }
    #encenderMotor(){
        this.encendido = true
        console.log("motor encendido");
    }
    arrancar(){
        this.#encenderMotor()
        console.log("el Vehiculo puede arrancar");
    }
    apagarVehiculo(){
        this.encendido = false;
        console.log("el Vehiculo esta apagado");
        
    }
}

class Carro extends Vehiculo {
    constructor(marca,modelo,velocidadMax){
        super(marca,modelo)
        this.velocidadMax = velocidadMax
    }
    arrancar(){
        console.log(`el carro ${this.marca} modelo ${this.modelo} tiene una velocidad maxima ${this.velocidadMax}Km/h`);
        
    }
}
class Moto extends Vehiculo {
    constructor(marca,modelo,cilindraje){
        super(marca,modelo)
        this.cilindraje = cilindraje
    }
    arrancar(){
        console.log(`la moto ${this.marca} modelo ${this.modelo} su cilindraje es de ${this.cilindraje}`);
        
    }
}

class EmpresaTransporte {
    static totalEmpleados = 0;

    static registrarEmpleado(){
        Empresa.totalEmpleados++;
    }

    asignarVehiculo(empleado,Vehiculo){
        console.log(`Al empleado ${empleado} se le ha asignado el vehiculo ${Vehiculo}`);
    }
} */

  /*   class Empleado {
        constructor(nombre, puesto) {
            this.nombre = nombre;
            this.puesto = puesto;
            this.tareasAsignadas = [];
        }
    
        asignarTarea(tarea) {
            this.tareasAsignadas.push(tarea);
        }
    
        mostrarTareas() {
            console.log(`${this.nombre} tiene las siguientes tareas asignadas:`);
            this.tareasAsignadas.forEach(tarea => {
                console.log(`- ${tarea.nombre} (Prioridad: ${tarea.prioridad})`);
            });
        }
    }
    
    class Tarea {
        constructor(nombre, fechaLimite, prioridad) {
            this.nombre = nombre;
            this.fechaLimite = fechaLimite;
            this.prioridad = prioridad; // baja, media, alta
        }
    
        cambiarPrioridad(nuevaPrioridad) {
            const prioridadesValidas = ['baja', 'media', 'alta'];
            if (prioridadesValidas.includes(nuevaPrioridad)) {
                this.prioridad = nuevaPrioridad;
                console.log(`La prioridad de la tarea "${this.nombre}" ha sido cambiada a: ${this.prioridad}`);
            } else {
                console.log("Prioridad inválida");
            }
        }
    }
    
    class Proyecto {
        static numeroProyectos = 0;
    
        constructor(nombre, descripcion) {
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.equipo = [];
            this.tareas = [];
            Proyecto.numeroProyectos++;
        }
    
        agregarEmpleado(empleado) {
            if (empleado instanceof Empleado) {
                this.equipo.push(empleado);
                console.log(`${empleado.nombre} ha sido agregado al equipo del proyecto ${this.nombre}`);
            } else {
                console.log("El objeto proporcionado no es un empleado válido.");
            }
        }
    
        agregarTarea(tarea) {
            if (tarea instanceof Tarea) {
                this.tareas.push(tarea);
                console.log(`La tarea "${tarea.nombre}" ha sido asignada al proyecto ${this.nombre}`);
            } else {
                console.log("El objeto proporcionado no es una tarea válida.");
            }
        }
    
        mostrarEquipo() {
            console.log(`Equipo del proyecto "${this.nombre}":`);
            this.equipo.forEach(empleado => {
                console.log(`- ${empleado.nombre} (${empleado.puesto})`);
            });
        }
    
        mostrarTareas() {
            console.log(`Tareas del proyecto "${this.nombre}":`);
            this.tareas.forEach(tarea => {
                console.log(`- ${tarea.nombre} (Fecha límite: ${tarea.fechaLimite}, Prioridad: ${tarea.prioridad})`);
            });
        }
    
        static consultarNumeroDeProyectos() {
            console.log(`Actualmente existen ${Proyecto.numeroProyectos} proyectos en total.`);
        }
    }
    
    class Gerente extends Empleado {
        constructor(nombre) {
            super(nombre, 'Gerente');
        }
    
        asignarTareasAEquipo(tarea, empleados) {
            empleados.forEach(empleado => {
                if (empleado instanceof Empleado) {
                    empleado.asignarTarea(tarea);
                } else {
                    console.log("El objeto proporcionado no es un empleado.");
                }
            });
        }
    }
     */

    class Tarea {
        constructor(titulo, descripcion, estado, fechaLimite) {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.estado = estado; // (puede ser "pendiente", "en progreso", "completa")
            this.fechaLimite = fechaLimite;
        }
    
        actualizarEstado(nuevoEstado) {
            const estados = ["pendiente", "en progreso", "completa"];
            if (estados.includes(nuevoEstado)) {
                this.estado = nuevoEstado;
                console.log(`La tarea: ${this.titulo} se le actualizó el estado a ${this.estado}`);
                return true;
            } else {
                console.log("No ha sido posible actualizar, valor inválido");
            }
        }
    
        modificarFecha(fecha) {
            const fechaConvertida = new Date(fecha);
            if (isNaN(fechaConvertida.getTime())) {
                console.log("La fecha es inválida");
            } else {
                this.fechaLimite = fechaConvertida;
                console.log(`La fecha se actualizó, ahora es ${this.fechaLimite}`);
            }
        }
    }
    
    class Empleado {
        constructor(nombre, puesto) {
            this.nombre = nombre;
            this.puesto = puesto;
            this.tareas = [];
        }
    
        asignarTarea(tarea) {
            this.tareas.push(tarea);
        }
    
        mostrarTareas() {
            this.tareas.forEach((tarea, indice) => {
                console.log(`El empleado ${this.nombre} tiene estas tareas ${indice + 1}. ${tarea.titulo}`);
            });
        }
    }
    
    class Proyecto {
        constructor(nombre, descripcion) {
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.empleados = [];
            this.tareas = [];
        }
    
        agregarEmpleado(empleado) {
            if (empleado instanceof Empleado) {
                this.empleados.push(empleado);
                console.log(`El empleado ${empleado.nombre} ha sido añadido al proyecto ${this.nombre}`);
            } else {
                console.log("Empleado no encontrado");
            }
        }
    
        agregarTarea(tarea) {
            if (tarea instanceof Tarea) {
                this.tareas.push(tarea);
                console.log(`La tarea ${tarea.titulo} ha sido añadida`);
            } else {
                console.log("No se ha podido añadir la tarea");
            }
        }
    
        progreso() {
            let pendiente = 0;
            let enProgreso = 0;
            let completada = 0;
    
            this.tareas.forEach((tarea) => {
                if (tarea.estado === "pendiente") {
                    pendiente++;
                } else if (tarea.estado === "en progreso") {
                    enProgreso++;
                } else if (tarea.estado === "completa") {
                    completada++;
                }
            });
    
            console.log("_______________________________________");
            console.log(`El progreso del proyecto:`);
            console.log(`1. Tareas pendientes: ${pendiente}`);
            console.log(`2. Tareas en progreso: ${enProgreso}`);
            console.log(`3. Tareas completadas: ${completada}`);
            console.log("_______________________________________");
        }
    
        mostrarEquipo() {
            this.empleados.forEach((empleado, indice) => {
                console.log(`El proyecto ${this.nombre} tiene los siguientes miembros: ${indice + 1}. ${empleado.nombre}`);
            });
        }
    
        mostrarTareas() {
            this.tareas.forEach((tarea, indice) => {
                console.log(`Las tareas son las siguientes: ${indice + 1}. ${tarea.titulo}`);
            });
        }
    }
// 1. Crear algunas tareas
let tarea1 = new Tarea("Desarrollar API", "Crear la API para el proyecto", "pendiente", "2025-05-01");
let tarea2 = new Tarea("Diseñar base de datos", "Diseñar el esquema de la base de datos", "en progreso", "2025-05-10");
let tarea3 = new Tarea("Desarrollar frontend", "Desarrollar la interfaz de usuario", "completa", "2025-05-15");

// 2. Crear empleados
let empleado1 = new Empleado("Juan Pérez", "Desarrollador");
let empleado2 = new Empleado("Ana González", "Diseñadora");

// 3. Asignar tareas a empleados
empleado1.asignarTarea(tarea1);
empleado1.asignarTarea(tarea2);
empleado2.asignarTarea(tarea3);

// 4. Crear un proyecto
let proyecto = new Proyecto("Desarrollo de aplicación", "Desarrollo de una nueva aplicación web");

// 5. Agregar empleados al proyecto
proyecto.agregarEmpleado(empleado1);
proyecto.agregarEmpleado(empleado2);

// 6. Agregar tareas al proyecto
proyecto.agregarTarea(tarea1);
proyecto.agregarTarea(tarea2);
proyecto.agregarTarea(tarea3);

// 7. Mostrar tareas del proyecto
console.log("Tareas del proyecto:");
proyecto.mostrarTareas();

// 8. Mostrar equipo del proyecto
console.log("Equipo del proyecto:");
proyecto.mostrarEquipo();

// 9. Mostrar el progreso del proyecto
console.log("Progreso del proyecto:");
proyecto.progreso();

// 10. Actualizar estado de tareas
tarea1.actualizarEstado("en progreso");
tarea2.actualizarEstado("completa");

// 11. Modificar fecha límite de una tarea
tarea1.modificarFecha("2025-06-01");

// 12. Verificar el progreso del proyecto después de los cambios
console.log("Progreso actualizado del proyecto:");
proyecto.progreso();

// 13. Mostrar tareas actualizadas del proyecto
console.log("Tareas del proyecto después de actualizaciones:");
proyecto.mostrarTareas();
    