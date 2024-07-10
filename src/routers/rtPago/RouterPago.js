import express from 'express';
const router = express.Router();

import { createPago } from "../../controllers/ctrPago/CreatePago.js";
import { consultPago, consultPagoPorID } from "../../controllers/ctrPago/ConsultPago.js";
import { deletePago } from "../../controllers/ctrPago/DeletePago.js";
import { updatePago } from "../../controllers/ctrPago/UpdatePago.js";

// Router para Consultar pago por medio de un ID
router.get('/pagoprueba/:idPago', consultPagoPorID);

// Router para Consultar pagos o los pagos de un usuario (idUsuario)
router.get('/:id?', consultPago);

// Ruta para crear un pago
router.post('/', createPago);

// Router para Eliminar pago
router.delete('/:id', deletePago);

// Router para hacer un update de pago
router.put('/', updatePago);

export default router;