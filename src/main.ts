import * as readline from 'readline';
import { gestorTareas } from './gestorTareas/gestorTareas';
import { Usuario } from './models/usuario';
import { Roles } from './models/roles';
import { gestorUsuarios } from './gestorUsuarios/gestorUsuarios';
import { UsuarioService } from './services/usuariosServices';
import { mostrarMenuPrincipal } from './gestorPrincipal/gestorPrincipal';

mostrarMenuPrincipal();

