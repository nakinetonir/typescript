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

export function rol(metodo: string) {
    const metodosPermitidosPorRole = UsuarioService.getUsuario().rol === Roles.Administrador ? UsuarioService.metodoAdministrador : UsuarioService.metodosColaborador 
    if(metodosPermitidosPorRole.find(metodo=> metodo === metodo))
    {
        console.log("Pemitido")
    }
    else {
        throw new Error("This is the error message");
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