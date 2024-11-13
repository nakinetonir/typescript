import * as readline from 'readline';
import { gestorTareas } from './gestorTareas/gestorTareas';
import { Usuario } from './models/usuario';
import { Roles } from './models/roles';
import { gestorUsuarios } from './gestorUsuarios/gestorUsuarios';
import { UsuarioService } from './services/usuariosServices';
import { mostrarMenuPrincipal } from './gestorPrincipal/gestorPrincipal';


<<<<<<< HEAD
export function mostrarMenu()
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
            gestorTareas.mostrarMenu(UsuarioService.getUsuario());
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
=======
mostrarMenuPrincipal();
>>>>>>> af76c411025d002b054d1e60767666e24e1b880c
