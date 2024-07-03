import express from 'express';
import { createAbono } from '../../controllers/ctrAbono/CreateAbono.js';
import { consultAbonos } from '../../controllers/ctrAbono/ConsultAbono.js';
import { deleteAbono } from '../../controllers/ctrAbono/DeleteAbono.js'; 

const router = express.Router();

// Ruta para crear un abono
router.post('/', createAbono);

// Ruta para consultar abonos
router.get('/:IdUsuario?', consultAbonos);

// Ruta para eliminar un abono
router.delete('/:IdAbono', deleteAbono);

export default router;
