// Definir roles simples, como Administrador y Colaborador, usando `Enums`.
//    - El rol de Administrador puede gestionar todas las tareas, 
//     mientras que el Colaborador solo puede visualizar y modificar las tareas asignadas.


import * as readline from 'readline';

import { UsuarioService } from '../services/usuariosServices';

import { Usuario } from '../models/usuario';
import { Roles } from '../models/roles';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export namespace gestorUsuarios{
    export function agregarUsuario(){
        rl.question("Introduce el nombre de usuario: ", nombreUsuario=>{
            rl.question("Introduce el rol del usuario [Administrador | Colaborador]: ", role=>{
                   UsuarioService.agregarUsuario(nombreUsuario, <Roles>role);
                   
                    
                })
                
                console.log("Usuario agregado correctamente.");
                mostrarMenu();
            })
    
    }

    export function verUsuarios(){
        const usuarios = UsuarioService.obtenerUsuarios();
        console.log("\n---Lista de usuarios---");
        usuarios.forEach((usuario, index) =>{
            console.log(`${index + 1}. Usuario: ${usuario.nombreUsuario}, Role: ${usuario.rol}`);

        })
        mostrarMenu();
    }

    export function filtrarUsuarioPorRol(){
        rl.question("Ingrese el rol para filtrar (Administrador | Colaborador): ", rol=>{
            if (rol){
                const usuariosFiltradas = UsuarioService.filtrarUsuariosPorRole(<Roles>rol);
                usuariosFiltradas.forEach((usuario, index) =>{
                    console.log(`${index + 1}. Usuario: ${usuario.nombreUsuario}, Role: ${usuario.rol}`);

                })
            }else {
                console.log("Role no válido");
            }
            mostrarMenu();
        })
    }

    export function eliminarUsuario(){
        rl.question("Ingrese el nombre del usuario que será eliminado: ", nombreUsuario=>{
        UsuarioService.eliminarUsuarioPorNombre(nombreUsuario)
        console.log(`Usuario ${nombreUsuario} eliminado`);
        mostrarMenu()
        })
    }

     export function seleccionarUsuario(){
        rl.question("Ingrese el nombre del usuario logeado: ", nombreUsuario=>{
        const usuario = UsuarioService.obtenerUsuarios().find(user=> user.nombreUsuario === nombreUsuario);
        if(usuario) {
            UsuarioService.setUsuario(usuario)
            console.log(`Usuario ${nombreUsuario} logeado`);
        }

        else {
            console.log(`Usuario ${nombreUsuario} incorrecto`);
        }
        mostrarMenu();
        })
    }

    export function cambioRole(){
        rl.question("Usuario: ", usuario=>{
            rl.question("Rol (Administrador | Colaborador): ", rol=>{
                
                UsuarioService.cambiarRole(usuario, <Roles>rol);
                mostrarMenu();
            })
        })
        
    }
    export function mostrarMenu()
    {
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

    export function manejarOpcion(opcion:string){
        switch(opcion){
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
                rl.close();
                console.log("Aplicación cerrada");
                break;
            default:
                console.log("Opción no contemplada. Inténtelo de nuevo: ");
                mostrarMenu();
        

        }
}
}
