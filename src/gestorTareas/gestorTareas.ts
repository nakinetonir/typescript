import * as readline from 'readline';

import { TareaService } from '../services/tareaServices';

import { EstadoTarea } from '../models/estados';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu()
{
    console.log("\n---Menú de tareas---");
    console.log("1. Agregar una tarea");
    console.log("2. Ver todas las tareas");
    console.log("3. Filtrar tareas por estado");
    console.log("4. Cambiar el estado de una tarea");
    console.log("5. Eliminar tareas completadas");
    console.log("6. Salir\n");
    rl.question("Selecciona una opción: ", opcion => {
        manejarOpcion(opcion);
    });
 
}

function manejarOpcion(opcion:string){
    switch(opcion){
        case "1":
            agregarTarea();
            break;
        case "2":
            verTareas();
            break;
        case "3":
            filtrarTareas();
            break;
        case "4":
            cambioEstadoTarea();
            break;
        case "5":
            eliminarTareasCompletadas();
            break;
        case "6":
            rl.close();
            console.log("Aplicación cerrada");
            break;
        default:
            console.log("Opción no contemplada. Inténtelo de nuevo: ");
            mostrarMenu();
        

    }
}

function agregarTarea(){
    rl.question("Título de la tarea: ", tituloN=>{
        rl.question("Descripción de la tarea (opcional): ", descripcionN=>{
            rl.question("Fecha de vencimiento de la tarea(obligatorio): ", fechaVencimientoN=>{
                const fechaVencimiento = new Date(fechaVencimientoN)
                if (fechaVencimiento){
                    TareaService.agregarTarea(tituloN, fechaVencimiento, descripcionN);
                } else {
                    console.log("Fecha con formato incorrecto");
                }
                
            })
            
            console.log("Tarea agregada correctamente.");
            mostrarMenu();
        })
    })
}

function verTareas(){
    const tareas = TareaService.obtenerTareas();
    console.log("\n---Lista de tareas---");
    tareas.forEach((tarea, index) =>{
        console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);

    })
    mostrarMenu();
}

function filtrarTareas(){
    rl.question("Ingrese el estado para filtrar (Pendiente, En progreaso, Completada, Cancelada): ", estado=>{
        const estadoTarea = EstadoTarea[estado as keyof typeof EstadoTarea];
        if (estadoTarea){
            const tareasFiltradas = TareaService.filtrarTareasPorEstado(estadoTarea);
            console.log(`\n--- Tareas en estado ${estadoTarea}`);
            tareasFiltradas.forEach((tarea, index) =>{
                console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);

            })
        }else {
            console.log("Estado no válido");
        }
        mostrarMenu();
    })
}

function eliminarTareasCompletadas(){
    TareaService.eliminarTareasCompletadas()
    console.log("Tareas completadas eliminadas");
    mostrarMenu();
}

function cambioEstadoTarea(){
    rl.question("Título de la tarea a modificar: ", titulo=>{
        rl.question("Nuevo estado (Pendiente, En progreaso, Completada, Cancelada): ", nuevoEstado=>{
            const estadoTarea = EstadoTarea[nuevoEstado as keyof typeof EstadoTarea];
            if (estadoTarea){
                TareaService.cambiarEstado(titulo, estadoTarea);
                console.log("Esstado de la tarea actualizado");
            }else{
                console.log("Estado no válido.");
            }
            
            mostrarMenu();
        })
    })
    
}

mostrarMenu();