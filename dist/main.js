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
const readline = __importStar(require("readline"));
const gestorTareas_1 = require("./gestorTareas/gestorTareas");
const gestorUsuarios_1 = require("./gestorUsuarios/gestorUsuarios");
const usuariosServices_1 = require("./services/usuariosServices");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarMenu() {
    console.log("\n---Menú principal. Seleccione la operación a realizar---");
    console.log("1. Gestión de usuarios");
    console.log("2. Gestión de tareas");
    console.log("3. Salir\n");
    rl.question("Opción: ", opcion => {
        manejarOpcionPrincipal(opcion);
    });
}
function manejarOpcionPrincipal(opcion) {
    switch (opcion) {
        case "1":
            gestorUsuarios_1.gestorUsuarios.mostrarMenu();
            break;
        case "2":
            gestorTareas_1.gestorTareas.mostrarMenu(usuariosServices_1.UsuarioService.getUsuario());
            break;
        case "3":
            rl.close();
            console.log("Aplicación cerrada");
            break;
        default:
            console.log("Opción no contemplada. Inténtelo de nuevo: ");
            mostrarMenu();
    }
}
mostrarMenu();
//# sourceMappingURL=main.js.map