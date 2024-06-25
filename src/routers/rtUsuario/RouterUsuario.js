// RouterUsuario.js
import { createUsuario } from '../../controllers/ctrUsuario/CreateUsuario.js';
import { deleteUsuario } from '../../controllers/ctrUsuario/DeleteUsuario.js';
import { consultUsuario, consultUsuarioByCorreo } from '../../controllers/ctrUsuario/ConsultUsuario.js';
import { ChangeEstadoUsuario } from '../../controllers/ctrUsuario/ChangeEstadoUsuario.js';
import {updateUsuario} from "../../controllers/ctrUsuario/UpdateUsuario.js";

// Crea Instancia de router para exportalo
import express from 'express';
const router = express.Router();

// Router para Crear Usuario
router.post('/', createUsuario);

// Router para Eliminar Usuario
router.delete('/:id', deleteUsuario);

// Router para Consultar Usuario
router.get('/:id?', consultUsuario);

// Router para Consultar Usuario segun su correo electronico
router.get('/getUserCorreo/:correo', consultUsuarioByCorreo);

// Router para Cambiar estado del Usuario
router.put('/estado', ChangeEstadoUsuario);

// Router para Cambiar cualquier cosa del usuario
router.put('/update', updateUsuario);


// Exporta el router
export default router;
