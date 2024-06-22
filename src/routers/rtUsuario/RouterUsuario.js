// RouterUsuario.js 
import { createUsuario } from '../../controllers/ctrUsuario/CreateUsuario.js';
import { deleteUsuario } from '../../controllers/ctrUsuario/DeleteUsuario.js';
import { consultUsuario } from '../../controllers/ctrUsuario/ConsultUsuario.js';
import { ChangeEstadoUsuario } from '../../controllers/ctrUsuario/ChangeEstadoUsuario.js';

// Crea Instancia de router para exportalo 
import express from 'express';
const router = express.Router();

// Router para Crear Usuario
router.post('/usuario', createUsuario);

// Router para Eliminar Usuario
router.delete('/usuario/:idUsuario', deleteUsuario);

// Router para Consultar Usuario
router.get('/usuario/:idUsuario?', consultUsuario);

// Router para Cambiar estado del Usuario
router.put('/usuario/estado', ChangeEstadoUsuario);

// Exporta el router
export default router;
