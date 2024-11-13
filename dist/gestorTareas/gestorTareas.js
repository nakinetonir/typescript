"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestorTareas = void 0;
const tareaServices_1 = require("../services/tareaServices");
const validadores_1 = require("../utils/validadores");
const estados_1 = require("../models/estados");
const prioridades_1 = require("../models/prioridades");
const gestorPrincipal_1 = require("../gestorPrincipal/gestorPrincipal");
const rl = (0, gestorPrincipal_1.getRl)();
var gestorTareas;
(function (gestorTareas) {
    function agregarTarea() {
        if ((0, validadores_1.rol)('agregarTarea')) {
            rl.question("Título de la tarea: ", tituloN => {
                rl.question("Descripción de la tarea (opcional): ", descripcionN => {
                    rl.question("Fecha de vencimiento de la tarea(obligatorio): ", fechaVencimientoN => {
                        const fechaVencimiento = new Date(fechaVencimientoN);
                        if (fechaVencimiento) {
                            tareaServices_1.TareaService.agregarTarea(tituloN, fechaVencimiento, descripcionN);
                        }
                        else {
                            console.log("Fecha con formato incorrecto");
                        }
                        console.log("Tarea agregada correctamente.");
                        mostrarMenu();
                    });
                });
            });
        }
        else {
            mostrarMenu();
        }
    }
    gestorTareas.agregarTarea = agregarTarea;
    function verTareas() {
        (0, validadores_1.rol)('verTareas');
        const tareas = tareaServices_1.TareaService.obtenerTareas();
        console.log("\n---Lista de tareas---");
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. Título: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}, \n      Prioridad: ${tarea.prioridad}, Fecha de Vencimiento: ${tarea.fechaVencimiento}`);
        });
        mostrarMenu();
    }
    gestorTareas.verTareas = verTareas;
    function filtrarTareas() {
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
            mostrarMenu();
        });
    }
    gestorTareas.filtrarTareas = filtrarTareas;
    function eliminarTareasCompletadas() {
        if ((0, validadores_1.rol)('eliminarTareasCompletadas')) {
            tareaServices_1.TareaService.eliminarTareasCompletadas();
            console.log("Tareas completadas eliminadas");
            mostrarMenu();
        }
        else {
            mostrarMenu();
        }
    }
    gestorTareas.eliminarTareasCompletadas = eliminarTareasCompletadas;
    function cambioEstadoTarea() {
        (0, validadores_1.rol)('cambioEstadoTarea');
        rl.question("Título de la tarea a modificar: ", titulo => {
            rl.question("Nuevo estado (Pendiente, EnProgreso, Completada, Cancelada): ", nuevoEstado => {
                const estadoTarea = estados_1.EstadoTarea[nuevoEstado];
                if (estadoTarea) {
                    tareaServices_1.TareaService.modificarTarea(titulo, estadoTarea, "cambiarEstado");
                    console.log("Estado de la tarea actualizado");
                }
                else {
                    console.log("Estado no válido.");
                }
                mostrarMenu();
            });
        });
    }
    gestorTareas.cambioEstadoTarea = cambioEstadoTarea;
    function cambioPrioridadTarea() {
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
                mostrarMenu();
            });
        });
    }
    gestorTareas.cambioPrioridadTarea = cambioPrioridadTarea;
    function mostrarMenu() {
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
    gestorTareas.mostrarMenu = mostrarMenu;
    function manejarOpcion(opcion) {
        switch (opcion) {
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
                (0, gestorPrincipal_1.mostrarMenuPrincipal)();
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu();
        }
    }
    gestorTareas.manejarOpcion = manejarOpcion;
})(gestorTareas || (exports.gestorTareas = gestorTareas = {}));
//# sourceMappingURL=gestorTareas.js.map