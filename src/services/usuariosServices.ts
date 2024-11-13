
import { Usuario } from '../models/usuario'
import { Roles } from '../models/roles'

export namespace UsuarioService {
    const usuarios: Usuario[] = [];

    let usuarioLogeado: Usuario

    export function agregarUsuario(nombreUsuario:string, rol: Roles){
        const tarea = new Usuario(nombreUsuario, rol);
        usuarios.push(tarea);
    }

    export function obtenerUsuarios(): Usuario[]{
        return usuarios;
    }

    export function filtrarUsuariosPorRole(rol: Roles): Usuario[]{
        return usuarios.filter(usuario => usuario.rol === rol)
    }

    export function cambiarRole(nombreUsuario: string, rol: Roles){
        const usuario = usuarios.find(u => u.nombreUsuario===nombreUsuario)
        if(usuario){
            usuario.rol = rol;
        }else{
            console.log(`Usuario con nombre "${nombreUsuario}" no encontrad@`);
        }
    }

    export function getUsuario() {
            return usuarioLogeado
    }

    export function setUsuario(usuario: Usuario) {
        usuarioLogeado = usuario
        return usuarioLogeado
}



    export function eliminarUsuarioPorNombre(nombreUsuario: string){
        usuarios.forEach((usuario, index) =>{
            if(usuario.nombreUsuario === nombreUsuario){
                usuarios.splice(index, 1);
            }
        })
    }




}