"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestorTareas = void 0;
const readline = __importStar(require("readline"));
const tareaServices_1 = require("../services/tareaServices");
const validadores_1 = require("../utils/validadores");
const estados_1 = require("../models/estados");
const prioridades_1 = require("../models/prioridades");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var gestorTareas;
(function (gestorTareas) {
    function agregarTarea(usuario) {
        (0, validadores_1.rol)('agregarTarea');
        rl.question("Título de la tarea: ", tituloN => {
            rl.question("Descripción de la tarea (opcional): ", descripcionN => {
                rl.question("Fecha de vencimiento de la tarea(obligatorio): ", fechaVencimientoN => {
                    const fechaVencimiento = new Date(fechaVencimientoN);
                    if (fechaVencimiento) {
                        tareaServices_1.TareaService.agregarTarea(tituloN, fechaVencimiento, usuario, descripcionN);
                    }
                    else {
                        console.log("Fecha con formato incorrecto");
                    }
                });
                console.log("Tarea agregada correctamente.");
                mostrarMenu(usuario);
            });
        });
    }
    gestorTareas.agregarTarea = agregarTarea;
    function verTareas(usuario) {
        (0, validadores_1.rol)('verTareas');
        const tareas = tareaServices_1.TareaService.obtenerTareas();
        console.log("\n---Lista de tareas---");
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
        });
        mostrarMenu(usuario);
    }
    gestorTareas.verTareas = verTareas;
    function filtrarTareas(usuario) {
        (0, validadores_1.rol)('filtrarTareas');
        rl.question("Ingrese el estado para filtrar (Pendiente, En progreaso, Completada, Cancelada): ", estado => {
            const estadoTarea = estados_1.EstadoTarea[estado];
            if (estadoTarea) {
                const tareasFiltradas = tareaServices_1.TareaService.filtrarTareasPorEstado(estadoTarea);
                console.log(`\n--- Tareas en estado ${estadoTarea}`);
                tareasFiltradas.forEach((tarea, index) => {
                    console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
                });
            }
            else {
                console.log("Estado no válido");
            }
            mostrarMenu(usuario);
        });
    }
    gestorTareas.filtrarTareas = filtrarTareas;
    function eliminarTareasCompletadas(usuario) {
        (0, validadores_1.rol)('eliminarTareasCompletadas');
        tareaServices_1.TareaService.eliminarTareasCompletadas();
        console.log("Tareas completadas eliminadas");
        mostrarMenu(usuario);
    }
    gestorTareas.eliminarTareasCompletadas = eliminarTareasCompletadas;
    function cambioEstadoTarea(usuario) {
        (0, validadores_1.rol)('cambioEstadoTarea');
        rl.question("Título de la tarea a modificar: ", titulo => {
            rl.question("Nuevo estado (Pendiente, En progreaso, Completada, Cancelada): ", nuevoEstado => {
                const estadoTarea = estados_1.EstadoTarea[nuevoEstado];
                if (estadoTarea) {
                    tareaServices_1.TareaService.modificarTarea(titulo, estadoTarea, "cambiarEstado");
                    console.log("Estado de la tarea actualizado");
                }
                else {
                    console.log("Estado no válido.");
                }
                mostrarMenu(usuario);
            });
        });
    }
    gestorTareas.cambioEstadoTarea = cambioEstadoTarea;
    function cambioPrioridadTarea(usuario) {
        (0, validadores_1.rol)('cambioPrioridadTarea');
        rl.question("Título de la tarea a modificar: ", titulo => {
            rl.question("Nueva prioridad (Alta, Media, Baja): ", nuevaPrioridad => {
                const prioridadTarea = prioridades_1.PrioridadTarea[nuevaPrioridad];
                if (prioridadTarea) {
                    tareaServices_1.TareaService.modificarTarea(titulo, prioridadTarea, "cambiarPrioridad");
                    console.log("Prioridad de la tarea actualizada");
                }
                else {
                    console.log("Prioridad no válida.");
                }
                mostrarMenu(usuario);
            });
        });
    }
    gestorTareas.cambioPrioridadTarea = cambioPrioridadTarea;
    function mostrarMenu(usuario) {
        console.log("\n---Menú de tareas---");
        console.log("1. Agregar una tarea");
        console.log("2. Ver todas las tareas");
        console.log("3. Filtrar tareas por estado");
        console.log("4. Cambiar el estado de una tarea");
        console.log("5. Cambiar prioridad de una tarea");
        console.log("6. Eliminar tareas completadas");
        console.log("7. Salir\n");
        rl.question("Selecciona una opción: ", opcion => {
            manejarOpcion(opcion, usuario);
        });
    }
    gestorTareas.mostrarMenu = mostrarMenu;
    function manejarOpcion(opcion, usuario) {
        switch (opcion) {
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
                cambioPrioridadTarea(usuario);
                break;
            case "6":
                eliminarTareasCompletadas(usuario);
                break;
            case "7":
                rl.close();
                console.log("Aplicación cerrada");
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu(usuario);
        }
    }
    gestorTareas.manejarOpcion = manejarOpcion;
})(gestorTareas || (exports.gestorTareas = gestorTareas = {}));
//# sourceMappingURL=gestorTareas.js.map