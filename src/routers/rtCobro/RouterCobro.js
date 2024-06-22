// RouterCobro.js 
import { createCobro } from '../../controllers/ctrCobro/CreateCobro.js';
import { deleteCobro } from '../../controllers/ctrCobro/DeleteCobro.js';
import { consultCobro } from '../../controllers/ctrCobro/ConsultCobro.js';

// Crea Instancia de router para exportalo 
import express from 'express';
const router = express.Router();

// Router para Crear Cobro
router.post('/', createCobro);

// Router para Eliminar Cobro
router.delete('/:idCobro', deleteCobro);

// Router para Consultar Cobro
router.get('/:idCobro?', consultCobro);

// Exporta el router
export default router;
