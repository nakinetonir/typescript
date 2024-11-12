import * as readline from 'readline';

import { TareaService } from '../services/tareaServices';

import { EstadoTarea } from '../models/estados';
import { Usuario } from '../models/usuario';
import { Roles } from '../models/roles';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export namespace gestorTareas{
    export function agregarTarea(usuario: Usuario){
        rl.question("Título de la tarea: ", tituloN=>{
            rl.question("Descripción de la tarea (opcional): ", descripcionN=>{
                rl.question("Fecha de vencimiento de la tarea(obligatorio): ", fechaVencimientoN=>{
                    const fechaVencimiento = new Date(fechaVencimientoN)
                    if (fechaVencimiento){
                        TareaService.agregarTarea(tituloN, fechaVencimiento, usuario, descripcionN);
                    } else {
                        console.log("Fecha con formato incorrecto");
                    }
                    
                })
                
                console.log("Tarea agregada correctamente.");
                mostrarMenu(usuario);
            })
        })
    }

    export function verTareas(usuario: Usuario){
        const tareas = TareaService.obtenerTareas();
        console.log("\n---Lista de tareas---");
        tareas.forEach((tarea, index) =>{
            console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);

        })
        mostrarMenu(usuario);
    }

    export function filtrarTareas(usuario: Usuario){
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
            mostrarMenu(usuario);
        })
    }

    export function eliminarTareasCompletadas(usuario: Usuario){
        TareaService.eliminarTareasCompletadas()
        console.log("Tareas completadas eliminadas");
        mostrarMenu(usuario);
    }

    export function cambioEstadoTarea(usuario: Usuario){
        rl.question("Título de la tarea a modificar: ", titulo=>{
            rl.question("Nuevo estado (Pendiente, En progreaso, Completada, Cancelada): ", nuevoEstado=>{
                const estadoTarea = EstadoTarea[nuevoEstado as keyof typeof EstadoTarea];
                if (estadoTarea){
                    TareaService.cambiarEstado(titulo, estadoTarea);
                    console.log("Esstado de la tarea actualizado");
                }else{
                    console.log("Estado no válido.");
                }
                
                mostrarMenu(usuario);
            })
        })
        
    }
    export function mostrarMenu(usuario: Usuario)
    {
        console.log("\n---Menú de tareas---");
        console.log("1. Agregar una tarea");
        console.log("2. Ver todas las tareas");
        console.log("3. Filtrar tareas por estado");
        console.log("4. Cambiar el estado de una tarea");
        console.log("5. Eliminar tareas completadas");
        console.log("6. Salir\n");
        rl.question("Selecciona una opción: ", opcion => {
            manejarOpcion(opcion, usuario);
        });
    
    }

    export function manejarOpcion(opcion:string, usuario:Usuario){
        switch(opcion){
            case "1":
                agregarTarea(usuario);
                break;
            case "2":
                verTareas(usuario);
                break;
            case "3":
                filtrarTareas(usuario);
                break;
            case "4":
                cambioEstadoTarea(usuario);
                break;
            case "5":
                eliminarTareasCompletadas(usuario);
                break;
            case "6":
                rl.close();
                console.log("Aplicación cerrada");
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu(usuario);
        

        }
}
}
