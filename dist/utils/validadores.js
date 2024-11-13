"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obligatorio = obligatorio;
exports.rol = rol;
const usuariosServices_1 = require("../services/usuariosServices");
const roles_1 = require("../models/roles");
function obligatorio(target, key) {
    let valor = target[key];
    const getter = () => valor;
    const setter = (nuevoValor) => {
        if (!nuevoValor) {
            throw new Error(`La propiedad "${key}" es obligatoria`);
        }
        valor = nuevoValor;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
function rol(metodo) {
    const metodosPermitidosPorRole = usuariosServices_1.UsuarioService.getUsuario().rol === roles_1.Roles.Administrador ? usuariosServices_1.UsuarioService.metodoAdministrador : usuariosServices_1.UsuarioService.metodosColaborador;
    if (metodosPermitidosPorRole.find(metodo => metodo === metodo)) {
        console.log("Permitido");
    }
    else {
        throw new Error("This is the error message");
    }
}
//# sourceMappingURL=validadores.js.map