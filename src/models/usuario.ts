import { obligatorio } from "../utils/validadores";
import { Roles } from "./roles";

export class Usuario {

    nombreUsuario: string;
    rol: Roles;

    constructor (nombreUsuarioNuevo: string, rolNuevo: Roles){
        this.nombreUsuario = nombreUsuarioNuevo;
        this.rol = rolNuevo;
    }
}