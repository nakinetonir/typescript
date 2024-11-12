import { Tarea } from "../models/tarea";
import { EstadoTarea } from "../models/estados";
import { PrioridadTarea } from "../models/prioridades";

export namespace TareaService{
    const tareas: Tarea[] = [];
    export function agregarTarea(titulo:string, fechaVencimiento: Date,  descripcion?:string, prioridad?:PrioridadTarea){
        const tarea = new Tarea(titulo, fechaVencimiento, descripcion);
        tareas.push(tarea);
    }

    export function obtenerTareas(): Tarea[]{
        return tareas;
    }

    export function filtrarTareasPorEstado(estado: EstadoTarea): Tarea[]{
        return tareas.filter(tarea => tarea.estado === estado)
    }

    export function cambiarEstado(titulo: string, nuevoEstado: EstadoTarea){
        const tarea = tareas.find(t => t.titulo===titulo)
        if(tarea){
            tarea.estado = nuevoEstado;
        }else{
            console.log(`Tarea con titulo "${titulo}" no encontrada`);
        }
    }

    export function cambiarPrioridad(titulo: string, nuevaPrioridad: PrioridadTarea){
        const tarea = tareas.find(t => t.titulo===titulo)
        if(tarea){
            tarea.prioridad = nuevaPrioridad;
        }else{
            console.log(`Tarea con titulo "${titulo}" no encontrada`);
        }
    }

    export function eliminarTareasCompletadas(){
        tareas.forEach((tarea, index) =>{
            if(tarea.estado === EstadoTarea.Completada){
                tareas.splice(index, 1);
            }
        })
    }
}