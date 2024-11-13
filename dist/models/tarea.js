"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const estados_1 = require("./estados");
const prioridades_1 = require("./prioridades");
const validadores_1 = require("../utils/validadores");
class Tarea {
    constructor(tituloNuevo, fechaVencimientoNueva, descripcionNueva = '', estadoNuevo = estados_1.EstadoTarea.Pendiente, prioridadNueva = prioridades_1.PrioridadTarea.Baja) {
        this.fechaVencimiento = new Date();
        this.titulo = tituloNuevo;
        this.descripcion = descripcionNueva;
        this.fechaVencimiento = fechaVencimientoNueva;
        this.estado = estadoNuevo;
        this.prioridad = prioridadNueva;
    }
}
exports.Tarea = Tarea;
__decorate([
    validadores_1.obligatorio,
    __metadata("design:type", Date)
], Tarea.prototype, "fechaVencimiento", void 0);
//# sourceMappingURL=tarea.js.map