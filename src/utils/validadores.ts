import { UsuarioService } from '../services/usuariosServices'
import { Roles } from '../models/roles'
// const usuarios: Usuario[] = [];
// export const metodosColaborador:string[] = ["verTareas","filtrarTareas","cambioEstadoTarea"]
// export const metodoAdministrador:
export function obligatorio ( target: any, key:string){
    let valor = target[key];
    const getter = () => valor;

    const setter = (nuevoValor: string) =>{
        if(!nuevoValor){
            throw new Error(`La propiedad "${key}" es obligatoria`);
        }
        valor = nuevoValor;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })

}

export function rol(metodo: string):boolean {
    const metodosPermitidosPorRole = UsuarioService.getUsuario().rol === Roles.Administrador ? UsuarioService.metodoAdministrador : UsuarioService.metodosColaborador 
    if(metodosPermitidosPorRole.find(m=> m === metodo)!=undefined)
    {
        console.log("Permitido")
        return true;
    }
    else {
        console.log("Usuario no autorizado");
        return false;
    }



}

// export function role ( target: any, key:string){
//     let valor = target[key];
//     const getter = () => valor;

//     const setter = (nuevoValor: string) =>{
//         if(!nuevoValor){
//             throw new Error(`La propiedad "${key}" es obligatoria`);
//         }
//         valor = nuevoValor;
//     };
//     Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     })

// }