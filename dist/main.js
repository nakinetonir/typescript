"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
const gestorPrincipal_1 = require("./gestorPrincipal/gestorPrincipal");
(0, gestorPrincipal_1.mostrarMenuPrincipal)();
=======
exports.mostrarMenu = mostrarMenu;
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
>>>>>>> 67f0837589bcdcca8dd89e825f55824d2f9e7eaf
//# sourceMappingURL=main.js.map