import * as readline from 'readline';

import { TareaService } from '../services/tareaServices';
import { rol } from '../utils/validadores'
import { EstadoTarea } from '../models/estados';
import { Usuario } from '../models/usuario';
import { Roles } from '../models/roles';
import { PrioridadTarea } from '../models/prioridades';
import { mostrarMenuPrincipal, getRl } from '../gestorPrincipal/gestorPrincipal';
const rl = getRl()

export namespace gestorTareas{
    export function agregarTarea(){
        rol('agregarTarea')
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

    export function verTareas(){
        rol('verTareas')
        const tareas = TareaService.obtenerTareas();
        console.log("\n---Lista de tareas---");
        tareas.forEach((tarea, index) =>{
            console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);

        })
        mostrarMenu();
    }

    export function filtrarTareas(){
        rol('filtrarTareas')
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

    export function eliminarTareasCompletadas(){
        rol('eliminarTareasCompletadas')
        TareaService.eliminarTareasCompletadas()
        console.log("Tareas completadas eliminadas");
        mostrarMenu();
    }

    export function cambioEstadoTarea(){
        rol('cambioEstadoTarea')
        rl.question("Título de la tarea a modificar: ", titulo=>{
            rl.question("Nuevo estado (Pendiente, En progreaso, Completada, Cancelada): ", nuevoEstado=>{
                const estadoTarea = EstadoTarea[nuevoEstado as keyof typeof EstadoTarea];
                if (estadoTarea){
                    TareaService.modificarTarea(titulo, estadoTarea, "cambiarEstado");
                    console.log("Estado de la tarea actualizado");
                }else{
                    console.log("Estado no válido.");
                }
                
                mostrarMenu();
            })
        })
        
    }

    export function cambioPrioridadTarea(){
        rol('cambioPrioridadTarea')
        rl.question("Título de la tarea a modificar: ", titulo=>{
            rl.question("Nueva prioridad (Alta, Media, Baja): ", nuevaPrioridad=>{
                const prioridadTarea = PrioridadTarea[nuevaPrioridad as keyof typeof PrioridadTarea];
                if (prioridadTarea){
                    TareaService.modificarTarea(titulo, prioridadTarea, "cambiarPrioridad");
                    console.log("Prioridad de la tarea actualizada");
                }else{
                    console.log("Prioridad no válida.");
                }
                
                mostrarMenu();
            })
        })
        
    }
    export function mostrarMenu()
    {
        console.log("\n---Menú de tareas---");
        console.log("1. Agregar una tarea");
        console.log("2. Ver todas las tareas");
        console.log("3. Filtrar tareas por estado");
        console.log("4. Cambiar el estado de una tarea");
        console.log("5. Cambiar prioridad de una tarea");
        console.log("6. Eliminar tareas completadas");
        console.log("7. Salir\n");
        rl.question("Selecciona una opción: ", opcion => {
            manejarOpcion(opcion);
        });
    
    }

    export function manejarOpcion(opcion:string){
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
                cambioPrioridadTarea();
                break;
            case "6":
                eliminarTareasCompletadas();
                break;
            case "7":
                mostrarMenuPrincipal()
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu();
        

        }
}
}
