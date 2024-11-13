import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
import { gestorTareas } from '../gestorTareas/gestorTareas';
import { gestorUsuarios } from '../gestorUsuarios/gestorUsuarios';



// Gestión de usuario, hay que crear algunos usuarios.
//const usuarioEnCurso: Usuario;
//const usuarioEnCurso: Usuario = new Usuario("Eneko", Roles.Administrador);

//gestorUsuarios.mostrarMenu();

// Llamada a mostrarMenu con el usuario creado
//gestorTareas.mostrarMenu(UsuarioService.getUsuario());

export function getRl() {
    return rl
}

export function mostrarMenuPrincipal()
{
    console.log("\n---Menú principal. Seleccione la operación a realizar---");
    console.log("1. Gestión de usuarios");
    console.log("2. Gestión de tareas");
    console.log("3. Salir\n");
    rl.question("Opción: ", opcion => {
        manejarOpcionPrincipal(opcion);
    });

}
function manejarOpcionPrincipal(opcion:string){
    switch(opcion){
        case "1":
            gestorUsuarios.mostrarMenu();
            break;
        case "2":
            gestorTareas.mostrarMenu();
            break;
        case "3":
            rl.close();
            console.log("Aplicación cerrada");
            break;
        default:
            console.log("Opción no contemplada. Inténtelo de nuevo: ");
            mostrarMenuPrincipal();
    

    }
}