"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const usuario_1 = require("../models/usuario");
var UsuarioService;
(function (UsuarioService) {
    const usuarios = [];
    UsuarioService.metodosColaborador = ["verTareas", "filtrarTareas", "cambioEstadoTarea", "cambioPrioridadTarea"];
    UsuarioService.metodoAdministrador = ["agregarTarea", "verTareas", "filtrarTareas", "cambioEstadoTarea", "cambioPrioridadTarea", "eliminarTareasCompletadas"];
    let usuarioLogeado;
    function agregarUsuario(nombreUsuario, rol) {
        const tarea = new usuario_1.Usuario(nombreUsuario, rol);
        usuarios.push(tarea);
    }
    UsuarioService.agregarUsuario = agregarUsuario;
    function obtenerUsuarios() {
        return usuarios;
    }
    UsuarioService.obtenerUsuarios = obtenerUsuarios;
    function filtrarUsuariosPorRole(rol) {
        return usuarios.filter(usuario => usuario.rol === rol);
    }
    UsuarioService.filtrarUsuariosPorRole = filtrarUsuariosPorRole;
    function cambiarRole(nombreUsuario, rol) {
        const usuario = usuarios.find(u => u.nombreUsuario === nombreUsuario);
        if (usuario) {
            usuario.rol = rol;
        }
        else {
            console.log(`Usuario con nombre "${nombreUsuario}" no encontrad@`);
        }
    }
    UsuarioService.cambiarRole = cambiarRole;
    function getUsuario() {
        return usuarioLogeado;
    }
    UsuarioService.getUsuario = getUsuario;
    function setUsuario(usuario) {
        usuarioLogeado = usuario;
        return usuarioLogeado;
    }
    UsuarioService.setUsuario = setUsuario;
    function eliminarUsuarioPorNombre(nombreUsuario) {
        usuarios.forEach((usuario, index) => {
            if (usuario.nombreUsuario === nombreUsuario) {
                usuarios.splice(index, 1);
            }
        });
    }
    UsuarioService.eliminarUsuarioPorNombre = eliminarUsuarioPorNombre;
})(UsuarioService || (exports.UsuarioService = UsuarioService = {}));
//# sourceMappingURL=usuariosServices.js.map