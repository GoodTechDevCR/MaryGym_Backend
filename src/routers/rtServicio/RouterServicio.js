// RouterServicio.js 
import { createServicio } from '../../controllers/ctrServicios/CreateServicio.js';
import { deleteServicio } from '../../controllers/ctrServicios/DeleteServicio.js';
import { consultServicio } from '../../controllers/ctrServicios/ConsultServicio.js';

// Crea Instancia de router para exportalo
import express from 'express';
const router = express.Router();

// Router para Crear Servicio
router.post('/servicio', createServicio);

// Router para Eliminar Servicio
router.delete('/servicio/:idServicio', deleteServicio);

// Router para Consultar Servicio
router.get('/servicio/:idServicio?', consultServicio);

// Exporta el router
export default router;
