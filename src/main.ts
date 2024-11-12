import * as readline from 'readline';
import { gestorTareas } from './gestorTareas/gestorTareas';
import { Usuario } from './models/usuario';
import { Roles } from './models/roles';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Gestión de usuario, hay que crear algunos usuarios.
//const usuarioEnCurso: Usuario;
// TODO: Arreglar la gestión de usuarios
const usuarioEnCurso: Usuario = new Usuario("Eneko", Roles.Administrador);

// Llamada a mostrarMenu con el usuario creado
gestorTareas.mostrarMenu(usuarioEnCurso);