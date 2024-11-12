import { EstadoTarea } from "./estados";
import { PrioridadTarea } from "./prioridades";

import { obligatorio } from "../utils/validadores";

export class Tarea{
    //@obligatorio
    titulo: string;
    @obligatorio
    fechaVencimiento: Date = new Date();

    descripcion: string;
    estado: EstadoTarea;
    prioridad: PrioridadTarea;

    constructor(tituloNuevo: string, fechaVencimientoNueva: Date,  descripcionNueva: string = '', estadoNuevo: EstadoTarea = EstadoTarea.Pendiente, prioridadNueva: PrioridadTarea = PrioridadTarea.Baja){
        this.titulo = tituloNuevo;
        this.descripcion = descripcionNueva;
        this.fechaVencimiento = fechaVencimientoNueva;
        this.estado = estadoNuevo;
        this.prioridad = prioridadNueva;

    }
}