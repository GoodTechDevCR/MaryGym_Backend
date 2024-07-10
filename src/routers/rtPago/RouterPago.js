import express from 'express';
const router = express.Router();

import {createPago} from "../../controllers/ctrPago/CreatePago.js";

import {consultPago, consultPagoPorID} from "../../controllers/ctrPago/ConsultPago.js";

import {deletePago} from "../../controllers/ctrPago/DeletePago.js";

import {updatePago} from "../../controllers/ctrPago/UpdatePago.js";


//ruta para crear un pago
router.post('/', createPago);

// Router para Eliminar pago
router.delete('/:id', deletePago);

// Router para Consultar pagos o los pagos de un usuario (idUsuario)
router.get('/:id?', consultPago);

// Router para Consultar pago por medio de un ID
router.get('/pagoId/:idPago', consultPagoPorID);

//router para hacer un update de apgo
router.put('/', updatePago);

export default router;
