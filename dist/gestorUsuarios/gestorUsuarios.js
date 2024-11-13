"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gestorUsuarios = void 0;
const usuariosServices_1 = require("../services/usuariosServices");
const gestorPrincipal_1 = require("../gestorPrincipal/gestorPrincipal");
const rl = (0, gestorPrincipal_1.getRl)();
var gestorUsuarios;
(function (gestorUsuarios) {
    function agregarUsuario() {
        rl.question("Introduce el nombre de usuario: ", nombreUsuario => {
            rl.question("Introduce el rol del usuario [Administrador | Colaborador]: ", role => {
                usuariosServices_1.UsuarioService.agregarUsuario(nombreUsuario, role);
                console.log("Usuario agregado correctamente.");
                mostrarMenu();
            });
        });
    }
    gestorUsuarios.agregarUsuario = agregarUsuario;
    function verUsuarios() {
        const usuarios = usuariosServices_1.UsuarioService.obtenerUsuarios();
        console.log("\n---Lista de usuarios---");
        usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. Usuario: ${usuario.nombreUsuario}, Role: ${usuario.rol}`);
        });
        mostrarMenu();
    }
    gestorUsuarios.verUsuarios = verUsuarios;
    function filtrarUsuarioPorRol() {
        rl.question("Ingrese el rol para filtrar (Administrador | Colaborador): ", rol => {
            if (rol) {
                const usuariosFiltradas = usuariosServices_1.UsuarioService.filtrarUsuariosPorRole(rol);
                usuariosFiltradas.forEach((usuario, index) => {
                    console.log(`${index + 1}. Usuario: ${usuario.nombreUsuario}, Role: ${usuario.rol}`);
                });
            }
            else {
                console.log("Role no válido");
            }
            mostrarMenu();
        });
    }
    gestorUsuarios.filtrarUsuarioPorRol = filtrarUsuarioPorRol;
    function eliminarUsuario() {
        rl.question("Ingrese el nombre del usuario que será eliminado: ", nombreUsuario => {
            usuariosServices_1.UsuarioService.eliminarUsuarioPorNombre(nombreUsuario);
            console.log(`Usuario ${nombreUsuario} eliminado`);
            mostrarMenu();
        });
    }
    gestorUsuarios.eliminarUsuario = eliminarUsuario;
    function seleccionarUsuario() {
        rl.question("Ingrese el nombre del usuario logeado: ", nombreUsuario => {
            const usuario = usuariosServices_1.UsuarioService.obtenerUsuarios().find(user => user.nombreUsuario === nombreUsuario);
            if (usuario) {
                usuariosServices_1.UsuarioService.setUsuario(usuario);
                console.log(`Usuario ${nombreUsuario} logeado`);
            }
            else {
                console.log(`Usuario ${nombreUsuario} incorrecto`);
            }
            mostrarMenu();
        });
    }
    gestorUsuarios.seleccionarUsuario = seleccionarUsuario;
    function cambioRole() {
        rl.question("Usuario: ", usuario => {
            rl.question("Rol (Administrador | Colaborador): ", rol => {
                usuariosServices_1.UsuarioService.cambiarRole(usuario, rol);
                mostrarMenu();
            });
        });
    }
    gestorUsuarios.cambioRole = cambioRole;
    function mostrarMenu() {
        console.log("\n---Menú de tareas---");
        console.log("1. Agregar un usuario");
        console.log("2. Ver todas los usuario");
        console.log("3. Filtrar usuarios por rol");
        console.log("4. Cambiar el rol de un usuario");
        console.log("5. Loguear usuario");
        console.log("6. Salir\n");
        rl.question("Selecciona una opción: ", opcion => {
            manejarOpcion(opcion);
        });
    }
    gestorUsuarios.mostrarMenu = mostrarMenu;
    function manejarOpcion(opcion) {
        switch (opcion) {
            case "1":
                agregarUsuario();
                break;
            case "2":
                verUsuarios();
                break;
            case "3":
                filtrarUsuarioPorRol();
                break;
            case "4":
                cambioRole();
                break;
            case "5":
                seleccionarUsuario();
                break;
            case "6":
                (0, gestorPrincipal_1.mostrarMenuPrincipal)();
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu();
        }
    }
    gestorUsuarios.manejarOpcion = manejarOpcion;
})(gestorUsuarios || (exports.gestorUsuarios = gestorUsuarios = {}));
//# sourceMappingURL=gestorUsuarios.js.map