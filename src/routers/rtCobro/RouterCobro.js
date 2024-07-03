// RouterCobro.js 
import { createCobroYPago } from '../../controllers/ctrCobro/CreateCobro.js';
import { deleteCobro } from '../../controllers/ctrCobro/DeleteCobro.js';
import { consultCobro } from '../../controllers/ctrCobro/ConsultCobro.js';
import { updateCobro } from '../../controllers/ctrCobro/UpdateCobro.js';

// Crea Instancia de router para exportalo 
import express from 'express';
const router = express.Router();

// Router para Crear o actualizar Cobro 
router.post('/cobroypago', createCobroYPago);

// Router para Eliminar Cobro
router.delete('/:id', deleteCobro);

// Router para Actualizar Cobro
router.put('/updateCobro', updateCobro);

// Router para Consultar Cobro
router.get('/:id?', consultCobro);

// Exporta el router
export default router;
